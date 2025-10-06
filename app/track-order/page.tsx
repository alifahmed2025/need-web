"use client"

import type React from "react"

import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Package, Truck, CheckCircle, MapPin } from "lucide-react"
import { useState } from "react"

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("")
  const [tracking, setTracking] = useState(false)

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    setTracking(true)
  }

  return (
    <>
      {/* <TopBar />
      <Header />

      <div className="min-h-screen bg-background">
        <div className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Track Your Order</h1>
            <p className="text-center text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Enter your order ID to track your shipment
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleTrack} className="bg-muted/50 p-8 rounded-lg mb-12">
              <label className="text-sm font-medium mb-2 block">Order ID</label>
              <div className="flex gap-3">
                <Input
                  required
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="Enter your order ID (e.g., NEDD123456)"
                  className="flex-1"
                />
                <Button type="submit" size="lg">
                  Track Order
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                You can find your order ID in the confirmation email we sent you.
              </p>
            </form>

            {tracking && (
              <div className="space-y-8">
                <div className="bg-accent/10 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold mb-2">Order #{orderId || "NEDD123456"}</h2>
                  <p className="text-muted-foreground">Estimated delivery: 3-5 business days</p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="bg-accent text-accent-foreground rounded-full p-3">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <div className="w-0.5 h-16 bg-accent mt-2" />
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="font-semibold text-lg mb-1">Order Confirmed</h3>
                      <p className="text-muted-foreground text-sm">Your order has been received and confirmed</p>
                      <p className="text-xs text-muted-foreground mt-1">Jan 5, 2025 - 10:30 AM</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="bg-accent text-accent-foreground rounded-full p-3">
                        <Package className="h-6 w-6" />
                      </div>
                      <div className="w-0.5 h-16 bg-accent mt-2" />
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="font-semibold text-lg mb-1">Processing</h3>
                      <p className="text-muted-foreground text-sm">Your order is being prepared for shipment</p>
                      <p className="text-xs text-muted-foreground mt-1">Jan 5, 2025 - 2:15 PM</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="bg-accent text-accent-foreground rounded-full p-3">
                        <Truck className="h-6 w-6" />
                      </div>
                      <div className="w-0.5 h-16 bg-muted mt-2" />
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="font-semibold text-lg mb-1">Out for Delivery</h3>
                      <p className="text-muted-foreground text-sm">Your package is on the way</p>
                      <p className="text-xs text-muted-foreground mt-1">Pending</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="bg-muted text-muted-foreground rounded-full p-3">
                        <MapPin className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="font-semibold text-lg mb-1">Delivered</h3>
                      <p className="text-muted-foreground text-sm">Package delivered successfully</p>
                      <p className="text-xs text-muted-foreground mt-1">Pending</p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-4">Need Help?</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    If you have any questions about your order, please contact our customer support team.
                  </p>
                  <Button variant="outline">Contact Support</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer /> */}
    </>
  )
}
