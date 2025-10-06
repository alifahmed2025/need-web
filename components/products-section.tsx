"use client"

import type React from "react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Grid3x3, LayoutGrid, Rows3, Columns3, Square } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"

const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    brand: "Nike",
    price: 1299,
    image: "/white-tshirt.png",
    category: "Clothing",
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    brand: "Levi's",
    price: 3499,
    image: "/classic-blue-jeans.png",
    category: "Clothing",
  },
  { id: 3, name: "Running Shoes", brand: "Adidas", price: 4999, image: "/running-shoes.jpg", category: "Footwear" },
  {
    id: 4,
    name: "Leather Wallet",
    brand: "Fossil",
    price: 2199,
    image: "/leather-wallet.jpg",
    category: "Accessories",
  },
  { id: 5, name: "Casual Sneakers", brand: "Puma", price: 3799, image: "/casual-sneakers.png", category: "Footwear" },
  { id: 6, name: "Denim Jacket", brand: "Zara", price: 4299, image: "/classic-denim-jacket.png", category: "Clothing" },
  { id: 7, name: "Sports Watch", brand: "Casio", price: 5499, image: "/sports-watch.jpg", category: "Accessories" },
  {
    id: 8,
    name: "Backpack",
    brand: "Herschel",
    price: 3299,
    image: "/colorful-backpack-on-wooden-table.png",
    category: "Bags",
  },
  {
    id: 9,
    name: "Sunglasses",
    brand: "Ray-Ban",
    price: 6999,
    image: "/stylish-sunglasses.png",
    category: "Accessories",
  },
  {
    id: 10,
    name: "Polo Shirt",
    brand: "Ralph Lauren",
    price: 2799,
    image: "/classic-polo-shirt.png",
    category: "Clothing",
  },
  { id: 11, name: "Chino Pants", brand: "H&M", price: 2499, image: "/chino-pants.png", category: "Clothing" },
  { id: 12, name: "Hoodie", brand: "Champion", price: 3599, image: "/cozy-hoodie.png", category: "Clothing" },
  { id: 13, name: "Formal Shoes", brand: "Clarks", price: 5799, image: "/formal-shoes.png", category: "Footwear" },
  { id: 14, name: "Crossbody Bag", brand: "Coach", price: 4599, image: "/stylish-crossbody-bag.png", category: "Bags" },
  { id: 15, name: "Baseball Cap", brand: "New Era", price: 899, image: "/baseball-cap.png", category: "Accessories" },
  {
    id: 16,
    name: "Wireless Earbuds",
    brand: "Sony",
    price: 7999,
    image: "/wireless-earbuds.png",
    category: "Electronics",
  },
  {
    id: 17,
    name: "Smartwatch",
    brand: "Samsung",
    price: 12999,
    image: "/modern-smartwatch.png",
    category: "Electronics",
  },
  { id: 18, name: "Yoga Mat", brand: "Reebok", price: 1499, image: "/rolled-yoga-mat.png", category: "Sports" },
  { id: 19, name: "Gym Bag", brand: "Under Armour", price: 2899, image: "/gym-bag.jpg", category: "Bags" },
  {
    id: 20,
    name: "Winter Jacket",
    brand: "North Face",
    price: 8999,
    image: "/placeholder.svg?height=300&width=300",
    category: "Clothing",
  },
  {
    id: 21,
    name: "Dress Shirt",
    brand: "Calvin Klein",
    price: 3199,
    image: "/placeholder.svg?height=300&width=300",
    category: "Clothing",
  },
  {
    id: 22,
    name: "Leather Belt",
    brand: "Tommy Hilfiger",
    price: 1799,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessories",
  },
  {
    id: 23,
    name: "Perfume",
    brand: "Hugo Boss",
    price: 4999,
    image: "/placeholder.svg?height=300&width=300",
    category: "Beauty",
  },
  {
    id: 24,
    name: "Laptop Bag",
    brand: "Samsonite",
    price: 3999,
    image: "/placeholder.svg?height=300&width=300",
    category: "Bags",
  },
  {
    id: 25,
    name: "Bluetooth Speaker",
    brand: "JBL",
    price: 5499,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
  },
  {
    id: 26,
    name: "Phone Case",
    brand: "Spigen",
    price: 699,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessories",
  },
  {
    id: 27,
    name: "Power Bank",
    brand: "Anker",
    price: 2299,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
  },
  {
    id: 28,
    name: "Travel Mug",
    brand: "Thermos",
    price: 1299,
    image: "/placeholder.svg?height=300&width=300",
    category: "Home",
  },
  {
    id: 29,
    name: "Fitness Tracker",
    brand: "Fitbit",
    price: 6499,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
  },
  {
    id: 30,
    name: "Messenger Bag",
    brand: "Timbuk2",
    price: 4199,
    image: "/placeholder.svg?height=300&width=300",
    category: "Bags",
  },
]

