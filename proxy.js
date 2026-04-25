import { withAuth } from "next-auth/middleware";

export const proxy = withAuth({
  callbacks: {
    authorized: ({ token }) => token?.role === "admin",
  },
  pages: {
    signIn: "/login",
  },
});

export const config = {
  matcher: ["/admin/:path*"],
};
