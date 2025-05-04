import { Star } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const reviews = [
    {
        id: 1,
        author: "Michael Thompson",
        rating: 5,
        date: "May 12, 2023",
        title: "Exceptional craftsmanship",
        content:
            "The attention to detail on this timepiece is remarkable. The movement is precise, and the finishing is impeccable. Worth every penny for a true watch enthusiast.",
    },
    {
        id: 2,
        author: "Sarah Johnson",
        rating: 5,
        date: "April 3, 2023",
        title: "A masterpiece of horology",
        content:
            "This watch exceeds all expectations. The blue dial catches the light beautifully, and the bracelet is extremely comfortable. It's versatile enough for both formal occasions and everyday wear.",
    },
    {
        id: 3,
        author: "David Chen",
        rating: 4,
        date: "March 18, 2023",
        title: "Nearly perfect",
        content:
            "An excellent timepiece with superb craftsmanship. The only minor issue is that the clasp can be a bit finicky to operate at times. Otherwise, it's a stunning watch that I'm proud to own.",
    },
]

const ratingCounts = {
    5: 98,
    4: 21,
    3: 4,
    2: 1,
    1: 0,
}

const totalReviews = Object.values(ratingCounts).reduce((sum, count) => sum + count, 0)

export default function ProductReviews() {
    return (
        <div>
            <h2 className="text-2xl font-bold tracking-tight">Customer Reviews</h2>

            <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-8">
                <div className="lg:col-span-4">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                                <Star
                                    key={rating}
                                    className={`h-5 w-5 ${4.9 > rating ? "fill-amber-400 text-amber-400" : "text-slate-300"}`}
                                />
                            ))}
                        </div>
                        <p className="ml-3 text-sm text-slate-700">Based on {totalReviews} reviews</p>
                    </div>

                    <div className="mt-6">
                        <h3 className="sr-only">Review data</h3>

                        <dl className="space-y-3">
                            {[5, 4, 3, 2, 1].map((rating) => (
                                <div key={rating} className="flex items-center text-sm">
                                    <dt className="flex flex-1 items-center">
                                        <p className="w-3 font-medium text-slate-900">{rating}</p>
                                        <Star className="ml-1 h-4 w-4 fill-amber-400 text-amber-400" />
                                        <div className="ml-3 flex-1">
                                            <Progress
                                                value={(ratingCounts[rating as keyof typeof ratingCounts] / totalReviews) * 100}
                                                className="h-2"
                                            />
                                        </div>
                                    </dt>
                                    <dd className="ml-3 w-10 text-right text-sm text-slate-700">
                                        {Math.round((ratingCounts[rating as keyof typeof ratingCounts] / totalReviews) * 100)}%
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>

                <div className="mt-10 lg:col-span-8 lg:mt-0">
                    <div className="flow-root">
                        <div className="-my-6 divide-y divide-slate-200">
                            {reviews.map((review) => (
                                <div key={review.id} className="py-6">
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                <Star
                                                    key={rating}
                                                    className={`h-4 w-4 ${review.rating > rating ? "fill-amber-400 text-amber-400" : "text-slate-300"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <p className="ml-3 text-sm text-slate-700">{review.rating} out of 5 stars</p>
                                    </div>

                                    <h4 className="mt-3 text-base font-medium text-slate-900">{review.title}</h4>

                                    <div className="mt-1 flex items-center">
                                        <p className="text-sm font-medium text-slate-900">{review.author}</p>
                                        <time className="ml-4 text-sm text-slate-500">{review.date}</time>
                                    </div>

                                    <p className="mt-4 text-sm text-slate-700">{review.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
