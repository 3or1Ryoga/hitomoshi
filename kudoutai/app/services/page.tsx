import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart2, Database, MessageSquare, Monitor, Smartphone } from "lucide-react"

export default function ServicesPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">サービス内容</h1>
              <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
                データを活用した経営改善と利益最大化を支援するサービスをご提供します
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:gap-16">
            {/* Service 1 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center">
                <Image
                  src="/reserve-system.png?height=400&width=600"
                  alt="事前予約システムのイメージ"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-md bg-blue-100 px-3 py-1 text-sm text-blue-700">
                  <Database className="mr-1 h-4 w-4" />
                  <span>データ収集・活用</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-700">
                  事前予約システムの構築
                </h2>
                <p className="text-gray-500 md:text-lg">
                  顧客データを収集・活用できる予約システムを構築し、ビジネスの効率化を実現します。来店前・来場前のデータ取得により、パーソナライズされたサービス提供が可能になります。
                </p>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-blue-700" />
                    <span>顧客情報の効率的な収集と管理</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-blue-700" />
                    <span>予約状況のリアルタイム把握</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-blue-700" />
                    <span>顧客ごとのパーソナライズされた対応</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-4">
                <div className="inline-flex items-center rounded-md bg-blue-100 px-3 py-1 text-sm text-blue-700">
                  <MessageSquare className="mr-1 h-4 w-4" />
                  <span>コミュニケーション</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-700">
                  LINE & AI活用による集客管理
                </h2>
                <p className="text-gray-500 md:text-lg">
                  LINEとAIを組み合わせた集客管理システムで、効率的な顧客コミュニケーションを実現します。自動応答や顧客セグメントに基づいたメッセージ配信により、顧客満足度と売上の向上を支援します。
                </p>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-blue-700" />
                    <span>AIを活用した自動応答システム</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-blue-700" />
                    <span>顧客セグメントに基づいたターゲティング</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-blue-700" />
                    <span>効率的な顧客フォローアップ</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <Image
                  src="/line-system.png?height=400&width=600"
                  alt="LINE & AI活用のイメージ"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center">
                <Image
                  src="/qr-ticket.png?height=400&width=600"
                  alt="QRチケット機能のイメージ"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-md bg-blue-100 px-3 py-1 text-sm text-blue-700">
                  <Smartphone className="mr-1 h-4 w-4" />
                  <span>デジタルチケット</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-700">QRチケット機能の開発</h2>
                <p className="text-gray-500 md:text-lg">
                  イベントや施設向けのQRチケットシステムを開発します。紙のチケットが不要になるだけでなく、来場者データの収集・分析が可能になり、マーケティング戦略の最適化に貢献します。
                </p>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-blue-700" />
                    <span>ペーパーレスでエコフレンドリー</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-blue-700" />
                    <span>来場者データのリアルタイム収集</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-blue-700" />
                    <span>不正防止と入場管理の効率化</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 4 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-4">
                <div className="inline-flex items-center rounded-md bg-blue-100 px-3 py-1 text-sm text-blue-700">
                  <Monitor className="mr-1 h-4 w-4" />
                  <span>ウェブ開発</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-700">ホームページ制作</h2>
                <p className="text-gray-500 md:text-lg">
                  データ収集と分析を考慮した、ビジネス成長に貢献するホームページを制作します。単なる情報発信だけでなく、顧客行動データを収集し、マーケティング戦略の最適化に活用できるウェブサイトを構築します。
                </p>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-blue-700" />
                    <span>ユーザー行動分析機能の実装</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-blue-700" />
                    <span>コンバージョン率最適化</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-blue-700" />
                    <span>SEO対策とアクセス解析</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <Image
                  src="/homepage-kudou3.jpg?height=400&width=600"
                  alt="ホームページ制作のイメージ"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            {/* Service 5 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center">
                <Image
                  src="/analyze-system.png?height=400&width=600"
                  alt="データ分析のイメージ"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-md bg-blue-100 px-3 py-1 text-sm text-blue-700">
                  <BarChart2 className="mr-1 h-4 w-4" />
                  <span>データ分析</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-700">
                  データ分析・活用コンサルティング
                </h2>
                <p className="text-gray-500 md:text-lg">
                  独自のデータ収集方法と分析技術により、ビジネスの競争優位性を確立します。「いかに取得するか」にこだわり「正確に分析する」仕組みを構築し、データドリブンな意思決定をサポートします。
                </p>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-blue-700" />
                    <span>ビジネスに最適なデータ収集方法の設計</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-blue-700" />
                    <span>AIを活用したデータ分析</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-blue-700" />
                    <span>データに基づく経営戦略の立案</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Trends */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-700">市場トレンド</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                データ活用が企業成長に与える影響
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm">
              <div className="text-4xl font-bold text-blue-700">3倍</div>
              <p className="text-center text-gray-500">データ成熟度が高い組織は成功率が3倍上昇します</p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm">
              <div className="text-4xl font-bold text-blue-700">23倍</div>
              <p className="text-center text-gray-500">
                データを活用する企業は、非活用企業に比べて23倍の顧客獲得率を実現
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm">
              <div className="text-4xl font-bold text-blue-700">19倍</div>
              <p className="text-center text-gray-500">データ活用企業は19倍の収益性向上を達成</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-700">
                2025年問題を乗り越えるためのDX推進を始めませんか？
              </h2>
              <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                データを活用した経営改善と利益最大化を実現しましょう
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Link href="/contact">
                <Button className="w-full bg-blue-700 hover:bg-blue-800" size="lg">
                  無料相談を予約する <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
