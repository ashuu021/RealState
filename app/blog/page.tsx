import Link from "next/link";

export default function BlogPage() {
    return (
        <div className="container-custom py-20 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
                    <p className="text-gray-500">Latest news, trends, and real estate insights.</p>
                </header>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Blog Entry 1 */}
                    <Link href="/blog/real-estate-trends-2024" className="block group">
                        <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white">
                            <div className="h-48 relative bg-gray-200">
                                <img
                                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Real Estate Trends"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <span className="text-primary text-xs font-bold uppercase tracking-wider">Market Trends</span>
                                <h3 className="text-lg font-bold mt-2 mb-2 group-hover:text-primary transition-colors">Indian Real Estate Outlook 2024</h3>
                                <p className="text-gray-500 text-sm line-clamp-3">
                                    The Indian real estate market is witnessing a significant surge in demand for luxury properties.
                                    Experts predict a 15% growth in the residential sector across top metros like Mumbai and NCR.
                                </p>
                            </div>
                        </div>
                    </Link>

                    {/* Blog Entry 2 */}
                    <Link href="/blog/investment-tips" className="block group">
                        <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white">
                            <div className="h-48 relative bg-gray-200">
                                <img
                                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Investment Tips"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <span className="text-primary text-xs font-bold uppercase tracking-wider">Investment</span>
                                <h3 className="text-lg font-bold mt-2 mb-2 group-hover:text-primary transition-colors">Why Invest in Gurugram?</h3>
                                <p className="text-gray-500 text-sm line-clamp-3">
                                    Gurugram continues to be a hotspot for real estate investment with high rental yields and capital appreciation.
                                    Discover the top 5 sectors to watch out for.
                                </p>
                            </div>
                        </div>
                    </Link>

                    {/* Blog Entry 3 */}
                    <Link href="/blog/home-decor-ideas" className="block group">
                        <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white">
                            <div className="h-48 relative bg-gray-200">
                                <img
                                    src="https://images.unsplash.com/photo-1600210491892-0b12f9b7abdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Home Decor"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <span className="text-primary text-xs font-bold uppercase tracking-wider">Lifestyle</span>
                                <h3 className="text-lg font-bold mt-2 mb-2 group-hover:text-primary transition-colors">Modern Indian Home Decor</h3>
                                <p className="text-gray-500 text-sm line-clamp-3">
                                    Blend traditional Indian aesthetics with modern minimalism.
                                    Tips on using brass elements, vibrant textiles, and contemporary furniture.
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
