"use client";

import PublicFooter from "@/components/PublicFooter";
import PublicNavbar from "@/components/PublicNavbar";
import StepIndicator from "@/components/StepIndicator";
import Image from "next/image";
import Link from "next/link";

export default function DetailedInfo() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <PublicNavbar />
            <StepIndicator currentStep={1} />

            <main className="flex-grow">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
                    {/* Header */}
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Detailed Info</h1>
                        <h3 className="text-lg font-semibold text-gray-700 mb-1">
                            What is the primary mission or objective of your brand/organization?
                        </h3>
                        <p className="text-sm text-gray-500">
                            Be more specific about it, as it will be published as your deck on the 3F (150–300 characters).{" "}
                            <a href="#" className="text-blue-600 underline">Read more</a>
                        </p>
                    </div>

                    <div className=" space-y-8 border border-gray-300 rounded-md p-6 bg-white shadow-sm">

                        <div className="flex">
                            <div className="flex justify-center items-center gap-4">
                                <Image src="/Vector (14).png" alt="Decoration" width={20} height={20} />
                                <Image src="/Vector (15).png" alt="Decoration" width={20} height={20} />
                            </div>
                            <div >
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Short Summary</h2>
                                    <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                                        <li>Introduce yourself, your team (if you have), and your background.</li>
                                        <li>Briefly describe the long-term and short-term goals of your brand and why it's important to you.</li>
                                    </ul>
                                </div>


                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800 mb-2">The Impact</h2>
                                    <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                                        <li>Share more about your brand and highlight how contributions can make a meaningful impact.</li>
                                        <li>Explain why your brand is important to contributors and how it positively influences the world.</li>
                                        <li>Showcase your brand's proven success and past achievements, if applicable.</li>
                                        <li>Build trust by sharing authentic stories and experiences.</li>
                                    </ul>
                                </div>


                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800 mb-2">The Story</h2>
                                    <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                                        <li>Share the vision of your organization and the journey that led to its establishment.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="flex justify-center gap-4 pt-4">
                            <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-all">
                                Edit
                            </button>
                            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all">
                                Save
                            </button>
                        </div>
                    </div>

                    {/* Social Links Section */}
                    <div className="border border-gray-300 rounded-md p-6 bg-white shadow-sm space-y-4">
                        <h2 className="text-lg font-semibold text-gray-800">Social Links</h2>
                        <p className="text-sm text-gray-500">
                            Help your contributors find you faster (at least 3 options). Connect your socials so they get to know you better.
                        </p>
                        <div className="flex items-center justify-center gap-4 ">
                            <input
                                type="text"
                                placeholder="https://your-social-link.com"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="https://your-social-link.com"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                            <button className="text-blue-600 hover:underline text-sm">
                                + Add social link
                            </button>
                    </div>

                    {/* Continue Button */}
                    <div>
                        <Link href="/main/Branding-and-organization/Waiting">
                            <button className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all">
                                Continue
                            </button>
                        </Link>
                    </div>
                </div>
            </main>

            <PublicFooter />
        </div>
    );
}
