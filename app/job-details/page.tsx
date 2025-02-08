"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import FeaturedJobs from "@/components/FeaturedJobs";
import { CalendarIcon, UploadCloud } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function JobDetails() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);


  const title = searchParams.get("title") || "Lead UI/UX Designer";
  const company = searchParams.get("company") || "Highspeed Studios";
  const salary = searchParams.get("salary") || "$14,000 - $25,000";
  const location = searchParams.get("location") || "London, England";
  const icon = searchParams.get("icon") || "";
  const experience = "2 - 3 Years";

  const heart = new URL("../../assets/heart.png", import.meta.url).href;
  const gps = new URL("../../assets/gps.png", import.meta.url).href;
  const dollar = new URL("../../assets/dollar.png", import.meta.url).href;
  const compass = new URL("../../assets/compass-icon.png", import.meta.url).href;
  const gallery1 = new URL("../../assets/gallery-1.png", import.meta.url).href;
  const gallery2 = new URL("../../assets/gallery-2.png", import.meta.url).href;
  const gallery3 = new URL("../../assets/gallery-3.png", import.meta.url).href;
  const gallery4 = new URL("../../assets/gallery-4.png", import.meta.url).href;
  const rating = new URL("../../assets/rating.png", import.meta.url).href;
  const profile = new URL("../../assets/profile.png", import.meta.url).href;
  const location2 = new URL("../../assets/maps-and-flags.png", import.meta.url).href;

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div>
     <Navbar/>
    
    <section>
      {/* Banner Section */}
      <div className="bg-purple-600 text-white py-28 relative">
  <div className="max-w-xl mx-auto px-6 text-center">
    <button
      onClick={() => router.back()}
      className="absolute left-4 top-4 flex items-center text-white font-semibold"
    >
      <IoIosArrowBack className="mr-2" /> Back to Listings
    </button>
    <h1 className="text-3xl font-bold mb-6">{title}</h1>
    <p className="text-sm mb-6" >Jobs / {company} / {title}</p>
  </div>
