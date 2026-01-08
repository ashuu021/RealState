"use client";

import { useState } from "react";
import { Button } from "./Button";
import { Send, Phone } from "lucide-react";

export default function EnquiryForm() {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full overflow-hidden">
                    {/* Agent Avatar placeholder */}
                    <div className="w-full h-full bg-primary/20" />
                </div>
                <div>
                    <h3 className="font-bold text-foreground">Agent: John Doe</h3>
                    <p className="text-sm text-gray-500">Premium Realtor</p>
                </div>
            </div>

            <form className="space-y-4">
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Full Name</label>
                    <input
                        type="text"
                        placeholder="Ex. John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Phone Number</label>
                    <input
                        type="tel"
                        placeholder="Ex. +1 234 567 890"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Email Address</label>
                    <input
                        type="email"
                        placeholder="Ex. john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Message</label>
                    <textarea
                        placeholder="I am interested in this property..."
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                    />
                </div>

                <Button className="w-full font-bold h-12">
                    <Send className="w-4 h-4 mr-2" /> Send Enquiry
                </Button>
                <Button variant="outline" className="w-full font-bold h-12">
                    <Phone className="w-4 h-4 mr-2" /> Call Agent
                </Button>
            </form>
        </div>
    );
}
