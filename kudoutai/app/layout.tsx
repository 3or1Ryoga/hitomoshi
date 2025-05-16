import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

// export const metadata = {
//   title: "KUDOUTAI-駆動体 | データ活用・DX推進のプロフェッショナル",
//   description: "データを活用した経営改善と利益最大化を支援し、2025年問題を乗り越えるためのDX推進をサポートします。",
//     generator: 'v0.dev'
// }

export const metadata = {
  title: "関西 飲食業DX推進なら駆動体 | データ経営・業績改善を支援",
  description: "関西エリアの飲食業界に特化したDX推進支援。経営層の課題に寄り添い、データを駆動力に変える「駆動体」が、売上向上・業務効率化を実現します。",
  keywords: ["飲食業DX", "関西DX", "経営改善", "駆動", "データ活用", "2025年問題"],
  generator: 'Next.js',
  metadataBase: new URL("https://kudout.ai"),
  alternates: {
    canonical: "https://kudout.ai",
  },
  openGraph: {
    title: "関西 飲食業DX推進なら駆動体",
    description: "関西の飲食業向けに、データ経営・業績改善を支援するDXパートナー「駆動体」。",
    url: "https://kudout.ai",
    siteName: "KUDOUTAI - 駆動体",
    images: [
      {
        url: "/logo.png", // ロゴのURLに置き換えてください
        width: 1200,
        height: 630,
        alt: "駆動体ロゴ",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "関西 飲食業DX推進なら駆動体",
    description: "経営層が選ぶDXパートナー「駆動体」。関西の飲食業をデータで駆動。",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
