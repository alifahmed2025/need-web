import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Search, Package, CreditCard, Truck, RotateCcw, Shield } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function HelpPage() {
  return (
    <>
      <TopBar />
      <Header />

      <div className="min-h-screen bg-background">
        <div className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Help Center</h1>
            <p className="text-center text-primary-foreground/80 max-w-2xl mx-auto text-lg mb-8">
              How can we help you today?
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Search for help..." className="pl-12 h-14 text-lg bg-background text-foreground" />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Popular Topics</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <Link href="/track-order" className="border rounded-lg p-6 hover:shadow-lg transition-shadow group">
                <Package className="h-12 w-12 mb-4 text-accent group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">Track Your Order</h3>
                <p className="text-muted-foreground text-sm">Check the status of your order and delivery</p>
              </Link>

              <Link href="/returns" className="border rounded-lg p-6 hover:shadow-lg transition-shadow group">
                <RotateCcw className="h-12 w-12 mb-4 text-accent group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">Returns & Exchange</h3>
                <p className="text-muted-foreground text-sm">Learn about our return and exchange policy</p>
              </Link>

              <Link href="/payment-methods" className="border rounded-lg p-6 hover:shadow-lg transition-shadow group">
                <CreditCard className="h-12 w-12 mb-4 text-accent group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">Payment Methods</h3>
                <p className="text-muted-foreground text-sm">View available payment options</p>
              </Link>

              <Link href="/shipping" className="border rounded-lg p-6 hover:shadow-lg transition-shadow group">
                <Truck className="h-12 w-12 mb-4 text-accent group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">Shipping Information</h3>
                <p className="text-muted-foreground text-sm">Delivery times and shipping costs</p>
              </Link>

              <Link href="/size-guide" className="border rounded-lg p-6 hover:shadow-lg transition-shadow group">
                <Search className="h-12 w-12 mb-4 text-accent group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">Size Guide</h3>
                <p className="text-muted-foreground text-sm">Find the perfect fit for your purchase</p>
              </Link>

              <Link href="/faqs" className="border rounded-lg p-6 hover:shadow-lg transition-shadow group">
                <Shield className="h-12 w-12 mb-4 text-accent group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">FAQs</h3>
                <p className="text-muted-foreground text-sm">Frequently asked questions</p>
              </Link>
            </div>

            <div className="bg-accent/10 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
              <p className="text-muted-foreground mb-6">Our customer service team is available to assist you</p>
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div>
                  <h3 className="font-semibold mb-2">Phone Support</h3>
                  <p className="text-sm text-muted-foreground mb-2">+880 1234-567890</p>
                  <p className="text-xs text-muted-foreground">Sat-Thu: 9AM-9PM</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email Support</h3>
                  <p className="text-sm text-muted-foreground mb-2">support@nedd.com</p>
                  <p className="text-xs text-muted-foreground">24-hour response time</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground mb-2">+880 1234-567890</p>
                  <p className="text-xs text-muted-foreground">Quick responses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
