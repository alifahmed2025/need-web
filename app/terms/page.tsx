import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <>
      <TopBar />
      <Header />

      <div className="min-h-screen bg-background">
        <div className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Terms & Conditions</h1>
            <p className="text-center text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Last updated: January 5, 2025
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using nedd.com, you accept and agree to be bound by the terms and provisions of this
                agreement. If you do not agree to these terms, please do not use our website or services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Use of Our Website</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You agree to use our website only for:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Lawful purposes and in accordance with these Terms</li>
                <li>Personal, non-commercial use</li>
                <li>Browsing and purchasing products</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">You agree NOT to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Use the website in any way that violates any applicable law or regulation</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use of the website</li>
                <li>Attempt to gain unauthorized access to any portion of the website</li>
                <li>Use any automated system to access the website</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Product Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant that
                product descriptions, images, pricing, or other content on our website is accurate, complete, reliable,
                current, or error-free. We reserve the right to correct any errors, inaccuracies, or omissions and to
                change or update information at any time without prior notice.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Orders and Pricing</h2>
              <h3 className="text-xl font-semibold mb-3">Order Acceptance</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any
                order for any reason, including but not limited to product availability, errors in pricing or product
                information, or suspected fraudulent activity.
              </p>

              <h3 className="text-xl font-semibold mb-3">Pricing</h3>
              <p className="text-muted-foreground leading-relaxed">
                All prices are listed in Bangladeshi Taka (BDT) and are subject to change without notice. We reserve the
                right to modify prices at any time. The price charged for a product will be the price in effect at the
                time the order is placed.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Payment</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We accept the following payment methods:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Cash on Delivery (COD)</li>
                <li>Credit/Debit Cards</li>
                <li>Mobile Banking (bKash, Nagad, Rocket)</li>
                <li>Bank Transfer</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Payment must be received in full before we dispatch your order. By providing payment information, you
                represent and warrant that you are authorized to use the payment method.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Shipping and Delivery</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We ship to addresses within Bangladesh. Delivery times are estimates and not guaranteed. We are not
                responsible for delays caused by:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Incorrect shipping information provided by the customer</li>
                <li>Weather conditions or natural disasters</li>
                <li>Customs delays</li>
                <li>Carrier delays</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Returns and Refunds</h2>
              <p className="text-muted-foreground leading-relaxed">
                Please refer to our Returns & Exchange policy for detailed information about returns, exchanges, and
                refunds. By making a purchase, you agree to our return policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, is the property of
                nedd.com or its content suppliers and is protected by intellectual property laws. You may not reproduce,
                distribute, modify, or create derivative works from any content without our express written permission.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, nedd.com shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred
                directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from
                your use of our website or services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of Bangladesh. Any disputes
                arising from these Terms or your use of our website shall be subject to the exclusive jurisdiction of
                the courts of Bangladesh.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the
                new Terms on this page and updating the "Last updated" date. Your continued use of the website after any
                changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            <section className="bg-accent/10 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms & Conditions, please contact us:
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Email:</strong> legal@nedd.com
                </p>
                <p>
                  <strong>Phone:</strong> +880 1234-567890
                </p>
                <p>
                  <strong>Address:</strong> House 123, Road 12, Block C, Banani, Dhaka 1213, Bangladesh
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
