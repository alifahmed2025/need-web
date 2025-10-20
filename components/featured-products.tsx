"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

export function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setFeaturedProducts(data.slice(0, 6)); // প্রথম 6টি প্রোডাক্ট
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, []);

  if (featuredProducts.length === 0)
    return <div className="p-10 text-center text-gray-500">Loading...</div>;

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
                      alt={product.title}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start p-3 gap-1">
                  <p className="text-xs text-muted-foreground capitalize">{product.category}</p>
                  <h3 className="font-semibold text-sm line-clamp-2 text-balance">{product.title}</h3>
                  <p className="text-accent font-bold text-base mt-1">৳{product.price}</p>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
