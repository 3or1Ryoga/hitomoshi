import Link from "next/link"
import { Database, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white py-6">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                    src="/kudoutai-logo2.png?height=400&width=400"
                    alt="データ分析のイメージ"
                    width={40}
                    height={40}
                    className="rounded-lg object-cover"
              />
              <span className="text-xl font-bold text-blue-700">KUDOUTAI</span>
            </Link>
            <p className="text-sm text-gray-500">
              デジタル技術を社会に還元し、データを活用した経営改善と利益最大化を支援します。
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-blue-700">組織情報</h3>
            <div className="space-y-2 text-sm text-gray-500">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-blue-700 mt-0.5" />
                <span>〒669-1337 兵庫県三田市学園4丁目2番</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-700" />
                <span>090-6665-6240</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-700" />
                <span>ryoga3or1@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-blue-700">サイトマップ</h3>
            <nav className="flex flex-col space-y-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-blue-700">
                ホーム
              </Link>
              <Link href="/about" className="hover:text-blue-700">
                組織概要
              </Link>
              <Link href="/services" className="hover:text-blue-700">
                サービス
              </Link>
              <Link href="/case-studies" className="hover:text-blue-700">
                導入事例
              </Link>
              <Link href="/faq" className="hover:text-blue-700">
                よくある質問
              </Link>
              <Link href="/contact" className="hover:text-blue-700">
                お問い合わせ
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-blue-700">法的情報</h3>
            <nav className="flex flex-col space-y-2 text-sm text-gray-500">
              <Link href="/privacy-policy" className="hover:text-blue-700">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="hover:text-blue-700">
                利用規約
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} KUDOUTAI All rights reserved.</p>
          {/* <p className="mt-2">設立日: 2025年5月11日</p> */}
          <p className="mt-2">2025年5月12日</p>
        </div>
      </div>
    </footer>
  )
}
