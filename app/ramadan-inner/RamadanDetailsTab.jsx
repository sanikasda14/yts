"use client";
import { useState, useEffect } from "react";

const TabSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    const sections = [
        {
            id: 0,
            title: "Overview",
            content: (
                <>
                    <div class="container mx-auto p-6">

                        <div class="py-4" id="overview">

                            <div class="mb-8">
                                <h6 class="text-2xl font-semibold text-purple-800 flex items-center">
                                    <i class="fa fa-file-text-o text-purple-700 mr-2"></i>Tour Overview
                                </h6>
                                <div class="border-b border-gray-300 w-1/4 mt-2"></div>
                            </div>


                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">

                                <div>
                                    <h3 class="text-sm font-medium text-gray-800">
                                        Departure Flights From:
                                    </h3>
                                    <p class="text-gray-700">Mumbai to Jeddah</p>
                                </div>

                                <div>
                                    <h3 class="text-sm font-medium text-gray-800">
                                        Arrival Flights From:
                                    </h3>
                                    <p class="text-gray-700">Jeddah to Mumbai</p>
                                </div>
                            </div>


                            <div class="border-b border-gray-300 my-8"></div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">

                                <div>
                                    <h3 class="text-sm font-medium text-gray-800">
                                        Number of Days at Makkah:
                                    </h3>
                                    <p class="text-gray-700">7 Nights</p>
                                </div>

                                <div>
                                    <h3 class="text-sm font-medium text-gray-800">
                                        Number of Days at Madinah:
                                    </h3>
                                    <p class="text-gray-700">7 Nights</p>
                                </div>
                            </div>


                            <div class="border-b border-gray-300 my-8"></div>


                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">

                                <div>
                                    <h3 class="text-sm font-medium text-gray-800">
                                        Tour Guide:
                                    </h3>
                                    <p class="text-gray-700">Yes Included (will travel with Group)</p>
                                </div>
                            </div>


                            <div class="border-b border-gray-300 my-8"></div>


                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">

                                <div>
                                    <h3 class="text-sm font-medium text-gray-800">
                                        Intercity Transfer:
                                    </h3>
                                    <p class="text-gray-700">Transfer by Group Coach</p>
                                </div>
                            </div>

                            <div class="border-b border-gray-300 my-8"></div>


                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">

                                <div>
                                    <h3 class="text-sm font-medium text-gray-800">
                                        Meal:
                                    </h3>
                                    <p class="text-gray-700">Breakfast, Lunch & Dinner included in buffet</p>
                                </div>
                            </div>
                        </div>
                    </div>



                </>
            )


        },
        { id: 1, title: "Date & Price", content: "This is the content of Tab 2." },
        { id: 2, title: "Hotel", content: "This is the content of Tab 3." },
        { id: 3, title: "Inclusions / Exclusions", content: "This is the content of Tab 4." },
    ];

    // Handle scroll and determine active tab
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2; // Midpoint of viewport
            const activeSection = sections.find((section) => {
                const element = document.getElementById(`section-${section.id}`);
                if (!element) return false;
                const { top, bottom } = element.getBoundingClientRect();
                const elementTop = top + window.scrollY;
                const elementBottom = bottom + window.scrollY;
                return scrollPosition >= elementTop && scrollPosition <= elementBottom;
            });

            if (activeSection) {
                setActiveTab(activeSection.id);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections]);

    return (
        <div className="package-details">

            <div className="container mx-auto max-w-full">
                {/* Tabs */}
                <div className="bg-white shadow-md tabbar">
                    <div className="package-tab flex space-x-4 border-b">
                        {sections.map((section, index) => (
                            <button
                                key={section.id}
                                className={`package-tab-btn py-2 px-4 text-sm font-medium ${activeTab === index
                                    ? "text-blue-500 border-b-2 border-blue-500"
                                    : "text-gray-500 hover:text-blue-500"
                                    }`}
                                onClick={() => {
                                    setActiveTab(section.id);
                                    document
                                        .getElementById(`section-${section.id}`)
                                        .scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                {section.title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Sections with Two Columns */}
            <div className="container mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Column: Sections */}
                <div className="col-span-2">
                    {sections.map((section) => (
                        <div
                            key={section.id}
                            id={`section-${section.id}`}
                            className="flex items-center justify-center border-b py-6"
                        >
                            <h2 className="text-2xl font-semibold">{section.content}</h2>
                        </div>
                    ))}
                </div>

                {/* Right Column: Different Content */}
                <div className="col-span-1">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-medium mb-4">Additional Information</h3>
                        <p>
                            Here you can add additional content or features such as a contact form, special offers, or related information.
                        </p>
                        {/* Add more content as required */}
                    </div>
                </div>
            </div>

        </div>

    );
};

export default TabSection;
