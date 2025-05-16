import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart2, LineChart, TrendingUp } from "lucide-react"

export default function CaseStudiesPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                導入事例・実績
              </h1>
              <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
                データ活用によって実現した成功事例をご紹介します
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          {/* Case Study 1 */}
          <div className="mb-16 rounded-lg border bg-white p-6 shadow-sm">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-md bg-blue-100 px-3 py-1 text-sm text-blue-700">
                  <TrendingUp className="mr-1 h-4 w-4" />
                  <span>大規模運動会イベント</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-700">兵庫県内の某私立高校</h2>
                <div className="flex items-center space-x-4">
                  <div className="rounded-md bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-700">
                    集客率2倍
                  </div>
                </div>
                <p className="text-gray-500 md:text-lg">
                  データを活用した顧客分析と予約システムの導入により、効率的な運営と顧客満足度の向上を実現しました。来場前のデータ取得によるパーソナライズされたサービス提供が、持続的なシステム運用につながりました。
                </p>
                <h3 className="text-xl font-bold text-blue-700">導入サービス</h3>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-blue-700" />
                    <span>QRチケットシステムの構築</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-blue-700" />
                    <span>LINE & AI活用による集客管理</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-blue-700" />
                    <span>データ分析・活用コンサルティング</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="ゑびや大食堂の事例"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            {/* <div className="mt-8 space-y-4">
              <h3 className="text-xl font-bold text-blue-700">成功要因</h3>
              <div className="grid gap-6 md:grid-cols-3 md:gap-8">
                <div className="rounded-lg bg-blue-50 p-4">
                  <h4 className="font-bold text-blue-700">効率化</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    予約システムの導入により、スタッフの配置最適化と食材の無駄を削減。コスト削減と顧客満足度向上の両立を実現。
                  </p>
                </div>
                <div className="rounded-lg bg-blue-50 p-4">
                  <h4 className="font-bold text-blue-700">パーソナライズ化</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    顧客データに基づいた個別対応により、顧客満足度が向上。リピート率の上昇と口コミによる新規顧客獲得につながった。
                  </p>
                </div>
                <div className="rounded-lg bg-blue-50 p-4">
                  <h4 className="font-bold text-blue-700">データ活用</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    来店前のデータ取得により、顧客ニーズを先読みした提案が可能に。客単価の上昇と顧客満足度の向上を実現。
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-700">成功要因</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                データ活用による成功の鍵
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex flex-col space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <BarChart2 className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-blue-700">効率化とパーソナライズ化</h3>
                <p className="text-gray-500">
                  データを活用することで、業務の効率化と顧客へのパーソナライズされたサービス提供を両立。顧客満足度の向上とコスト削減を同時に実現します。
                </p>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-blue-700" />
                    <span>リソースの最適配分</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-blue-700" />
                    <span>顧客ニーズの先読み</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-blue-700" />
                    <span>顧客体験の向上</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex flex-col space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <LineChart className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-blue-700">来店前・来場前のデータ取得</h3>
                <p className="text-gray-500">
                  顧客との接点が発生する前にデータを取得することで、準備時間を確保し、最適なサービス提供を実現。先手を打った対応が顧客満足度と売上の向上につながります。
                </p>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-blue-700" />
                    <span>事前準備の最適化</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-blue-700" />
                    <span>パーソナライズされた提案</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-blue-700" />
                    <span>顧客期待値の管理</span>
                  </li>
                </ul>
              </div>
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
                あなたのビジネスも成功事例の一つとなりませんか
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
