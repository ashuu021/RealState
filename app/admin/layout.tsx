import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <AdminSidebar />

            <div className="p-4 sm:ml-64">
                <AdminHeader />
                <div className="p-4 mt-4">
                    {children}
                </div>
            </div>
        </div>
    );
}
