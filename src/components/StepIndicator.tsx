'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';

interface StepIndicatorProps {
    currentStep: number;
}

const steps = [
    "Basic Information",
    "Organization Details",
    "Review",
    "Complete",
];

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
    const router = useRouter();

    return (
        <div className="py-6 px-4 relative">
            <div className="max-w-3xl mx-auto">
                <button
                    onClick={() => router.back()}
                    className="absolute left-8 top-8 hidden md:block"
                >
                    <Image
                        src="/Vector (5).png"
                        alt="Go back"
                        width={20}
                        height={20}
                        className="cursor-pointer"
                    />
                </button>

                <div className="flex items-center justify-between">
                    {steps.map((step, index) => (
                        <div key={index} className="flex-1 relative text-center">
                            <div className="flex items-center">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center 
                                    ${index <= currentStep ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}>
                                    {index + 1}
                                </div>
                                {index < steps.length - 1 && (
                                    <div className={`h-1 flex-1 mx-2 
                                        ${index < currentStep ? "bg-blue-600" : "bg-gray-200"}`}>
                                    </div>
                                )}
                            </div>
                            <div className={`mt-2 text-xs 
                                ${index <= currentStep ? "text-blue-600 font-medium" : "text-gray-500"}`}>
                                {step}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
