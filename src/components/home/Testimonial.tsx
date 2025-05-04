import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
    {
        id: 1,
        name: "James Wilson",
        role: "Watch Collector",
        content:
            "The quality and craftsmanship of the watches I've purchased from Chronos are exceptional. Their customer service is equally impressive.",
        avatar: "/placeholder.svg?height=80&width=80",
        rating: 5,
    },
    {
        id: 2,
        name: "Sophia Chen",
        role: "Luxury Consultant",
        content:
            "As someone who works in the luxury industry, I appreciate Chronos' attention to detail and authenticity. Their collection is truly world-class.",
        avatar: "/placeholder.svg?height=80&width=80",
        rating: 5,
    },
    {
        id: 3,
        name: "Michael Rodriguez",
        role: "CEO, Global Investments",
        content:
            "I've been collecting watches for over 20 years, and Chronos consistently provides the most seamless buying experience in the industry.",
        avatar: "/placeholder.svg?height=80&width=80",
        rating: 5,
    },
]

export default function Testimonials(){
    return (
        <section className="py-16 sm:py-24 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">What Our Clients Say</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                                    <Image
                                        src={testimonial.avatar || "/placeholder.svg"}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-medium">{testimonial.name}</h3>
                                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                                </div>
                            </div>

                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>

                            <p className="text-slate-700">{testimonial.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
