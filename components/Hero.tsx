"use client";

import Image from "next/image";
import { Button } from "./Button";
import SearchBar from "./SearchBar";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-24 bg-gradient-to-br from-primary-light via-white to-secondary overflow-hidden">
            <div className="container-custom grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <h1 className="text-5xl md:text-6xl font-bold font-display leading-tight text-foreground">
                        Discover The Space That Fits Your <span className="text-primary">Lifestyle</span>
                    </h1>
                    <p className="text-lg text-gray-500 max-w-md">
                        Find the perfect home that matches your needs efficiently and conveniently.
                        We offer the best properties in prime locations.
                    </p>
                    <div className="flex gap-4">
                        <Button size="lg" className="shadow-xl shadow-primary/20">
                            Explore Property
                        </Button>
                    </div>

                    <div className="pt-8 flex gap-8">
                        <div>
                            <p className="text-3xl font-bold font-display text-foreground">850+</p>
                            <p className="text-sm text-gray-500">Property Sold</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold font-display text-foreground">₹2800Cr+</p>
                            <p className="text-sm text-gray-500">Transactions</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                        <Image
                            src="/hero-villa.png"
                            alt="Modern Luxury Villa"
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* Floating Card */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 max-w-xs"
                        >
                            <h3 className="font-bold font-display text-foreground text-lg">Modern Creek House</h3>
                            <p className="text-sm text-primary font-bold">₹18.5 Cr</p>
                        </motion.div>
                    </div>

                    {/* Decorative Pattern */}
                    <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-primary/5 rounded-3xl" />
                </motion.div>
            </div>

            {/* Floating Search Bar */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="container-custom"
            >
                <SearchBar />
            </motion.div>
        </section>
    );
}
