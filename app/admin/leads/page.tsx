import { MoreHorizontal } from "lucide-react";

export default function AdminLeadsPage() {
    const leads = [
        { id: 1, name: "Sarah Smith", email: "sarah@example.com", phone: "+1 234 567 8900", property: "Luxury Villa", date: "Oct 24, 2024", status: "New" },
        { id: 2, name: "Mike Johnson", email: "mike@example.com", phone: "+1 987 654 3210", property: "Modern Apartment", date: "Oct 23, 2024", status: "Contacted" },
        { id: 3, name: "Emily Brown", email: "emily@example.com", phone: "+1 456 789 0123", property: "Downtown Penthouse", date: "Oct 22, 2024", status: "Closed" },
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Leads Management</h1>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4 font-semibold text-sm text-gray-500">Name</th>
                            <th className="px-6 py-4 font-semibold text-sm text-gray-500">Contact</th>
                            <th className="px-6 py-4 font-semibold text-sm text-gray-500">Property</th>
                            <th className="px-6 py-4 font-semibold text-sm text-gray-500">Date</th>
                            <th className="px-6 py-4 font-semibold text-sm text-gray-500">Status</th>
                            <th className="px-6 py-4 font-semibold text-sm text-gray-500"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {leads.map((lead) => (
                            <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-bold text-gray-900">{lead.name}</td>
                                <td className="px-6 py-4">
                                    <div className="text-sm">
                                        <p className="text-gray-900">{lead.email}</p>
                                        <p className="text-gray-500">{lead.phone}</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-600">{lead.property}</td>
                                <td className="px-6 py-4 text-gray-500 text-sm">{lead.date}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${lead.status === 'New' ? 'bg-blue-100 text-blue-700' :
                                            lead.status === 'Contacted' ? 'bg-yellow-100 text-yellow-700' :
                                                'bg-green-100 text-green-700'
                                        }`}>
                                        {lead.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal className="w-5 h-5" /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
