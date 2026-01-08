import FeaturedProperties from "@/components/FeaturedProperties";

export default function PropertyListingPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <div className="bg-primary-light/30 py-16">
                <div className="container-custom text-center">
                    <h1 className="text-4xl font-bold text-foreground mb-4">Properties For Sale</h1>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Explore our curated list of premium properties available for sale in top locations.
                    </p>
                </div>
            </div>
            <FeaturedProperties />
        </main>
    );
}
