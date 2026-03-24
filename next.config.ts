import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_SUPABASE_URL:
      process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://aaqaremfvosjzbbufouz.supabase.co',
    NEXT_PUBLIC_SUPABASE_ANON_KEY:
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhcWFyZW1mdm9zanpiYnVmb3V6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzM2MjgwMSwiZXhwIjoyMDg4OTM4ODAxfQ.E9_uWutuPtLeWPZo4tzXMZ62_yqfms4JYVl-vQYwgqU',
  },
};

export default nextConfig;
