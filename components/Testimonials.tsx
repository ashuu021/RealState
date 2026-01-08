import Image from "next/image";
import { Quote } from "lucide-react";

export default function Testimonials() {
    return (
        <section className="py-24 bg-white">
            <div className="container-custom text-center">
                <h2 className="text-4xl font-bold text-foreground mb-16">What People Say About Us</h2>

                <div className="max-w-4xl mx-auto relative">
                    <Quote className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 h-16 text-primary/10 rotate-180" />

                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-2xl md:-rotate-3">
                            <Image src="/hero.png" alt="Client" fill className="object-cover" />
                        </div>

                        <div className="md:col-span-2 text-left pl-0 md:pl-10">
                            <Quote className="w-10 h-10 text-primary mb-6" />
                            <p className="text-2xl font-medium text-foreground leading-relaxed mb-8">
                                "This website made our home buying journey smooth! The listings were detailed,
                                and the interface was incredibly user-friendly. We found our dream home in just a few clicks.
                                Highly recommend this platform to anyone looking for property!"
                            </p>
                            <div>
                                <h4 className="text-xl font-bold text-foreground">Sarah Daniel</h4>
                                <p className="text-gray-500">Marketing Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
