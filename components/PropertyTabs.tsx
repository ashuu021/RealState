"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "./Button";

export default function PropertyTabs() {
    const [activeTab, setActiveTab] = useState<"gallery" | "floorplan">("gallery");

    return (
        <div className="my-12">
            <div className="flex gap-8 border-b border-gray-200 mb-8">
                <button
                    onClick={() => setActiveTab("gallery")}
                    className={cn(
                        "pb-4 font-bold text-lg transition-colors border-b-2",
                        activeTab === "gallery"
                            ? "border-primary text-primary"
                            : "border-transparent text-gray-500 hover:text-foreground"
                    )}
                >
                    Gallery
                </button>
                <button
                    onClick={() => setActiveTab("floorplan")}
                    className={cn(
                        "pb-4 font-bold text-lg transition-colors border-b-2",
                        activeTab === "floorplan"
                            ? "border-primary text-primary"
                            : "border-transparent text-gray-500 hover:text-foreground"
                    )}
                >
                    Floor Plan
                </button>
            </div>

            <div className="bg-gray-100 rounded-2xl overflow-hidden min-h-[400px] relative">
                {activeTab === "gallery" ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 h-[500px]">
                        {/* Main large image */}
                        <div className="col-span-2 md:col-span-2 row-span-2 relative h-full">
                            <Image src="/interior.png" alt="Interior" fill className="object-cover" />
                        </div>
                        {/* Small images */}
                        <div className="relative h-full">
                            <Image src="/hero.png" alt="Room 1" fill className="object-cover" />
                        </div>
                        <div className="relative h-full">
                            <Image src="/interior.png" alt="Room 2" fill className="object-cover" />
                        </div>
                        <div className="relative h-full">
                            <Image src="/hero.png" alt="Room 3" fill className="object-cover" />
                        </div>
                        <div className="relative h-full flex items-center justify-center bg-black/50 cursor-pointer hover:bg-black/60 transition-colors group">
                            <Image src="/interior.png" alt="More" fill className="object-cover -z-10" />
                            <span className="text-white font-bold text-xl group-hover:scale-110 transition-transform">+ 5 More</span>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-[500px] bg-white border border-gray-200 rounded-2xl">
                        <div className="text-center p-8 opacity-50">
                            <Image src="/hero.png" alt="Floor Plan Placeholder" width={400} height={300} className="mx-auto grayscale opacity-50 mb-4" />
                            <p>Floor Plan Layout Visualization</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
