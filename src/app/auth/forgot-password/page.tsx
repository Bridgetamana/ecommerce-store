"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setSuccess("")
        setIsLoading(true)
    }

    return (
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Forgot Password</h1>
                    <p className="mt-2 text-sm text-slate-600">
                        Enter your email to receive a password reset link
                    </p>
                </div>

                <div className="mt-8">
                    <div className="bg-white py-8 px-4 shadow-sm sm:rounded-lg sm:px-10">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {error && (
                                <div className="rounded-md bg-red-50 p-4">
                                    <p className="text-sm text-red-700">{error}</p>
                                </div>
                            )}

                            {success && (
                                <div className="rounded-md bg-green-50 p-4">
                                    <p className="text-sm text-green-700">{success}</p>
                                </div>
                            )}

                            <div>
                                <Label htmlFor="email">Email address</Label>
                                <div className="mt-1">
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <Button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary/90 text-white"
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Sending..." : "Send Reset Link"}
                                </Button>
                            </div>
                        </form>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-slate-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="bg-white px-2 text-slate-500">Or</span>
                                </div>
                            </div>

                            <div className="mt-6 text-center">
                                <Link
                                    href="/auth/login"
                                    className="text-primary hover:text-primary/80 font-medium text-sm inline-flex items-center"
                                >
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Return to sign in
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}