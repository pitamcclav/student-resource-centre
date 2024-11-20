// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { initialize } from "@/lib/db";

export async function middleware(request: NextRequest) {
    try {
        await initialize();
        return NextResponse.next();
    } catch (error) {
        console.error("Database initialization error:", error);
        return new NextResponse(
            JSON.stringify({ success: false, message: "Internal Server Error" }),
            { status: 500, headers: { "content-type": "application/json" } }
        );
    }
}

export const config = {
    matcher: "/api/:path*",
};