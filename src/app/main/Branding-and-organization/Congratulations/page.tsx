import PublicFooter from "@/components/PublicFooter";
import PublicNavbar from "@/components/PublicNavbar";
import StepIndicator from "@/components/StepIndicator";
import Image from "next/image";
import Link from "next/link";

export default function Congratulations() {
  return (
    <div className="flex flex-col min-h-screen">
      <PublicNavbar />
      <StepIndicator currentStep={3} />

      <main className="flex flex-1 flex-col items-center justify-center px-4 text-center space-y-4">
        {/* تیتر اصلی */}
        <h1 className="text-xl md:text-3xl font-bold text-[#644FC1] mt-4">
          Congratulations!
        </h1>

        {/* تصویر */}
        <div className="w-60 md:w-72 lg:w-80">
          <Image
            src="/Vector(17).png"
            alt="congratulations illustration"
            width={600}
            height={600}
            priority
            className="w-full h-auto"
          />
        </div>

        {/* متن تایید */}
        <h2 className="text-sm md:text-lg text-gray-700">
          Your Creative Starter has been approved by our experts!
        </h2>

        {/* متن خوش‌آمد */}
        <p className="text-xs md:text-xs text-gray-500 max-w-md">
          Welcome aboard! Let’s dive in and get started.
        </p>

        {/* دکمه ورود به پروفایل */}
        <Link href="/main/Profile">
          <button className="mt-4 bg-[#644FC1] hover:bg-[#4f3ba8] text-white text-sm md:text-base font-medium py-2 px-6 rounded-xl transition duration-200">
            Go to my profile
          </button>
        </Link>
      </main>

      <PublicFooter />
    </div>
  );
}
