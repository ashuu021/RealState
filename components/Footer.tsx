"use client";

import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./Button";

export default function Footer() {
    const pathname = usePathname();

    if (pathname.startsWith("/admin")) {
        return null;
    }

    return (
        <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white">Hometrace</h2>
                        <p className="text-gray-400">
                            We help you find your dream home with our premium real estate services.
                            Trusted by thousands of customers worldwide.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                                    <Icon className="w-5 h-5 text-white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/property" className="hover:text-primary transition-colors">Property</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li>123 Real Estate Ave, New York, NY 10001</li>
                            <li>+1 (555) 123-4567</li>
                            <li>info@hometrace.com</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Newsletter</h3>
                        <p className="text-gray-400 mb-4">Subscribe to our newsletter to get the latest updates.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/10 border border-white/10 rounded-full px-4 py-2 w-full focus:outline-none focus:border-primary text-white placeholder-gray-500"
                            />
                            <Button size="sm" className="px-3 rounded-full">
                                <Send className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>© 2024 Hometrace. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>

            {/* Large Text Background */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-5">
                <h1 className="text-[20vw] font-bold text-white leading-none text-center whitespace-nowrap">
                    HOMETRACE
                </h1>
            </div>
        </footer>
    );
}
