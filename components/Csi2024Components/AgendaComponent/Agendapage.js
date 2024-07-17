"use client"
import React, { useState } from 'react';
import Day1Content from './Day1';
import Day2Content from './Day2';
import Image from 'next/image';

const Agendapage = () => {
  const [activeTab, setActiveTab] = useState("day1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <style>
        {`
          .triangle-down {
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      position:absolute;
      top: 100%;
      left: 50%;
      transform: translate(-50%, -0%);
      
      opacity:1
    }

    .triangle-down-active {
      opacity:0;
    }
      `}
      </style>
      <div className="">
        <div className="relative  bg-[url('/images/agenda/agenga_bg_img.png')] bg-cover bg-bottom bg-no-repeat w-full h-full custom-container  ">
          <div className="w-full h-full     lg:absolute top-0 start-0 lg:pt-32  ">
            <div className=" pt-16 flex justify-center items-center ">
              <Image
                className=" object-cover w-96 h-full "
                src="/images/agenda/agenda-img2.png"
                alt="image description"
                height={400}
                width={800}
              />
            </div>

            <p className="text-4xl  text-[#7E3F98] text-center font-medium pt-14 ">
              AGENDA
            </p>
            <div className="bg-white rounded-2xl lg:mx-96 p-5 mt-10 text-center border border-yellow-200">
              <p className="text-sm font-semibold">
                <span className="text-[#8C54A3] ">Venue:</span> Dr. Ambedkar
                International Centre, Janpath, New Delhi
              </p>
              <p className="text-xs sm:text-base font-semibold">
                August 1 and 2, 2024
              </p>
            </div>

            <p className="text-center  lg:px-40 pt-10">
              Discover diverse themes such as Grounded Climate Response,
              Innovative Financing, and Fidelity & Quality, covering topics that
              range from resilience-building for businesses to forging
              partnerships with governments and beyond. Whether you’re a
              seasoned professional, an emerging leader, or an enthusiast for
              social impact, CSI 2024 offers invaluable opportunities to learn,
              network, and contribute to positive change.
            </p>
            <p className="text-center  lg:px-40 pt-6">
              View our events schedule below and plan your participation to
              maximise your CSI 2024 experience.
            </p>
          </div>
     

        {/* <div className="relative bg-[url('/images/agenda/agend-img1.png')] bg-cover bg-bottom bg-no-repeat w-full h-full  "> */}
        <div className="flex justify-center items-center lg:mt-96 lg:pt-32 ">
      <div className="p-4">
        <div className="flex mb-4 justify-center">
          <button
            className={`mx-4 relative px-10 py-2 rounded ${
              activeTab === "day1"
                ? "bg-[#7e3f98] text-white"
                : "bg-white text-[#8C54A3]"
            }`}
            onClick={() => handleTabClick("day1")}
          >
            Day 1
            <span
              className={`${
                activeTab === "day1"
                  ? "triangle-down"
                  : "triangle-down-active"
              } `}
            ></span>
          </button>
          <button
            className={`px-10 py-2 rounded relative ${
              activeTab === "day2"
                ? "bg-[#7e3f98] text-white"
                : "bg-white text-[#8C54A3]"
            }`}
            onClick={() => handleTabClick("day2")}
          >
            Day 2
            <span
              className={`${
                activeTab === "day2"
                  ? "triangle-down"
                  : "triangle-down-active"
              } `}
            ></span>
          </button>
        </div>

        <div>
          {activeTab === "day1" && <Day1Content />}
          {activeTab === "day2" && <Day2Content />}
        </div>
      </div>
    </div>
        {/* </div> */}
        </div>
      </div>
    </>
  )
}

export default Agendapage
