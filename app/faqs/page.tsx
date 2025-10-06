"use client"

import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      category: "Orders & Payment",
      questions: [
        {
          q: "How do I place an order?",
          a: "Browse our products, click on the item you want, select size/quantity, and click 'Add to Cart'. Then go to your cart and proceed to checkout. Fill in your delivery details and choose your payment method to complete the order.",
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept Cash on Delivery (COD), mobile banking (bKash, Nagad, Rocket), credit/debit cards (Visa, Mastercard, AMEX), and bank transfers. Choose the most convenient option for you at checkout.",
        },
        {
          q: "Is Cash on Delivery available?",
          a: "Yes! Cash on Delivery is available for all orders across Bangladesh. You can pay in cash when your order is delivered to your doorstep.",
        },
        {
          q: "Can I cancel my order?",
          a: "Yes, you can cancel your order before it's shipped. Contact our customer service immediately at +880 1234-567890 or email support@nedd.com with your order number.",
        },
      ],
    },
    {
      category: "Shipping & Delivery",
      questions: [
        {
          q: "How long does delivery take?",
          a: "Standard delivery takes 3-5 business days nationwide. Express delivery (Dhaka only) takes 1-2 business days. Orders are processed within 24 hours on business days.",
        },
        {
          q: "Do you offer free shipping?",
          a: "Yes! We offer free standard delivery on all orders above ৳1000. For orders below ৳1000, standard delivery costs ৳60.",
        },
        {
          q: "How can I track my order?",
          a: "Once your order is shipped, you'll receive a tracking number via email and SMS. You can track your order on our Track Order page or contact customer service for updates.",
        },
        {
          q: "What if I'm not home during delivery?",
          a: "Our delivery partner will contact you before delivery. If you're not available, they'll attempt delivery again or you can arrange a convenient time for redelivery.",
        },
      ],
    },
    {
      category: "Returns & Exchange",
      questions: [
        {
          q: "What is your return policy?",
          a: "We offer a 7-day return policy from the date of delivery. Items must be unused, unworn, with original tags and packaging. Contact us to initiate a return.",
        },
        {
          q: "How do I return a product?",
          a: "Contact our customer service at +880 1234-567890 or support@nedd.com with your order details. Pack the item securely with tags and invoice, then ship it to our return address or schedule a free pickup.",
        },
        {
          q: "When will I get my refund?",
          a: "Once we receive and inspect your return, we'll process your refund within 5-7 business days. The refund will be credited to your original payment method.",
        },
        {
          q: "Can I exchange a product?",
          a: "Yes! You can exchange products for a different size or color within 7 days of delivery. Contact customer service to arrange an exchange.",
        },
      ],
    },
    {
      category: "Products & Sizing",
      questions: [
        {
          q: "Are your products authentic?",
          a: "Yes, all products sold on nedd.com are 100% authentic. We source directly from authorized distributors and verified brands.",
        },
        {
          q: "How do I choose the right size?",
          a: "Check our Size Guide page for detailed measurements. If you're between sizes or unsure, contact our customer service for personalized assistance.",
        },
        {
          q: "Do you restock sold-out items?",
          a: "We try to restock popular items as quickly as possible. You can contact us to inquire about specific products or sign up for restock notifications.",
        },
        {
          q: "Can I request a specific product?",
          a: "Yes! Use the Request button on any product page or contact us with your requirements. We'll do our best to fulfill your request.",
        },
      ],
    },
    {
      category: "Account & Security",
      questions: [
        {
          q: "Do I need an account to shop?",
          a: "No, you can shop as a guest. However, creating an account allows you to track orders, save addresses, and enjoy faster checkout.",
        },
        {
          q: "Is my payment information secure?",
          a: "We use SSL/TLS encryption and PCI DSS compliant payment processing. We never store your complete card details.",
        },
        {
          q: "How do I reset my password?",
          a: "Click on 'Forgot Password' on the login page, enter your email, and you'll receive a password reset link.",
        },
        {
          q: "Can I change my delivery address?",
          a: "Yes, you can change your delivery address before the order is shipped. Contact customer service immediately with your order number and new address.",
        },
      ],
    },
  ]

  return (
    <>
      <TopBar />
      <Header />

      <div className="min-h-screen bg-background">
        <div className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Frequently Asked Questions</h1>
            <p className="text-center text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Find answers to common questions about shopping at nedd.com
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((category, categoryIndex) => (
              <section key={categoryIndex}>
                <h2 className="text-3xl font-bold mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex
                    const isOpen = openIndex === globalIndex

                    return (
                      <div key={faqIndex} className="border rounded-lg overflow-hidden">
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                        >
                          <h3 className="font-semibold text-lg pr-4">{faq.q}</h3>
                          <ChevronDown
                            className={`h-5 w-5 flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </section>
            ))}

            <section className="bg-accent/10 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our customer service team is ready to help!
              </p>
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-sm text-muted-foreground">+880 1234-567890</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground">support@nedd.com</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">+880 1234-567890</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
