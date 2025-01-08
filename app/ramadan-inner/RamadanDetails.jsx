"use client";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import {
    Facebook,
    Instagram,
    MailOpen,
    Map,
    PhoneOutgoing,
} from "lucide-react";

const RamadanDetails = () => {
    useEffect(() => {
        const fadeIns = document.querySelectorAll(".fade-in");

        const observerOptions = {
            root: null, // Use the viewport
            threshold: 0.1, // Trigger when 10% of the element is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        }, observerOptions);

        // Observe all the targeted elements
        fadeIns.forEach((fadeIn) => {
            observer.observe(fadeIn);

            // Fallback check: add the show class if already visible
            if (fadeIn.getBoundingClientRect().top < window.innerHeight) {
                fadeIn.classList.add("show");
            }
        });

        // Cleanup observer on unmount
        return () => observer.disconnect();
    }, []);

    return (
        <main>
            <div className="container mx-auto max-w-[90%]">
                <div class="grid grid-cols-12 gap-4">

                    <div class="col-span-8 p-4">
                        <div class="p-6">
                            <div class="container mx-auto p-6">
                               
                                <div class="grid grid-cols-2 gap-4">
                                  
                                    <div class="flex items-center space-x-2">
                                        <FontAwesomeIcon icon={faClock} />
                                        <span class="text-gray-700 font-medium">15 Days Tour</span>
                                    </div>
                                 
                                    <div class="flex items-center space-x-2">
                                        <FontAwesomeIcon icon={faCalendar} />
                                        <span class="text-gray-700 font-medium">Availability: Aug to Dec 2024</span>
                                    </div>
                                  
                                    <div class="flex items-center space-x-2">
                                        <FontAwesomeIcon icon={faHotel} />
                                        <span class="text-gray-700 font-medium">Makkah Hotel: Barakah Mawaddah</span>
                                    </div>
                                   
                                    <div class="flex items-center space-x-2">
                                        <FontAwesomeIcon icon={faHotel} />
                                        <span class="text-gray-700 font-medium">Madina Hotel: Karam Al Khair</span>
                                    </div>
                                  
                                    <div class="flex items-center space-x-2">
                                        <FontAwesomeIcon icon={faUsers} />
                                        <span class="text-gray-700 font-medium">Package Type: Group Tour</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="col-span-4 bg-green-200 p-4">
                        Content for col-4
                    </div>
                </div>
            </div>



            



        </main>

    );
};
export default RamadanDetails;



