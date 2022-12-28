import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest, response: NextResponse) {

    console.log("In the middleware!", request.url);
    return;

}

export const config = {
    matcher: '/',
}