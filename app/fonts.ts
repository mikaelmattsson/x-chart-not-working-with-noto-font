import { Noto_Serif } from 'next/font/google'

export const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-primary',
  fallback: ['ui-serif', 'Georgia', 'Times New Roman', 'serif'],
})
