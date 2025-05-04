import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import ProductFilters from "@/components/products/ProductFilters"
import ProductCatalog from "@/components/products/ProductCatalog"

export default function CollectionsPage() {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="border-b border-slate-200 pb-10">
                    <h1 className="text-4xl font-bold tracking-tight">Our Collections</h1>
                    <p className="mt-4 text-base text-slate-500">
                        Discover our curated selection of luxury timepieces from the world&apos;s most prestigious watchmakers.
                    </p>
                </div>

                <div className="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8">
                    <ProductFilters />

                    <div className="mt-6 lg:col-span-2 lg:mt-0">
                        <Suspense fallback={<ProductCatalogSkeleton />}>
                            <ProductCatalog />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ProductCatalogSkeleton() {
    return (
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="group relative">
                    <Skeleton className="aspect-square w-full rounded-lg" />
                    <div className="mt-4 flex flex-col">
                        <Skeleton className="h-4 w-1/3" />
                        <Skeleton className="h-6 w-2/3 mt-2" />
                        <Skeleton className="h-4 w-1/4 mt-2" />
                    </div>
                </div>
            ))}
        </div>
    )
}
