import { LucideIcon } from "lucide-react";
import { cn } from "./Button";

interface StatsCardProps {
    label: string;
    value: string;
    trend: string;
    trendUp: boolean;
    icon: LucideIcon;
    color: "blue" | "green" | "purple" | "orange";
}

export default function StatsCard({ label, value, trend, trendUp, icon: Icon, color }: StatsCardProps) {
    const colorClasses = {
        blue: "bg-blue-50 text-blue-600",
        green: "bg-green-50 text-green-600",
        purple: "bg-purple-50 text-purple-600",
        orange: "bg-orange-50 text-orange-600",
    };

    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex justify-between items-start mb-4">
                <div className={cn("p-3 rounded-xl", colorClasses[color])}>
                    <Icon className="w-6 h-6" />
                </div>
                <span className={cn("text-xs font-medium px-2 py-1 rounded-full", trendUp ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700")}>
                    {trend}
                </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{value}</h3>
            <p className="text-gray-500 text-sm">{label}</p>
        </div>
    );
}
