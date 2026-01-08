import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function BlogSection() {
    const articles = [
        {
            id: 1,
            title: "Five Essential Steps to Buying Your Dream Home",
            date: "Oct 24, 2024",
            image: "/hero.png", // Reuse
            excerpt: "Buying a home is a significant milestone. Here are the key steps to navigate the process smoothly.",
        },
        {
            id: 2,
            title: "The Ultimate Guide to Real Estate Investment",
            date: "Oct 20, 2024",
            image: "/hero.png", // Reuse
            excerpt: "Real estate investment can be lucrative if approached correctly. Learn the basics today.",
        },
        {
            id: 3,
            title: "How to Stage Your Home for a Quick Sale",
            date: "Oct 15, 2024",
            image: "/hero.png", // Reuse
            excerpt: "First impressions matter. Discover expert tips on staging your home to attract potential buyers.",
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container-custom">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-4xl font-bold text-foreground">News & Articles</h2>
                    <Link href="/blog" className="text-primary font-semibold flex items-center hover:underline">
                        View All Articles <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <div key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    {article.date}
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-gray-500 mb-4 line-clamp-2">
                                    {article.excerpt}
                                </p>
                                <Link href={`/blog/${article.id}`} className="text-primary font-medium inline-flex items-center hover:underline">
                                    Read More <ArrowRight className="ml-1 w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
