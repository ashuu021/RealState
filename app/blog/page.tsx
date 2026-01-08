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
                    {/* Placeholder content since no actual blog system exists yet */}
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="h-48 bg-gray-200 animate-pulse" />
                            <div className="p-6">
                                <div className="h-4 w-24 bg-gray-200 rounded mb-4" />
                                <div className="h-6 w-full bg-gray-200 rounded mb-2" />
                                <div className="h-6 w-2/3 bg-gray-200 rounded" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
