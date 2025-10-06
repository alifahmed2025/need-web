"use client"

import type React from "react"

import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for contacting us! We will get back to you soon.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <>
      <TopBar />
      <Header />

     <div className="min-h-screen bg-background">
      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* ---------- LEFT SIDE (Contact Info) ---------- */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">যোগাযোগ করুন</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              কোনো প্রশ্ন থাকলে নিচের ফর্ম পূরণ করুন বা সরাসরি আমাদের সাথে যোগাযোগ করুন। আমরা ২৪ ঘন্টার মধ্যে উত্তর দেব।
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">ফোন</h3>
                  <p className="text-muted-foreground">+880 1234-567890</p>
                  <p className="text-muted-foreground">Hotline: 09678-123456</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">ইমেইল</h3>
                  <p className="text-muted-foreground">support@golamshop.com</p>
                  <p className="text-muted-foreground">info@golamshop.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">ঠিকানা</h3>
                  <p className="text-muted-foreground">Hatimkha, Lichubagan</p>
                  <p className="text-muted-foreground">Rajshahi, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">অফিস সময়</h3>
                  <p className="text-muted-foreground">শনিবার - বৃহস্পতিবার: সকাল ৯টা - রাত ৯টা</p>
                  <p className="text-muted-foreground">শুক্রবার: বিকাল ২টা - রাত ৯টা</p>
                </div>
              </div>
            </div>
          </div>

          {/* ---------- RIGHT SIDE (Contact Form + Map) ---------- */}
          <div className="bg-muted/50 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-primary">বার্তা পাঠান</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">নাম *</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="আপনার নাম লিখুন"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">ইমেইল *</label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="example@gmail.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">ফোন *</label>
                <Input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+880 1234-567890"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">বিষয় *</label>
                <Input
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="আপনার প্রশ্ন লিখুন"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">বার্তা *</label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="আপনার বার্তা লিখুন..."
                  rows={5}
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white">
                পাঠান
              </Button>
            </form>

            {/* ---------- Google Map ---------- */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.304848871505!2d88.60884167446585!3d24.374674278259665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbef4b0fd2f8a1%3A0x2a8f4eb88a875e5!2sLichubagan%2C%20Rajshahi!5e0!3m2!1sen!2sbd!4v1695467890000!5m2!1sen!2sbd"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

      <Footer />
    </>
  )
}
