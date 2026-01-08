export default function Brands() {
    const brands = ["Behance", "Creative Market", "Dropbox", "Amazon", "Deliveroo"];

    return (
        <section className="py-12 border-b border-gray-100 bg-white">
            <div className="container-custom">
                <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
                    Trusted by 500+ Companies
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder for logos - using text for now or simple svgs */}
                    {brands.map((brand) => (
                        <div key={brand} className="text-2xl font-bold font-serif text-gray-800 hover:text-primary cursor-pointer">
                            {brand}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
