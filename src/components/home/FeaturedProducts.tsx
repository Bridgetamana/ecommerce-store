import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ProductCard from "../products/ProductCard"

const featuredProducts = [
    {
        id: 1,
        name: "Nautilus 5711",
        brand: "Patek Philippe",
        price: 35000,
        image: "/hero-image.png",
        category: "Luxury",
    },
    {
        id: 2,
        name: "Submariner Date",
        brand: "Rolex",
        price: 14000,
        image: "/hero-image.png",
        category: "Diving",
    },
    {
        id: 3,
        name: "Royal Oak",
        brand: "Audemars Piguet",
        price: 28000,
        image: "/hero-image.png",
        category: "Luxury",
    },
    {
        id: 4,
        name: "Seamaster 300M",
        brand: "Omega",
        price: 5200,
        image: "/hero-image.png",
        category: "Diving",
    },
]

export default function FeaturedProducts() {
    return (
        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold">Featured Timepieces</h2>
                        <p className="mt-4 text-slate-600 max-w-lg lg:max-w-2xl">
                            Discover our handpicked selection of exceptional watches, each representing the pinnacle of horological
                            craftsmanship.
                        </p>
                    </div>
                    <Link
                        href="/collections"
                        className="mt-6 md:mt-0 inline-flex items-center text-primary hover:text-primary/80"
                    >
                        View All Collections
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}