import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">お問い合わせ</h1>
              <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
                データ活用とDX推進についてのご相談・お問い合わせをお待ちしております
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="space-y-2 text-center lg:text-left">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-700">
                  お気軽にご連絡ください
                </h2>
                <p className="text-gray-500 md:text-lg">
                  データ活用やDX推進に関するご質問、ご相談など、お気軽にお問い合わせください。
                  専門スタッフが丁寧にお答えいたします。
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-700 mt-0.5" />
                  <div>
                    <h3 className="font-bold">所在地</h3>
                    <p className="text-gray-500">〒669-1337 兵庫県三田市学園4丁目2番</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-700 mt-0.5" />
                  <div>
                    <h3 className="font-bold">電話番号</h3>
                    <p className="text-gray-500">090-6665-6240</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-700 mt-0.5" />
                  <div>
                    <h3 className="font-bold">メールアドレス</h3>
                    <p className="text-gray-500">ryoga3or1@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2 text-center lg:text-left">
                <h3 className="text-xl font-bold text-blue-700">Google Formsでのお問い合わせ</h3>
                <p className="text-gray-500">以下のリンクからGoogle Formsでもお問い合わせいただけます。</p>
                <div>
                  <Link href="https://forms.gle/dQPQVtDJdAaCXBtS7" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-blue-700 hover:bg-blue-800">Google Formsで問い合わせる</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Map Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-700">アクセス</h2>
            </div>
          </div>

          <div className="mx-auto max-w-4xl mt-8 space-y-6">
            {/* 所在地情報 */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-700 mb-2">所在地</h3>
              <p className="text-gray-600">〒669-1337 兵庫県三田市学園4丁目2番</p>
              <p className="mt-4 text-sm text-gray-500">※ 地図は実際のウェブサイトでご確認いただけます</p>
            </div>

            {/* 埋め込みGoogleマップ */}
            <div className="rounded-lg overflow-hidden h-[400px] w-full shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.7552169720513!2d135.2083308152334!3d34.889044179566446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008a8bb52cf157%3A0xa916dc87b5a3c748!2z44CSNjY5LTEzMzcg5YWt5p2x55yM5bGx5Yy65aSn5bed55S677yR77yS4oiS77yR77yX!5e0!3m2!1sja!2sjp!4v1715581856789!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* 外部リンクボタン */}
            <div className="text-center">
              <a
                href="https://www.google.com/maps/place/兵庫県三田市学園4丁目2番"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-blue-700 px-4 py-2 text-white font-semibold hover:bg-blue-800 transition"
              >
                Googleマップで開く
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
