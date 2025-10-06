"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { X, Minus, Plus, ShoppingBag, Edit, Tag } from "lucide-react"
import { useState, useEffect } from "react"
import { CheckoutModal } from "@/components/checkout-modal"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

interface CartItem {
  id: number
  name: string
  brand: string
  price: number
  image: string
  quantity: number
  size?: string
  discount?: number
}

interface CartDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CartDrawer({ open, onOpenChange }: CartDrawerProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [showNoteInput, setShowNoteInput] = useState(false)
  const [note, setNote] = useState("")
  const [showCouponInput, setShowCouponInput] = useState(false)
  const [coupon, setCoupon] = useState("")
  const [discount, setDiscount] = useState(0)

  useEffect(() => {
    if (open) {
      loadCart()
    }
  }, [open])

  const loadCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    setCartItems(cart)
  }

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    const updatedCart = cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    setCartItems(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
    window.dispatchEvent(new Event("cartUpdated"))
  }

  const removeItem = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id)
    setCartItems(updatedCart)
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

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const finalTotal = total - discount

  return (
    <>
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="right" className="w-full sm:max-w-lg flex flex-col p-0">
          <SheetHeader className="px-6 py-4 border-b bg-muted/30">
            <SheetTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-accent" />
                <span className="text-xl font-bold">Shopping Cart</span>
              </div>
              <Button variant="ghost text-white" size="icon" onClick={() => onOpenChange(false)}>
                {/* <X className="h-5 w-5" /> */}
              </Button>
            </SheetTitle>
          </SheetHeader>

          {cartItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-12 px-6">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground mb-6 text-sm">Add some products to get started</p>
              <Button onClick={() => onOpenChange(false)} className="px-8">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="bg-card border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex gap-4">
                        <div className="w-24 h-24 bg-white rounded-lg border flex-shrink-0 overflow-hidden relative">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-full h-full object-contain p-2"
                          />
                          {item.discount && (
                            <span className="absolute top-1 left-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
                              {item.discount}% OFF
                            </span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between gap-2 mb-1">
                            <h4 className="font-semibold text-sm line-clamp-2">{item.name}</h4>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7 flex-shrink-0 hover:bg-destructive/10 hover:text-destructive"
                              onClick={() => removeItem(item.id)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                          <p className="text-xs text-muted-foreground mb-2">{item.brand}</p>
                          {item.size && (
                            <p className="text-xs text-muted-foreground mb-2">
                              Size: <span className="font-medium">{item.size}</span>
                            </p>
                          )}
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-7 w-7 hover:bg-background"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="text-sm font-semibold w-8 text-center">{item.quantity}</span>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-7 w-7 hover:bg-background"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            <p className="font-bold text-lg text-accent">৳{item.price * item.quantity}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() => setShowNoteInput(!showNoteInput)}
                  >
                    <Edit className="mr-2 h-4 w-4" />
                    Note
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() => setShowCouponInput(!showCouponInput)}
                  >
                    <Tag className="mr-2 h-4 w-4" />
                    Coupon
                  </Button>
                </div>

                {showNoteInput && (
                  <div className="mt-3">
                    <Textarea
                      placeholder="Add note for seller..."
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      className="min-h-[80px]"
                    />
                  </div>
                )}

                {showCouponInput && (
                  <div className="mt-3 flex gap-2">
                    <Input
                      placeholder="Enter coupon code"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      className="flex-1"
                    />
                    <Button onClick={applyCoupon}>Apply</Button>
                  </div>
                )}
              </div>

              <div className="border-t bg-muted/30 px-6 py-4 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">৳{total}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Discount</span>
                      <span className="font-medium text-green-600">-৳{discount}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center pt-2 border-t">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-2xl font-bold text-accent">৳{finalTotal}</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full text-base font-semibold py-6 bg-transparent"
                  size="lg"
                  asChild
                >
                  <Link href="/cart" onClick={() => onOpenChange(false)}>
                    View Full Cart
                  </Link>
                </Button>

                <Button
                  className="w-full text-base font-semibold py-6"
                  size="lg"
                  onClick={() => {
                    setCheckoutOpen(true)
                    onOpenChange(false)
                  }}
                >
                  ক্যাশ অন ডেলিভারিতে অর্ডার করুন
                </Button>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>

      <CheckoutModal open={checkoutOpen} onOpenChange={setCheckoutOpen} cartItems={cartItems} />
    </>
  )
}
