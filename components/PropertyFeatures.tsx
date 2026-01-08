import { Car, Zap, Shield, Warehouse, Flower2, Waves } from "lucide-react";

export default function PropertyFeatures() {
    const features = [
        { icon: Car, label: "Parking" },
        { icon: Zap, label: "Power Backup" },
        { icon: Warehouse, label: "Lift" }, // Using Warehouse as generic elevator/building icon
        { icon: Shield, label: "24/7 Security" },
        { icon: Flower2, label: "Garden" },
        { icon: Waves, label: "Swimming Pool" },
    ];

    return (
        <div className="py-8 border-t border-b border-gray-100 my-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Property Features</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-600 font-medium">
                        <div className="p-2 bg-primary-light/50 rounded-lg text-primary">
                            <feature.icon className="w-5 h-5" />
                        </div>
                        {feature.label}
                    </div>
                ))}
            </div>
        </div>
    );
}
