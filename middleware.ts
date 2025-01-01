import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  if (!request.cookies.has("jwt"))
    return NextResponse.redirect(new URL("/login", request.url));

  const res = await fetch(
    `${process.env.BACKEND_URL}/api/v1/users/isloggedin`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${request.cookies.get("jwt")?.value}`,
      },
    },
  );
  if (!res.ok) return NextResponse.redirect(new URL("/login", request.url));

  return NextResponse.next();
}

export const config = {
  matcher: "/doctors",
};
