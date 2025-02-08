"use client";

import { FaPlay } from "react-icons/fa";
import Image from "next/image";
import homeimg from "../../assets/home-img.png";
import JobListings from "../../components/Joblisting.js"

import "../styles/Home.css";


export default function Job() {
  return (
    <div>
      <div className="home-container">
        <div className="home-left">
          <h1 className="home-title">
            Find out <span className="text-purple">talented</span>{" "}
            <span className="text-purple">freelancer</span> with better review{" "}
            <span className="text-dark">faster</span>
          </h1>
          <p className="home-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="home-buttons">
            <button className="discover-btn">Discover Now</button>
            <button className="watch-btn">
              <FaPlay /> Watch Demo
            </button>
          </div>
        </div>
        <div className="home-right">
          <Image src={homeimg} alt="Home Image" className="home-img" />
        </div>
      </div>
      <JobListings/>
    </div>
  );
}
