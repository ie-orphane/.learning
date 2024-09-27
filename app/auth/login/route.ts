import { randomBytes } from "crypto";
import { NextResponse } from "next/server";

export async function GET() {
  const API_URL = process.env.API_URL;
  let link: string | null = null;
  let token: string | null = randomBytes(7).toString("hex");

  try {
    const response = await fetch(`${API_URL}/login?token=${token}`, { method: "POST" });
    link = await response.json();
  } catch (error) {
    token = null;
  }

  if (token && link) {
    return NextResponse.json({ token, link });
  }

  return NextResponse.json(null);
}
