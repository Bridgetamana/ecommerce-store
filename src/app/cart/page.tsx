"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react"
import { useCart } from "../../context/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

interface CartItem {
    id: number
    name: string
    brand: string
    price: number
    image: string
    quantity: number
}

export default function CartPage() {
    const { cart, updateQuantity, removeFromCart, subtotal } = useCart()
    const [promoCode, setPromoCode] = useState("")
    const [promoApplied, setPromoApplied] = useState(false)

    const shipping = 0
    const discount = promoApplied ? subtotal * 0.1 : 0 
    const total = subtotal - discount + shipping

    const handleApplyPromo = (e: React.FormEvent) => {
        e.preventDefault()
        if (promoCode.toLowerCase() === "luxury10") {
            setPromoApplied(true)
        }
    }

    if (cart.length === 0) {
        return (
            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Your Cart is Empty</h1>
                    <p className="mt-4 text-slate-600">Looks like you haven&apos;t added any watches to your cart yet.</p>
                    <Link href="/collections">
                        <Button className="mt-8 bg-primary hover:bg-primary/90 text-white">Continue Shopping</Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight">Shopping Cart</h1>

                <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12">
                    <div className="lg:col-span-8">
                        <div className="border-b border-t border-slate-200 divide-y divide-slate-200">
                            {cart.map((item: CartItem) => (
                                <div key={item.id} className="py-6 sm:py-10 flex">
                                    <div className="flex-shrink-0">
                                        <Image
                                            src={item.image || "/placeholder.svg"}
                                            alt={item.name}
                                            width={120}
                                            height={120}
                                            className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
                                        />
                                    </div>

                                    <div className="ml-6 flex flex-1 flex-col">
                                        <div className="flex justify-between">
                                            <div>
                                                <h3 className="text-base font-medium text-slate-900">
                                                    <Link href={`/products/${item.id}`}>{item.name}</Link>
                                                </h3>
                                                <p className="mt-1 text-sm text-slate-500">{item.brand}</p>
                                            </div>
                                            <p className="text-base font-medium text-slate-900">${item.price.toLocaleString()}</p>
                                        </div>

                                        <div className="mt-4 flex flex-1 items-end justify-between">
                                            <div className="flex items-center border border-slate-200 rounded-md">
                                                <button
                                                    type="button"
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="p-2 text-slate-600 hover:text-slate-900"
                                                >
                                                    <Minus className="h-4 w-4" />
                                                </button>
                                                <Input
                                                    type="number"
                                                    min="1"
                                                    value={item.quantity}
                                                    onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value))}
                                                    className="w-12 text-center border-0 focus-visible:ring-0"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="p-2 text-slate-600 hover:text-slate-900"
                                                >
                                                    <Plus className="h-4 w-4" />
                                                </button>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-sm font-medium text-primary hover:text-primary/80 flex items-center"
                                            >
                                                <Trash2 className="h-4 w-4 mr-1" />
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6">
                            <Link
                                href="/collections"
                                className="text-sm font-medium text-primary hover:text-primary/80 flex items-center"
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Continue Shopping
                            </Link>
                        </div>
                    </div>

                    <div className="mt-16 rounded-lg bg-slate-50 px-6 py-6 sm:p-6 lg:col-span-4 lg:mt-0 lg:p-8">
                        <h2 className="text-lg font-medium text-slate-900">Order Summary</h2>

                        <div className="mt-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-slate-600">Subtotal</p>
                                <p className="text-base font-medium text-slate-900">${subtotal.toLocaleString()}</p>
                            </div>

                            {promoApplied && (
                                <div className="flex items-center justify-between text-sm">
                                    <p className="text-sm text-slate-600">Discount (10%)</p>
                                    <p className="text-base font-medium text-green-600">-${discount.toLocaleString()}</p>
                                </div>
                            )}

                            <div className="flex items-center justify-between text-sm">
                                <p className="text-sm text-slate-600">Shipping</p>
                                <p className="text-base font-medium text-slate-900">Free</p>
                            </div>

                            <Separator />

                            <div className="flex items-center justify-between">
                                <p className="text-base font-medium text-slate-900">Total</p>
                                <p className="text-xl font-semibold text-slate-900">${total.toLocaleString()}</p>
                            </div>
                        </div>

                        <form onSubmit={handleApplyPromo} className="mt-6">
                            <div className="sm:flex sm:space-x-2">
                                <Input
                                    type="text"
                                    placeholder="Promo code"
                                    value={promoCode}
                                    onChange={(e) => setPromoCode(e.target.value)}
                                    className="w-full"
                                />
                                <Button
                                    type="submit"
                                    variant="outline"
                                    className="mt-3 w-full sm:mt-0 sm:w-auto"
                                    disabled={promoApplied}
                                >
                                    {promoApplied ? "Applied" : "Apply"}
                                </Button>
                            </div>
                            {promoApplied && <p className="mt-2 text-sm text-green-600">Promo code applied successfully!</p>}
                        </form>

                        <div className="mt-6">
                            <Link href="/checkout">
                                <Button className="w-full bg-primary hover:bg-primary/90 text-white">Proceed to Checkout</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
