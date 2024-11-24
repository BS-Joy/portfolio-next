import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Check if the request is for the admin panel
  if (pathname.startsWith("/admin")) {
    // Get the cookies from the request
    const cookies = req.cookies.get("user");

    // If no session cookie is found, redirect to the login page
    if (!cookies) {
      const loginUrl = new URL("/login", req.nextUrl.origin);
      return NextResponse.redirect(loginUrl);
    }

    // Validate the session if necessary (optional, depending on implementation)
    // For example, decode the session token or check its validity.
    // If the session is invalid, redirect to the login page.

    // If session is valid, allow the request to proceed
    return NextResponse.next();
  }

  // Allow all other requests to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // Apply middleware to all /admin routes
};
