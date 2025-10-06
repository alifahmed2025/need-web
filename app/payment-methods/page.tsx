import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CreditCard, Smartphone, Building, Banknote } from "lucide-react"

export default function PaymentMethodsPage() {
  return (
    <>
      <TopBar />
      <Header />

      <div className="min-h-screen bg-background">
        <div className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Payment Methods</h1>
            <p className="text-center text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              We offer multiple secure payment options for your convenience
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Banknote className="h-8 w-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">Cash on Delivery (COD)</h2>
                  <p className="text-muted-foreground mb-4">
                    Pay with cash when your order is delivered to your doorstep. This is our most popular payment
                    method.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>Available for all orders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>No advance payment required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>Inspect product before payment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Smartphone className="h-8 w-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">Mobile Banking</h2>
                  <p className="text-muted-foreground mb-4">
                    Pay instantly using your mobile banking app. Fast, secure, and convenient.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 mb-4">
                    <div className="border rounded p-4 text-center">
                      <div className="font-bold text-lg mb-1">bKash</div>
                      <p className="text-xs text-muted-foreground">Most popular</p>
                    </div>
                    <div className="border rounded p-4 text-center">
                      <div className="font-bold text-lg mb-1">Nagad</div>
                      <p className="text-xs text-muted-foreground">Fast & secure</p>
                    </div>
                    <div className="border rounded p-4 text-center">
                      <div className="font-bold text-lg mb-1">Rocket</div>
                      <p className="text-xs text-muted-foreground">Reliable</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>Instant payment confirmation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>No additional charges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>Secure transactions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <CreditCard className="h-8 w-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">Credit/Debit Cards</h2>
                  <p className="text-muted-foreground mb-4">
                    Pay securely with your Visa, Mastercard, or American Express card.
                  </p>
                  <div className="flex gap-4 mb-4">
                    <div className="border rounded px-4 py-2 text-sm font-semibold">VISA</div>
                    <div className="border rounded px-4 py-2 text-sm font-semibold">Mastercard</div>
                    <div className="border rounded px-4 py-2 text-sm font-semibold">AMEX</div>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>SSL encrypted payment gateway</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>International cards accepted</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>Instant order confirmation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Building className="h-8 w-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">Bank Transfer</h2>
                  <p className="text-muted-foreground mb-4">
                    Transfer payment directly from your bank account to ours.
                  </p>
                  <div className="bg-muted/50 p-4 rounded mb-4">
                    <p className="text-sm font-semibold mb-2">Bank Details:</p>
                    <p className="text-sm text-muted-foreground">Bank: Dutch Bangla Bank Limited</p>
                    <p className="text-sm text-muted-foreground">Account Name: nedd.com</p>
                    <p className="text-sm text-muted-foreground">Account Number: 1234567890</p>
                    <p className="text-sm text-muted-foreground">Branch: Banani, Dhaka</p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>Send payment receipt to support@nedd.com</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>Order processed after payment verification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>Verification within 24 hours</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Payment Security</h2>
              <p className="text-muted-foreground mb-4">
                Your payment information is always secure with us. We use industry-standard encryption and security
                measures to protect your data.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>SSL/TLS encryption for all transactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>PCI DSS compliant payment processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>We never store your complete card details</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Fraud detection and prevention systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
