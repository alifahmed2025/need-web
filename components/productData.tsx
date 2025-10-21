// @/components/productData.ts

import { useState, useEffect } from "react"

// Product Interface বা Type তৈরি করুন
export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  inStock: boolean; // এটি আমরা Fakestore API-এ না থাকলেও ফিল্টারের জন্য যোগ করলাম
  badge?: string; // যদি কোনো ব্যাজ দেখাতে চান
  // ... অন্যান্য প্রপার্টি
}

const initialProducts: Product[] = []

export const products = initialProducts // প্রাথমিকভাবে একটি খালি অ্যারে

// এই হুকটি ডেটা ফেচ করে এবং স্টেট ম্যানেজ করে, কিন্তু এটি একটি হুক, তাই শুধু ক্লায়েন্ট সাইডে ব্যবহার করা যাবে।
// তবে আপনার উদ্দেশ্য যেহেতু এই ডেটাটি ইমপোর্ট করা, আমরা ডেটা ফেচ করার কাজটিকে একটি গ্লোবাল স্টেট হিসেবে তৈরি করতে পারি।

const productState = {
    products: initialProducts as Product[],
    loading: true,
    initialized: false
}

// এই ফাংশনটি ডেটা ফেচ করবে এবং উপরের productState-কে আপডেট করবে
async function initializeProducts() {
    if (productState.initialized) return;

    productState.initialized = true;
    
    try {
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        
        // এখানে ডেটা ম্যাপ করে কিছু লজিক যোগ করা যেতে পারে
        const enrichedData: Product[] = data.map((p: any, index: number) => ({
            ...p,
            // Fakestore-এ inStock প্রপার্টি নেই, তাই উদাহরণস্বরূপ যোগ করা হলো
            inStock: index % 3 !== 0, 
            badge: index === 0 ? "NEW" : undefined 
        }))

        // স্টেট আপডেট করুন (যদিও এটি গ্লোবাল স্টেট নয়, এটি শুধু Next.js কম্পোনেন্টে কাজ করবে)
        // যেহেতু আপনি ProductsSection-এর মধ্যে ফেচ করছেন, তাই আমরা বরং একটি কাস্টম হুক এক্সপোর্ট করি।

    } catch (error) {
        console.error("Failed to fetch products:", error)
    } finally {
        productState.loading = false
    }
}

// আমরা আপনার original ProductsSection কম্পোনেন্ট থেকে Products এবং Loading স্টেট বের করে একটি কাস্টম হুক তৈরি করি
// যাতে category/[slug]/page.tsx এই স্টেটগুলো ব্যবহার করতে পারে।

export function useProductsData() {
    const [products, setProducts] = useState<Product[]>(initialProducts)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch("https://fakestoreapi.com/products")
                const data = await res.json()
                
                // ডেটা এনরিচ করুন
                const enrichedData: Product[] = data.map((p: any, index: number) => ({
                    ...p,
                    inStock: index % 3 !== 0,
                    badge: index === 0 ? "NEW" : undefined 
                }))
                
                setProducts(enrichedData)
            } catch (error) {
                console.error("Failed to fetch products:", error)
                setProducts(initialProducts) // ব্যর্থ হলে খালি অ্যারে
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [])
    
    return { products, loading }
}