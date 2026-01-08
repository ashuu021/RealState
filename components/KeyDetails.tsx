import { BadgeDollarSign, Home, Maximize, BedDouble, Bath, Tag } from "lucide-react";

export default function KeyDetails() {
    return (
        <div className="bg-gray-50 rounded-2xl p-6 h-fit border border-gray-200">
            <h4 className="font-bold text-foreground mb-4">Property Details</h4>
            <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-500 flex items-center gap-2"><BadgeDollarSign className="w-4 h-4" /> Price</span>
                    <span className="font-bold text-primary text-lg">$4,500,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-500 flex items-center gap-2"><Home className="w-4 h-4" /> Type</span>
                    <span className="font-bold text-foreground">Villa</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-500 flex items-center gap-2"><Maximize className="w-4 h-4" /> Area</span>
                    <span className="font-bold text-foreground">4,500 sq ft</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-500 flex items-center gap-2"><BedDouble className="w-4 h-4" /> Bedrooms</span>
                    <span className="font-bold text-foreground">5</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-500 flex items-center gap-2"><Bath className="w-4 h-4" /> Bathrooms</span>
                    <span className="font-bold text-foreground">6</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500 flex items-center gap-2"><Tag className="w-4 h-4" /> Status</span>
                    <span className="font-bold text-green-600 bg-green-100 px-2 py-1 rounded text-sm">For Sale</span>
                </div>
            </div>
        </div>
    );
}
