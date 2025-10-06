"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { products } from "./products-section"

export function FeaturedProducts() {
  const featuredProducts = products.slice(0, 6)

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">Featured Products</h2>
          <p className="text-muted-foreground text-lg text-pretty">Handpicked favorites just for you</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <Card className="group hover:shadow-xl transition-shadow overflow-hidden h-full">
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start p-3 gap-1">
                  <p className="text-xs text-muted-foreground">{product.brand}</p>
                  <h3 className="font-semibold text-sm line-clamp-2 text-balance">{product.name}</h3>
                  <p className="text-accent font-bold text-base mt-1">৳{product.price}</p>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
