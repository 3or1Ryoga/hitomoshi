import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FlameEffect } from "../components/Arrow"; // 相対パスは環境による

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div>
          <FlameEffect />
        </div>
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#FF4B3E]">HITOMOSHI</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#mission" className="text-sm font-medium hover:text-[#FF4B3E] transition-colors">
              ミッション
            </Link>
            <Link href="#organization" className="text-sm font-medium hover:text-[#FF4B3E] transition-colors">
              組織概要
            </Link>
            <Link href="#leadership" className="text-sm font-medium hover:text-[#FF4B3E] transition-colors">
              代表紹介
            </Link>
            <Link href="#awards" className="text-sm font-medium hover:text-[#FF4B3E] transition-colors">
              受賞・メディア露出
            </Link>
            <Link href="#trends" className="text-sm font-medium hover:text-[#FF4B3E] transition-colors">
              業界トレンド
            </Link>
            <Link href="#strengths" className="text-sm font-medium hover:text-[#FF4B3E] transition-colors">
              強み
            </Link>
            <Link href="#cases" className="text-sm font-medium hover:text-[#FF4B3E] transition-colors">
              事例
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-[#FF4B3E] transition-colors">
              お問い合わせ
            </Link>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-[#2C3E50]">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
          <div className="hidden md:block">
            <Button asChild className="bg-[#FF4B3E] hover:bg-[#e63e32] text-white">
              <Link href="#contact">お問い合わせ</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F8F8F0]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2 mb-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[#FF4B3E] mb-6">
                  HITOMOSHI
                </h1>
                <p className="text-xl md:text-2xl font-medium text-[#2C3E50]">
                  <span className="text-[#FF4B3E] text-3xl font-bold">ヒト</span>の
                  <span className="text-[#FF4B3E] text-3xl font-bold">モシ</span> <br /> のために <br />
                  <span className="text-[#FF4B3E] text-3xl font-bold">ヒ</span>を
                  <span className="text-[#FF4B3E] text-3xl font-bold">ト</span>
                  <span className="text-[#FF4B3E] text-3xl font-bold">モ</span>
                  <span className="text-[#FF4B3E] text-3xl font-bold">シ</span>
                </p>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  一歩踏み出して成長する人を応援し、関わった人の心を動かす企業
                </p>
              </div>

              <div className="space-x-4 mb-6">
                <Button asChild className="bg-[#FF4B3E] hover:bg-[#e63e32] text-white">
                  <Link href="#contact">
                    お問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2C3E50] mb-6">
                  ミッション
                </h2>
                <p className="text-[#FF4B3E] text-3xl font-bold">関わった人の心を動かす</p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <Card className="border-[#FF4B3E]/20 bg-[#F8F8F0]">
                  <CardHeader>
                    <CardTitle className="text-[#FF4B3E]">01</CardTitle>
                    <CardDescription className="text-lg font-medium text-[#2C3E50]">
                      一歩踏み出してもらう
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      LINEグループや食事会などの取り組みを通じて、学生が社会に一歩踏み出すきっかけを作ります。
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-[#FF4B3E]/20 bg-[#F8F8F0]">
                  <CardHeader>
                    <CardTitle className="text-[#FF4B3E]">02</CardTitle>
                    <CardDescription className="text-lg font-medium text-[#2C3E50]">
                      自信がついた、行動しよう
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      業務経験を通じた成長により、学生が自信を持ち、主体的に行動できるようサポートします。
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-[#FF4B3E]/20 bg-[#F8F8F0]">
                  <CardHeader>
                    <CardTitle className="text-[#FF4B3E]">03</CardTitle>
                    <CardDescription className="text-lg font-medium text-[#2C3E50]">社会と関わる</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      若年層に企業とコミュニケーションする機会を提供し、社会との関わりを深める場を創出します。
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Organization Overview Section */}
        <section id="organization" className="w-full py-12 md:py-24 lg:py-32 bg-[#F8F8F0]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2C3E50]">組織概要</h2>
              </div>
              <div className="mx-auto max-w-3xl space-y-8">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex flex-col items-center md:items-end">
                    <p className="text-sm font-medium text-[#FF4B3E]">所在地</p>
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <p className="text-muted-foreground">〒669-1337兵庫県三田市学園4丁目2番</p>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex flex-col items-center md:items-end">
                    <p className="text-sm font-medium text-[#FF4B3E]">設立日</p>
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <p className="text-muted-foreground">2025年5月13日</p>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex flex-col items-center md:items-end">
                    <p className="text-sm font-medium text-[#FF4B3E]">代表</p>
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <p className="text-muted-foreground">酒井涼雅</p>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex flex-col items-center md:items-end">
                    <p className="text-sm font-medium text-[#FF4B3E]">顧問・アドバイザー</p>
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <p className="text-muted-foreground">橋本壮平</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 max-w-3xl">
                <p className="text-lg font-medium text-[#2C3E50]">関西学院大学発スタートアップ</p>
                <p className="mt-4 text-muted-foreground">
                  HITOMOSHIは関西学院大学から生まれたスタートアップです。関西学院大学の学生の特性や活動を深く理解し、
                  学生と企業の架け橋となることで、双方にとって価値ある出会いを創出します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Profiles Section */}
        <section id="leadership" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2C3E50]">代表紹介</h2>
              </div>
              <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
                <Card className="border-[#FF4B3E]/20 bg-[#F8F8F0]">
                  <CardHeader className="flex flex-col items-center">
                    <div className="relative h-40 w-40 rounded-full overflow-hidden mb-4">
                      <Image src="/ryoga.jpg?height=160&width=160" alt="酒井涼雅" fill className="object-cover" />
                    </div>
                    <CardTitle className="text-[#FF4B3E]">酒井涼雅</CardTitle>
                    <CardDescription className="text-lg font-medium text-[#2C3E50]">代表</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground text-left">
                      <li>兵庫県出身</li>
                      <li>神戸市発シリコンバレー起業家育成渡米プログラム 2期生</li>
                      <li>高校の時に生徒会として、1000人の体育祭を主催</li>
                      <li>高校生最大規模のアプリ制作大会-アプリ甲子園2024 企業賞受賞</li>
                      <li>関西学院大学所属</li>
                    </ul>
                    <div className="mt-4 flex flex-col space-y-2 text-left">
                      <div className="flex items-center">
                        <Phone className="mr-2 h-4 w-4 text-[#FF4B3E]" />
                        <span className="text-sm">090-6665-6240</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="mr-2 h-4 w-4 text-[#FF4B3E]" />
                        <span className="text-sm">ryoga3or1@gmail.com</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-[#FF4B3E]/20 bg-[#F8F8F0]">
                  <CardHeader className="flex flex-col items-center">
                    <div className="relative h-40 w-40 rounded-full overflow-hidden mb-4">
                      <Image src="/hisataku.jpg?height=160&width=160" alt="久松拓哉" fill className="object-cover" />
                    </div>
                    <CardTitle className="text-[#FF4B3E]">久松拓哉</CardTitle>
                    <CardDescription className="text-lg font-medium text-[#2C3E50]">役職</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground text-left">
                      <li>福岡県北九州市出身</li>
                      <li>大学生活で実施した派手髪作戦にて自身の総SNSフォロワーを1000人以上獲得</li>
                      <li>年間50日規模の学部内ホームパーティー(懇親会)を主催</li>
                      <li>大学2年次に、短期アルバイト先の人手不足解消のため30人規模の人材派遣業務を企画提案</li>
                      <li>関西学院大学所属</li>
                    </ul>
                    <div className="mt-4 flex flex-col space-y-2 text-left">
                      <div className="flex items-center">
                        <Phone className="mr-2 h-4 w-4 text-[#FF4B3E]" />
                        <span className="text-sm">080-8560-5031</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="mr-2 h-4 w-4 text-[#FF4B3E]" />
                        <span className="text-sm">hisatakusong@gmail.com</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Media Section */}
        <section id="awards" className="w-full py-12 md:py-24 lg:py-32 bg-[#F8F8F0]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2C3E50]">
                  受賞・メディア露出
                </h2>
              </div>
              <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
              <Card className="border-[#FF4B3E]/20">
              <CardHeader>
                <CardTitle className="text-[#FF4B3E]">酒井涼雅</CardTitle>
                <div className="relative w-full h-40 sm:h-60 md:h-80 mb-4 overflow-hidden rounded-xl">
                  {/* <Image
                    src="/ryoga-media.jpg"
                    alt="酒井涼雅"
                    fill
                    className="object-cover"
                  /> */}
                  <Image
                    src="/woman.png"
                    alt="うーめん"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-muted-foreground text-left">
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex h-2 w-2 rounded-full bg-[#FF4B3E]" />
                    <div>
                      <p className="font-medium">アプリ甲子園での受賞</p>
                      <p className="text-sm">高校生最大規模のアプリ制作大会-アプリ甲子園2024にて企業賞を受賞</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex h-2 w-2 rounded-full bg-[#FF4B3E]" />
                    <div>
                      <p className="font-medium">ICT委員会の時の新聞出演</p>
                      <p className="text-sm">高校時代のICT委員会での活動が地元新聞に掲載</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

                <Card className="border-[#FF4B3E]/20">
                  <CardHeader>
                    <CardTitle className="text-[#FF4B3E]">久松拓哉</CardTitle>
                    
                    <div className="relative w-full h-40 sm:h-60 md:h-80 mb-4 overflow-hidden rounded-xl">
                      <Image
                        src="/hisataku-media.jpg"
                        alt="酒井涼雅"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4 text-muted-foreground text-left">
                      <li className="flex items-start">
                        <div className="mr-4 mt-1 flex h-2 w-2 rounded-full bg-[#FF4B3E]" />
                        <div>
                          <p className="font-medium">高校時代の部活動での実績</p>
                          <p className="text-sm">独自の勧誘戦略と永続的な仕組み作りにより部活動を活性化</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-4 mt-1 flex h-2 w-2 rounded-full bg-[#FF4B3E]" />
                        <div>
                          <p className="font-medium">学生団体代表としてのメディア露出</p>
                          <p className="text-sm">地域メディアへの出演と市を巻き込んだイベントを主催</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Trends Section */}
        <section id="trends" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2C3E50]">
                  業界トレンド
                </h2>
              </div>
              <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <div className="text-6xl font-bold text-[#FF4B3E]">34.9%</div>
                  </div>
                  <h3 className="text-xl font-bold text-[#2C3E50]">新卒3年以内離職率</h3>
                  <p className="text-muted-foreground">
                    新卒入社後3年以内に約34.9%、1年以内に約12.2%が離職しています。採用時のミスマッチを防ぐことが重要です。
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <div className="text-6xl font-bold text-[#FF4B3E]">20.7%</div>
                  </div>
                  <h3 className="text-xl font-bold text-[#2C3E50]">1・2年生のインターン参加割合</h3>
                  <p className="text-muted-foreground">
                    低学年からのインターンシップ参加は約20.7%にとどまっています。早期に学生と接点を持つことが重要です。
                  </p>
                </div>
              </div>
              <div className="mx-auto max-w-3xl space-y-4">
                <h3 className="text-xl font-bold text-[#2C3E50]">成功事例：「合同社長メシ」</h3>
                <p className="text-muted-foreground">
                  早期に学生と接点を持つことで、学生の成長過程を理解し、適切なタイミングで適切な人材を紹介することが可能になります。
                  データを活用した採用活動は、ミスマッチを防ぎ、長期的な人材確保につながります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Strengths Section */}
        <section id="strengths" className="w-full py-12 md:py-24 lg:py-32 bg-[#F8F8F0]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2C3E50]">
                  HITOMOSHIの強み
                </h2>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-[#FF4B3E]/20">
                  <CardHeader>
                    <CardTitle className="text-[#FF4B3E]">信頼関係</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      関西学院大学の学生からの厚い信頼を基盤に、学生と企業の架け橋となります。
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-[#FF4B3E]/20">
                  <CardHeader>
                    <CardTitle className="text-[#FF4B3E]">適切なマッチング</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      学生の特性と企業のニーズを深く理解し、最適な人材紹介を実現します。
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-[#FF4B3E]/20">
                  <CardHeader>
                    <CardTitle className="text-[#FF4B3E]">成長過程の理解</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      学生の成長過程を理解し、ポテンシャルのある人物との接点作りをサポートします。
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-[#FF4B3E]/20 md:col-span-2 lg:col-span-3">
                  <CardHeader>
                    <CardTitle className="text-[#FF4B3E]">将来性のあるハイパフォーマーとの架け橋</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      HITOMOSHIは、将来性のあるハイパフォーマーと企業を結ぶ架け橋として、双方にとって価値ある出会いを創出します。
                      早期から学生と接点を持ち、その成長を見守ることで、企業にとって最適なタイミングで最適な人材を紹介することが可能です。
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies/Client Testimonials Section */}
        <section id="cases" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2C3E50]">
                  事例/クライアントの声
                </h2>
              </div>
              <div className="mx-auto max-w-3xl space-y-8">
                <Card className="border-[#FF4B3E]/20 bg-[#F8F8F0]">
                  <CardHeader>
                    <CardTitle className="text-[#FF4B3E]">30人規模の人材紹介</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      久松拓哉が大学2年次に、短期アルバイト先の人手不足解消のため30人規模の人材派遣業務を企画提案しました。
                      企画書、合意書、個人情報資料の作成から企画提案まで一貫してサポートし、クライアントの課題解決に貢献しました。
                    </p>
                    <div className="mt-6 rounded-lg bg-white p-4">
                      <p className="italic text-muted-foreground">
                        「短期間で必要な人材を集めていただき、大変助かりました。学生の方々も意欲的で、期待以上の成果を上げてくれました。」
                      </p>
                      <p className="mt-2 text-right text-sm font-medium">- クライアント企業様</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-[#F8F8F0]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2C3E50]">
                  お問い合わせ
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  まずはご気軽にお問い合わせください。学生との交流時間と価値を最大化させる為のプランや事例をご紹介いたします。
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-[#FF4B3E]" />
                    <span className="text-lg font-medium">090-6665-6240</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-6 w-6 text-[#FF4B3E]" />
                    <span className="text-lg font-medium">ryoga3or1@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-[#FF4B3E]" />
                    <span className="text-lg font-medium">〒669-1337兵庫県三田市学園4丁目2番</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <Button asChild className="w-full bg-[#FF4B3E] hover:bg-[#e63e32] text-white">
                    <Link href="https://forms.gle/C5yVB5CYzHVmP2k36" target="_blank">
                      お問い合わせフォームへ
                    </Link>
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    お問い合わせフォームからのご連絡も受け付けております。 24時間以内に担当者からご連絡いたします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-[#2C3E50] py-6 text-white">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose md:text-left">
              &copy; {new Date().getFullYear()} HITOMOSHI All rights reserved.
            </p>
            
          </div>
          <div className="flex flex-col space-y-2 text-center text-sm md:text-right">
            <p>〒669-1337兵庫県三田市学園4丁目2番</p>
            <p>代表: 酒井涼雅</p>
            <p>Tel: 090-6665-6240 | Email: ryoga3or1@gmail.com</p>
            
          </div>
        </div>
      </footer>
    </div>
  )
}
