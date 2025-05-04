import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-[70vh] px-4">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-primary">404</h1>
                <h2 className="mt-4 text-3xl font-bold tracking-tight">Page Not Found</h2>
                <p className="mt-6 text-lg text-slate-600">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
                <div className="mt-10 flex items-center justify-center gap-6">
                    <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                        <Link href="/">Return Home</Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/collections">Browse Collections</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
