import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-primary text-slate-200">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                    <div className="sm:col-span-2">
                        <Link href="/" className="text-2xl font-playfair font-bold text-white">
                            CHRONOS
                        </Link>
                        <p className="mt-4 text-sm text-slate-400 max-w-md">
                            Discover exceptional luxury timepieces from the world&apos;s most prestigious brands. Each watch in our
                            collection represents the pinnacle of craftsmanship and design.
                        </p>
                        <div className="mt-6 flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-white">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Shop</h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link href="/collections" className="text-sm text-slate-400 hover:text-white">
                                    Collections
                                </Link>
                            </li>
                            <li>
                                <Link href="/new-arrivals" className="text-sm text-slate-400 hover:text-white">
                                    New Arrivals
                                </Link>
                            </li>
                            <li>
                                <Link href="/brands" className="text-sm text-slate-400 hover:text-white">
                                    Brands
                                </Link>
                            </li>
                            <li>
                                <Link href="/sale" className="text-sm text-slate-400 hover:text-white">
                                    Special Offers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Support</h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link href="/contact" className="text-sm text-slate-400 hover:text-white">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-sm text-slate-400 hover:text-white">
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link href="/shipping" className="text-sm text-slate-400 hover:text-white">
                                    Shipping & Returns
                                </Link>
                            </li>
                            <li>
                                <Link href="/warranty" className="text-sm text-slate-400 hover:text-white">
                                    Warranty
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link href="/about" className="text-sm text-slate-400 hover:text-white">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/stores" className="text-sm text-slate-400 hover:text-white">
                                    Store Locations
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-sm text-slate-400 hover:text-white">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-sm text-slate-400 hover:text-white">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-800 pt-8">
                    <p className="text-xs text-slate-400">
                        &copy; {new Date().getFullYear()} Chronos Luxury Timepieces. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}