import { MapPin } from "lucide-react";

export default function LocationSection() {
    const landmarks = [
        { name: "City Center Mall", distance: "0.5 km" },
        { name: "Central Park", distance: "1.2 km" },
        { name: "International Airport", distance: "15 km" },
        { name: "City Hospital", distance: "2.0 km" },
    ];

    return (
        <div className="my-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Location & Nearby</h3>

            <div className="bg-gray-100 rounded-2xl overflow-hidden h-80 relative mb-8">
                {/* Mock Map */}
                <div className="absolute inset-0 bg-blue-50 flex items-center justify-center">
                    <div className="text-center">
                        <MapPin className="w-12 h-12 text-red-500 mx-auto mb-2 animate-bounce" />
                        <p className="font-bold text-gray-500">Google Map View</p>
                    </div>
                    {/* Grid lines to look like a map */}
                    <div className="absolute inset-0 opacity-10"
                        style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {landmarks.map((landmark, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                        <span className="font-medium text-foreground">{landmark.name}</span>
                        <span className="text-gray-500 text-sm">{landmark.distance}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
