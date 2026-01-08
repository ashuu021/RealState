"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Button } from "./Button";

export default function ImageSlider() {
    const images = [
        "/hero.png",
        "/modern_interior_living_room_1767878462824.png", // Need to move this to public and rename
        "/hero.png", // Placeholder for more
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="relative h-[60vh] min-h-[500px] w-full bg-black">
            <Image
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                fill
                className="object-cover opacity-90"
                priority
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end pb-12">
                <div className="container-custom flex flex-col md:flex-row justify-between items-end gap-6 text-white">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-2">Modern Luxury Villa</h1>
                        <div className="flex items-center text-lg opacity-90">
                            <MapPin className="w-5 h-5 mr-2 text-primary" />
                            Beverly Hills, California
                        </div>
                    </div>

                    <div className="text-right">
                        <p className="text-3xl font-bold text-primary mb-4">$4,500,000</p>
                        <div className="flex gap-3">
                            <Button className="bg-white text-foreground hover:bg-gray-100">View Gallery</Button>
                            <Button variant="primary">Enquire Now</Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/40 backdrop-blur rounded-full text-white transition-all"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/40 backdrop-blur rounded-full text-white transition-all"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
    );
}
