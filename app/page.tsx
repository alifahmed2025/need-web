import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CollectionsSection } from "@/components/collections-section"
import { PromoSection } from "@/components/promo-section"
import { ProductsSection } from "@/components/products-section"
import { FeaturedProducts } from "@/components/featured-products"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <main>
        <HeroSection />
        <CollectionsSection />
        <PromoSection />
        <ProductsSection />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  )
}
