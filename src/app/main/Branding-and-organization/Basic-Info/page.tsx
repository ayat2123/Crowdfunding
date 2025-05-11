import PublicFooter from "@/components/PublicFooter"
import PublicNavbar from "@/components/PublicNavbar"
import StepIndicator from "@/components/StepIndicator"
import Link from "next/link"

export default function BasicInfo() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <PublicNavbar />
            <StepIndicator currentStep={0} />
            <main className="flex-grow">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                      <h1 className="text-3xl font-bold text-gray-800 mb-4">Basic Info</h1>
                    <h2 className="text-lg font-semibold text-gray-700 mb-2">Tell us about your brand/organization</h2>
                    <p className="text-gray-600 mb-6">
                        Provide an overview of the brand or organization you want to register on 3F.
                    </p>

                    <div className="space-y-6">
                        {/* Brand / Organization + Country */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-full md:w-1/2 space-y-2">
                                <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Brand/Organization</label>
                                <input type="text" id="brand" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="w-full md:w-1/2 space-y-2">
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                                <input type="text" id="country" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>

                        <p className="text-gray-600">
                            Select the primary category that best describes your brand or organization. Then select the subcategory that further defines it.
                        </p>

                        {/* Category + Subcategory */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-full md:w-1/2 space-y-2">
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                                <input type="text" id="category" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="w-full md:w-1/2 space-y-2">
                                <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700">Subcategory</label>
                                <input type="text" id="subcategory" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>

                        {/* Brand Tags */}
                        <div className="space-y-2">
                            <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Brand Tags</label>
                            <input type="text" id="tags" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        {/* Terms Agreement */}
                        <div className="flex items-start space-x-2">
                            <input type="checkbox" id="terms" className="mt-1" />
                            <label htmlFor="terms" className="text-sm text-gray-700">
                                I agree with the <a href="#" className="text-blue-600 underline">terms of service</a> of 3F
                            </label>
                        </div>

                        {/* Continue Button */}
                        <div className="pt-4">
                            <Link href="/main/Branding-and-organization/Detailed-Info">
                                <button className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all">
                                    Continue
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <PublicFooter />
        </div>
    )
}
