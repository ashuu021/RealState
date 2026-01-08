import Link from "next/link";
import { Button } from "@/components/Button";

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground">About XYZ Group</h1>
                        <p className="text-xl text-gray-500">Redefining Real Estate in India</p>
                    </div>

                    <div className="prose prose-lg max-w-none text-gray-600">
                        <p>
                            Welcome to <strong>XYZ Group</strong>, India's premier real estate consultancy.
                            With a legacy of trust and a vision for the future, we specialize in luxury residential
                            and commercial properties across the nation's most prime locations, including Delhi NCR, Mumbai, and Bangalore.
                        </p>
                        <p>
                            Our mission is to simplify the property buying journey for our clients by providing
                            transparent, data-driven, and personalized services. Whether you are looking for
                            a sprawling villa, a modern apartment, or a high-yield investment, XYZ Group is your trusted partner.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 pt-8">
                        <div className="p-6 bg-gray-50 rounded-xl text-center">
                            <h3 className="text-4xl font-bold text-primary mb-2">15+</h3>
                            <p className="text-gray-600">Years of Experience</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl text-center">
                            <h3 className="text-4xl font-bold text-primary mb-2">5000+</h3>
                            <p className="text-gray-600">Happy Families</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl text-center">
                            <h3 className="text-4xl font-bold text-primary mb-2">₹2000Cr+</h3>
                            <p className="text-gray-600">Properties Sold</p>
                        </div>
                    </div>

                    <div className="flex justify-center pt-8">
                        <Link href="/contact">
                            <Button size="lg">Contact Us Today</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
