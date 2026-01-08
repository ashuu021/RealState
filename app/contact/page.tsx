import { Phone, Mail, MapPin } from "lucide-react";
import FaqSection from "@/components/FaqSection";

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
                    <p className="text-gray-500">We'd love to hear from you. Get in touch with us.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="flex flex-col items-center p-8 bg-white border rounded-2xl shadow-sm text-center">
                        <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4 text-primary">
                            <Phone className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Call Us</h3>
                        <p className="text-gray-500">+91 98765 43210</p>
                        <p className="text-gray-500">+91 11 2345 6789</p>
                    </div>

                    <div className="flex flex-col items-center p-8 bg-white border rounded-2xl shadow-sm text-center">
                        <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4 text-primary">
                            <Mail className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Email Us</h3>
                        <p className="text-gray-500">info@xyzgroup.com</p>
                        <p className="text-gray-500">support@xyzgroup.com</p>
                    </div>

                    <div className="flex flex-col items-center p-8 bg-white border rounded-2xl shadow-sm text-center">
                        <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4 text-primary">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                        <p className="text-gray-500">DLF Cyber City, Tower B</p>
                        <p className="text-gray-500">Gurugram, Haryana, 122002</p>
                    </div>
                </div>

                <div className="mb-20">
                    <FaqSection />
                </div>
            </div>
        </div>
    );
}
