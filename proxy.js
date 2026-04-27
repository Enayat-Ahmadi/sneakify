import { withAuth } from "next-auth/middleware";

export const proxy = withAuth({
  callbacks: {
    authorized: ({ token, req }) => {
      const pathname = req.nextUrl.pathname;
      if (pathname.startsWith("/admin")) {
        const admins = process.env.ADMIN_EMAILS?.split(",") || [];
        return admins.includes(token?.email);
      }
      return !!token;
    },
  },
});

export const config = {
  matcher: ["/admin/:path*"],
};
