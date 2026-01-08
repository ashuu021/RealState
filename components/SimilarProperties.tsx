import PropertyCard from "./PropertyCard";

export default function SimilarProperties() {
    const properties = [
        {
            id: "2",
            title: "Modern Apartment in NYC",
            location: "Manhattan, NY",
            price: "$2,800,000",
            image: "/hero.png",
            beds: 3,
            baths: 2,
            sqft: 2100,
        },
        {
            id: "3",
            title: "Seaside Mansion",
            location: "Miami, FL",
            price: "$6,200,000",
            image: "/interior.png",
            beds: 6,
            baths: 6,
            sqft: 6000,
        },
        {
            id: "4",
            title: "Downtown Penthouse",
            location: "Chicago, IL",
            price: "$3,100,000",
            image: "/hero.png",
            beds: 4,
            baths: 3,
            sqft: 3200,
        }
    ];

    return (
        <div className="my-16 pb-20">
            <h3 className="text-2xl font-bold text-foreground mb-8">Similar Properties</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {properties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
        </div>
    );
}
