import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">よくある質問</h1>
              <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
                データ活用とDX推進に関するよくある質問にお答えします
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg font-medium">
                  データ活用とは具体的に何をすることですか？
                </AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  データ活用とは、ビジネスから得られる様々なデータ（顧客情報、購買履歴、行動パターンなど）を収集・分析し、
                  経営判断や業務改善、マーケティング戦略などに活かすことです。当社では、データの収集方法から分析、
                  活用方法までトータルでサポートし、ビジネスの成長を支援します。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg font-medium">2025年問題とは何ですか？</AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  2025年問題とは、日本企業のレガシーシステムの老朽化や、デジタル人材の不足、DX（デジタルトランスフォーメーション）の
                  遅れなどが2025年頃に深刻化し、年間最大12兆円の経済損失が生じる可能性があるという課題です。
                  当社では、DX推進とデータ活用によって、この問題を乗り越えるためのサポートを提供しています。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg font-medium">
                  サービス導入にはどのくらいの期間がかかりますか？
                </AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  サービスの種類や規模によって異なりますが、一般的な事前予約システムやLINE活用の場合、
                  約1〜2ヶ月程度で導入が可能です。QRチケットシステムや大規模なデータ分析基盤の構築は、
                  2〜3ヶ月程度かかる場合があります。具体的な期間については、無料相談の際に詳しくご案内いたします。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg font-medium">
                  小規模な事業でもデータ活用は可能ですか？
                </AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  はい、可能です。むしろ小規模事業こそ、限られたリソースを最大限に活用するためにデータ活用が重要です。
                  当社では、事業規模に合わせた最適なデータ活用方法をご提案し、コストパフォーマンスの高いソリューションを
                  ご提供しています。小規模事業向けのパッケージプランもございますので、お気軽にご相談ください。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-lg font-medium">
                  データ活用によってどのような効果が期待できますか？
                </AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  データ活用によって、以下のような効果が期待できます：
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>顧客理解の深化による顧客満足度の向上</li>
                    <li>業務効率化によるコスト削減</li>
                    <li>データに基づいた意思決定による経営リスクの低減</li>
                    <li>パーソナライズされたマーケティングによる売上向上</li>
                    <li>リピート率の向上と顧客生涯価値の最大化</li>
                  </ul>
                  実際の導入事例では、利益率10倍、売上4.8倍などの成果を上げています。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left text-lg font-medium">
                  導入費用はどのくらいかかりますか？
                </AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  サービスの種類や規模によって異なりますが、基本的なプランは月額5万円からご用意しています。
                  初期導入費用と月額運用費用に分かれており、具体的な費用については、ビジネスの規模や
                  ニーズに合わせてカスタマイズしたお見積りをご提供いたします。無料相談の際に、
                  予算に合わせた最適なプランをご提案いたします。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left text-lg font-medium">
                  データのセキュリティは大丈夫ですか？
                </AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  はい、当社では顧客データのセキュリティを最優先事項として取り組んでいます。
                  業界標準のセキュリティプロトコルを採用し、データの暗号化、アクセス制限、
                  定期的なセキュリティ監査を実施しています。また、個人情報保護法に完全準拠した
                  システム設計を行い、お客様の大切なデータを安全に管理いたします。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left text-lg font-medium">
                  導入後のサポート体制はどうなっていますか？
                </AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  導入後も安心してご利用いただけるよう、充実したサポート体制を整えています。
                  平日9:00〜18:00のサポートデスク対応、月次の運用レポート提供、
                  定期的な改善提案ミーティングなどを通じて、継続的な価値提供を行っています。
                  また、緊急時の対応体制も整えており、システムトラブル発生時には迅速に対応いたします。
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-700">
                他にご質問がありますか？
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                お気軽にお問い合わせください。専門スタッフが丁寧にお答えします。
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Link href="/contact">
                <Button className="w-full bg-blue-700 hover:bg-blue-800" size="lg">
                  お問い合わせする <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
