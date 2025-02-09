"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import Navbar from "@/components/Navbar";

interface BlogPageProps {
  showFeaturedOnly?: boolean;
  showBanner?: boolean;
}

export default function BlogPage({ showFeaturedOnly = false, showBanner = true }: BlogPageProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const events = [
    { id: 1, title: "Ziro Mobile App Beta Tester Launching Ceremonials", date: "24 NOV", category: "MOBILE APP", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", featured: true },
    { id: 2, title: "Manage Over 500 Employees Clearly with Mr. Samuel", date: "22 NOV", category: "BUSINESS", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", featured: true },
    { id: 3, title: "Ziro Annually Monthly Meetup: How to Increase Productivity", date: "21 NOV", category: "ACCOUNTING", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", featured: true },
    { id: 4, title: "Annual Financial Planning Summit", date: "21 NOV", category: "FINANCE", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", featured: false },
  ];

  const filteredEvents = showFeaturedOnly ? events.filter((event) => event.featured) : events;

  return (
    <div>
      <Navbar />
      <div className="min-h-screen px-10">
        {showBanner && (
          <section className="max-w-7xl mx-auto bg-purple-900 text-white rounded-3xl overflow-hidden relative mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 relative h-auto lg:h-[600px]">
              <div className="relative h-[250px] lg:h-full">
                <Image src="/assets/event-banner.jpg" alt="Event Banner" layout="fill" objectFit="cover" className="rounded-tl-3xl lg:rounded-bl-3xl" />
                <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-purple-800/50 to-purple-900"></div>
              </div>
              <div className="p-4 lg:p-16 z-10">
                <div className="lg:hidden flex justify-between items-center mb-3">
                  <p className="text-xs font-semibold text-orange-300">FEATURED EVENTS</p>
                  <button onClick={() => setShowDetails(!showDetails)} className="flex justify-center items-center">
                    <IoIosArrowDown size={24} className={`text-white transition-transform ${showDetails ? "rotate-180" : "rotate-0"}`} />
                  </button>
                </div>
                {(showDetails || isDesktop) && (
                  <div className="mt-3 lg:block">
                    <h2 className="text-lg lg:text-4xl font-bold mb-2 lg:mb-4 leading-snug lg:leading-relaxed">
                      Ziro Worldwide<br /> Freelancers Meetup <br />Indonesia 2021
                    </h2>
                    <p className="text-xs lg:text-lg text-gray-300">Friday, November 1st, 2021 • New York</p>
                    <p className="text-xs lg:text-base text-gray-300 mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod consequat.
                    </p>
                    <div className="mt-4 flex items-center">
                      <div className="h-1 bg-purple-700 w-full lg:w-4/5 rounded-full relative">
                        <div className="h-1 bg-purple-500 w-1/4 rounded-full absolute"></div>
                      </div>
                      <span className="ml-2 text-xs lg:text-sm">1 left</span>
                    </div>
                    <div className="mt-6 flex space-x-3">
                      <button className="bg-purple-600 text-white px-4 py-1.5 text-sm lg:px-6 lg:py-2 lg:text-lg rounded-full hover:bg-purple-700">Book Now</button>
                      <button className="flex items-center space-x-2 text-purple-300 text-sm lg:text-lg">
                        <IoHeartOutline size={18} className="lg:w-6 lg:h-6" />
                        <span>Bookmark</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
        <div className="bg-gray-100">
          <section className="max-w-7xl mx-auto px-4 lg:px-0 mt-10">
            <header className="flex justify-center items-center mb-6">
              <h1 className="text-black text-3xl font-semibold">{showFeaturedOnly ? "Featured Blogs" : "Upcoming Events"}</h1>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden relative">
                  <Image src="/assets/event-banner.jpg" alt={event.title} width={400} height={160} className="w-full h-40 object-cover" />
                  <div className="absolute p-4 bottom-52 right-8 transform translate-y-1/2 z-10 flex flex-col items-center bg-gray-800 text-white w-16 h-28 rounded-full">
                    <span className="text-lg font-bold leading-none">{event.date.split(" ")[0]}</span>
                    <span className="text-xs uppercase mt-1">{event.date.split(" ")[1]}</span>
                    <Image src="/assets/circle-heart.png" alt="Heart Icon" width={32} height={32} className="mt-3 mb-4 w-8 h-8" />
                  </div>
                  <div className="p-4 mt-6">
                    <p className="text-xs text-orange-400 font-bold">{event.category}</p>
                    <h2 className="text-lg text-black font-semibold mt-2">{event.title}</h2>
                    <p className="text-sm text-gray-500 mt-2">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
