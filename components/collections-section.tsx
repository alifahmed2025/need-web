const collections = [
  { id: 1, name: "Men's Fashion" },
  { id: 2, name: "Women's Fashion" },
  { id: 3, name: "Electronics" },
  { id: 4, name: "Shoes" },
  { id: 5, name: "Accessories" },
  { id: 6, name: "Sports & Fitness" },
  { id: 7, name: "Home & Living" },
  { id: 8, name: "Beauty & Health" },
  { id: 9, name: "Kids Fashion" },
  { id: 10, name: "Watches" },
  { id: 11, name: "Bags & Luggage" },
  { id: 12, name: "Jewelry" },
  { id: 13, name: "Sunglasses" },
  { id: 14, name: "Winter Collection" },
  { id: 15, name: "Summer Collection" },
  { id: 16, name: "Formal Wear" },
  { id: 17, name: "Casual Wear" },
  { id: 18, name: "Party Wear" },
  { id: 19, name: "Activewear" },
  { id: 20, name: "Denim Collection" },
  { id: 21, name: "Ethnic Wear" },
  { id: 22, name: "Footwear" },
  { id: 23, name: "Handbags" },
  { id: 24, name: "Backpacks" },
  { id: 25, name: "Perfumes" },
  { id: 26, name: "Skincare" },
  { id: 27, name: "Makeup" },
  { id: 28, name: "Hair Care" },
  { id: 29, name: "Mobile Accessories" },
  { id: 30, name: "Smart Devices" },
]

export function CollectionsSection() {
  return (
    <>
   {/*  <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">Shop by Collection</h2>
          <p className="text-muted-foreground text-lg text-pretty">Explore our curated collections</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {collections.map((collection) => (
            <button
              key={collection.id}
              className="px-4 py-3 bg-card hover:bg-accent hover:text-accent-foreground rounded-lg border border-border transition-colors text-sm font-medium text-center line-clamp-2 min-h-[60px] flex items-center justify-center"
            >
              {collection.name}
            </button>
          ))}
        </div>
      </div>
    </section> */}
    </>
  )
}