export { products }

export function ProductsSection() {
  const [gridCols, setGridCols] = useState(5)
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]")
    setFavorites(storedFavorites)
  }, [])

  const handleAddToCart = (product: (typeof products)[0], e: React.MouseEvent) => {
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

  const gridColsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
  }

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wide">ALL PRODUCT</h2>
          <div className="hidden md:flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
            <Button
              variant={gridCols === 1 ? "default" : "ghost"}
              size="sm"
              onClick={() => setGridCols(1)}
              className="h-8 w-8 p-0"
            >
              <Square className="h-4 w-4" />
            </Button>
            <Button
              variant={gridCols === 2 ? "default" : "ghost"}
              size="sm"
              onClick={() => setGridCols(2)}
              className="h-8 w-8 p-0"
            >
              <Columns3 className="h-4 w-4 rotate-90" />
            </Button>
            <Button
              variant={gridCols === 3 ? "default" : "ghost"}
              size="sm"
              onClick={() => setGridCols(3)}
              className="h-8 w-8 p-0"
            >
              <Rows3 className="h-4 w-4" />
            </Button>
            <Button
              variant={gridCols === 4 ? "default" : "ghost"}
              size="sm"
              onClick={() => setGridCols(4)}
              className="h-8 w-8 p-0"
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button
              variant={gridCols === 5 ? "default" : "ghost"}
              size="sm"
              onClick={() => setGridCols(5)}
              className="h-8 w-8 p-0"
            >
              <Grid3x3 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className={`grid ${gridColsClass[gridCols as keyof typeof gridColsClass]} gap-4`}>
          {products.map((product, index) => {
            const isOnSale = index % 4 === 0
            const isOrganic = index % 5 === 0
            const originalPrice = isOnSale ? Math.round(product.price * 1.3) : null
            const isFavorite = favorites.includes(product.id)

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
                  {isOrganic && (
                    <Badge
                      className="text-white text-xs px-2 py-0.5"
                      style={{ backgroundColor: "oklch(0.65 0.18 45)" }}
                    >
                      অর্গানিক
                    </Badge>
                  )}
                  {isOnSale && (
                    <Badge className="bg-red-600 hover:bg-red-700 text-white text-xs px-2 py-0.5">Sale</Badge>
                  )}
                </div>

                <Link href={`/product/${product.id}`}>
                  <CardContent className="p-3">
                    <div className="aspect-square relative overflow-hidden bg-gray-50 rounded">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CardContent>
                </Link>
                <CardFooter className="flex flex-col items-start p-3 pt-0 gap-2">
                  <Link href={`/product/${product.id}`} className="w-full">
                    <div className="w-full space-y-1">
                      <h3 className="font-medium text-sm line-clamp-2 text-foreground leading-snug hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <p className="text-primary font-bold text-base">৳ {product.price.toLocaleString()}</p>
                        {originalPrice && (
                          <p className="text-muted-foreground text-xs line-through">
                            ৳ {originalPrice.toLocaleString()}
                          </p>
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
