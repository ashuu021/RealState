"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Building2, PlusCircle, Users, FileText, Settings, LogOut } from "lucide-react";
import { cn } from "./Button";

export default function AdminSidebar() {
    const pathname = usePathname();

    const menuItems = [
        { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { name: "Properties", href: "/admin/properties", icon: Building2 },
        { name: "Add Property", href: "/admin/properties/add", icon: PlusCircle },
        { name: "Leads", href: "/admin/leads", icon: Users },
        { name: "Blog", href: "/admin/blog", icon: FileText }, // Added Blog per request? Layout structure says yes
        { name: "Settings", href: "/admin/settings", icon: Settings },
    ];

    return (
        <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0">
            <div className="h-full px-3 py-4 overflow-y-auto">
                <div className="mb-10 px-4">
                    <Link href="/" className="text-2xl font-bold tracking-tight text-primary">
                        Hometrace <span className="text-xs text-gray-500 font-normal block">Admin Panel</span>
                    </Link>
                </div>

                <ul className="space-y-2 font-medium">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href; // Simple exact match for now, maybe startsWith for nested
                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "flex items-center p-3 rounded-lg group transition-colors",
                                        isActive
                                            ? "bg-primary text-white"
                                            : "text-gray-900 hover:bg-gray-100"
                                    )}
                                >
                                    <item.icon className={cn("w-5 h-5 transition duration-75", isActive ? "text-white" : "text-gray-500 group-hover:text-gray-900")} />
                                    <span className="ml-3">{item.name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <div className="absolute bottom-4 left-0 w-full px-3">
                    <button className="flex items-center p-3 text-red-600 rounded-lg hover:bg-red-50 w-full">
                        <LogOut className="w-5 h-5 flex-shrink-0" />
                        <span className="ml-3 font-medium">Logout</span>
                    </button>
                </div>
            </div>
        </aside>
    );
}
