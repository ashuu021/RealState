import Link from "next/link";
import { Button } from "@/components/Button";

export default function ComingSoon() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-6xl font-bold text-primary mb-4">Coming Soon</h1>
            <p className="text-xl text-gray-500 max-w-md mb-8">
                We are working hard to bring you this feature. Stay tuned for updates from XYZ Group.
            </p>
            <Link href="/">
                <Button size="lg">Back to Home</Button>
            </Link>
        </div>
    );
}
