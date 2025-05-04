import Link from "next/link"
import Image from "next/image"

const collections = [
    {
        id: 1,
        name: "Classic Collection",
        description: "Timeless designs that never go out of style",
        image: "/hero-image.png",
        link: "/collections/classic",
    },
    {
        id: 2,
        name: "Sport Collection",
        description: "Robust timepieces for the active lifestyle",
        image: "/hero-image.png",
        link: "/collections/sport",
    },
    {
        id: 3,
        name: "Limited Editions",
        description: "Exclusive watches with limited availability",
        image: "/hero-image.png",
        link: "/collections/limited-editions",
    },
]

export default function Collection() {
    return (
        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">Explore Our Collections</h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {collections.map((collection) => (
                        <Link key={collection.id} href={collection.link} className="group block overflow-hidden">
                            <div className="relative h-96 overflow-hidden rounded-lg">
                                <Image
                                    src={collection.image || "/placeholder.svg"}
                                    alt={collection.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-xl font-bold text-white">{collection.name}</h3>
                                    <p className="mt-2 text-sm text-slate-200">{collection.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
