import PublicFooter from "@/components/PublicFooter"
import PublicNavbar from "@/components/PublicNavbar"
import StepIndicator from "@/components/StepIndicator"

export default function BasicInfo() {
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <PublicNavbar/>
            <StepIndicator currentStep={0}/>
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Basic Information</h1>
                {/* Add your form or content here */}
            </div>
            <PublicFooter/>
        </div>
    )
}