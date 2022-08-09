import { NextRequest, NextResponse } from "next/server";

// pages to protect on the edge
const restrictedPages = ["/", "/events"];

export default function middleware(req: NextRequest) {
  /*
  if you're trying to access a restricted page, give me your token in order to pass.
  If you don't have a token, get thee hence to signin and get yourself a token
 */
  if (restrictedPages.find((page) => page === req.nextUrl.pathname)) {
    const token = req.cookies.get("TRAX_TOKEN");

    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/signin";
      return NextResponse.redirect(url);
    }
  }
}
