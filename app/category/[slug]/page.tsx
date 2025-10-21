"use client"

import type React from "react"
import { useState } from "react"
import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
// ✅ নতুন ইমপোর্ট: products ডেটা আনার জন্য কাস্টম হুক ব্যবহার করা হলো
import { useProductsData } from "@/components/productData" // নিশ্চিত করুন সঠিক পাথ দিয়েছেন
import { ProductFilters, type FilterState } from "@/components/product-filters"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart } from "lucide-react"
import Link from "next/link"

export default function CategoryPage({ params }: { params: { slug: string } }) {
    // ✅ ডেটা এবং লোডিং স্টেট হুক থেকে নেওয়া হলো
    const { products, loading } = useProductsData()

    const [filters, setFilters] = useState<FilterState>({
        collections: [],
        availability: [],
        priceRange: [0, 5000],
    })

    const categoryName = params.slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

    // ✅ এখানে products চেক করার দরকার নেই, কারণ useProductsData() সবসময় একটি অ্যারে (খালি হলেও) রিটার্ন করে।
    // তবে একটি অতিরিক্ত নিরাপত্তা চেক রাখা হলো (products || [])
    const categoryProducts = (products || []).filter((p) => {
        // Fakestore API category lowercase এ রিটার্ন করে, তাই .toLowerCase() ব্যবহার করা হলো।
        const matchesCategory = p.category?.toLowerCase().replace(/\s+/g, "-") === params.slug
        const matchesCollection = filters.collections.length === 0 || filters.collections.includes(p.category)
        const matchesPrice = p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
        // p.inStock প্রপার্টিটি Fakestore API-এ নেই, ধরে নিচ্ছি আপনি এটিকে useProductsData-তে যোগ করেছেন।
        const matchesAvailability =
            filters.availability.length === 0 ||
            (filters.availability.includes("In Stock") && (p as any).inStock) ||
            (filters.availability.includes("Out of Stock") && !(p as any).inStock)

        return matchesCategory && matchesCollection && matchesPrice && matchesAvailability
    })

    const handleAddToCart = (product: any, e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        // কার্ট লজিক...
        const existingCart = JSON.parse(localStorage.getItem("cart") || "[]")
        const existingItemIndex = existingCart.findIndex((item: any) => item.id === product.id)
        if (existingItemIndex > -1) {
            existingCart[existingItemIndex].quantity += 1
        } else {
            existingCart.push({ ...product, quantity: 1 })
        }
        localStorage.setItem("cart", JSON.stringify(existingCart))
        window.dispatchEvent(new Event("cartUpdated"))
    }

    return (
        <>
            <TopBar />
            <Header />

            <div className="min-h-screen bg-background">
                <div className="container mx-auto px-4 py-8">
                    <div className="mt-6">
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">{categoryName}</h1>

                        {loading ? (
                            <p className="text-lg text-center my-10 col-span-4">Loading products...</p>
                        ) : (
                            <>
                                <p className="text-muted-foreground mb-8">{categoryProducts.length} products found</p>
                                <div className="grid lg:grid-cols-4 gap-8">
                                    <div className="lg:col-span-1">
                                        <ProductFilters onFilterChange={setFilters} />
                                    </div>
                                    <div className="lg:col-span-3">
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                                            {categoryProducts.map((product) => (
                                                <Card key={product.id} className="group hover:shadow-xl transition-shadow overflow-hidden relative">
                                                    {/* ... Product Card Content ... */}
                                                    <Link href={`/product/${product.id}`}>
                                                        <CardContent className="p-0">
                                                            <div className="aspect-square relative overflow-hidden bg-white">
                                                                <img
                                                                    src={product.image || "/placeholder.svg"}
                                                                    alt={product.title} // Fakestore API-এ নাম নেই, title ব্যবহার করা হলো
                                                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 p-4"
                                                                />
                                                            </div>
                                                        </CardContent>
                                                    </Link>
                                                    <CardFooter className="flex flex-col items-start p-3 md:p-4 gap-2">
                                                        <Link href={`/product/${product.id}`} className="w-full">
                                                            <div className="w-full">
                                                                <p className="text-xs text-muted-foreground">{product.category}</p>
                                                                <h3 className="font-semibold text-sm md:text-base line-clamp-2 text-balance">
                                                                    {product.title}
                                                                </h3>
                                                                <div className="flex items-center gap-2 mt-1">
                                                                    <p className="text-accent font-bold text-base md:text-lg">৳{product.price}</p>
                                                                    {/* ডিসকাউন্ট লজিক */}
                                                                </div>
                                                            </div>
                                                        </Link>
                                                        <Button
                                                            size="sm"
                                                            className="w-full text-xs md:text-sm bg-accent hover:bg-accent/90"
                                                            onClick={(e) => handleAddToCart(product, e)}
                                                        >
                                                            <ShoppingCart className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                                                            Quick Add
                                                        </Button>
                                                    </CardFooter>
                                                </Card>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}