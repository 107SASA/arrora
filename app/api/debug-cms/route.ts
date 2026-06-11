// TEMPORARY DEBUG ENDPOINT — remove after diagnosing the CMS connection issue
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const CMS_URL = process.env.CMS_API_URL;
  const API_KEY = process.env.CMS_API_KEY;

  const envCheck = {
    CMS_API_URL: CMS_URL ? `set (${CMS_URL})` : "MISSING ❌",
    CMS_API_KEY: API_KEY ? `set (${API_KEY.slice(0, 8)}…)` : "MISSING ❌",
  };

  if (!CMS_URL || !API_KEY) {
    return NextResponse.json({ step: "env_check", result: "FAILED", envCheck });
  }

  // Test 1: Can we reach the CMS at all?
  let pingResult: string;
  try {
    const ping = await fetch(`${CMS_URL}/api/vsarora/blogs`, {
      headers: { "x-api-key": API_KEY },
      cache: "no-store",
    });
    const body = await ping.text();
    pingResult = `HTTP ${ping.status} — ${body.slice(0, 300)}`;
  } catch (e) {
    pingResult = `NETWORK ERROR: ${String(e)}`;
  }

  return NextResponse.json({
    envCheck,
    blogsEndpoint: `${CMS_URL}/api/vsarora/blogs`,
    result: pingResult,
  });
}
