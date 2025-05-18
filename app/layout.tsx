import "@/app/globals.css"

import { Mona_Sans as FontSans, Noto_Sans_JP } from "next/font/google"

import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// 日本語フォントの設定
const fontNotoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
})

export const metadata = {
  title: "HITOMOSHI - ヒトのモシ のために ヒをトモシ 社会を幸せにする",
  description: "HITOMOSHIは関西学院大学発のスタートアップ。学生と企業の架け橋となり、関わった人の心を動かす企業です。",
  verification: {
    google: "5zaUlHBLK7GixqQHH7znXqdM4KdtIPLn3oFiP2lgCQI",
  },
  keywords: [
    "学生マッチング",
    "新卒採用支援",
    "関西学院大学スタートアップ",
    "企業学生交流",
    "人材紹介サービス",
    "採用ミスマッチ防止",
    "若手人材育成",
  ],
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontNotoSansJP.variable,
          "font-noto",
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
