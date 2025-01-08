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
            <div className="flex flex-col justify-center w-full my-12 font-montserrat md:flex-row fade-in">
                <div className="w-[100%] md:max-w-[500px]  px-8">
                    <div>
                        <img src="ramadan/aboutinfo.png" />
                    </div>
                </div>
                <div className="w-full md:max-w-[500px] px-8">
                    <div className="">
                        <div>
                            <p className="text-[30px] md:text-[35px] font-abril text-[#B78738]">
                                "Umrah during Ramadan is equal to Hajj"
                            </p>
                            {/* first */}
                            <div className="flex items-center gap-4 mt-4">
                                <div>
                                    <p className="mt-2 text-sm text-justify">
                                    Our legacy of facilitating pilgrims in performing their obligatory religious Hajj duty, goes back to over two decades, when the visionary late Haji Bashir Bhai Chokhawala laid the foundation of yourtravelshop.com in partnership with Haji Yusuf Bhai Kherada of Al Khalid Tours, Mumbai in 1995.
                                    </p>

                                    <p className="mt-2 text-sm text-justify">
                                    Since our inception, every year we have enabled hundreds of pilgrims to successfully fulfil their promise to Allah SWT. Our expert team of experienced professionals in England, India and Saudi Arabia are committed towards ensuring that every aspect of this holy spiritual pilgrimage is executed flawlessly, and the pilgrim is in a relaxed state of mind during the sacred journey.
                                    </p>

                                    <p className="mt-2 text-sm text-justify       ">
                                    We pride ourselves in providing excellent service, focusing on ensuring your absolute comfort delivered with love, sincerity and empathy. We are recognised, respected and held in high esteem by both pilgrims across many Countries worldwide, and our fellow colleagues & peers in the Hajj & Umrah Industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default ContactInfo;
