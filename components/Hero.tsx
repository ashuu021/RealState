import Image from "next/image";
import { Button } from "./Button";
import SearchBar from "./SearchBar";

export default function Hero() {
    return (
        <section className="relative pt-28 pb-20 bg-primary-light/30">
            <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
                        Discover The Space That Fits Your <span className="text-primary">Lifestyle</span>
                    </h1>
                    <p className="text-lg text-gray-500 max-w-md">
                        Find the perfect home that matches your needs efficiently and conveniently.
                        We offer the best properties in prime locations.
                    </p>
                    <Button size="lg" className="shadow-xl shadow-primary/20">
                        Explore Property
                    </Button>

                    <div className="pt-8 flex gap-8">
                        <div>
                            <p className="text-3xl font-bold text-foreground">850+</p>
                            <p className="text-sm text-gray-500">Property Sold</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-foreground">$350M+</p>
                            <p className="text-sm text-gray-500">Transactions</p>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                    <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/hero.png"
                            alt="Modern Luxury Villa"
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* Floating Card */}
                        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 max-w-xs">
                            <h3 className="font-bold text-foreground">Modern Creek House</h3>
                            <p className="text-sm text-gray-500">$4,500,000</p>
                        </div>
                    </div>

                    {/* Decorative Pattern */}
                    <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-primary/5 rounded-3xl" />
                </div>
            </div>

            {/* Floating Search Bar */}
            <div className="container-custom">
                <SearchBar />
            </div>
        </section>
    );
}
