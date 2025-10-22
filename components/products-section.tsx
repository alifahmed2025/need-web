"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Square, Columns3, Rows3, LayoutGrid, Grid3x3, Heart } from "lucide-react" 
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

// কম্পোনেন্ট ডেটা টাইপ (যদিও any ব্যবহার করা হয়েছে, এটি টাইপ সেফটির জন্য ভালো)
type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
    // আরও প্রপার্টি থাকতে পারে
};

export function ProductsSection() {
    // মোবাইল ভিউ ডিফল্ট: 2 কলাম
    const [gridCols, setGridCols] = useState(2) 
    const [favorites, setFavorites] = useState<number[]>([])
    const [products, setProducts] = useState<Product[]>([]) 
    const [loading, setLoading] = useState(true)

    // API থেকে ডেটা আনা
    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch("https://fakestoreapi.com/products")
                const data: Product[] = await res.json()
                setProducts(data)
            } catch (error) {
                console.error("Failed to fetch products:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [])

    // ফেভারিট লোড করা
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]")
        setFavorites(storedFavorites)
    }, [])

    // কার্টে যোগ করা
    const handleAddToCart = (product: Product, e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
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

    // ফেভারিট টগল
    const toggleFavorite = (productId: number, e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]")
        let updatedFavorites: number[]

        if (storedFavorites.includes(productId)) {
            updatedFavorites = storedFavorites.filter((id: number) => id !== productId)
        } else {
            updatedFavorites = [...storedFavorites, productId]
        }

        localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
        setFavorites(updatedFavorites)
        window.dispatchEvent(new Event("favoritesUpdated"))
    }

    // গ্রিড কলাম ক্লাসের ম্যাপিং
    const gridColsClass = {
        1: "grid-cols-1", 
        2: "grid-cols-2 lg:grid-cols-2", 
        3: "grid-cols-2 md:grid-cols-3 lg:grid-cols-3", 
        4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4", 
        5: "grid-cols-2 md:grid-cols-3 lg:grid-cols-5", 
    }

    // 🌟 লোডিং লজিক: সিনট্যাক্স এরর এখানে ছিল না, কিন্তু ফ্লো ঠিক রাখা হলো
    if (loading) {
        return (
            <section className="py-16 text-center">
                <p className="text-gray-600 text-lg font-medium">Loading products...</p>
            </section>
        )
    }

    // 🌟 মেইন রিটার্ন ব্লক: এখানে কোনো অতিরিক্ত বন্ধনী বা সেমিকোলন নেই
    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wide">
                        All Products
                    </h2>

                    {/* Grid View Changer */}
                    <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
                        {/* 1 ও 2 কলাম বাটন (মোবাইল এবং ডেস্কটপ উভয়ের জন্য) */}
                        {[1, 2].map((n) => (
                            <Button
                                key={n}
                                variant={gridCols === n ? "default" : "ghost"}
                                size="sm"
                                onClick={() => setGridCols(n)}
                                className="h-8 w-8 p-0"
                            >
                                {n === 1 && <Square className="h-4 w-4" />} 
                                {n === 2 && <Columns3 className="h-4 w-4 rotate-90" />}
                            </Button>
                        ))}
                        {/* 3, 4, 5 কলাম বাটন (শুধুমাত্র ডেস্কটপের জন্য) */}
                        {[3, 4, 5].map((n) => (
                            <Button
                                key={n}
                                variant={gridCols === n ? "default" : "ghost"}
                                size="sm"
                                onClick={() => setGridCols(n)}
                                className="h-8 w-8 p-0 hidden md:flex" 
                            >
                                {n === 3 && <Rows3 className="h-4 w-4" />}
                                {n === 4 && <LayoutGrid className="h-4 w-4" />}
                                {n === 5 && <Grid3x3 className="h-4 w-4" />}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Products Grid */}
                <div className={`grid ${gridColsClass[gridCols as keyof typeof gridColsClass]} gap-4`}>
                    {products.map((product, index) => {
                        const isOnSale = index % 4 === 0
                        const isFavorite = favorites.includes(product.id)
                        // প্রাইস লজিক
                        const originalPrice = isOnSale ? Math.round(product.price * 1.3) : null 

                        return (
                            <Card
                                key={product.id}
                                className="group hover:shadow-lg transition-all duration-300 overflow-hidden border relative"
                            >
                                <button
                                    onClick={(e) => toggleFavorite(product.id, e)}
                                    className="absolute top-2 left-2 z-10 h-8 w-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-sm transition-colors"
                                >
                                    <Heart
                                        className={`h-4 w-4 transition-colors ${
                                            isFavorite ? "fill-red-500 text-red-500" : "text-gray-600 hover:text-red-500"
                                        }`}
                                    />
                                </button>

                                <div className="absolute top-2 right-2 z-10 flex flex-col gap-1">
                                    {isOnSale && (
                                        <Badge className="bg-red-600 hover:bg-red-700 text-white text-xs px-2 py-0.5">Sale</Badge>
                                    )}
                                </div>

                                <Link href={`/product/${product.id}`}>
                                    <CardContent className="p-3">
                                        <div className="aspect-square relative overflow-hidden bg-gray-50 rounded">
                                            <img
                                                src={product.image || "/placeholder.svg"}
                                                alt={product.title}
                                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    </CardContent>
                                </Link>

                                <CardFooter className="flex flex-col items-start p-3 pt-0 gap-2">
                                    <Link href={`/product/${product.id}`} className="w-full">
                                        <div className="w-full space-y-1">
                                            <h3 className="font-medium text-sm line-clamp-2 text-foreground leading-snug hover:text-primary transition-colors">
                                                {product.title}
                                            </h3>
                                            <div className="flex items-center gap-2">
                                                <p className="text-primary font-bold text-base">৳ {product.price}</p>
                                                {originalPrice && (
                                                    <p className="text-muted-foreground text-xs line-through">৳ {originalPrice}</p>
                                                )}
                                            </div>
                                        </div>
                                    </Link>

                                    <Button
                                        size="sm"
                                        className="w-full text-xs bg-primary hover:bg-primary/90 text-white font-medium"
                                        onClick={(e) => handleAddToCart(product, e)}
                                    >
                                        Quick Add
                                    </Button>
                                </CardFooter>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}