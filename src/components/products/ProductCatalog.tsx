"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProductCard from "./ProductCard"

const products = [
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
    {
        id: 5,
        name: "Luminor Marina",
        brand: "Panerai",
        price: 7500,
        image: "/hero-image.png",
        category: "Diving",
    },
    {
        id: 6,
        name: "Portugieser Chronograph",
        brand: "IWC",
        price: 7600,
        image: "/hero-image.png",
        category: "Dress",
    },
    {
        id: 7,
        name: "Reverso Classic",
        brand: "Jaeger-LeCoultre",
        price: 6900,
        image: "/hero-image.png",
        category: "Dress",
    },
    {
        id: 8,
        name: "Speedmaster Professional",
        brand: "Omega",
        price: 6300,
        image: "/hero-image.png",
        category: "Sport",
    },
    {
        id: 9,
        name: "Navitimer B01 Chronograph",
        brand: "Breitling",
        price: 8500,
        image: "/hero-image.png",
        category: "Pilot",
    },
]

export default function ProductCatalog() {
    const [sortOption, setSortOption] = useState("featured")
    const [displayedProducts, setDisplayedProducts] = useState(products)

    useEffect(() => {
        const sorted = [...products]

        switch (sortOption) {
            case "price-low-high":
                sorted.sort((a, b) => a.price - b.price)
                break
            case "price-high-low":
                sorted.sort((a, b) => b.price - a.price)
                break
            case "newest":
                break
            default:
                break
        }

        setDisplayedProducts(sorted)
    }, [sortOption])

    return (
        <div>
            <div className="flex items-center justify-between pb-6">
                <div className="flex items-center">
                    <p className="text-sm text-slate-500">
                        Showing <span className="font-medium">{displayedProducts.length}</span> products
                    </p>
                </div>

                <div className="flex items-center">
                    <Select value={sortOption} onValueChange={setSortOption}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="featured">Featured</SelectItem>
                            <SelectItem value="newest">Newest</SelectItem>
                            <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                            <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
                {displayedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className="mt-12 flex justify-center">
                <Button variant="outline" className="mx-auto">
                    Load More
                </Button>
            </div>
        </div>
    )
}
