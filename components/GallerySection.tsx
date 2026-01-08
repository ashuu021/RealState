"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GallerySection() {
    const images = [
        { src: "/hero-villa.png", alt: "Modern Luxury Villa", span: "col-span-2 row-span-2" },
        { src: "/interior-living.png", alt: "Luxury Interior", span: "col-span-1 row-span-1" },
        { src: "/apartment-ext.png", alt: "High Rise Apartment", span: "col-span-1 row-span-1" },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold font-display text-foreground mb-4">Exclusive Gallery</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Take a closer look at our premium properties through our curated visual gallery.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-[600px]">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className={`relative rounded-2xl overflow-hidden group ${img.span}`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
