"use client";

import { FormEvent, useState } from "react";
import { LogIn } from "lucide-react";

import { supabase } from "../../lib/supabase";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const { data, error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    // Check admin role from app_metadata
    const role = data.user?.app_metadata?.role;

    console.log("Admin role:", role);

    if (role !== "admin") {
      await supabase.auth.signOut();

      setError(
        "You do not have admin access."
      );

      setLoading(false);
      return;
    }

    // Admin login successful
    window.location.href = "/admin/blogs";
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7faf7] px-5">

      <div className="w-full max-w-md rounded-3xl border border-[#dfe8e1] bg-white p-7 shadow-sm md:p-9">

        <div className="mb-8 text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf3ea] text-[#00540D]">
            <LogIn size={25} />
          </div>

          <h1 className="mt-5 text-2xl font-bold text-black">
            Admin Login
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            OpenPlots Shadnagar Blog
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          {/* Email */}
          <div>
            <label className="text-sm font-bold text-slate-800">
              Email
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="admin@openplotsinshadnagar.com"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#00540D]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-bold text-slate-800">
              Password
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="••••••••"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#00540D]"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Login */}
          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#00540D] px-5 py-3.5 font-bold text-white transition hover:bg-[#003B09] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <LogIn size={17} />

            {loading
              ? "Signing in..."
              : "Sign In"}
          </button>

        </form>

      </div>

    </main>
  );
}