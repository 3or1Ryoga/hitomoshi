import { ArrowRight, BarChart2, Database, MessageSquare } from "lucide-react"

// import SketchComponent from "../components/SketchComponent";
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import ArrowBackground from '@/components/ArrowBackground'
import { Arrow } from "../components/Arrow"; // 相対パスは環境による

export default function Home() {
  return (
    <div className="relative w-full">
      {/* Hero Section */}
      {/* <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-600 to-blue-800 text-white overflow-hidden"> */}
      <section className="relative w-full min-h-screen py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-600 to-blue-800 text-white overflow-hidden">
        {/* ← ここに背景用コンポーネントを配置 */}
        {/* <ArrowBackground /> */}
        <div>
          <Arrow />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            {/* 左カラム */}
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                駆動力で世界を豊かに
              </h1>
              <p className="max-w-[600px] text-white/90 md:text-xl">
                KUDOUTAI-駆動体はデジタル技術を社会に還元し、データを活用した経営改善と利益最大化を支援します。2025年問題を乗り越えるためのDX推進をサポートします。
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                    お問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="bg-white text-blue-700 hover:bg-blue-50">
                    サービス詳細
                  </Button>
                </Link>
              </div>
            </div>

            {/* 右カラム：画像 */}
            <div className="flex justify-center">
              <Image
                src="/kudoutai-logo.png"
                alt="データ分析のイメージ"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-700">サービス内容</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                データ活用とDX推進で企業の成長をサポートします
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-blue-100 p-4">
                <Database className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-blue-700">事前予約システム構築</h3>
              <p className="text-center text-gray-500">
                顧客データを収集・活用できる予約システムを構築し、ビジネスの効率化を実現します。
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-blue-100 p-4">
                <MessageSquare className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-blue-700">LINE & AI活用</h3>
              <p className="text-center text-gray-500">
                LINEとAIを組み合わせた集客管理システムで、効率的な顧客コミュニケーションを実現します。
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-blue-100 p-4">
                <BarChart2 className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-blue-700">データ分析・活用</h3>
              <p className="text-center text-gray-500">
                独自のデータ収集方法による競争優位性を確立し、ビジネス成長を加速します。
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/services">
              <Button className="bg-blue-700 hover:bg-blue-800">
                すべてのサービスを見る <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-700">導入事例・実績</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                データ活用によって実現した成功事例をご紹介します
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-700">体育祭イベント</h3>
              <p className="mt-2 text-gray-500">QRチケットで来場者のデータを測定</p>
              <div className="mt-4">
                <Image
                  src="/taikusai-kudou3.JPG?height=200&width=400"
                  alt="ゑびや大食堂の事例"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
              <p className="mt-4 text-gray-600">
                データを活用した顧客分析と予約システムの導入により、効率的な運営と顧客満足度の向上を実現しました。
              </p>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-700">文化祭アンケートイベント</h3>
              <p className="mt-2 text-gray-500">保護者の満足度を測定</p>
              <div className="mt-4">
                <Image
                  src="/analyze-system.png?height=200&width=400"
                  alt="Event Xの事例"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
              <p className="mt-4 text-gray-600">
                QRチケットシステムの導入によるデータ取得と分析で、効果的なマーケティング戦略を実施し、来場者数の大幅増加を達成しました。
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/case-studies">
              <Button className="bg-blue-700 hover:bg-blue-800">
                すべての事例を見る <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Market Trends */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">市場トレンド</h2>
              <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                データ活用が企業成長に与える影響
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 rounded-lg bg-white/10 p-6">
              <div className="text-4xl font-bold text-white">3倍</div>
              <p className="text-center text-white/90">データ成熟度が高い組織は成功率が3倍上昇します</p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg bg-white/10 p-6">
              <div className="text-4xl font-bold text-white">23倍</div>
              <p className="text-center text-white/90">
                データを活用する企業は、非活用企業に比べて23倍の顧客獲得率を実現
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg bg-white/10 p-6">
              <div className="text-4xl font-bold text-white">19倍</div>
              <p className="text-center text-white/90">データ活用企業は19倍の収益性向上を達成</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-700">チーム紹介</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                データ活用とDX推進のプロフェッショナル
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image src="/ryoga-kudou.jpg?height=160&width=160" alt="酒井涼雅" fill className="object-cover" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-blue-700">酒井涼雅</h3>
                <p className="text-gray-500">代表</p>
                <p className="mt-2 text-sm text-gray-600">
                  兵庫県出身。アプリ甲子園2024 企業賞受賞。<br></br>東京大学寄附講座GCI
                  修了。高校生アプリアイデアコンテスト 優秀賞受賞。高校在学中に10個のソフトウェアを制作。神戸市発シリコンバレー起業家育成プログラム2期生。関西学院大学所属。
                </p>
              </div>
            </div>
            {/* <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image src="/placeholder.svg?height=160&width=160" alt="橋本壮平" fill className="object-cover" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-blue-700">橋本壮平</h3>
                <p className="text-gray-500">アドバイザー</p>
                <p className="mt-2 text-sm text-gray-600">
                  東京大学AI起業コミュニティMACC所属。MACCは約270名のメンバーが在籍し、70名以上が起業しています。
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-700">
                2025年問題を乗り越えるためのDX推進をサポートします
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                データを活用した経営改善と利益最大化を実現しませんか？
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
    </div>
  )
}
