import React from 'react';
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "500", "600"],
});

export default function Home() {
  return (
    <div className={`${poppins.className} relative min-h-screen`}>
      {/* Hero Section */}
      <header className="bg-[#2C3E4F] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to</h1>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="text-[#A5D3E1]">Dr.</span>
            <span className="text-white">Interested</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8">Inspiring the Next Generation of Healthcare Professionals</p>
          <p className="text-lg md:text-xl text-[#D1E7F0]">
            Discover your pathway to a career in healthcare with Dr.Interested. From engaging webinars to hands-on research opportunities, we're here to help high school students explore the world of medicine.
          </p>
        </div>
      </header>

      {/* About Us Section */}
      <section className="py-16 px-4 bg-[#F7F8FA] flex justify-center">
        <div className="max-w-4xl w-full flex flex-col md:flex-row items-start md:justify-between gap-8">
          {/* Image on the Left */}
          <div className="md:w-1/2 flex justify-start">
            <img src="/DrLogo.png" alt="Dr. Interested Logo" className="w-80 h-80 object-cover rounded-lg shadow-lg" />
          </div>

          {/* Text on the Right */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[#2C3E4F] mb-6 md:text-right">About Us</h2>
            <p className="text-lg text-[#4A4A4A] md:text-right">
              We're dedicated to providing high school students with the tools and resources they need to succeed in the medical field. 
              From hosting expert-led webinars to offering volunteer opportunities and research initiatives, Dr.Interested is committed to making healthcare education accessible and exciting for young minds.
            </p>
          </div>
        </div>
      </section>

      {/* The Goal Section */}
      <section className="py-16 px-6 bg-[#E4EBF0] flex justify-center">
        <div className="max-w-4xl w-full flex flex-col md:flex-row items-center md:items-center">
          <h3 className="text-5xl font-extrabold text-black md:w-1/2 md:text-left">
            <span className="text-black">The</span> <span className="text-[#374151]">Goal</span>
          </h3>
          <p className="text-lg text-[#4A4A4A] md:w-1/2 md:text-right">
            To inspire, educate, and support high school students in their journey toward a career in healthcare by providing resources, mentorship, and hands-on opportunities.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 px-6 bg-white flex justify-center">
        <div className="max-w-4xl w-full flex flex-col md:flex-row items-center md:items-center">
          <h3 className="text-5xl font-extrabold text-black md:w-1/2 md:text-left">
            <span className="text-black">Our</span> <span className="text-[#374151]">Mission</span>
          </h3>
          <p className="text-lg text-[#4A4A4A] md:w-1/2 md:text-right">
            To empower the next generation of healthcare professionals through education, collaboration, and meaningful experiences.
          </p>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-16 px-6 bg-[#E4EBF0] flex justify-center">
        <div className="max-w-4xl w-full flex flex-col md:flex-row items-center md:items-center">
          <h3 className="text-5xl font-extrabold text-black md:w-1/2 md:text-left">
            <span className="text-black">Our</span> <span className="text-[#374151]">Vision</span>
          </h3>
          <p className="text-lg text-[#4A4A4A] md:w-1/2 md:text-right">
            A future where students are equipped with the knowledge and opportunities needed to excel in healthcare, contributing to a healthier, more informed world.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C3E4F] text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm">{"\u00A9"} 2025 Dr.Interested. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
