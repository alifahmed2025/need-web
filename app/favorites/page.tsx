"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { TopBar } from "@/components/top-bar";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

// কম্পোনেন্ট ডেটা টাইপ
type Product = {
  id: number;
  name?: string; 
  title: string;
  category: string;
  price: number;
  image: string;
};

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);

  // ✅ ডেটা লোড করার ফাংশন
  const loadFavoriteData = () => {
    try {
      const storedFavorites: number[] = JSON.parse(localStorage.getItem("favorites") || "[]");
      setFavorites(storedFavorites);

      const storedProductsData = localStorage.getItem("allProductsData");
      if (storedProductsData) {
        const loadedProducts = JSON.parse(storedProductsData) as Product[];
        setAllProducts(loadedProducts); 

        const favProducts = loadedProducts.filter((p) => storedFavorites.includes(p.id));
        setFavoriteProducts(favProducts);
      } else {
        console.warn("Product data not found in localStorage. Ensure 'ProductsSection' has loaded and saved the data.");
      }
    } catch (error) {
      console.error("Error loading favorite data:", error);
    }
  };

  // 💥 Component মাউন্ট হলে এবং ইভেন্ট ঘটলে ডেটা লোড হবে।
  useEffect(() => {
    loadFavoriteData(); 

    window.addEventListener("favoritesUpdated", loadFavoriteData);
    window.addEventListener("productsLoaded", loadFavoriteData); 

    return () => {
      window.removeEventListener("favoritesUpdated", loadFavoriteData);
      window.removeEventListener("productsLoaded", loadFavoriteData);
    };
  }, []); 

  
  // ✅ ফেভারিট থেকে বাদ দেওয়া
  const removeFavorite = (productId: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const updatedFavorites = favorites.filter((id) => id !== productId);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
    
    setFavoriteProducts(allProducts.filter((p) => updatedFavorites.includes(p.id))); 
    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  // ✅ কার্টে যোগ করা 
  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    type CartItem = Product & { quantity: number }; 
    const existingCart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItemIndex = existingCart.findIndex((item) => item.id === product.id);

    if (existingItemIndex > -1) {
      existingCart[existingItemIndex].quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1, name: product.title || product.name }); 
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <>
      <TopBar />
      <Header />

      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">My Favorites ({favorites.length})</h1>

          {favoriteProducts.length === 0 ? (
            <div className="text-center py-16">
              <Heart className="h-24 w-24 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-2xl font-semibold mb-2">No favorites yet</h2>
              <p className="text-muted-foreground mb-6">Start adding products to your favorites!</p>
              <Link href="/">
                <Button>Browse Products</Button>
              </Link>
            </div>
          ) : (
            // 🌟 ত্রুটি সংশোধন: এখানে অতিরিক্ত {} বন্ধনী সরানো হয়েছে।
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {favoriteProducts.map((product, index) => {
                const isOnSale = index % 4 === 0;
                const isOrganic = index % 5 === 0;
                const originalPrice = isOnSale ? Math.round(product.price * 1.3) : null; 

                return (
                  <Card
                    key={product.id}
                    className="group hover:shadow-lg transition-all duration-300 overflow-hidden border relative"
                  >
                    <button
                      onClick={(e) => removeFavorite(product.id, e)}
                      className="absolute top-2 left-2 z-10 h-8 w-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-sm transition-colors"
                    >
                      <Heart className="h-4 w-4 fill-red-500 text-red-500" />
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
                            alt={product.title || product.name} 
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </CardContent>
                    </Link>
                    <CardFooter className="flex flex-col items-start p-3 pt-0 gap-2">
                      <Link href={`/product/${product.id}`} className="w-full">
                        <div className="w-full space-y-1">
                          <h3 className="font-medium text-sm line-clamp-2 text-foreground leading-snug hover:text-primary transition-colors">
                            {product.title || product.name}
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
                        <ShoppingCart className="mr-1 h-3 w-3" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}