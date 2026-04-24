import { signIn, signOut, useSession } from "next-auth/react";
import { Github } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>loading...</p>;
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-neutral-50">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
        <p className="text-neutral-600 mb-6">
          Sign in to access the admin area
        </p>

        <button
          onClick={() => signIn("github", { callbackUrl: "/admin/products" })}
          className="w-full flex items-center justify-center gap-3 rounded-xl bg-black text-white py-3 hover:opacity-90 transition"
        >
          <Github className="w-5 h-5" />
          Continue with GitHub
        </button>
      </div>
    </main>
  );
}
