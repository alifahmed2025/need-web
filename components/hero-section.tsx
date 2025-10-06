export function HeroSection() {
  return (
    <>
      <section className="relative bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 overflow-hidden mt-4">
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-center lg:text-left z-10">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-xl leading-snug text-center">
                আধুনিক প্রযুক্তির <span className="text-yellow-400">নতুন দুনিয়া</span> <br />
                শুরু হোক আপনার সঙ্গে
              </h1>

              <div className="flex items-center justify-center lg:justify-start gap-3 text-white text-xl md:text-2xl font-semibold">
                <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span>09642922922</span>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[450px] flex items-center justify-center">
              <img
                src="/Frame 3(2).png"
                alt="Premium Organic Honey"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
