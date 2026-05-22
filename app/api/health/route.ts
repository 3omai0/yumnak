import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const { count, error } = await supabase
      .from('blog_posts')
      .select('*', { count: 'exact', head: true })

    if (error) throw error

    return NextResponse.json(
      { status: 'ok', posts: count, timestamp: new Date().toISOString() },
      { status: 200 }
    )
  } catch (err: any) {
    return NextResponse.json(
      { status: 'error', message: err.message },
      { status: 500 }
    )
  }
}
