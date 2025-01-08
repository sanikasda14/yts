"use client";
import { useEffect } from "react";
import {
    Facebook,
    Instagram,
    MailOpen,
    Map,
    PhoneOutgoing,
} from "lucide-react";

const ContactInfo = () => {
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

            <div className="flex flex-col justify-center items-center w-full my-12 font-montserrat md:flex-row fade-in">
                <div className="w-[100%] md:max-w-[500px]  px-8">
                    <div>
                        <img src="ramadan/ramadan.jpg" />
                    </div>
                </div>
                <div className="w-full md:max-w-[500px] px-8">
                    <div>
                        <p className="text-[30px] md:text-[35px] font-abril text-[#B78738]">
                        Leave us your info
                        </p>
                        <p>and we will get back to you.</p>

                        <form className="w-full mt-4 mb-4">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full px-3 py-3 bg-transparent border border-gray-400 focus:outline-none focus:ring-0"
                                />
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    className="w-full px-3 py-3 bg-transparent border border-gray-400 focus:outline-none focus:ring-0"
                                />
                                <input
                                    type="text"
                                    placeholder="Mobile Number"
                                    className="w-full px-3 py-3 bg-transparent border border-gray-400 focus:outline-none focus:ring-0"
                                />
                            </div>

                            <textarea
                                type="text"
                                placeholder="Enter Your Message"
                                className="w-full px-3 py-3 mt-4 bg-transparent border border-gray-400 hide-scrollbar focus:outline-none focus:ring-0"
                            />

                            <button className="border-[#B78738] text-[#B78738] border font-medium md:text-xl px-5 py-1 mt-4">
                                Submit
                            </button>
                        </form>
                    </div>


                </div>
            </div>




        </main>
    );
};
export default ContactInfo;
