import { TrendingUp, Users, Wallet } from "lucide-react";

export default function StatsSection() {
    const stats = [
        {
            label: "Property Sold",
            value: "850+",
            icon: TrendingUp,
        },
        {
            label: "Total Transactions",
            value: "$350M+",
            icon: Wallet,
        },
        {
            label: "Customer Satisfaction",
            value: "98%",
            icon: Users,
        },
    ];

    return (
        <section className="py-16 bg-white border-b border-gray-100">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center justify-center p-4">
                            <div className="mb-4 p-3 bg-primary-light rounded-full text-primary">
                                <stat.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold text-foreground mb-1">{stat.value}</h3>
                            <p className="text-gray-500 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
