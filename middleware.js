import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  const cookie = req.cookies.get("user");

  // Check if the request is for the admin panel
  if (pathname.startsWith("/admin")) {
    // Get the cookies from the request
    // const cookie = req.cookies.get("user");

    // If no session cookie is found, redirect to the login page
    if (!cookie) {
      const loginUrl = new URL("/login", req.nextUrl.origin);
      return NextResponse.redirect(loginUrl);
    }

    // Validate the session if necessary (optional, depending on implementation)
    // For example, decode the session token or check its validity.
    try {
      const decodedToken = jwt.decode(cookie?.value);

      const isExpired = decodedToken.exp * 1000 < Date.now();

      const { iat, exp, ...rest } = decodedToken;

      if (isExpired) {
        // console.log("token expired");

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

        const response = NextResponse.next();

        response.cookies.set({
          name: "user",
          value: newToken,
          httpOnly: true,
          maxAge: "1h",
          path: "/admin",
        });

        response.cookies.set({
          name: "user",
          value: newToken,
          httpOnly: true,
          maxAge: "1h",
          path: "/api",
        });

        return response;
      }
    } catch (err) {
      console.error("jwt validation error");

      const loginUrl = new URL("/login", req.nextUrl.origin);
      return NextResponse.redirect(loginUrl);
    }

    // If session is valid, allow the request to proceed
    return NextResponse.next();
  }

  if (req.method !== "GET") {
    console.log("Not a get request");

    console.log("Not a GET request", cookie);
  }

  // Allow all other requests to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/:path*"], // Apply middleware to all /admin routes and /api routes
};
