import Link from "next/link";
import { Edit, Trash2, Plus } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/Button";

export default function AdminPropertiesPage() {
    const properties = [
        { id: 1, name: "Luxury Villa in Beverly Hills", location: "Beverly Hills, CA", price: "$4,500,000", status: "For Sale", image: "/hero.png" },
        { id: 2, name: "Modern Apartment", location: "New York, NY", price: "$2,100,000", status: "Sold", image: "/hero.png" },
        { id: 3, name: "Sea View Penthouse", location: "Miami, FL", price: "$5,200,000", status: "For Rent", image: "/hero.png" },
    ];

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Properties</h1>
                <Link href="/admin/properties/add">
                    <Button size="sm">
                        <Plus className="w-4 h-4 mr-2" /> Add Property
                    </Button>
                </Link>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4 font-semibold text-sm text-gray-500">Property</th>
                            <th className="px-6 py-4 font-semibold text-sm text-gray-500">Price</th>
                            <th className="px-6 py-4 font-semibold text-sm text-gray-500">Status</th>
                            <th className="px-6 py-4 font-semibold text-sm text-gray-500 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {properties.map((property) => (
                            <tr key={property.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-12 relative rounded-lg overflow-hidden bg-gray-100">
                                            <Image src={property.image} alt={property.name} fill className="object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{property.name}</h4>
                                            <p className="text-xs text-gray-500">{property.location}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900">{property.price}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${property.status === 'For Sale' ? 'bg-green-100 text-green-700' :
                                            property.status === 'Sold' ? 'bg-red-100 text-red-700' :
                                                'bg-blue-100 text-blue-700'
                                        }`}>
                                        {property.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-2">
                                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"><Edit className="w-4 h-4" /></button>
                                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
