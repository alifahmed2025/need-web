"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Trash2, Plus, Minus, ShoppingBag, CreditCard, Banknote, Edit, Tag } from "lucide-react"
import Link from "next/link"
import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckoutModal } from "@/components/checkout-modal"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([])
  const [paymentMethod, setPaymentMethod] = useState("cash-on-delivery")
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [showNoteInput, setShowNoteInput] = useState(false)
  const [note, setNote] = useState("")
  const [showCouponInput, setShowCouponInput] = useState(false)
  const [coupon, setCoupon] = useState("")
  const [discount, setDiscount] = useState(0)
  // </CHANGE>

  useEffect(() => {
    loadCart()
    window.addEventListener("cartUpdated", loadCart)
    return () => window.removeEventListener("cartUpdated", loadCart)
  }, [])

  const loadCart = () => {
    const cartData = JSON.parse(localStorage.getItem("cart") || "[]")
    setCart(cartData)
  }

  const updateQuantity = (id: number, change: number) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change)
        return { ...item, quantity: newQuantity }
      }
      return item
    })
    setCart(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
    window.dispatchEvent(new Event("cartUpdated"))
  }

  const removeItem = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id)
    setCart(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
    window.dispatchEvent(new Event("cartUpdated"))
  }

  const applyCoupon = () => {
    if (coupon.toUpperCase() === "SAVE10") {
      setDiscount(total * 0.1)
      alert("Coupon applied! 10% discount")
    } else {
      alert("Invalid coupon code")
      setDiscount(0)
    }
  }
  // </CHANGE>

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shippingCost = total > 1000 ? 0 : 60
  const finalTotal = total + shippingCost - discount

  const handleCheckout = () => {
    if (paymentMethod === "cash-on-delivery") {
      setCheckoutOpen(true)
    } else {
      alert("Redirecting to payment gateway...")
    }
  }

  if (cart.length === 0) {
    return (
      <>
        <TopBar />
        <Header />
        <div className="min-h-screen bg-background">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-md mx-auto text-center">
              <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="h-16 w-16 text-muted-foreground" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
              <p className="text-muted-foreground mb-8">Add some products to get started!</p>
              <Button asChild size="lg" className="px-8">
                <Link href="/">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <TopBar />
      <Header />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Shopping Cart</h1>
            <p className="text-muted-foreground">
              {cart.length} {cart.length === 1 ? "item" : "items"}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex gap-6">
                    <div className="w-32 h-32 bg-white rounded-lg border flex-shrink-0 overflow-hidden relative">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-contain p-2"
                      />
                      {item.discount && (
                        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                          {item.discount}% OFF
                        </span>
                      )}
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between gap-4 mb-2">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{item.brand}</p>
                          {item.size && (
                            <p className="text-sm text-muted-foreground">
                              Size: <span className="font-medium">{item.size}</span>
                            </p>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-destructive/10 hover:text-destructive"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between mt-auto pt-4">
                        <div className="flex items-center gap-3 bg-muted rounded-lg p-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-9 w-9 hover:bg-background"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="text-base font-semibold w-10 text-center">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-9 w-9 hover:bg-background"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Price</p>
                          <p className="font-bold text-2xl text-accent">৳{item.price * item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Note and Coupon buttons */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => setShowNoteInput(!showNoteInput)}
                >
                  <Edit className="mr-2 h-4 w-4" />
                  Add Note for Seller
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => setShowCouponInput(!showCouponInput)}
                >
                  <Tag className="mr-2 h-4 w-4" />
                  Apply Coupon
                </Button>
              </div>

              {showNoteInput && (
                <div className="bg-card border rounded-lg p-4">
                  <Label className="mb-2 block">Note for Seller</Label>
                  <Textarea
                    placeholder="Add any special instructions..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>
              )}

              {showCouponInput && (
                <div className="bg-card border rounded-lg p-4">
                  <Label className="mb-2 block">Coupon Code</Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter coupon code (try SAVE10)"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      className="flex-1"
                    />
                    <Button onClick={applyCoupon}>Apply</Button>
                  </div>
                </div>
              )}
            </div>
            {/* </CHANGE> */}

            <div className="lg:col-span-1">
              <div className="bg-card border rounded-lg p-6 sticky top-24 space-y-6">
                <h2 className="text-2xl font-bold">Order Summary</h2>

                <div className="space-y-3 pb-6 border-b">
                  <div className="flex justify-between text-base">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">৳{total}</span>
                  </div>
                  <div className="flex justify-between text-base">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-semibold text-green-600">
                      {shippingCost === 0 ? "Free" : `৳${shippingCost}`}
                    </span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-base">
                      <span className="text-muted-foreground">Discount</span>
                      <span className="font-semibold text-green-600">-৳{discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-xl pt-3 border-t">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-accent">৳{finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Payment Method</h3>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-3 border-2 rounded-lg p-4 cursor-pointer hover:bg-accent/5 hover:border-accent transition-colors">
                      <RadioGroupItem value="pay-online" id="pay-online" />
                      <Label htmlFor="pay-online" className="flex items-center gap-3 cursor-pointer flex-1">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                          <CreditCard className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold">Pay Online</p>
                          <p className="text-xs text-muted-foreground">Card, Mobile Banking</p>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 border-2 rounded-lg p-4 cursor-pointer hover:bg-accent/5 hover:border-accent transition-colors">
                      <RadioGroupItem value="cash-on-delivery" id="cash-on-delivery" />
                      <Label htmlFor="cash-on-delivery" className="flex items-center gap-3 cursor-pointer flex-1">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                          <Banknote className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold">Cash on Delivery</p>
                          <p className="text-xs text-muted-foreground">Pay when you receive</p>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button className="w-full text-base font-semibold py-6" size="lg" onClick={handleCheckout}>
                  {paymentMethod === "pay-online" ? "Proceed to Payment" : "ক্যাশ অন ডেলিভারিতে অর্ডার করুন"}
                </Button>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/">Continue Shopping</Link>
                </Button>
              </div>
            </div>
            {/* </CHANGE> */}
          </div>
        </div>
      </div>
      <Footer />

      <CheckoutModal open={checkoutOpen} onOpenChange={setCheckoutOpen} cartItems={cart} />
    </>
  )
}
