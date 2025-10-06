import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Truck, Clock, MapPin, Package } from "lucide-react"

export default function ShippingPage() {
  return (
    <>
      <TopBar />
      <Header />

      <div className="min-h-screen bg-background">
        <div className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Shipping Information</h1>
            <p className="text-center text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Fast and reliable delivery across Bangladesh
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-6">Delivery Options</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Truck className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">Standard Delivery</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">Regular delivery service for all areas across Bangladesh</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>3-5 business days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Available nationwide</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Package className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>৳60 shipping fee</span>
                    </li>
                  </ul>
                </div>

                <div className="border rounded-lg p-6 border-accent">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Truck className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Express Delivery</h3>
                      <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded">Dhaka Only</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">Fast delivery within Dhaka city</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>1-2 business days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Dhaka city only</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Package className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>৳120 shipping fee</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-accent/10 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-center">Free Shipping</h2>
              <p className="text-center text-lg mb-2">
                <strong>Orders above ৳1000</strong> qualify for free standard delivery!
              </p>
              <p className="text-center text-muted-foreground text-sm">
                Applicable for standard delivery to all areas in Bangladesh
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Delivery Areas</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Inside Dhaka</h3>
                  <p className="text-muted-foreground mb-2">We deliver to all areas within Dhaka city including:</p>
                  <div className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <ul className="space-y-1">
                      <li>• Gulshan, Banani, Baridhara</li>
                      <li>• Dhanmondi, Mohammadpur</li>
                      <li>• Mirpur, Pallabi, Kafrul</li>
                      <li>• Uttara, Tongi</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• Motijheel, Paltan</li>
                      <li>• Badda, Rampura, Banasree</li>
                      <li>• Bashundhara, Baridhara DOHS</li>
                      <li>• And all other Dhaka areas</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Outside Dhaka</h3>
                  <p className="text-muted-foreground mb-2">We deliver to all districts across Bangladesh including:</p>
                  <div className="grid sm:grid-cols-3 gap-2 text-sm text-muted-foreground">
                    <ul className="space-y-1">
                      <li>• Chittagong</li>
                      <li>• Sylhet</li>
                      <li>• Rajshahi</li>
                      <li>• Khulna</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• Barisal</li>
                      <li>• Rangpur</li>
                      <li>• Mymensingh</li>
                      <li>• Comilla</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• Cox's Bazar</li>
                      <li>• Jessore</li>
                      <li>• Bogra</li>
                      <li>• All other districts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Order Processing</h2>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Order Confirmation</h3>
                    <p className="text-muted-foreground text-sm">
                      You'll receive an order confirmation email immediately after placing your order
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Processing</h3>
                    <p className="text-muted-foreground text-sm">
                      Orders are processed within 24 hours on business days
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Shipping</h3>
                    <p className="text-muted-foreground text-sm">
                      You'll receive a tracking number once your order is shipped
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Delivery</h3>
                    <p className="text-muted-foreground text-sm">
                      Our delivery partner will contact you before delivery
                    </p>
                  </div>
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Important Notes</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    Delivery times are estimates and may vary due to location, weather, or other unforeseen
                    circumstances
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Please ensure someone is available to receive the delivery at the provided address</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>For Cash on Delivery orders, please have the exact amount ready for the delivery person</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Orders placed on weekends or public holidays will be processed on the next business day</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>
                    If you're not available during delivery, our courier will attempt delivery again or contact you
                  </span>
                </li>
              </ul>
            </section>

            <section className="bg-muted/50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Track Your Order</h2>
              <p className="text-muted-foreground mb-4">
                Want to know where your package is? Use our order tracking system to get real-time updates on your
                delivery.
              </p>
              <a
                href="/track-order"
                className="inline-block bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Track Order
              </a>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
