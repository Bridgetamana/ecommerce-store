"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignUpPage() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [acceptTerms, setAcceptTerms] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (password !== confirmPassword) {
            setError("Passwords don't match")
            return
        }

        if (!acceptTerms) {
            setError("You must accept the terms and conditions")
            return
        }

        setIsLoading(true)
    }

    return (
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Create Account</h1>
                    <p className="mt-2 text-sm text-slate-600">
                        Create an account to track your orders and save your preferences.
                    </p>
                </div>

                <div className="mt-8">
                    <div className="bg-white py-8 px-4 shadow-sm sm:rounded-lg sm:px-10">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {error && (
                                <div className="rounded-md bg-red-50 p-4">
                                    <p className="text-sm text-red-700">{error}</p>
                                </div>
                            )}

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="firstName">First Name</Label>
                                    <div className="mt-1">
                                        <Input
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            autoComplete="given-name"
                                            required
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <div className="mt-1">
                                        <Input
                                            id="lastName"
                                            name="lastName"
                                            type="text"
                                            autoComplete="family-name"
                                            required
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

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
                                        autoComplete="new-password"
                                        required
                                        minLength={8}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <p className="mt-1 text-xs text-slate-500">
                                    Must be at least 8 characters
                                </p>
                            </div>

                            <div>
                                <Label htmlFor="confirmPassword">Confirm Password</Label>
                                <div className="mt-1">
                                    <Input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        autoComplete="new-password"
                                        required
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <Checkbox
                                        id="terms"
                                        checked={acceptTerms}
                                        onCheckedChange={(checked) => setAcceptTerms(!!checked)}
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <Label htmlFor="terms">
                                        I agree to the{' '}
                                        <Link href="/terms" className="text-primary hover:text-primary/80">
                                            Terms of Service
                                        </Link>{' '}
                                        and{' '}
                                        <Link href="/privacy" className="text-primary hover:text-primary/80">
                                            Privacy Policy
                                        </Link>
                                    </Label>
                                </div>
                            </div>

                            <div>
                                <Button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary/90 text-white"
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Creating account..." : "Create Account"}
                                </Button>
                            </div>
                        </form>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-slate-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="bg-white px-2 text-slate-500">Already have an account?</span>
                                </div>
                            </div>

                            <div className="mt-6 text-center">
                                <Link
                                    href="/auth/login"
                                    className="text-primary hover:text-primary/80 font-medium text-sm"
                                >
                                    Sign in to your account
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}