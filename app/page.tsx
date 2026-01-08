import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import GallerySection from "@/components/GallerySection";
import Brands from "@/components/Brands";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import FaqSection from "@/components/FaqSection";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col">
            <Hero />
            <StatsSection />
            <FeaturedProperties />
            <GallerySection />
            <Brands />
            <Testimonials />
            <BlogSection />
            <FaqSection />
        </main>
    );
}
