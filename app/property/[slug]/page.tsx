import ImageSlider from "@/components/ImageSlider";
import PropertyOverview from "@/components/PropertyOverview";
import PropertyFeatures from "@/components/PropertyFeatures";
import PropertyTabs from "@/components/PropertyTabs";
import LocationSection from "@/components/LocationSection";
import KeyDetails from "@/components/KeyDetails";
import EnquiryForm from "@/components/EnquiryForm";
import SimilarProperties from "@/components/SimilarProperties";

export default function PropertyDetailsPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">

            {/* 1. Hero Slider */}
            <ImageSlider />

            <div className="container-custom py-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Left Content Column */}
                    <div className="lg:col-span-2">
                        {/* 2. Overview */}
                        <PropertyOverview />

                        {/* 3. Features */}
                        <PropertyFeatures />

                        {/* 4. Floor Plan & Gallery */}
                        <PropertyTabs />

                        {/* 5. Location */}
                        <LocationSection />
                    </div>

                    {/* Right Sidebar Column */}
                    <div className="space-y-8">
                        {/* Key Details Card */}
                        <KeyDetails />

                        {/* 6. Sticky Enquiry Form */}
                        <div className="sticky top-28">
                            <EnquiryForm />
                        </div>
                    </div>
                </div>

                {/* 7. Similar Properties */}
                <SimilarProperties />
            </div>
        </main>
    );
}
