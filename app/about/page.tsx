import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Users, Target, Award, Heart } from "lucide-react"
import Image from "next/image";


export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Header />

       <main className="min-h-screen">
      {/* 🌟 Banner Section */}
     <section className="relative w-full h-[100vh]  flex items-center justify-center ">
  {/* 🖼️ Background Image */}
  <Image
    src="/Frame 3(2).png" // 👉 তোমার নিজের banner image path দাও (public/images ফোল্ডারে রাখো)
    alt="Need Web Banner"
    fill
    className=""
    priority
  />

  {/* ✨ Overlay Text */}
 {/* <div className="relative z-10 text-center px-4">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">About Need Web</h1>
    <p className="text-lg md:text-xl max-w-2xl mx-auto">
      Discover <span className="font-semibold text-yellow-300">Need Web</span> — your
      trusted platform for the latest and best products online. Experience smart,
      secure, and stylish shopping with us.
    </p>
  </div>*/}
</section>


      {/* 🧩 About Info Section */}
     <section className="py-16 px-6 md:px-20 bg-white">
  <div className="flex flex-col md:flex-row items-center gap-10">
    {/* 🖼️ Left Side Image */}
    <div className="w-full md:w-1/2">
      <Image
        src="/Frame 3(2).png" // 👉 তোমার নিজের ছবি এখানে দাও
        alt="Housing Market"
        width={600}
        height={400}
        className="rounded-2xl shadow-lg object-cover w-full h-auto"
      />
    </div>

    {/* 📝 Right Side Content */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        About the housing market
      </h2>
      <p className="text-gray-600 leading-relaxed">
        At <span className="font-semibold text-indigo-600">Need Web</span>, is one of the most trusted organizations in the country! 
        Our main objective is to collect safe food from remote areas and deliver it to the buyers while maintaining its nutritional value.
         By maintaining the promise of supplying nutritious and high-quality products, it has already earned the trust of the customers,
          making it one of the most trusted organizations supplying safe food in the country. We are committed to ensuring the supply of
           pure and safe food and customer service. Our main objective is to collect safe food from remote areas and deliver it to the 
           buyers while maintaining its nutritional value.
      </p>
    </div>
  </div>
</section>


      {/* 🧑‍🏫 Advisory Committee */}
      <section className="py-16 px-6 md:px-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Advisory Committee</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {["Md:Golam Kibria", "Robiul Islam"].map((name, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="w-24 h-24 mx-auto rounded-full bg-indigo-200 flex items-center justify-center text-2xl font-bold text-indigo-700">
                {name.split(" ")[0][0]}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{name}</h3>
              <p className="text-gray-500">Advisory Committee</p>
            </div>
          ))}
        </div>
      </section>

      {/* 👨‍💼 Executive Team */}
      <section className="py-16 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Executive Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {["Alif Ahmed", "Ruhul", "Labbib", "Toifuk"].map((name, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl shadow p-6 hover:bg-indigo-50 transition"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-indigo-300 flex items-center justify-center text-xl font-bold text-indigo-800">
                {name[0]}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-gray-800">{name}</h3>
              <p className="text-gray-500 text-sm">Executive Member</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🦶 Footer */}
      {/* <footer className="bg-indigo-600 text-white py-6 mt-10 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Need Web. All rights reserved.
        </p>
        <p className="text-sm mt-2">Crafted with 💙 by the Need Web Team</p>
      </footer> */}
    </main>
      <Footer />
    </>
  )
}
