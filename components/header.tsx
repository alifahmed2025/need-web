"use client"

import type React from "react"

import { Search, ShoppingCart, User, Menu, FileText, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"
import { RequestModal } from "./request-modal"
import { CartDrawer } from "./cart-drawer"
import { SignInModal } from "./sign-in-modal"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { products } from "./products-section"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [requestModalOpen, setRequestModalOpen] = useState(false)
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false)
  const [signInModalOpen, setSignInModalOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [favoritesCount, setFavoritesCount] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchSuggestions, setSearchSuggestions] = useState<typeof products>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]")
      setCartCount(cart.length)
    }

    const updateFavoritesCount = () => {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]")
      setFavoritesCount(favorites.length)
    }

    updateCartCount()
    updateFavoritesCount()
    window.addEventListener("storage", updateCartCount)
    window.addEventListener("cartUpdated", updateCartCount)
    window.addEventListener("favoritesUpdated", updateFavoritesCount)

    return () => {
      window.removeEventListener("storage", updateCartCount)
      window.removeEventListener("cartUpdated", updateCartCount)
      window.removeEventListener("favoritesUpdated", updateFavoritesCount)
    }
  }, [])

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const filtered = products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        .slice(0, 5)
      setSearchSuggestions(filtered)
      setShowSuggestions(true)
    } else {
      setSearchSuggestions([])
      setShowSuggestions(false)
    }
  }, [searchQuery])

  const categories = [
    { name: "OFFER ZONE", href: "/category/offer-zone" },
    { name: "Best Seller", href: "/category/best-seller" },
    { name: "Smartphones", href: "/category/mustard-oil" },
    { name: "Computers", href: "/category/ghee" },
    { name: "Headphones", href: "/category/honey" },
    { name: "Masala", href: "/category/masala" },
    { name: "Nuts & Seeds", href: "/category/nuts-seeds" },
    { name: "Cameras", href: "/category/tea-coffee" },
    { name: "Homemade", href: "/category/homemade" },
    { name: "Organic Zone", href: "/category/organic-zone" },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery("")
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (productId: number) => {
    router.push(`/product/${productId}`)
    setSearchQuery("")
    setShowSuggestions(false)
  }

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        {/* Main Header */}
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between  gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-2xl font-bold text-primary">Need.com</div>
                <div className="text-xs text-muted-foreground">অনলাইন শপিং</div>
              </div>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-xl relative">
              <form onSubmit={handleSearch} className="relative w-full">
                <Input
                  type="search"
                  placeholder="পণ্য খুঁজুন..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => searchQuery && setShowSuggestions(true)}
                  className="pr-12 h-11 border-2 border-primary/20 focus:border-primary"
                />
                <Button type="submit" size="icon" className="absolute right-0 top-0 h-11 w-11 rounded-l-none">
                  <Search className="h-5 w-5" />
                </Button>
              </form>
              {showSuggestions && searchSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                  {searchSuggestions.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleSuggestionClick(product.id)}
                      className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors text-left"
                    >
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-12 h-12 object-contain bg-gray-50 rounded"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{product.name}</p>
                        <p className="text-xs text-muted-foreground">{product.brand}</p>
                      </div>
                      <p className="font-bold text-primary">৳{product.price}</p>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                onClick={() => setRequestModalOpen(true)}
              >
                <FileText className="mr-2 h-4 w-4" />
                Request
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setRequestModalOpen(true)} className="md:hidden">
                <FileText className="h-5 w-5" />
              </Button>
              <Link href="/favorites">
                <Button variant="ghost" size="icon" className="relative hover:text-white">
                  <Heart className="h-6 w-6" />
                  {favoritesCount > 0 && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-semibold">
                      {favoritesCount}
                    </span>
                  )}
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:text-white"
                onClick={() => setCartDrawerOpen(true)}
              >
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-white text-xs flex items-center justify-center font-semibold">
                    {cartCount}
                  </span>
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-white"
                onClick={() => setSignInModalOpen(true)}
              >
                <User className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Search Bar - Mobile */}
          <div className="lg:hidden mt-3 relative">
            <form onSubmit={handleSearch} className="relative w-full">
              <Input
                type="search"
                placeholder="পণ্য খুঁজুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery && setShowSuggestions(true)}
                className="pr-12 h-10 border-2 border-primary/20 focus:border-primary"
              />
              <Button type="submit" size="icon" className="absolute right-0 top-0 h-10 w-10 rounded-l-none">
                <Search className="h-4 w-4" />
              </Button>
            </form>
            {showSuggestions && searchSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
                {searchSuggestions.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleSuggestionClick(product.id)}
                    className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors text-left"
                  >
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-10 h-10 object-contain bg-gray-50 rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{product.name}</p>
                      <p className="text-xs text-muted-foreground">{product.brand}</p>
                    </div>
                    <p className="font-bold text-primary text-sm">৳{product.price}</p>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

  {/* Category Navigation */}
<div className="border-t bg-white">
  <div className="container mx-auto px-4">
    {/* Desktop Category Menu */}
    <div className="hidden lg:flex justify-center flex-wrap items-center gap-7 py-3">
      {categories.map((category) => (
        <Link
          key={category.href}
          href={category.href}
          className="px-5 py-2 text-base font-semibold text-foreground hover:text-primary hover:bg-primary/5 rounded whitespace-nowrap transition-colors"
        >
          {category.name}
        </Link>
      ))}
    </div>

    {/* Mobile Category Menu */}
    <div className="lg:hidden">
      <Button
        variant="ghost"
        className="w-full justify-between py-3"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span className="flex items-center gap-2">
          <Menu className="h-5 w-5" />
          Categories
        </span>
      </Button>
      {mobileMenuOpen && (
        <div className="pb-2 space-y-1">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="block px-4 py-2 text-base font-medium hover:bg-primary/5 hover:text-primary rounded text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {category.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  </div>
</div>


      </header>

      <RequestModal open={requestModalOpen} onOpenChange={setRequestModalOpen} />
      <CartDrawer open={cartDrawerOpen} onOpenChange={setCartDrawerOpen} />
      <SignInModal open={signInModalOpen} onOpenChange={setSignInModalOpen} />
    </>
  )
}
