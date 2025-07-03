
import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Motion - 모두에 의한 커뮤니티",
  description: "지역소식, 사고팔기, 구인구직, 렌트매매, 재능거래, 생활정보, 지역정치를 한 곳에 하는 지역기반 통합커뮤니티",
  keywords: [
    "buy and sell",
    "local marketplace",
    "trade items",
    "Chicago buy and sell",
    "Chicago loval sale",
    "Chicago marketplace",
    "Chicago used items",
    "Buy and sell locally in chicago",
    "sell used items",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  generator: 'v0.dev'
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en"
      suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}