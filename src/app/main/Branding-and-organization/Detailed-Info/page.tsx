"use client";

import { useState } from "react";
import PublicFooter from "@/components/PublicFooter";
import PublicNavbar from "@/components/PublicNavbar";
import StepIndicator from "@/components/StepIndicator";
import Image from "next/image";
import Link from "next/link";

export default function DetailedInfo() {
    // حالت‌های متن قابل ویرایش
    const [descMode, setDescMode] = useState<"sample" | "editing" | "saved">("sample");
    const [customDesc, setCustomDesc] = useState("");

    // social links state
    const [socialLinks, setSocialLinks] = useState([
        { platform: "", url: "" },
        { platform: "", url: "" },
    ]);

    const addSocialLinks = () => {
        setSocialLinks(prev => [...prev, { platform: "", url: "" }]);
    };

    const removeSocialLink = (indexToRemove:number) => {
        setSocialLinks(prev => prev.filter((_, index) => index !== indexToRemove));
    };

    const updateLink = (index:number, key:"platform" | "url", value:string) => {
        const newLinks = [...socialLinks];

        if (key === "platform") {
            newLinks[index].platform = value;
            if (!newLinks[index].url) {
                newLinks[index].url = platformBaseUrls[value] || "";
            }
        } else {
            newLinks[index][key] = value;
        }

        setSocialLinks(newLinks);
    };

    const platforms = [
        { label: "Choose platform...", value: "", icon: "/icons/social/blank.svg" },
        { label: "Twitter", value: "twitter", icon: "/icons/social/twitter.svg" },
        { label: "Instagram", value: "instagram", icon: "/icons/social/instagram.svg" },
        { label: "LinkedIn", value: "linkedin", icon: "/icons/social/linkedin.svg" },
        { label: "Facebook", value: "facebook", icon: "/icons/social/facebook.svg" },
        { label: "YouTube", value: "youtube", icon: "/icons/social/youtube.svg" },
    ];

    const platformBaseUrls = {
        twitter: "https://twitter.com/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/in/",
        facebook: "https://facebook.com/",
        youtube: "https://youtube.com/",
    };

    // دکمه کلیک روی آیکون برای پاک کردن متن نمونه و رفتن به حالت ویرایش
    const handleClearDesc = () => {
        setDescMode("editing");
        setCustomDesc("");
    };

    // ذخیره متن
    const handleSaveDesc = () => {
        setDescMode("saved");
    };

    // ویرایش مجدد متن ذخیره شده
    const handleEditDesc = () => {
        setDescMode("editing");
    };

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

                    {/* Editable Description Section */}
                    <div className="space-y-8 border border-gray-300 rounded-md p-6 bg-white shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="flex justify-center items-center gap-4 pt-1">
                                {descMode === "sample" ? (
                                    <button onClick={handleClearDesc} aria-label="Edit description">
                                        <Image src="/Vector (14).png" alt="Edit" width={20} height={20} />
                                    </button>
                                ) : (
                                    <Image src="/Vector (14).png" alt="Edit Disabled" width={20} height={20} />
                                )}
                                <Image src="/Vector (15).png" alt="Decoration" width={20} height={20} />
                            </div>

                            <div className="flex-1">
                                {/* حالت نمایش متن نمونه */}
                                {descMode === "sample" && (
                                    <>
                                        <div>
                                            <h2 className="text-lg font-semibold text-gray-400 mb-2">Short Summary</h2>
                                            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                                                <li>Introduce yourself, your team (if you have), and your background.</li>
                                                <li>Briefly describe the long-term and short-term goals of your brand and why it's important to you.</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 className="text-lg font-semibold text-gray-400 mb-2">The Impact</h2>
                                            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                                                <li>Share more about your brand and highlight how contributions can make a meaningful impact.</li>
                                                <li>Explain why your brand is important to contributors and how it positively influences the world.</li>
                                                <li>Showcase your brand's proven success and past achievements, if applicable.</li>
                                                <li>Build trust by sharing authentic stories and experiences.</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 className="text-lg font-semibold text-gray-400 mb-2">The Story</h2>
                                            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                                                <li>Share the vision of your organization and the journey that led to its establishment.</li>
                                            </ul>
                                        </div>
                                    </>
                                )}

                                {/* حالت ویرایش متن */}
                                {descMode === "editing" && (
                                    <div className="space-y-3">
                                        <textarea
                                            rows={8}
                                            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Write your own description here..."
                                            value={customDesc}
                                            onChange={(e) => setCustomDesc(e.target.value)}
                                        />
                                        <div className="flex gap-4">
                                            <button
                                                onClick={handleSaveDesc}
                                                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={() => setDescMode("sample")}
                                                className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-all"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* حالت نمایش متن ذخیره شده */}
                                {descMode === "saved" && (
                                    <div className="space-y-3">
                                        <p className="whitespace-pre-line text-sm text-gray-700 bg-gray-50 p-4 border border-gray-200 rounded-md">
                                            {customDesc || "No description provided."}
                                        </p>
                                        <button
                                            onClick={handleEditDesc}
                                            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-all"
                                        >
                                            Edit
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Social Links Section */}
                    <div className="border border-gray-300 rounded-md p-6 bg-white shadow-sm space-y-4">
                        <h2 className="text-lg font-semibold text-gray-800">Social Links</h2>
                        <p className="text-sm text-gray-500">
                            Help your contributors find you faster (at least 3 options). Connect your socials so they get to know you better.
                        </p>

                        <div className="flex flex-col gap-4">
                            {socialLinks.map((link, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    {/* Select without icon */}
                                    <div className="w-1/3">
                                        <select
                                            value={link.platform}
                                            onChange={(e) => updateLink(index, "platform", e.target.value)}
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            {platforms.map((p) => (
                                                <option key={p.value} value={p.value}>
                                                    {p.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* URL Input */}
                                    <input
                                        type="text"
                                        placeholder="https://your-social-link.com"
                                        value={link.url}
                                        onChange={(e) => updateLink(index, "url", e.target.value)}
                                        className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />

                                    {/* Remove Button */}
                                    <button
                                        type="button"
                                        onClick={() => removeSocialLink(index)}
                                        className="text-red-500 text-sm hover:underline"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={addSocialLinks}
                            className="text-blue-600 hover:underline text-sm"
                        >
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
