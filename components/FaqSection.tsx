"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { cn } from "./Button";

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "How do I find the right property for my needs?",
            answer: "You can use our advanced search filters to narrow down properties by location, price, type, and amenities. Our team is also available to provide personalized recommendations."
        },
        {
            question: "Do you provide assistance with home loans?",
            answer: "Yes, we have partnerships with leading banks and financial institutions to help you secure the best home loan rates and terms."
        },
        {
            question: "How can I schedule a property visit?",
            answer: "Simply click the 'Book Site Visit' button on any property detail page, or contact our support team directly to schedule a convenient time."
        },
        {
            question: "Can I list my property on your website?",
            answer: "Absolutely! We help property owners connect with potential buyers and tenants. Contact us to list your property."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Image */}
                <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                        src="/hero.png" // Reuse or placeholders
                        alt="Modern Apartment"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-8 left-8 text-white max-w-xs">
                        <h3 className="text-2xl font-bold mb-2">Expert Support</h3>
                        <p className="opacity-90">We are here to help you every step of the way.</p>
                    </div>
                </div>

                {/* Right Accordion */}
                <div>
                    <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-500 mb-10">
                        Find answers to common questions about buying, selling, and renting properties.
                    </p>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "border rounded-xl transition-all duration-300 overflow-hidden",
                                    openIndex === index ? "border-primary bg-primary-light/10" : "border-gray-200"
                                )}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="flex items-center justify-between w-full p-6 text-left"
                                >
                                    <span className={cn("font-bold text-lg", openIndex === index ? "text-primary" : "text-foreground")}>
                                        {faq.question}
                                    </span>
                                    {openIndex === index ? (
                                        <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                    )}
                                </button>

                                <div
                                    className={cn(
                                        "px-6 pb-6 text-gray-500 leading-relaxed transition-all duration-300",
                                        openIndex === index ? "block" : "hidden"
                                    )}
                                >
                                    {faq.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
