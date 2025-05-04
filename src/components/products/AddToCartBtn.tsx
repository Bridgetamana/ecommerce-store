"use client"

import type React from "react"

import { useState } from "react"
import { ShoppingBag } from "lucide-react"
import { useCart } from "../../context/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Product {
    id: number
    name: string
    brand: string
    price: number
    images: string[]
}

export default function AddToCartButton({ product }: { product: Product }) {
    const [quantity, setQuantity] = useState(1)
    const [isAdding, setIsAdding] = useState(false)
    const { addToCart } = useCart()

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        if (value > 0) {
            setQuantity(value)
        }
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    const handleAddToCart = () => {
        setIsAdding(true)
        addToCart({
            id: product.id,
            name: product.name,
            brand: product.brand,
            price: product.price,
            image: product.images[0],
            quantity,
        })
        setTimeout(() => {
            setIsAdding(false)
        }, 1000)
    }

    return (
        <div>
            <div className="flex items-center mb-6">
                <div className="flex items-center border border-slate-200 rounded-md">
                    <button type="button" onClick={decreaseQuantity} className="p-2 text-slate-600 hover:text-slate-900">
                        -
                    </button>
                    <Input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="w-16 text-center border-0 focus-visible:ring-0"
                    />
                    <button type="button" onClick={increaseQuantity} className="p-2 text-slate-600 hover:text-slate-900">
                        +
                    </button>
                </div>
            </div>

            <Button
                onClick={handleAddToCart}
                className="w-full bg-primary hover:bg-primary/90 text-white h-12"
                disabled={isAdding}
            >
                <ShoppingBag className="mr-2 h-5 w-5" />
                {isAdding ? "Adding to Cart..." : "Add to Cart"}
            </Button>
        </div>
    )
}
