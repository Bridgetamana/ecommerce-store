"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Search, ShoppingBag, User, X } from "lucide-react"
import { useCart } from "../../context/cart-context"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/collections" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Brands", href: "/brands" },
    { name: "About", href: "/about" },
]

export default function Header() {
    const pathname = usePathname()
    const { cart } = useCart()
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    

    const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);    
    return (
        <header className="relative bg-white z-10">
            <div className="border-b border-slate-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="lg:hidden">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                                <div className="flex flex-col h-full">
                                    <div className="px-4 py-6">
                                        <Link href="/" className="text-2xl font-playfair font-bold">
                                            CHRONOS
                                        </Link>
                                        <nav className="mt-8 flex flex-col gap-6">
                                            {navigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className={`text-base ${pathname === item.href ? "font-medium text-primary" : "text-slate-600 hover:text-slate-900"
                                                        }`}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </nav>
                                    </div>
                                    <div className="mt-auto border-t border-slate-200 px-4 py-6">
                                        
                                            <div className="flex flex-col gap-3">
                                                <Link href="/auth/login" className="btn-primary w-full justify-center">
                                                    Sign In
                                                </Link>
                                                <Link href="/auth/signup" className="btn-outline w-full justify-center">
                                                    Create Account
                                                </Link>
                                            </div>
                                    
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                        <div className="flex lg:ml-0">
                            <Link href="/" className="text-2xl font-playfair font-bold">
                                CHRONOS
                            </Link>
                        </div>
                        <nav className="hidden lg:flex lg:gap-8">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`text-sm ${pathname === item.href ? "font-medium text-primary" : "text-slate-600 hover:text-slate-900"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                {isSearchOpen ? (
                                    <div className="absolute right-0 top-0 w-full sm:w-80">
                                        <div className="flex items-center">
                                            <Input type="search" placeholder="Search for watches..." className="w-full" autoFocus />
                                            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)} className="ml-2">
                                                <X className="h-5 w-5" />
                                            </Button>
                                        </div>
                                    </div>
                                ) : (
                                    <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                                        <Search className="h-5 w-5" />
                                        <span className="sr-only">Search</span>
                                    </Button>
                                )}
                            </div>

                            <div className="hidden md:block">
                                
                                    <Link href="/auth/login">
                                        <Button variant="ghost" size="icon">
                                            <User className="h-5 w-5" />
                                            <span className="sr-only">Sign in</span>
                                        </Button>
                                    </Link>
                                
                            </div>
                            <Link href="/cart">
                                <Button variant="ghost" size="icon" className="relative">
                                    <ShoppingBag className="h-5 w-5" />
                                    <span className="sr-only">Cart</span>
                                    <Badge
                                        className={`absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-primary text-white transition-opacity ${cartItemsCount > 0 ? 'opacity-100' : 'opacity-0'
                                            }`}
                                    >
                                        {cartItemsCount}
                                    </Badge>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
