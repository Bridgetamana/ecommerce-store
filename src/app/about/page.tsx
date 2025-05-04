import Image from "next/image"

export default function AboutPage() {
    return (
        <div className="bg-white">
            <div className="relative">
                <div className="absolute inset-0">
                    <Image src="/hero-image.png" alt="Luxury watches" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-900/30" />
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">About Chronos</h1>
                    <p className="mt-6 max-w-3xl text-xl text-slate-300">Dedicated to the art of fine watchmaking since 1975.</p>
                </div>
            </div>
            <div className="bg-white py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Story</h2>
                            <p className="mt-4 text-lg text-slate-600">
                                Founded in 1975 by master horologist James Chronos, our company began as a small boutique in Geneva,
                                Switzerland. With a passion for precision and craftsmanship, James curated a collection of the world&apos;s
                                finest timepieces, establishing relationships with the most prestigious watchmakers.
                            </p>
                            <p className="mt-4 text-lg text-slate-600">
                                Over the decades, Chronos has grown into a global destination for watch enthusiasts and collectors,
                                while maintaining our commitment to exceptional service and expertise. Today, we continue to honor our
                                founder&apos;s legacy by offering only the finest timepieces that represent the pinnacle of horological
                                achievement.
                            </p>
                        </div>
                        <div className="mt-10 lg:mt-0">
                            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                                <Image
                                    src="/hero-image.png"
                                    alt="Our founder"
                                    width={1200}
                                    height={800}
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-50 py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Values</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">The principles that guide everything we do.</p>
                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900">Exceptional Quality</h3>
                            <p className="mt-4 text-slate-600">
                                We curate only the finest timepieces from the world&apos;s most prestigious watchmakers, ensuring that every
                                watch we offer represents the pinnacle of horological craftsmanship.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900">Expert Knowledge</h3>
                            <p className="mt-4 text-slate-600">
                                Our team consists of passionate watch experts with deep knowledge of horology, providing customers with
                                informed guidance and insights.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900">Personalized Service</h3>
                            <p className="mt-4 text-slate-600">
                                We believe in building lasting relationships with our clients, offering personalized service that goes
                                beyond the transaction to create a memorable experience.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900">Authenticity Guaranteed</h3>
                            <p className="mt-4 text-slate-600">
                                Every timepiece we sell comes with a certificate of authenticity and a comprehensive warranty, ensuring
                                complete peace of mind with your purchase.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900">Global Perspective</h3>
                            <p className="mt-4 text-slate-600">
                                With locations in major cities around the world, we bring a global perspective to our curation, offering
                                diverse collections that appeal to international tastes.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900">Tradition & Innovation</h3>
                            <p className="mt-4 text-slate-600">
                                We honor the rich traditions of watchmaking while embracing innovation, offering both heritage pieces
                                and cutting-edge timepieces.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Leadership Team</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">Meet the experts behind Chronos.</p>
                    </div>

                    <div className="mt-16 grid gap-12 lg:grid-cols-3 sm:gap-x-6 sm:gap-y-12">
                        {[
                            {
                                name: "Michael Chronos",
                                role: "CEO & Head of Curation",
                                image: "/avatar.avif",
                                bio: "Grandson of founder James Chronos, Michael has been immersed in the world of luxury watches since childhood. With over 20 years of experience in the industry, he leads our global curation team.",
                            },
                            {
                                name: "Sophia Chen",
                                role: "Chief Operating Officer",
                                image: "/avatar.avif",
                                bio: "With a background in luxury retail management, Sophia oversees all operations across our global locations, ensuring that the Chronos experience is consistently exceptional.",
                            },
                            {
                                name: "Robert Müller",
                                role: "Master Watchmaker",
                                image: "/avatar.avif",
                                bio: "Trained in Switzerland, Robert leads our team of watchmakers who handle inspections, maintenance, and restoration of the fine timepieces in our collection.",
                            },
                        ].map((person) => (
                            <div key={person.name} className="text-center">
                                <div className="mx-auto h-40 w-40 rounded-full overflow-hidden">
                                    <Image
                                        src={person.image || "/placeholder.svg"}
                                        alt={person.name}
                                        width={160}
                                        height={160}
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="mt-6 text-xl font-bold text-slate-900">{person.name}</h3>
                                <p className="text-sm text-primary">{person.role}</p>
                                <p className="mt-2 text-base text-slate-600">{person.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
