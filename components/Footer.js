'use client';

import React from 'react';
import Image from 'next/image';
import logo from '../assets/workly-light.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faSnapchat, faPinterest } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10 font-sans">
      <div className="flex flex-wrap justify-between gap-5">
        <div className="flex-1 min-w-[200px] text-left">
          <Image src={logo} alt="Caverta Logo" width={150} height={50} className="mb-2" />
          <p className="text-sm leading-6">
          Workly is a Freelance Landing Website lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
          </p>
        </div>

        <div className="flex-1 min-w-[200px] text-left">
          <h2 className="text-base mb-2 uppercase">WORKLY</h2>
          <p className="text-sm leading-loose">Why Workly</p>
          <p className="text-sm leading-loose">Enterprise</p>
          <p className="text-sm leading-loose">Security</p>
          <p className="text-sm leading-loose">Pricing</p>
        </div>
        
        <div className="flex-1 min-w-[200px] text-left">
          <h2 className="text-base mb-2 uppercase">COMPANY</h2>
          <p className="text-sm leading-loose">About Us</p>
          <p className="text-sm leading-loose">Contact Us</p>
          <p className="text-sm leading-loose">Products</p>
          <p className="text-sm leading-loose">FAQ</p>
        </div>
        
        <div className="flex-1 min-w-[200px] text-left">
          <h2 className="text-base mb-2 uppercase">MORE INFO</h2>
          <p className="text-sm leading-loose">Careers</p>
          <p className="text-sm leading-loose">Get in Touch</p>
          <p className="text-sm leading-loose">Privacy Policy</p>
        </div>

      </div>

      <div className="mt-5 text-xs border-t border-gray-800 pt-3 flex gap-10">
        <p>Copyright © 2025, Workly. Designed by Tanisha 🤍</p>
        <div className="flex space-x-4 text-lg">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faSnapchat} />
          <FontAwesomeIcon icon={faPinterest} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
