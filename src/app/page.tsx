import Link from "next/link"
import Image from "next/image"
import FeaturedProducts from "@/components/home/FeaturedProducts"
import BrandShowcase from "@/components/home/BrandShowcase"

export default function Home() {
  return (
    <div>
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-image.png"
            alt="Luxury watch"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/40" />
        </div>
        <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Timeless Elegance on Your Wrist
            </h1>
            <p className="mt-6 text-lg text-slate-200 max-w-lg">
              Discover our curated collection of luxury timepieces from the world&apos;s most prestigious watchmakers.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/collections" className="btn-primary">
                Explore Collection
              </Link>
              <Link
                href="/new-arrivals"
                className="btn-outline text-white border-white hover:bg-white/10 hover:text-white"
              >
                New Arrivals
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FeaturedProducts />
      <BrandShowcase />
    </div>
  )
}