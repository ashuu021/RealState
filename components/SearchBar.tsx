"use client";

import { useState } from "react";
import { Search, MapPin, DollarSign, Home } from "lucide-react";
import { Button } from "./Button";
import { cn } from "./Button"; // Reusing cn utility

export default function SearchBar() {
    const [activeTab, setActiveTab] = useState<"buy" | "rent" | "sell">("buy");

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl mx-auto -mt-10 relative z-20 border border-gray-100">
            {/* Tabs */}
            <div className="flex gap-6 mb-6 border-b border-gray-100 pb-2">
                {(["buy", "rent", "sell"] as const).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={cn(
                            "text-sm font-semibold pb-2 border-b-2 transition-colors capitalize",
                            activeTab === tab
                                ? "border-primary text-primary"
                                : "border-transparent text-gray-500 hover:text-primary"
                        )}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Filters Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                {/* Location */}
                <div className="relative group">
                    <label className="text-xs text-gray-400 font-medium block mb-1">
                        Location
                    </label>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        <select className="w-full bg-transparent outline-none text-foreground font-medium appearance-none cursor-pointer">
                            <option>New York, USA</option>
                            <option>Los Angeles, USA</option>
                            <option>London, UK</option>
                        </select>
                    </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-10 bg-gray-200" />

                {/* Property Type */}
                <div className="relative group">
                    <label className="text-xs text-gray-400 font-medium block mb-1">
                        Property Type
                    </label>
                    <div className="flex items-center gap-2">
                        <Home className="w-5 h-5 text-primary" />
                        <select className="w-full bg-transparent outline-none text-foreground font-medium appearance-none cursor-pointer">
                            <option>Duplex House</option>
                            <option>Apartment</option>
                            <option>Villa</option>
                            <option>Penthouse</option>
                        </select>
                    </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-10 bg-gray-200" />

                {/* Price Range */}
                <div className="relative group">
                    <label className="text-xs text-gray-400 font-medium block mb-1">
                        Average Price
                    </label>
                    <div className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-primary" />
                        <select className="w-full bg-transparent outline-none text-foreground font-medium appearance-none cursor-pointer">
                            <option>$5000 - $10000</option>
                            <option>$10k - $50k</option>
                            <option>$50k+</option>
                        </select>
                    </div>
                </div>

                {/* Search Button */}
                <Button className="w-full h-12">
                    <Search className="w-4 h-4 mr-2" /> Search
                </Button>
            </div>
        </div>
    );
}
