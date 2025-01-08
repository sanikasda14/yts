"use client";
import React, { useState } from "react";
import FloatingDockDemo from "../FloatingDock";

const RamdanHero = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            id: 0,
            label: "10 Days Packages",
            content: (
                <>
                    <div className="container mx-auto max-w-[100%]">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 package-section">
                            <div className="rounded-lg p-4">
                                <ul className="list-none">
                                    <li>
                                        <div className="text-center mb-4 price-head">
                                            <h2>Group 19</h2>
                                            <h3 className="text-lg text-gray-700 italic">
                                                <i>Starting @</i>{" "}
                                                <span className="text-xl font-bold text-gray-900">
                                                    <i className="fa fa-inr"></i> £1,350
                                                </span>
                                            </h3>
                                        </div>
                                        <div className="package-details">
                                            <div className="details">
                                                <div className="mb-4 package-info">
                                                    <div className="p-4 days-info">
                                                        <h3 className="text-center font-semibold">
                                                            <div className="text-gray-800">10 Days of Umrah</div>
                                                        </h3>
                                                    </div>
                                                    <div className="flex justify-between package-date p-4">
                                                        <h4>
                                                            Duration: 10 days
                                                        </h4>
                                                        <h4>
                                                            (03 Jan - 13 Jan)
                                                        </h4>
                                                    </div>
                                                    <div className="package-hotels p-4">
                                                        <div className="flex justify-between">
                                                            <div className="madinah">
                                                                <div className="flex justify-content-start makkah-hotel mb-4">
                                                                    <img src="/ramadan/madinah_icon.png" className="mr-3 madinah_icon" />
                                                                    <h3>Madinah</h3>
                                                                </div>
                                                                <h2>Maden Hotel</h2>
                                                            </div>
                                                            <div className="makkah">
                                                                <div className="flex justify-content-end makkah-hotel mb-4">
                                                                    <img src="/ramadan/hajj_ico.png" className="mr-3 makkah_icon " />
                                                                    <h3>Makkah</h3>
                                                                </div>
                                                                <h2>Le Meridien Hotel</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2">
                                                        <a href="/view-package" className="w-full px-6 py-2 view-package-btn text-white transition duration-300">
                                                            View Package
                                                        </a>
                                                        <a href="/book-now"  className="w-full px-6 py-2 book-now-btn text-white transition duration-300">
                                                            Book Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="rounded-lg p-4">
                                <ul className="list-none">
                                    <li>
                                    <div className="text-center mb-4 price-head">
                                            <h2>Group 20</h2>
                                            <h3 className="text-lg text-gray-700 italic">
                                                <i>Starting @</i>{" "}
                                                <span className="text-xl font-bold text-gray-900">
                                                    <i className="fa fa-inr"></i> £1,350
                                                </span>
                                            </h3>
                                        </div>
                                        <div className="package-details">
                                            <div className="details">
                                                <div className="mb-4 package-info">
                                                    <div className="p-4 days-info">
                                                        <h3 className="text-center font-semibold">
                                                            <div className="text-gray-800">10 Days of Umrah</div>
                                                        </h3>
                                                    </div>
                                                    <div className="flex justify-between package-date p-4">
                                                        <h4>
                                                            Duration: 10 days
                                                        </h4>
                                                        <h4>
                                                            (17 Jan - 27 Jan)
                                                        </h4>
                                                    </div>
                                                    <div className="package-hotels p-4">
                                                        <div className="flex justify-between">
                                                            <div className="makkah">
                                                                <div className="flex justify-content-start makkah-hotel mb-4">
                                                                    <img src="/ramadan/hajj_ico.png" className="mr-3 makkah_icon " />
                                                                    <h3>Makkah</h3>
                                                                </div>
                                                                <h2>Le Meridien Hotel</h2>
                                                            </div>
                                                            <div className="madinah">
                                                                <div className="flex justify-content-end makkah-hotel mb-4">
                                                                    <img src="/ramadan/madinah_icon.png" className="mr-3 madinah_icon" />
                                                                    <h3>Madinah</h3>
                                                                </div>
                                                                <h2>Maden Hotel</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2">
                                                        <a href="/view-package" className="w-full px-6 py-2 view-package-btn text-white transition duration-300">
                                                            View Package
                                                        </a>
                                                        <a href="/book-now"  className="w-full px-6 py-2 book-now-btn text-white transition duration-300">
                                                            Book Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="rounded-lg p-4">
                                <ul className="list-none">
                                    <li>
                                    <div className="text-center mb-4 price-head">
                                            <h2>Group 21</h2>
                                            <h3 className="text-lg text-gray-700 italic">
                                                <i>Starting @</i>{" "}
                                                <span className="text-xl font-bold text-gray-900">
                                                    <i className="fa fa-inr"></i> £1,350
                                                </span>
                                            </h3>
                                        </div>
                                        <div className="package-details">
                                            <div className="details">
                                                <div className="mb-4 package-info">
                                                    <div className="p-4 days-info">
                                                        <h3 className="text-center font-semibold">
                                                            <div className="text-gray-800">10 Days of Umrah</div>
                                                        </h3>
                                                    </div>
                                                    <div className="flex justify-between package-date p-4">
                                                        <h4>
                                                            Duration: 10 days
                                                        </h4>
                                                        <h4>
                                                            (24 Jan - 03 Feb)
                                                        </h4>
                                                    </div>
                                                    <div className="package-hotels p-4">
                                                        <div className="flex justify-between">
                                                            <div className="madinah">
                                                                <div className="flex justify-content-start makkah-hotel mb-4">
                                                                    <img src="/ramadan/madinah_icon.png" className="mr-3 madinah_icon" />
                                                                    <h3>Madinah</h3>
                                                                </div>
                                                                <h2>Maden Hotel</h2>
                                                            </div>
                                                            <div className="makkah">
                                                                <div className="flex justify-content-end makkah-hotel mb-4">
                                                                    <img src="/ramadan/hajj_ico.png" className="mr-3 makkah_icon " />
                                                                    <h3>Makkah</h3>
                                                                </div>
                                                                <h2>Le Meridien Hotel</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2">
                                                        <a href="/view-package" className="w-full px-6 py-2 view-package-btn text-white transition duration-300">
                                                            View Package
                                                        </a>
                                                        <a href="/book-now"  className="w-full px-6 py-2 book-now-btn text-white transition duration-300">
                                                            Book Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            

                        </div>
                    </div>
                </>
            ),
        },
        { id: 1, label: "14 Days Packages", content: "Day-by-day itinerary for your spiritual journey." },
    ];

    return (
        <main>
            <div className="container mx-auto max-w-[90%]">
                <div className="tabs-container mt-8 rounded-lg p-6">
                    {/* Tabs Header */}
                    <nav className="flex border-b border-gray-200 mb-4" aria-label="Tabs">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-2 text-md font-medium ${activeTab === tab.id
                                    ? "border-b-2 border-blue text-blue"
                                    : "text-gray-500 hover:text-blue"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </nav>

                    {/* Tabs Content */}
                    <div>
                        {tabs.map(
                            (tab) =>
                                activeTab === tab.id && (
                                    <div key={tab.id} className="text-gray-700">
                                        {tab.content}
                                    </div>
                                )
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default RamdanHero;
