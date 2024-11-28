import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Check if the request is for the admin panel
  if (pathname.startsWith("/admin")) {
    // of: Getting all the cookies from the request
    const cookie = req.cookies.get("user");
    let remainingSession = req.cookies.get("remainingSession")?.value;

    // of: If no session cookie is found, redirect to the login page
    if (!cookie) {
      const loginUrl = new URL("/login", req.nextUrl.origin);
      return NextResponse.redirect(loginUrl);
    }

    // of: Validating the session
    try {
      const decodedToken = jwt.decode(cookie?.value);

      const isExpired = decodedToken.exp * 1000 < Date.now();

      const { iat, exp, ...rest } = decodedToken;

      if (isExpired) {
        const response = NextResponse.next();

        remainingSession = parseInt(remainingSession - 300000);

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/token`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(rest),
          }
        );

        const newToken = await res.json();

        response.cookies.set({
          name: "user",
          value: newToken,
          httpOnly: true,
          maxAge: remainingSession,
          path: "/admin",
        });

        response.cookies.set({
          name: "api-auth",
          value: newToken,
          httpOnly: true,
          maxAge: remainingSession,
          path: "/api",
        });

        response.cookies.set({
          name: "remainingSession",
          value: remainingSession,
        });

        return response;
      }
    } catch (err) {
      console.error("jwt validation error");

      (await cookies()).set("remainingSession", " ", {
        maxAge: 0,
      });

      const loginUrl = new URL("/login", req.nextUrl.origin);
      return NextResponse.redirect(loginUrl);
    }

    // If session is valid, allow the request to proceed
    return NextResponse.next();
  }

  // Allow all other requests to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/:path*"], // Apply middleware to all /admin routes and /api routes
};
