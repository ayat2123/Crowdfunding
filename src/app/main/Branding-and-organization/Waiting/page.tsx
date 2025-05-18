import PublicFooter from "@/components/PublicFooter";
import PublicNavbar from "@/components/PublicNavbar";
import StepIndicator from "@/components/StepIndicator";
import Image from "next/image";
import Link from "next/link";

export default function Waiting() {
    return (
        <div className="flex flex-col min-h-screen">
            <PublicNavbar />
            <StepIndicator currentStep={2} />

            <main className="flex flex-1 flex-col items-center justify-center px-4 text-center mb-8">
                <h1 className="text-xl md:text-2xl font-semibold text-[#644FC1] mt-4 mb-4">
                    Waiting for Approval
                </h1>

                <div className="w-full max-w-sm md:max-w-md">
                    <Image
                        src="/Vector(16)1.png"
                        alt="Waiting illustration"
                        width={600}
                        height={600}
                        priority
                    />
                </div>

                <h2 className="text-base md:text-lg text-gray-700">
                    You will be notified as soon as it is approved
                </h2>
                <p className="text-xs md:sm text-gray-500 max-w-md">
                    Your information is under review and will be confirmed within 2 to 5 business days.
                </p>
                <Link href="/main/Branding-and-organization/Congratulations">
          <button className="mt-4 bg-[#644FC1] hover:bg-[#4f3ba8] text-white text-sm md:text-base font-medium py-2 px-6 rounded-xl transition duration-200">
            next
          </button>
        </Link>
            </main>

            <PublicFooter />
        </div>
    );
}
