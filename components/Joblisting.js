"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

export default function JobListings() {
  const heart = new URL("../assets/heart.png", import.meta.url).href;
  const gps = new URL("../assets/gps.png", import.meta.url).href;
  const dollar = new URL("../assets/dollar.png", import.meta.url).href;
  const logo1 = new URL("../assets/logo1.png", import.meta.url).href;
  const logo2 = new URL("../assets/logo2.png", import.meta.url).href;
  const logo3 = new URL("../assets/logo3.png", import.meta.url).href;

  const jobs = [
    {
      title: "Senior UX Designer",
      company: "Highspeed Studios",
      salary: "$14,000 - $25,000",
      location: "London, England",
      icon: logo1,
    },
    {
      title: "Intern UX Designer",
      company: "Maxime Team",
      salary: "$500 - $1,000",
      location: "Manchester, England",
      icon: logo2,
    },
    {
      title: "Junior UX Designer",
      company: "Vibuu but Betu Studios",
      salary: "$8,000 - $12,000",
      location: "Oxford, England",
      icon: logo3,
    },
  ];

  return (
    <div>
      <Navbar />
      <section className="px-4 sm:px-8 md:px-16 py-10">
        <h2 className="text-2xl text-black font-bold mb-6">
          Showing {jobs.length} Jobs
        </h2>
        <div className="grid gap-4">
          {jobs.map((job, index) => (
            <JobCard
              key={index}
              job={job}
              heart={heart}
              gps={gps}
              dollar={dollar}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function JobCard({ job, heart, gps, dollar }) {
  const [showDetails, setShowDetails] = useState(false);
  const router = useRouter();

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {/* Desktop and Large View */}
      <div className="hidden md:flex items-center justify-between">
        <div className="flex items-center gap-x-6 flex-1">
          <img
            src={job.icon}
            alt="Job Icon"
            className="w-12 h-12 object-cover rounded-full"
          />
          <div className="min-w-[200px]">
            <h3 className="text-base font-semibold truncate text-black">
              {job.title}
            </h3>
            <p className="text-sm text-purple-600 truncate">{job.company}</p>
          </div>

          <div className="flex items-center gap-x-2 min-w-[200px]">
            <img src={dollar} alt="Salary Icon" className="w-8 h-8" />
            <div>
              <p className="text-md font-medium text-black">{job.salary}</p>
              <p className="text-sm text-gray-500">Monthly Salary</p>
            </div>
          </div>

          <div className="flex items-center gap-x-2 min-w-[200px]">
            <img src={gps} alt="Location Icon" className="w-8 h-8" />
            <div>
              <p className="text-md font-medium text-black">{job.location}</p>
              <p className="text-sm text-gray-500">Location</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            className="px-5 py-2 text-sm bg-purple-100 text-purple-700 font-semibold rounded-full hover:bg-purple-200"
            onClick={() => {
              router.push(
                `/job-details?title=${encodeURIComponent(
                  job.title
                )}&company=${encodeURIComponent(
                  job.company
                )}&icon=${encodeURIComponent(
                  job.icon
                )}&salary=${encodeURIComponent(
                  job.salary
                )}&location=${encodeURIComponent(job.location)}`
              );
            }}
          >
            Apply Now
          </button>
          <img src={heart} alt="Heart Icon" className="w-8 h-8" />
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        <div className="flex items-start gap-x-4">
          <img
            src={job.icon}
            alt="Job Icon"
            className="w-12 h-12 object-cover rounded-full"
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <p className="text-base font-semibold text-black">{job.title}</p>
              <img src={heart} alt="Heart Icon" className="w-6 h-6" />
            </div>
            <p className="text-sm text-purple-600">{job.company}</p>

            {/* Apply Button */}
            <button
              className="mt-2 px-4 py-2 text-sm bg-purple-100 text-purple-700 font-semibold rounded-full hover:bg-purple-200"
              onClick={() => {
                router.push(
                  `/job-details?title=${encodeURIComponent(
                    job.title
                  )}&company=${encodeURIComponent(
                    job.company
                  )}&icon=${encodeURIComponent(
                    job.icon
                  )}&salary=${encodeURIComponent(
                    job.salary
                  )}&location=${encodeURIComponent(job.location)}`
                );
              }}
            >
              Apply Now
            </button>
          </div>
        </div>

        {/* Expand/Collapse Button */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full mt-3 flex items-center justify-center text-gray-600"
        >
          {showDetails ? "Hide Details" : "Show Details"}
          <IoIosArrowDown
            className={`ml-2 transition-transform ${
              showDetails ? "rotate-180" : ""
            }`}
            size={20}
          />
        </button>

        {/* Job Details */}
        {showDetails && (
          <div className="transition-all mt-4 space-y-2">
            <div className="flex items-center gap-x-2">
              <img src={dollar} alt="Salary Icon" className="w-6 h-6" />
              <p className="text-black">{job.salary}</p>
            </div>
            <div className="flex items-center gap-x-2">
              <img src={gps} alt="Location Icon" className="w-6 h-6" />
              <p className="text-black">{job.location}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
