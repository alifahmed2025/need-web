"use client";

import type React from "react";
import { Search, ShoppingCart, User, Menu, FileText, Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { RequestModal } from "./request-modal";
import { CartDrawer } from "./cart-drawer";
import { SignInModal } from "./sign-in-modal";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";


type Product = {
    id: number;
    name: string;
    brand: string; 
    category: string;
    price: number;
    image: string; 
    title: string; 
};


export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [requestModalOpen, setRequestModalOpen] = useState(false);
    const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
    const [signInModalOpen, setSignInModalOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [favoritesCount, setFavoritesCount] = useState(0); // ✅ এই স্টেটটি আপডেট হবে
    const [searchQuery, setSearchQuery] = useState("");
    const [searchSuggestions, setSearchSuggestions] = useState<Product[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [allProducts, setAllProducts] = useState<Product[]>([]); 
    const router = useRouter();

    // ✅ ডেটা লোড করার জন্য সংশোধিত useEffect
    useEffect(() => {
        
        // 💥 FIX 1: favoritesCount আপডেটের লজিক
        const updateFavoritesCount = () => {
            try {
                // localStorage থেকে "favorites" অ্যারে লোড করা
                const storedFavorites = localStorage.getItem("favorites");
                const favoritesArray: number[] = JSON.parse(storedFavorites || "[]");
                
                // অ্যারের দৈর্ঘ্য দিয়ে স্টেট আপডেট করা
                setFavoritesCount(favoritesArray.length);
            } catch (e) {
                console.error("Error reading favorites from localStorage", e);
                setFavoritesCount(0);
            }
        };

        // 💥 FIX 2: cartCount আপডেটের লজিক (কার্টের আইটেম সংখ্যা বা মোট সংখ্যা)
        const updateCartCount = () => {
            try {
                // localStorage থেকে "cart" অ্যারে লোড করা
                const storedCart = localStorage.getItem("cart");
                const cartArray: { id: number; quantity: number }[] = JSON.parse(storedCart || "[]");
                
                // মোট আইটেম সংখ্যা বা মোট কোয়ানটিটি যোগ করা
                const totalQuantity = cartArray.reduce((sum, item) => sum + item.quantity, 0);

                // এখানে আমরা মোট কোয়ানটিটি দেখালাম। যদি শুধু ইউনিক আইটেম সংখ্যা দেখাতে চান, তবে cartArray.length ব্যবহার করুন।
                setCartCount(totalQuantity); 
            } catch (e) {
                console.error("Error reading cart from localStorage", e);
                setCartCount(0);
            }
        };


        // প্রোডাক্ট ডেটা লোড করার লজিক (আগের মতো)
        try {
            const storedProducts = localStorage.getItem("allProductsData");
            if (storedProducts) {
                setAllProducts(JSON.parse(storedProducts) as Product[]); 
            }
        } catch (error) {
            console.error("Failed to load products from localStorage:", error);
        }
        
        
        // 3. প্রথমে একবার ফাংশনগুলি কল করা
        updateCartCount();
        updateFavoritesCount();

        // 4. ইভেন্ট লিসেনারগুলি সেট করা (অন্যান্য ট্যাব বা কোড থেকে ডেটা আপডেট হলে শোনার জন্য)
        window.addEventListener("storage", updateCartCount);
        window.addEventListener("storage", updateFavoritesCount);
        window.addEventListener("cartUpdated", updateCartCount);
        window.addEventListener("favoritesUpdated", updateFavoritesCount);

        // 5. Cleanup ফাংশন
        return () => {
            window.removeEventListener("storage", updateCartCount);
            window.removeEventListener("storage", updateFavoritesCount);
            window.removeEventListener("cartUpdated", updateCartCount);
            window.removeEventListener("favoritesUpdated", updateFavoritesCount);
        };
    }, []);

    // 💥 সার্চ লজিক সংশোধন (আগের মতোই আছে)
    useEffect(() => {
        if (searchQuery.trim().length > 0 && allProducts.length > 0) {
            
            const filtered = allProducts 
                .filter(
                    (p) =>
                        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        p.category.toLowerCase().includes(searchQuery.toLowerCase()) 
                )
                .slice(0, 5);
            
            setSearchSuggestions(filtered);
            setShowSuggestions(true);
        } else {
            setSearchSuggestions([]);
            setShowSuggestions(false);
        }
    }, [searchQuery, allProducts]); 

    const categories = [
        // ... (categories array অপরিবর্তিত)
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
    ];

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery("");
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (productId: number) => {
        router.push(`/product/${productId}`);
        setSearchQuery("");
        setShowSuggestions(false);
    };

    return (
        <>
            <header className="bg-white shadow-sm sticky top-0 z-50">
                {/* ====== Main Header ====== */}
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center justify-between gap-4">
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

                        {/* Search - Desktop */}
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
                                <Button
                                    type="submit"
                                    size="icon"
                                    className="absolute right-0 top-0 h-11 w-11 rounded-l-none"
                                >
                                    <Search className="h-5 w-5" />
                                </Button>
                            </form>

                            {showSuggestions && searchSuggestions.length > 0 && (
                                <div 
                                    className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto"
                                    onMouseDown={(e) => e.preventDefault()} 
                                >
                                    {searchSuggestions.map((product) => (
                                        <button
                                            key={product.id}
                                            onClick={() => handleSuggestionClick(product.id)}
                                            className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors text-left"
                                        >
                                            <img
                                                src={product.image || "/placeholder.svg"}
                                                alt={product.title} 
                                                className="w-12 h-12 object-contain bg-gray-50 rounded"
                                            />
                                            <div className="flex-1">
                                                <p className="font-medium text-sm">{product.title}</p>
                                                <p className="text-xs text-muted-foreground">{product.category}</p>
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
                                    {/* 💥 FIX 4: favoritesCount > 0 হলে সংখ্যা দেখাবে */}
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
                                {/* 💥 FIX 5: cartCount > 0 হলে সংখ্যা দেখাবে */}
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

                    {/* Search - Mobile */}
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
                        
                        {/* Search Suggestions for Mobile */}
                        {showSuggestions && searchSuggestions.length > 0 && (
                            <div 
                                className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto"
                                onMouseDown={(e) => e.preventDefault()} 
                            >
                                {searchSuggestions.map((product) => (
                                    <button
                                        key={product.id}
                                        onClick={() => handleSuggestionClick(product.id)}
                                        className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors text-left"
                                    >
                                        <img
                                            src={product.image || "/placeholder.svg"}
                                            alt={product.title}
                                            className="w-12 h-12 object-contain bg-gray-50 rounded"
                                        />
                                        <div className="flex-1">
                                            <p className="font-medium text-sm">{product.title}</p>
                                            <p className="text-xs text-muted-foreground">{product.category}</p>
                                        </div>
                                        <p className="font-bold text-primary">৳{product.price}</p>
                                    </button>
                                ))}
                            </div>
                        )}
                        
                    </div>
                </div>

                {/* ====== Category Navigation ====== */}
                <div className="border-t bg-white">
                    <div className="container mx-auto px-4">
                        {/* Desktop Menu */}
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

                        {/* Mobile Category Popup */}
                        <div className="lg:hidden">
                            <Button
                                variant="ghost"
                                className="w-full justify-between py-3"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="flex items-center gap-2">
                                    <Menu className="h-5 w-5" />
                                    Categories
                                </span>
                            </Button>

                            <AnimatePresence>
                                {mobileMenuOpen && (
                                    <>
                                        <motion.div
                                            className="fixed inset-0 bg-black/50 z-40"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            onClick={() => setMobileMenuOpen(false)}
                                        />

                                        <motion.div
                                            initial={{ x: "-100%" }}
                                            animate={{ x: 0 }}
                                            exit={{ x: "-100%" }}
                                            transition={{ type: "tween", duration: 0.3 }}
                                            className="fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 p-5 overflow-y-auto"
                                        >
                                            <div className="flex justify-between items-center mb-6">
                                                <h2 className="text-xl font-semibold text-gray-800">Categories</h2>
                                                <button
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-full"
                                                >
                                                    <X className="h-5 w-5" />
                                                </button>
                                            </div>

                                            <div className="space-y-2">
                                                {categories.map((category) => (
                                                    <Link
                                                        key={category.href}
                                                        href={category.href}
                                                        className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {category.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </header>

            {/* ====== Modals ====== */}
            <RequestModal open={requestModalOpen} onOpenChange={setRequestModalOpen} />
            <CartDrawer open={cartDrawerOpen} onOpenChange={setCartDrawerOpen} />
            <SignInModal open={signInModalOpen} onOpenChange={setSignInModalOpen} />
        </>
    );
}