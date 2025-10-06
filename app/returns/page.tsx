import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RotateCcw, CheckCircle, XCircle, Clock } from "lucide-react"

export default function ReturnsPage() {
  return (
    <>
      <TopBar />
      <Header />

      <div className="min-h-screen bg-background">
        <div className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Returns & Exchange</h1>
            <p className="text-center text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Easy returns within 7 days of delivery
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-6">Return Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At nedd.com, we want you to be completely satisfied with your purchase. If you're not happy with your
                order, we offer a hassle-free return and exchange policy within 7 days of delivery.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="border rounded-lg p-6 text-center">
                  <Clock className="h-12 w-12 mx-auto mb-4 text-accent" />
                  <h3 className="font-semibold mb-2">7 Days Return</h3>
                  <p className="text-sm text-muted-foreground">Return within 7 days of delivery</p>
                </div>
                <div className="border rounded-lg p-6 text-center">
                  <RotateCcw className="h-12 w-12 mx-auto mb-4 text-accent" />
                  <h3 className="font-semibold mb-2">Easy Exchange</h3>
                  <p className="text-sm text-muted-foreground">Exchange for different size or color</p>
                </div>
                <div className="border rounded-lg p-6 text-center">
                  <CheckCircle className="h-12 w-12 mx-auto mb-4 text-accent" />
                  <h3 className="font-semibold mb-2">Full Refund</h3>
                  <p className="text-sm text-muted-foreground">Get your money back quickly</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Eligible Items</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Unused & Unworn</h3>
                    <p className="text-muted-foreground text-sm">
                      Items must be in original condition with all tags attached
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Original Packaging</h3>
                    <p className="text-muted-foreground text-sm">
                      Products should be returned in their original packaging
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">With Invoice</h3>
                    <p className="text-muted-foreground text-sm">Include the original invoice with your return</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Non-Returnable Items</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Intimate Apparel</h3>
                    <p className="text-muted-foreground text-sm">Underwear and intimate wear for hygiene reasons</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Personalized Items</h3>
                    <p className="text-muted-foreground text-sm">Custom-made or personalized products</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Sale Items</h3>
                    <p className="text-muted-foreground text-sm">Items purchased during clearance sales</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">How to Return</h2>
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Contact Us</h3>
                    <p className="text-muted-foreground text-sm">
                      Call our customer service at +880 1234-567890 or email support@nedd.com with your order details
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Pack Your Item</h3>
                    <p className="text-muted-foreground text-sm">
                      Securely pack the item in its original packaging with all tags and invoice
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Ship or Schedule Pickup</h3>
                    <p className="text-muted-foreground text-sm">
                      Ship the package to our return address or schedule a free pickup from your location
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Get Your Refund</h3>
                    <p className="text-muted-foreground text-sm">
                      Once we receive and inspect your return, we'll process your refund within 5-7 business days
                    </p>
                  </div>
                </li>
              </ol>
            </section>

            <section className="bg-accent/10 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about returns or exchanges, our customer service team is here to help.
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Phone:</strong> +880 1234-567890
                </p>
                <p>
                  <strong>Email:</strong> support@nedd.com
                </p>
                <p>
                  <strong>Hours:</strong> Saturday - Thursday, 9:00 AM - 9:00 PM
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
