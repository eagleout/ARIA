import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  if (typeof window === 'undefined') {
    // SSR: return a no-op stub — real calls happen client-side via useEffect
    return {} as ReturnType<typeof createBrowserClient>
  }
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
