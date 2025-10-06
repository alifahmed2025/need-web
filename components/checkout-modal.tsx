"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Plus, CreditCard } from "lucide-react"

interface CartItem {
  id: number
  name: string
  brand: string
  price: number
  image: string
  quantity: number
}

interface CheckoutModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  cartItems: CartItem[]
}

export function CheckoutModal({ open, onOpenChange, cartItems }: CheckoutModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    shippingMethod: "dhaka-city",
    couponCode: "",
    orderNote: "",
  })

  const shippingCosts = {
    "dhaka-city": 70,
    "chittagong-city": 70,
    "outside-city": 130,
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const deliveryCharge = shippingCosts[formData.shippingMethod as keyof typeof shippingCosts]
  const total = subtotal + deliveryCharge

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle order confirmation
    alert("আপনার অর্ডারটি সফলভাবে সম্পন্ন হয়েছে!")
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">অর্ডার সম্পন্ন করুন</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Customer Information */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-base">
                আপনার নাম <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                placeholder="আপনার নাম"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-base">
                ফোন নাম্বার <span className="text-destructive">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="ফোন নাম্বার"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="address" className="text-base">
                এড্রেস <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="address"
                placeholder="এড্রেস"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required
                className="mt-1"
                rows={3}
              />
            </div>
          </div>

          {/* Shipping Method */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">শিপিং মেথড</Label>
            <RadioGroup
              value={formData.shippingMethod}
              onValueChange={(value) => setFormData({ ...formData, shippingMethod: value })}
            >
              <div className="flex items-center justify-between border rounded-lg p-3 hover:bg-accent/5">
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="dhaka-city" id="dhaka-city" />
                  <Label htmlFor="dhaka-city" className="cursor-pointer font-normal">
                    ঢাকা সিটির ভিতরে
                  </Label>
                </div>
                <span className="font-semibold text-accent">Tk 70.00</span>
              </div>
              <div className="flex items-center justify-between border rounded-lg p-3 hover:bg-accent/5">
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="chittagong-city" id="chittagong-city" />
                  <Label htmlFor="chittagong-city" className="cursor-pointer font-normal">
                    চট্টগ্রাম সিটির ভিতরে
                  </Label>
                </div>
                <span className="font-semibold text-accent">Tk 70.00</span>
              </div>
              <div className="flex items-center justify-between border rounded-lg p-3 hover:bg-accent/5">
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="outside-city" id="outside-city" />
                  <Label htmlFor="outside-city" className="cursor-pointer font-normal">
                    ঢাকা এবং চট্টগ্রাম সিটির বাহিরে
                  </Label>
                </div>
                <span className="font-semibold text-accent">Tk 130.00</span>
              </div>
            </RadioGroup>
          </div>

          {/* Coupon Code */}
          <div className="space-y-2">
            <Label htmlFor="coupon" className="text-base font-semibold">
              কুপন কোড
            </Label>
            <div className="flex gap-2">
              <Input
                id="coupon"
                placeholder="কুপন কোড"
                value={formData.couponCode}
                onChange={(e) => setFormData({ ...formData, couponCode: e.target.value })}
              />
              <Button type="button" variant="outline" className="bg-transparent">
                এপ্লাই
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="border rounded-lg p-4 space-y-3 bg-muted/30">
            <h3 className="font-semibold text-lg">অর্ডার সামারি</h3>
            <div className="space-y-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-3 py-2 border-b last:border-0">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-12 h-12 object-contain bg-white rounded"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.quantity} × Tk {item.price}
                    </p>
                  </div>
                  <p className="font-semibold text-accent">Tk {item.price * item.quantity}</p>
                </div>
              ))}
            </div>
            <div className="space-y-2 pt-3 border-t">
              <div className="flex justify-between">
                <span className="text-muted-foreground">সাব টোটাল</span>
                <span className="font-semibold">Tk {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">ডেলিভারি চার্জ</span>
                <span className="font-semibold">Tk {deliveryCharge.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2 border-t">
                <span>সর্বমোট</span>
                <span className="text-accent">Tk {total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Order Note */}
          <div className="space-y-2">
            <Label htmlFor="note" className="text-base">
              Order note
            </Label>
            <Textarea
              id="note"
              placeholder="Order note"
              value={formData.orderNote}
              onChange={(e) => setFormData({ ...formData, orderNote: e.target.value })}
              rows={3}
            />
          </div>

          {/* Upsell Product */}
          <div className="border-2 border-accent/30 rounded-lg p-4 bg-accent/5">
            <div className="flex items-center gap-3">
              <Plus className="h-5 w-5 text-accent flex-shrink-0" />
              <div className="flex-1">
                <p className="font-semibold">Add ২৫০ গ্রাম সুন্দরবনের মধু for just Tk 625.00</p>
                <p className="text-sm text-muted-foreground">একই ডেলিভারি চার্জে পেয়ে যাচ্ছেন</p>
              </div>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="space-y-3">
            <Button type="submit" className="w-full" size="lg">
              আপনার অর্ডার কনফার্ম করতে ক্লিক করুন
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              উপরের বাটনে ক্লিক করলে আপনার অর্ডারটি সাথে সাথে কনফার্ম হয়ে যাবে !
            </p>
            <Button type="button" variant="outline" className="w-full bg-transparent" size="lg">
              <CreditCard className="mr-2 h-5 w-5" />
              Pay Online
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
