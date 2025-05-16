"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Database, Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
                  src="/kudoutai-logo2.png?height=400&width=400"
                  alt="データ分析のイメージ"
                  width={40}
                  height={40}
                  className="rounded-lg object-cover"
                />
          <span className="text-xl font-bold text-blue-700">
            KUDOUTAI
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-blue-700">
            ホーム
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-blue-700">
            組織概要
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-blue-700">
            サービス
          </Link>
          <Link href="/case-studies" className="text-sm font-medium hover:text-blue-700">
            導入事例
          </Link>
          <Link href="/faq" className="text-sm font-medium hover:text-blue-700">
            よくある質問
          </Link>
        </nav>
        <div className="hidden md:flex">
          <Link href="/contact">
            <Button className="bg-blue-700 hover:bg-blue-800">お問い合わせ</Button>
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 p-4 bg-white">
            <Link href="/" className="text-sm font-medium hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>
              ホーム
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              組織概要
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              サービス
            </Link>
            <Link
              href="/case-studies"
              className="text-sm font-medium hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              導入事例
            </Link>
            <Link href="/faq" className="text-sm font-medium hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>
              よくある質問
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-blue-700 hover:bg-blue-800">お問い合わせ</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
