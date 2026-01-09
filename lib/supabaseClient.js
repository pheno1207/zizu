import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseAnonKey) {
  // 환경변수가 설정되지 않았을 경우 콘솔에 경고
  // 실제 키는 절대 공개 저장소에 올리지 마세요.
  console.warn('Supabase 환경변수가 설정되지 않았습니다. NEXT_PUBLIC_SUPABASE_URL 및 NEXT_PUBLIC_SUPABASE_ANON_KEY를 확인하세요.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
