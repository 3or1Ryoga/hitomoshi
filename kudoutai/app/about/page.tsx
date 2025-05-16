import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">組織概要</h1>
              <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
                KUDOUTAI-駆動体は、データを活用した経営改善と利益最大化を支援するDX推進の為の集団です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">
                組織理念・ミッション
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-700">
                デジタル技術を社会に還元すること
              </h2>
              <p className="text-gray-500 md:text-xl">
                私たちは「デジタル技術を社会に還元すること」をミッションとしています。データを活用した経営改善と利益最大化を支援し、2025年問題を乗り越えるためのDX推進をサポートします。
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/kudoutai-logo3.png?height=400&width=400"
                alt="ミッションのイメージ"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-700">組織情報</h2>
            </div>
          </div>
          <div className="mx-auto max-w-3xl mt-8">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <dl className="divide-y">
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">会社名</dt>
                  <dd className="text-gray-700 sm:col-span-2">KUDOUTAI</dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">所在地</dt>
                  <dd className="text-gray-700 sm:col-span-2">〒669-1337 兵庫県三田市学園4丁目2番</dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">設立日</dt>
                  <dd className="text-gray-700 sm:col-span-2">2025年5月11日</dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">代表者</dt>
                  <dd className="text-gray-700 sm:col-span-2">酒井涼雅</dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">電話番号</dt>
                  <dd className="text-gray-700 sm:col-span-2">090-6665-6240</dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">メールアドレス</dt>
                  <dd className="text-gray-700 sm:col-span-2">ryoga3or1@gmail.com</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-700">チーム紹介</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                データ活用とDX推進で社会への価値貢献をする為の集団
              </p>
            </div>
          </div>

          {/* CEO */}
          <div className="mx-auto max-w-4xl mt-12">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 items-center">
                <div className="flex justify-center">
                  <div className="relative h-48 w-48 overflow-hidden rounded-full">
                    <Image src="/ryoga-kudou.jpg?height=192&width=192" alt="酒井涼雅" fill className="object-cover" />
                  </div>
                </div>
                <div className="lg:col-span-2 space-y-4">
                  <h3 className="text-2xl font-bold text-blue-700">酒井涼雅</h3>
                  <p className="text-gray-500">代表</p>
                  <p className="text-gray-600">
                    兵庫県出身。アプリ甲子園2024 企業賞受賞。東京大学寄附講座GCI
                    修了。高校在学中に10個のソフトウェアを制作。関西学院大学所属。
                  </p>
                  <p className="text-gray-600">連絡先：090-6665-6240 / ryoga3or1@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-700">顧問・アドバイザー</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                
              </p>
            </div>
          </div>

          {/* アドバイザー */}
          
          <div className="mx-auto grid max-w-4xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image src="/placeholder.svg?height=160&width=160" alt="橋本壮平" fill className="object-cover" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-blue-700">-----</h3>
                  <p className="text-gray-500">アドバイザー</p>
                  <p className="mt-2 text-sm text-gray-600">
                    -----
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Advisors
      <div className="mx-auto grid max-w-4xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image src="/placeholder.svg?height=160&width=160" alt="橋本壮平" fill className="object-cover" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-blue-700">橋本壮平</h3>
                  <p className="text-gray-500">アドバイザー</p>
                  <p className="mt-2 text-sm text-gray-600">
                    ああああああああああ
                  </p>
                </div>
              </div>
            </div>
          </div> */}

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-700">
                私たちと一緒にDX推進を始めませんか？
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                データを活用した経営改善と利益最大化を共に実現しませんか
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
