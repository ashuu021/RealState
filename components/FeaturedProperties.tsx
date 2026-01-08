import PropertyCard from "./PropertyCard";
import { Button } from "./Button";

export default function FeaturedProperties() {
    const properties = [
        {
            id: "1",
            title: "Luxury Villa in Beverly Hills",
            location: "Beverly Hills, CA",
            price: "$4,500,000",
            image: "/hero.png", // Reusing hero for demo
            beds: 5,
            baths: 4,
            sqft: 4500,
        },
        {
            id: "2",
            title: "Modern Apartment in NYC",
            location: "Manhattan, NY",
            price: "$2,800,000",
            image: "/hero.png", // Reuse
            beds: 3,
            baths: 2,
            sqft: 2100,
        },
        {
            id: "3",
            title: "Seaside Mansion",
            location: "Miami, FL",
            price: "$6,200,000",
            image: "/hero.png", // Reuse
            beds: 6,
            baths: 6,
            sqft: 6000,
        },
        {
            id: "4",
            title: "Downtown Penthouse",
            location: "Chicago, IL",
            price: "$3,100,000",
            image: "/hero.png", // Reuse
            beds: 4,
            baths: 3,
            sqft: 3200,
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container-custom">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-bold text-foreground mb-4">Explore The Featured Property</h2>
                        <p className="text-gray-500 max-w-xl">
                            We carefully select the best properties that meet our high standards for quality and value.
                        </p>
                    </div>
                    <Button variant="outline" className="hidden md:flex">View All Properties</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {properties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Button variant="outline">View All Properties</Button>
                </div>
            </div>
        </section>
    );
}
