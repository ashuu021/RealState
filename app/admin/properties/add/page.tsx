import { Upload, Save } from "lucide-react";
import { Button } from "@/components/Button";

export default function AddPropertyPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Add New Property</h1>
                <Button>
                    <Save className="w-4 h-4 mr-2" /> Save Property
                </Button>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 space-y-8">
                {/* Basic Info */}
                <section>
                    <h3 className="text-lg font-bold border-b pb-2 mb-4">Basic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Property Title</label>
                            <input type="text" className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                            <input type="text" className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                            <input type="text" className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                            <select className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                                <option>Appartment</option>
                                <option>Villa</option>
                                <option>Office</option>
                            </select>
                        </div>
                    </div>
                </section>

                {/* Details */}
                <section>
                    <h3 className="text-lg font-bold border-b pb-2 mb-4">Property Details</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                            <input type="number" className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
                            <input type="number" className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Area (sq ft)</label>
                            <input type="number" className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                            <select className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                                <option>For Sale</option>
                                <option>For Rent</option>
                            </select>
                        </div>
                    </div>
                </section>

                {/* Media */}
                <section>
                    <h3 className="text-lg font-bold border-b pb-2 mb-4">Media</h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                        <Upload className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                        <p className="font-bold text-gray-600">Click or Drag images here</p>
                        <p className="text-xs text-gray-400">JPG, PNG up to 10MB</p>
                    </div>
                </section>
            </div>
        </div>
    );
}
