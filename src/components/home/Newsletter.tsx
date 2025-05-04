"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
    const [email, setEmail] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitted(true)
    }

    return (
        <section className="py-16 sm:py-24 bg-primary text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold">Stay Updated</h2>
                    <p className="mt-4 text-slate-300">
                        Subscribe to our newsletter to receive updates on new arrivals, special offers, and exclusive events.
                    </p>

                    {isSubmitted ? (
                        <div className="mt-8 p-4 bg-slate-800 rounded-lg">
                            <p className="text-slate-200">
                                Thank you for subscribing! We'll keep you updated with our latest collections and offers.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="mt-8 sm:flex sm:max-w-md sm:mx-auto">
                            <div className="min-w-0 flex-1">
                                <Input
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus-visible:ring-primary"
                                />
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                                    Subscribe
                                </Button>
                            </div>
                        </form>
                    )}

                    <p className="mt-4 text-xs text-slate-400">
                        By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                    </p>
                </div>
            </div>
        </section>
    )
}
