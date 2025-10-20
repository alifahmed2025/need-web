"use client";

import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  Share2,
  Truck,
  Shield,
  RotateCcw,
  FileText,
  CreditCard,
  Banknote,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { RequestModal } from "@/components/request-modal";
import { TopBar } from "@/components/top-bar";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CheckoutModal } from "@/components/checkout-modal";

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<any>(null);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [requestModalOpen, setRequestModalOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [imageScale, setImageScale] = useState(1);
  const [imagePosition, setImagePosition] = useState({ x: 50, y: 50 });

  // ✅ API থেকে পণ্য ফেচ করা
  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
        if (!res.ok) throw new Error("Product not found");
        const data = await res.json();
        setProduct(data);

        // একই category এর related product আনো
        const relatedRes = await fetch(`https://fakestoreapi.com/products/category/${data.category}`);
        const relatedData = await relatedRes.json();
        setRelatedProducts(relatedData.filter((p: any) => p.id !== data.id).slice(0, 6));
      } catch (error) {
        console.error(error);
      }
    }
    fetchProduct();
  }, [params.id]);

  if (!product) return <div className="p-10 text-center text-gray-500">Loading...</div>;

  // ✅ Add to Cart
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItem = cart.find((item: any) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleCashOnDelivery = () => {
    handleAddToCart();
    setCheckoutModalOpen(true);
  };

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in ${product.title} (৳${product.price})`;
    const whatsappUrl = `https://wa.me/8801234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: `Check out ${product.title} on our store`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setImagePosition({ x, y });
    setImageScale(2);
  };

  const handleMouseLeave = () => {
    setImageScale(1);
    setImagePosition({ x: 50, y: 50 });
  };

  const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");

  return (
    <>
      <TopBar />
      <Header />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-8 mt-6">
            {/* ---------- Product Image ---------- */}
            <div className="space-y-4">
              <div
                className="rounded-lg p-8 lg:p-12 border overflow-hidden cursor-zoom-in bg-white"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-auto object-contain max-h-[500px] transition-transform duration-200 ease-out"
                  style={{
                    transform: `scale(${imageScale})`,
                    transformOrigin: `${imagePosition.x}% ${imagePosition.y}%`,
                  }}
                />
              </div>
            </div>

            {/* ---------- Product Info ---------- */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm font-medium text-accent mb-2 capitalize">{product.category}</p>
                <h1 className="text-3xl lg:text-4xl font-bold mb-4">{product.title}</h1>
                <div className="flex items-baseline gap-3 mb-4">
                  <p className="text-4xl font-bold text-accent">৳{product.price}</p>
                  <p className="text-lg text-muted-foreground line-through">
                    ৳{Math.round(product.price * 1.3)}
                  </p>
                  <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-sm font-semibold">
                    23% OFF
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              {/* ---------- Quantity ---------- */}
              <div className="space-y-4 border-y py-6">
                <label className="text-sm font-semibold mb-2 block">Quantity</label>
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                    -
                  </Button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                    +
                  </Button>
                </div>
              </div>

              {/* ---------- Actions ---------- */}
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <Button size="lg" className="w-full" style={{ backgroundColor: "oklch(0.65 0.18 45)" }}>
                    <CreditCard className="mr-2 h-5 w-5" />
                    Pay Online
                  </Button>
                  <Button size="lg" variant="outline" onClick={handleCashOnDelivery}>
                    <Banknote className="mr-2 h-5 w-5" />
                    Cash on Delivery
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#20BA5A]" onClick={handleWhatsApp}>
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </Button>
                  <Button size="lg" onClick={handleAddToCart}>
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button size="lg" variant="outline" onClick={() => setRequestModalOpen(true)}>
                    <FileText className="mr-2 h-4 w-4" />
                    Request
                  </Button>
                  <Button size="lg" variant="outline" onClick={handleShare}>
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>

              {/* ---------- Info Icons ---------- */}
              <div className="grid grid-cols-3 gap-4 py-6 border-y">
                <div className="text-center">
                  <Truck className="h-6 w-6 mx-auto mb-2 text-accent" />
                  <p className="text-xs font-medium">Free Delivery</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="h-6 w-6 mx-auto mb-2 text-accent" />
                  <p className="text-xs font-medium">7 Days Return</p>
                </div>
                <div className="text-center">
                  <Shield className="h-6 w-6 mx-auto mb-2 text-accent" />
                  <p className="text-xs font-medium">Secure Payment</p>
                </div>
              </div>
            </div>
          </div>

          {/* ---------- Related Products ---------- */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Related Products</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                {relatedProducts.map((related) => (
                  <Card key={related.id} className="group hover:shadow-xl transition-shadow overflow-hidden">
                    <Link href={`/product/${related.id}`}>
                      <CardContent className="p-0">
                        <div className="aspect-square bg-white relative overflow-hidden">
                          <img
                            src={related.image || "/placeholder.svg"}
                            alt={related.title}
                            className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      </CardContent>
                      <CardFooter className="flex flex-col items-start p-3 gap-2">
                        <p className="text-xs text-muted-foreground capitalize">{related.category}</p>
                        <h3 className="font-semibold text-sm line-clamp-2">{related.title}</h3>
                        <p className="text-accent font-bold text-base mt-1">৳{related.price}</p>
                      </CardFooter>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />

      <RequestModal
        open={requestModalOpen}
        onOpenChange={setRequestModalOpen}
        prefilledProduct={{
          name: product.title,
          image: product.image,
          description: product.description,
        }}
      />

      <CheckoutModal open={checkoutModalOpen} onOpenChange={setCheckoutModalOpen} cartItems={cartItems} />
    </>
  );
}
