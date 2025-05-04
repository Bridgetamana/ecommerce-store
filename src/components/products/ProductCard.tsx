"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingCart } from "lucide-react"
import { useCart } from "../../context/cart-context"
import { Button } from "@/components/ui/button"

interface Product {
    id: number
    name: string
    brand: string
    price: number
    image: string
    category: string
}

export default function ProductCard({ product }: { product: Product }) {
    const [isFavorite, setIsFavorite] = useState(false)
    const { addToCart } = useCart()

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault()
        addToCart({
            id: product.id,
            name: product.name,
            brand: product.brand,
            price: product.price,
            image: product.image,
            quantity: 1,
        })
    }

    const toggleFavorite = (e: React.MouseEvent) => {
        e.preventDefault()
        setIsFavorite(!isFavorite)
    }

    return (
        <div className="group relative">
            <div className="aspect-square overflow-hidden rounded-lg bg-slate-100 relative">
                <Link href={`/products/${product.id}`} className="block h-full w-full">
                    <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <button
                        onClick={toggleFavorite}
                        className="absolute top-4 right-4 z-10 rounded-full bg-white p-2 shadow-md"
                    >
                        <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-slate-400"}`} />
                        <span className="sr-only">Add to favorites</span>
                    </button>
                </Link>
            </div>

            <div className="mt-4 flex flex-col">
                <div>
                    <h3 className="text-sm text-slate-500">{product.brand}</h3>
                    <h2 className="mt-1 text-lg font-medium">
                        <Link href={`/products/${product.id}`} className="hover:text-primary">
                            {product.name}
                        </Link>
                    </h2>
                </div>
                <div className="mt-1 flex items-center justify-between">
                    <p className="text-lg font-medium">${product.price.toLocaleString()}</p>
                    <span className="text-xs uppercase tracking-wide text-slate-500">{product.category}</span>
                </div>
            </div>

            {/* Always visible Add to Cart button */}
            <div className="mt-4">
                <Button
                    onClick={handleAddToCart}
                    className="w-full bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
                >
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                </Button>
            </div>
        </div>
    )
}