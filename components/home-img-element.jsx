import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import freelancerguy from "../assets/flymsg-excited-laptop-guy.png";
import coin from "../assets/coin.png"; 
import dot from "../assets/coderwall.png";
import dot2 from "../assets/mobile.png";
import uploadedImg from "../assets/image.jpeg"; // Uploaded image
import yellowstar from "../assets/star (3).png";
import greystar from "../assets/star.png";
import check from "../assets/check.png";
import deletebox from "../assets/delete.png";

function HomeRight() {
  const rating = 4; // Example rating, update dynamically as needed

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="home-right"
      >
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
        <div className="floating-box-dot">
          <Image src={dot} alt="Dot Pattern 1" className="dot-icon" />
        </div>
        <div className="floating-box-dot2">
          <Image src={dot2} alt="Dot Pattern 2" className="dot-icon" />
        </div>
        <Image src={freelancerguy} alt="Freelancer" className="freelancer-img" />

        {/* Coin Icon Floating */}
        <div className="floating-box floating-box-coin">
          <Image src={coin} alt="Coin Icon" className="coin-icon" />
        </div>
      </motion.div>

      {/* Freelancer Card */}
      <div className="freelancer-card">
        <Image src={uploadedImg} alt="Freelancer" className="freelancer-avatar" />

        <div className="freelancer-info">
          <h3>David</h3>
          <p>UI/UX Designer</p>
          <div className="freelancer-rating">
            {[...Array(5)].map((_, index) => (
              <Image
                key={index}
                src={index < rating ? yellowstar : greystar}
                alt="Star"
                className="star-icon"
              />
            ))}
          </div>
        </div>

        {/* Actions (Check and Delete Icons) */}
        <div className="freelancer-actions">
          <Image src={check} alt="Approve" className="icon-btn" />
          <Image src={deletebox} alt="Reject" className="icon-btn" />
        </div>
      </div>
    </div>
  );
}

export default HomeRight;
