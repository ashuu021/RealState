import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Bed, Bath, Expand } from "lucide-react";
import { Button } from "./Button";

interface PropertyProps {
    id: string;
    title: string;
    location: string;
    price: string;
    image: string;
    beds: number;
    baths: number;
    sqft: number;
}

export default function PropertyCard({ property }: { property: PropertyProps }) {
    return (
        <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-foreground uppercase tracking-wider">
                    For Sale
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {property.title}
                        </h3>
                        <div className="flex items-center text-gray-500 text-sm">
                            <MapPin className="w-4 h-4 mr-1" />
                            {property.location}
                        </div>
                    </div>
                    <p className="text-xl font-bold text-primary">{property.price}</p>
                </div>

                {/* Features */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-1">
                        <Bed className="w-4 h-4" />
                        <span>{property.beds} Bed</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Bath className="w-4 h-4" />
                        <span>{property.baths} Bath</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Expand className="w-4 h-4" />
                        <span>{property.sqft} sqft</span>
                    </div>
                </div>

                {/* Action */}
                <Link href={`/property/${property.id}`} className="block">
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                        View Details <ArrowUpRight className="ml-2 w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