</div>


      {/* Overlapping Sections */}
      <div className="relative -mt-20 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 lg:flex-row-reverse flex-col-reverse">
          {/* Company Info Section */}
          <aside className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex flex-col items-center">
            <img
      src={icon}
      alt={`${company} Logo`}
      className="w-24 h-24 object-cover rounded-full mb-4"
    />
              <h2 className="text-xl font-medium text-black">{company}</h2>
              <p className="text-sm text-gray-500">Creative Design Agency</p>
              <button className="mt-4 bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium">
                + Follow
              </button>

              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-3">
                    <img src={profile} alt="Profile Icon" className="w-12 h-12 p-2 rounded-md" />
                    <div>
                      <p className="text-lg font-semibold text-black">80 - 100</p>
                      <p className="text-sm text-gray-500">Employees</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <img src={rating} alt="Rating Icon" className="w-12 h-12 p-2 rounded-md" />
                    <div>
                      <p className="text-lg font-semibold text-black">4.5</p>
                      <p className="text-sm text-gray-500">Reviews</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <img src={location2} alt="Location Icon" className="w-12 h-12 p-2 rounded-md" />
                  <div>
                    <p className="text-lg font-semibold text-black">{location}</p>
                    <p className="text-sm text-gray-500">Location</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-md font-semibold text-black">About Company</h3>
              <p className="text-sm text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu euismod tempor...
              </p>
            </div>

            <div className="mt-6 flex justify-between">
              <button className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium">
                23 Vacancies
              </button>
              <button className="text-purple-600 font-semibold">More Details</button>
            </div>
          </aside>

          {/* Job Details Section */}
          <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-md">
  <div className="flex justify-between items-center flex-wrap">
    <div>
      <h1 className="text-2xl font-semibold text-black">{title}</h1>
      <p className="text-gray-500 text-sm">Posted on November 12th, 2020</p>
    </div>
    <div className="flex items-center space-x-4 mt-4 lg:mt-0">
    <button
                    onClick={() => setShowApplicationForm(!showApplicationForm)}
                    className="px-6 py-2 text-sm bg-purple-100 text-purple-700 font-semibold rounded-full hover:bg-purple-200"
                  >
                    Apply Now
                  </button>
      <img src={heart} alt="Heart Icon" className="w-8 h-8 cursor-pointer" />
    </div>
  </div>

  <div className="flex flex-col lg:flex-row lg:items-center mt-6 lg:space-x-8 space-y-4 lg:space-y-0">
    <div className="flex items-center space-x-2">
      <img src={dollar} alt="Dollar Icon" className="w-11 h-11" />
      <div>
        <p className="text-lg font-medium text-black">{salary}</p>
        <p className="text-sm text-gray-500">Monthly Salary</p>
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <img src={compass} alt="Experience Icon" className="w-10 h-10" />
      <div>
        <p className="text-lg font-medium text-black">{experience}</p>
        <p className="text-sm text-gray-500">Experience</p>
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <img src={gps} alt="Location Icon" className="w-10 h-10" />
      <div>
        <p className="text-lg font-medium text-black">{location}</p>
        <p className="text-sm text-gray-500">Location</p>
      </div>
    </div>
  </div>

  {!showApplicationForm ? (
                <>
                  <div className="mt-8">
                    <h3 className="text-sm font-semibold text-black">Job Description</h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-sm font-semibold text-black">Gallery</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                      <img src={gallery1} alt="Gallery 1" className="w-full h-32 rounded-xl object-cover" />
                      <img src={gallery2} alt="Gallery 2" className="w-full h-32 rounded-xl object-cover" />
                      <img src={gallery3} alt="Gallery 3" className="w-full h-32 rounded-xl object-cover" />
                      <img src={gallery4} alt="Gallery 4" className="w-full h-32 rounded-xl object-cover" />
                    </div>
                  </div>
                </>
              ) : (
                <div className="mt-8 max-w-3xl mx-auto">
                <h3 className="text-xl font-medium text-gray-800">Fill the job applications</h3>
          
                <form className="mt-8 space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-700">First Name</label>
      <input
        type="text"
        placeholder="Type here"
        className="w-full px-3 py-1.5 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>

    <div>
      <label className="block mb-2 text-sm font-medium text-gray-700">Middle Name</label>
      <input
        type="text"
        placeholder="Type here"
        className="w-full px-3 py-1.5 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>

    <div>
      <label className="block mb-2 text-sm font-medium text-gray-700">Last Name</label>
      <input
        type="text"
        placeholder="Type here"
        className="w-full px-3 py-1.5 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-700">Birth Date</label>
      <div className="relative">
        <input
          type="text"
          placeholder="August 23th, 1995"
          className="w-full px-3 py-1.5 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
       <CalendarIcon className="absolute right-2 top-2 w-4 h-4 text-purple-500" />

      </div>
    </div>

    <div>
      <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
      <input
        type="email"
        placeholder="Type here"
        className="w-full px-3 py-1.5 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  </div>

  <div>
    <label className="block mb-2 text-sm font-medium text-gray-700">About You</label>
    <textarea
      rows="4"
      className="w-full px-3 py-1.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      placeholder="Tell us about yourself..."
    />
  </div>

  <div>
    <label className="block mb-2 text-sm font-medium text-gray-700">Attach your resume</label>
    <div className="relative flex items-center border border-dashed rounded-lg p-4">
      <input type="file" onChange={handleFileChange} className="absolute inset-0 opacity-0" />
      <UploadCloud className="text-purple-500" />
      <span className="ml-4">Upload Files (PDF, DOC, PPT, JPG, PNG)</span>
    </div>
    {selectedFile && (
      <div className="mt-2 flex items-center space-x-2">
        <p className="text-sm text-gray-600">{selectedFile.name}</p>
        <span className="text-sm text-gray-500">{(selectedFile.size / 1024).toFixed(1)} KB</span>
      </div>
    )}
  </div>

  <div className="flex justify-between">
    <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-700">
      Submit
    </button>
    <button type="button" className="text-gray-500 hover:text-gray-800">Cancel</button>
  </div>
</form>

              </div>
              )}

</div>
</div>
        
      </div>
    </section>
    <FeaturedJobs/>
    </div>
  );
}
