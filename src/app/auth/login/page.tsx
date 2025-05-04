"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setIsLoading(true)
    }

    return (
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Sign In</h1>
                    <p className="mt-2 text-sm text-slate-600">
                        Sign in to your account to view your orders and manage your profile.
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
                                <Label htmlFor="password">Password</Label>
                                <div className="mt-1">
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <Checkbox id="remember-me" />
                                    <Label htmlFor="remember-me" className="ml-2 text-sm">
                                        Remember me
                                    </Label>
                                </div>

                                <div className="text-sm">
                                    <Link href="/auth/forgot-password" className="text-primary hover:text-primary/80">
                                        Forgot your password?
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white" disabled={isLoading}>
                                    {isLoading ? "Signing in..." : "Sign in"}
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

                            <div className="mt-6">
                                <p className="text-center text-sm text-slate-600">
                                    Don&apos;t have an account?{" "}
                                    <Link href="/auth/signup" className="text-primary hover:text-primary/80 font-medium">
                                        Create an account
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
