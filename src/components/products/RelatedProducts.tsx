import ProductCard from "./ProductCard"

const relatedProducts = [
    {
        id: 2,
        name: "Submariner Date",
        brand: "Rolex",
        price: 14000,
        image: "/placeholder.svg?height=600&width=600",
        category: "Diving",
    },
    {
        id: 3,
        name: "Royal Oak",
        brand: "Audemars Piguet",
        price: 28000,
        image: "/placeholder.svg?height=600&width=600",
        category: "Luxury",
    },
    {
        id: 4,
        name: "Seamaster 300M",
        brand: "Omega",
        price: 5200,
        image: "/placeholder.svg?height=600&width=600",
        category: "Diving",
    },
    {
        id: 5,
        name: "Luminor Marina",
        brand: "Panerai",
        price: 7500,
        image: "/placeholder.svg?height=600&width=600",
        category: "Diving",
    },
]

export default function RelatedProducts() {
    return (
        <div>
            <h2 className="text-2xl font-bold tracking-tight">You may also like</h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                {relatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}
