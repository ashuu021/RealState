import { Building2, Users, Wallet, MousePointerClick } from "lucide-react";
import StatsCard from "@/components/StatsCard";

export default function AdminDashboardPage() {
    const stats = [
        { label: "Total Properties", value: "1,240", trend: "+12.5%", trendUp: true, icon: Building2, color: "blue" },
        { label: "Active Listings", value: "850", trend: "+5.2%", trendUp: true, icon: MousePointerClick, color: "purple" },
        { label: "Total Leads", value: "3,450", trend: "-2.1%", trendUp: false, icon: Users, color: "orange" },
        { label: "Monthly Revenue", value: "$450k", trend: "+8.4%", trendUp: true, icon: Wallet, color: "green" },
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, i) => (
                    // @ts-ignore - color string mapping type issues in draft
                    <StatsCard key={i} {...stat} color={stat.color as any} />
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Simple Chart Visualization */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <h3 className="font-bold text-lg mb-6">Lead Analytics</h3>
                    <div className="h-64 flex items-end justify-between gap-2">
                        {[40, 60, 45, 75, 55, 80, 70, 90, 65, 85, 95, 75].map((h, i) => (
                            <div key={i} className="w-full bg-primary/10 rounded-t-lg relative group">
                                <div
                                    className="absolute bottom-0 left-0 w-full bg-primary rounded-t-lg transition-all duration-500 hover:bg-primary/80"
                                    style={{ height: `${h}%` }}
                                />
                                <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded">
                                    {h * 10} Leads
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-xs text-gray-400">
                        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                        <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                    </div>
                </div>

                {/* Recent Enquiries */}
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <h3 className="font-bold text-lg mb-4">Recent Enquiries</h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center gap-4 pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-500 text-xs">
                                    JD
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-gray-900">John Doe</h4>
                                    <p className="text-xs text-gray-500">Inquired about Villa #45</p>
                                </div>
                                <span className="text-xs text-gray-400 ml-auto">2h ago</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
