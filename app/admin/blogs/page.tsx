"use client";

import { useEffect, useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  Eye,
  EyeOff,
  LogOut,
  Save,
  X,
  ImagePlus,
} from "lucide-react";

import { supabase } from "../../lib/supabase";

type Blog = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  category: string | null;
  featured_image: string | null;
  seo_title: string | null;
  seo_description: string | null;
  published: boolean;
  created_at: string;
};

const emptyBlog = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  category: "Property Guide",
  featured_image: "",
  seo_title: "",
  seo_description: "",
  published: false,
};

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [user, setUser] = useState<any>(null);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [form, setForm] = useState(emptyBlog);

  useEffect(() => {
    checkUser();
  }, []);

  // =====================================================
  // CHECK ADMIN
  // =====================================================

  async function checkUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      window.location.href = "/admin/login";
      return;
    }

    const role = user.app_metadata?.role;

    if (role !== "admin") {
      await supabase.auth.signOut();
      window.location.href = "/admin/login";
      return;
    }

    setUser(user);
    fetchBlogs();
  }

  // =====================================================
  // FETCH BLOGS
  // =====================================================

  async function fetchBlogs() {
    setLoading(true);

    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      alert(error.message);
    } else {
      setBlogs(data || []);
    }

    setLoading(false);
  }

  // =====================================================
  // CREATE NEW BLOG
  // =====================================================

  function createNewBlog() {
    setEditingId(null);
    setForm(emptyBlog);
    setShowForm(true);
  }

  // =====================================================
  // EDIT BLOG
  // =====================================================

  function editBlog(blog: Blog) {
    setEditingId(blog.id);

    setForm({
      title: blog.title || "",
      slug: blog.slug || "",
      excerpt: blog.excerpt || "",
      content: blog.content || "",
      category: blog.category || "Property Guide",
      featured_image: blog.featured_image || "",
      seo_title: blog.seo_title || "",
      seo_description: blog.seo_description || "",
      published: blog.published,
    });

    setShowForm(true);
  }

  // =====================================================
  // UPDATE FIELD
  // =====================================================

  function updateField(
    field: keyof typeof emptyBlog,
    value: string | boolean
  ) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  // =====================================================
  // CREATE SLUG
  // =====================================================

  function createSlug(title: string) {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  function handleTitleChange(value: string) {
    setForm((prev) => ({
      ...prev,
      title: value,
      slug:
        editingId === null
          ? createSlug(value)
          : prev.slug,
    }));
  }

  // =====================================================
  // UPLOAD FEATURED IMAGE
  // =====================================================

  async function uploadFeaturedImage(file: File) {
    if (!file) return;

    // Check image
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    // Maximum 5MB
    if (file.size > 5 * 1024 * 1024) {
      alert("Image must be smaller than 5MB.");
      return;
    }

    setUploadingImage(true);

    try {
      const fileExtension =
        file.name.split(".").pop()?.toLowerCase() || "jpg";

      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 10)}.${fileExtension}`;

      const filePath = `blogs/${fileName}`;

      const { error: uploadError } =
        await supabase.storage
          .from("blog-images")
          .upload(filePath, file, {
            cacheControl: "3600",
            upsert: false,
            contentType: file.type,
          });

      if (uploadError) {
        throw uploadError;
      }

      const { data } = supabase.storage
        .from("blog-images")
        .getPublicUrl(filePath);

      const publicUrl = data.publicUrl;

      setForm((prev) => ({
        ...prev,
        featured_image: publicUrl,
      }));

    } catch (error: any) {
      console.error("Image upload error:", error);

      alert(
        error?.message ||
          "Failed to upload image."
      );
    } finally {
      setUploadingImage(false);
    }
  }

  // =====================================================
  // SAVE BLOG
  // =====================================================

  async function saveBlog() {
    if (!form.title.trim()) {
      alert("Please enter blog title");
      return;
    }

    if (!form.slug.trim()) {
      alert("Please enter blog slug");
      return;
    }

    if (!form.content.trim()) {
      alert("Please enter blog content");
      return;
    }

    if (uploadingImage) {
      alert("Please wait until the image upload finishes.");
      return;
    }

    setSaving(true);

    const blogData = {
      title: form.title.trim(),
      slug: form.slug.trim(),
      excerpt: form.excerpt.trim() || null,
      content: form.content,
      category: form.category.trim() || null,
      featured_image:
        form.featured_image.trim() || null,
      seo_title:
        form.seo_title.trim() || null,
      seo_description:
        form.seo_description.trim() || null,
      published: form.published,
      updated_at: new Date().toISOString(),
    };

    let error;

    if (editingId) {
      const result = await supabase
        .from("blogs")
        .update(blogData)
        .eq("id", editingId);

      error = result.error;
    } else {
      const result = await supabase
        .from("blogs")
        .insert(blogData);

      error = result.error;
    }

    setSaving(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert(
      editingId
        ? "Blog updated successfully"
        : "Blog created successfully"
    );

    setShowForm(false);
    setEditingId(null);
    setForm(emptyBlog);

    fetchBlogs();
  }

  // =====================================================
  // DELETE BLOG
  // =====================================================

  async function deleteBlog(id: number) {
    const confirmed = confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmed) return;

    const { error } = await supabase
      .from("blogs")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    fetchBlogs();
  }

  // =====================================================
  // PUBLISH / UNPUBLISH
  // =====================================================

  async function togglePublish(
    id: number,
    published: boolean
  ) {
    const { error } = await supabase
      .from("blogs")
      .update({
        published: !published,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    fetchBlogs();
  }

  // =====================================================
  // LOGOUT
  // =====================================================

  async function logout() {
    await supabase.auth.signOut();

    window.location.href = "/admin/login";
  }

  // =====================================================
  // LOADING
  // =====================================================

  if (!user || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7faf7]">
        <p className="text-sm text-slate-500">
          Loading...
        </p>
      </div>
    );
  }

  // =====================================================
  // UI
  // =====================================================

  return (
    <main className="min-h-screen bg-[#f7faf7]">

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="border-b border-[#dfe8e1] bg-white">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">

          <div>
            <h1 className="text-xl font-bold text-black">
              Blog Dashboard
            </h1>

            <p className="mt-1 text-xs text-slate-500">
              OpenPlots Shadnagar
            </p>
          </div>

          <div className="flex items-center gap-3">

            <button
              onClick={createNewBlog}
              className="inline-flex items-center gap-2 rounded-xl bg-[#00540D] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#003B09]"
            >
              <Plus size={17} />
              New Blog
            </button>

            <button
              onClick={logout}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
              aria-label="Logout"
            >
              <LogOut size={18} />
            </button>

          </div>

        </div>

      </header>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="mx-auto max-w-7xl px-5 py-10">

        {/* =================================================
            BLOG FORM
        ================================================= */}

        {showForm && (

          <div className="mb-10 rounded-3xl border border-[#dfe8e1] bg-white p-6 shadow-sm md:p-8">

            {/* FORM HEADER */}

            <div className="mb-7 flex items-center justify-between">

              <div>

                <h2 className="text-2xl font-bold text-black">
                  {editingId
                    ? "Edit Blog"
                    : "Create New Blog"}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Add your blog content and SEO information.
                </p>

              </div>

              <button
                onClick={() => setShowForm(false)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 hover:bg-slate-50"
              >
                <X size={18} />
              </button>

            </div>

            <div className="grid gap-6 lg:grid-cols-2">

              {/* =================================================
                  TITLE
              ================================================= */}

              <div className="lg:col-span-2">

                <label className="text-sm font-bold text-slate-800">
                  Blog Title
                </label>

                <input
                  value={form.title}
                  onChange={(e) =>
                    handleTitleChange(e.target.value)
                  }
                  placeholder="Best Open Plots in Shadnagar"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#00540D]"
                />

              </div>

              {/* =================================================
                  SLUG
              ================================================= */}

              <div>

                <label className="text-sm font-bold text-slate-800">
                  URL Slug
                </label>

                <input
                  value={form.slug}
                  onChange={(e) =>
                    updateField(
                      "slug",
                      e.target.value
                    )
                  }
                  placeholder="open-plots-in-shadnagar"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#00540D]"
                />

              </div>

              {/* =================================================
                  CATEGORY
              ================================================= */}

              <div>

                <label className="text-sm font-bold text-slate-800">
                  Category
                </label>

                <input
                  value={form.category}
                  onChange={(e) =>
                    updateField(
                      "category",
                      e.target.value
                    )
                  }
                  placeholder="Property Guide"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#00540D]"
                />

              </div>

              {/* =================================================
                  EXCERPT
              ================================================= */}

              <div className="lg:col-span-2">

                <label className="text-sm font-bold text-slate-800">
                  Excerpt
                </label>

                <textarea
                  value={form.excerpt}
                  onChange={(e) =>
                    updateField(
                      "excerpt",
                      e.target.value
                    )
                  }
                  rows={3}
                  placeholder="Short description for blog cards and SEO..."
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#00540D]"
                />

              </div>

              {/* =================================================
                  FEATURED IMAGE
              ================================================= */}

              <div className="lg:col-span-2">

                <label className="text-sm font-bold text-slate-800">
                  Featured Image
                </label>

                <div className="mt-2 rounded-2xl border-2 border-dashed border-slate-200 p-5">

                  {/* IMAGE PREVIEW */}

                  {form.featured_image && (

                    <div className="relative mb-5 overflow-hidden rounded-xl">

                      <img
                        src={form.featured_image}
                        alt="Featured image preview"
                        className="h-64 w-full object-cover"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            featured_image: "",
                          }))
                        }
                        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-red-600 shadow-lg transition hover:bg-red-50"
                        aria-label="Remove image"
                      >
                        <X size={17} />
                      </button>

                    </div>

                  )}

                  {/* UPLOAD */}

                  <label
                    className={`flex cursor-pointer flex-col items-center justify-center rounded-xl bg-[#f7faf7] px-5 py-10 text-center transition hover:bg-[#eaf3ea] ${
                      uploadingImage
                        ? "pointer-events-none opacity-60"
                        : ""
                    }`}
                  >

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf3ea] text-[#00540D]">
                      <ImagePlus size={27} />
                    </div>

                    <p className="mt-4 text-sm font-bold text-slate-800">
                      {uploadingImage
                        ? "Uploading image..."
                        : "Click to upload featured image"}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      JPG, PNG or WEBP • Maximum 5MB
                    </p>

                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      className="hidden"
                      disabled={uploadingImage}
                      onChange={(e) => {

                        const file =
                          e.target.files?.[0];

                        if (file) {
                          uploadFeaturedImage(file);
                        }

                        e.currentTarget.value = "";
                      }}
                    />

                  </label>

                </div>

              </div>

              {/* =================================================
                  CONTENT
              ================================================= */}

            <div className="lg:col-span-2">

  <label className="text-sm font-bold text-slate-800">
    Blog Content
  </label>

  <textarea
    value={form.content}
    onChange={(e) =>
      updateField("content", e.target.value)
    }
    rows={20}
    placeholder={`Write your article here...

Leave one blank line between paragraphs.

Why Invest in Shadnagar?

Shadnagar is becoming an important real estate destination near Hyderabad.

Excellent Connectivity

The area has excellent connectivity to Hyderabad and major highways.`}
    className="
      mt-2
      w-full
      resize-y
      rounded-xl
      border
      border-slate-200
      bg-white
      px-4
      py-4
      text-base
      leading-8
      text-slate-700
      outline-none
      transition
      focus:border-[#00540D]
      focus:ring-2
      focus:ring-[#00540D]/10
    "
  />

  <p className="mt-2 text-xs text-slate-500">
    Write normal text. Leave one blank line between paragraphs.
  </p>

</div>

              {/* =================================================
                  SEO TITLE
              ================================================= */}

              <div>

                <label className="text-sm font-bold text-slate-800">
                  SEO Title
                </label>

                <input
                  value={form.seo_title}
                  onChange={(e) =>
                    updateField(
                      "seo_title",
                      e.target.value
                    )
                  }
                  placeholder="Best Open Plots in Shadnagar | Buyer Guide"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#00540D]"
                />

              </div>

              {/* =================================================
                  SEO DESCRIPTION
              ================================================= */}

              <div>

                <label className="text-sm font-bold text-slate-800">
                  SEO Description
                </label>

                <textarea
                  value={form.seo_description}
                  onChange={(e) =>
                    updateField(
                      "seo_description",
                      e.target.value
                    )
                  }
                  rows={3}
                  placeholder="Learn about open plots in Shadnagar..."
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#00540D]"
                />

              </div>

              {/* =================================================
                  PUBLISH
              ================================================= */}

              <div className="lg:col-span-2">

                <label className="flex cursor-pointer items-center gap-3">

                  <input
                    type="checkbox"
                    checked={form.published}
                    onChange={(e) =>
                      updateField(
                        "published",
                        e.target.checked
                      )
                    }
                    className="h-5 w-5 accent-[#00540D]"
                  />

                  <span className="text-sm font-bold text-slate-800">
                    Publish this blog
                  </span>

                </label>

              </div>

            </div>

            {/* =================================================
                SAVE BUTTONS
            ================================================= */}

            <div className="mt-8 flex gap-3">

              <button
                onClick={saveBlog}
                disabled={
                  saving || uploadingImage
                }
                className="inline-flex items-center gap-2 rounded-xl bg-[#00540D] px-6 py-3 font-bold text-white transition hover:bg-[#003B09] disabled:cursor-not-allowed disabled:opacity-50"
              >

                <Save size={17} />

                {saving
                  ? "Saving..."
                  : uploadingImage
                  ? "Uploading..."
                  : "Save Blog"}

              </button>

              <button
                onClick={() => setShowForm(false)}
                className="rounded-xl border border-slate-200 px-6 py-3 font-bold text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>

            </div>

          </div>

        )}

        {/* =================================================
            BLOG LIST
        ================================================= */}

        <div className="rounded-3xl border border-[#dfe8e1] bg-white">

          <div className="border-b border-[#dfe8e1] px-6 py-5">

            <h2 className="font-bold text-black">
              All Blogs
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              {blogs.length} blog
              {blogs.length !== 1 ? "s" : ""}
            </p>

          </div>

          <div className="divide-y divide-[#dfe8e1]">

            {blogs.length === 0 ? (

              <div className="px-6 py-16 text-center">

                <p className="text-slate-500">
                  No blogs yet.
                </p>

              </div>

            ) : (

              blogs.map((blog) => (

                <div
                  key={blog.id}
                  className="flex flex-col gap-5 px-6 py-5 md:flex-row md:items-center md:justify-between"
                >

                  <div className="flex min-w-0 items-center gap-4">

                    {/* THUMBNAIL */}

                    {blog.featured_image ? (

                      <img
                        src={blog.featured_image}
                        alt=""
                        className="h-16 w-24 shrink-0 rounded-xl object-cover"
                      />

                    ) : (

                      <div className="flex h-16 w-24 shrink-0 items-center justify-center rounded-xl bg-[#eaf3ea] text-[#00540D]">
                        <ImagePlus size={20} />
                      </div>

                    )}

                    <div className="min-w-0">

                      <div className="flex flex-wrap items-center gap-2">

                        <h3 className="font-bold text-black">
                          {blog.title}
                        </h3>

                        {blog.published ? (

                          <span className="rounded-full bg-green-100 px-2.5 py-1 text-[10px] font-bold text-green-700">
                            Published
                          </span>

                        ) : (

                          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-600">
                            Draft
                          </span>

                        )}

                      </div>

                      <p className="mt-1 truncate text-xs text-slate-500">
                        /blog/{blog.slug}
                      </p>

                    </div>

                  </div>

                  {/* ACTIONS */}

                  <div className="flex items-center gap-2">

                    <button
                      onClick={() =>
                        togglePublish(
                          blog.id,
                          blog.published
                        )
                      }
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 hover:bg-slate-50"
                      title={
                        blog.published
                          ? "Unpublish"
                          : "Publish"
                      }
                    >

                      {blog.published ? (
                        <EyeOff size={17} />
                      ) : (
                        <Eye size={17} />
                      )}

                    </button>

                    <button
                      onClick={() =>
                        editBlog(blog)
                      }
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 hover:bg-slate-50"
                      title="Edit"
                    >
                      <Pencil size={17} />
                    </button>

                    <button
                      onClick={() =>
                        deleteBlog(blog.id)
                      }
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-100 text-red-600 hover:bg-red-50"
                      title="Delete"
                    >
                      <Trash2 size={17} />
                    </button>

                  </div>

                </div>

              ))

            )}

          </div>

        </div>

      </div>

    </main>
  );
}