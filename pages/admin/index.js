import Link from "next/link";
import { useSession, signIn } from "next-auth/react";

const navItems = [
  { label: "Products", href: "/admin/products" },
  { label: "Orders", href: "/admin/orders" },
];

export default function AdminPanel() {
  const { data: session, status } = useSession();
  if (status === "loading") return <p>loading...</p>;
  if (!session) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-md mx-auto rounded-2xl border p-8 text-center shadow-sm bg-white">
          <p className="text-2xl font-bold mb-4">You must sign in.</p>
          <Link
            href="/login"
            className="w-full flex items-center justify-center gap-3 rounded-xl bg-black text-white font-semibold py-3 hover:opacity-90 transition"
          >
            Login
          </Link>
        </div>
      </main>
    );
  }
  return (
    <main className="max-w-6xl min-h-screen mx-auto mt-2 overflow-hidden rounded-2xl border bg-card">
      <div className="flex gap-5 justify-around mt-5">
        <h1 className="text-2xl font-semibold text-center">Admin Panel</h1>
        <div>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
