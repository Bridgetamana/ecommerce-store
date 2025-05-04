import Image from "next/image"

const brands = [
    { name: "Rolex", logo: "/swatch-logo.jpg" },
    { name: "Omega", logo: "/swatch-logo.jpg" },
    { name: "Patek Philippe", logo: "/swatch-logo.jpg" },
    { name: "Audemars Piguet", logo: "/swatch-logo.jpg" },
    { name: "TAG Heuer", logo: "/swatch-logo.jpg" },
    { name: "Cartier", logo: "/swatch-logo.jpg" },
]

export default function BrandShowcase() {
    return (
        <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-3xl font-bold mb-12">Prestigious Brands</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {brands.map((brand) => (
                        <div key={brand.name} className="flex items-center justify-center">
                            <Image
                                src={brand.logo || "/placeholder.svg"}
                                alt={brand.name}
                                width={160}
                                height={80}
                                className="max-h-12 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
