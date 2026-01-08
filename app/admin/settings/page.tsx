import { Save } from "lucide-react";
import { Button } from "@/components/Button";

export default function AdminSettingsPage() {
    return (
        <div className="max-w-2xl">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 space-y-6">
                <div>
                    <h3 className="font-bold border-b pb-2 mb-4">Website Details</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Site Title</label>
                            <input type="text" defaultValue="Hometrace Real Estate" className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                            <textarea defaultValue="Premium real estate services." rows={3} className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold border-b pb-2 mb-4">Contact Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Support Email</label>
                            <input type="email" defaultValue="info@hometrace.com" className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <input type="text" defaultValue="+1 234 567 890" className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                        </div>
                    </div>
                </div>

                <div className="pt-4">
                    <Button>
                        <Save className="w-4 h-4 mr-2" /> Save Changes
                    </Button>
                </div>
            </div>
        </div>
    );
}
