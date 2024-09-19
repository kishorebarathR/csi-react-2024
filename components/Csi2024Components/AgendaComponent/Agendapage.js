"use client"
import React, { useState } from "react"
import Image from "next/image"
import Day1Content from "./Day1"
import Day2Content from "./Day2"

const Agendapage = () => {
  const [activeTab, setActiveTab] = useState("day1")

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  const getDownloadLink = () => {
    return activeTab === "day1"
      ? "/images/agenda/csi-agenda-day-1.pdf"
      : "/images/agenda/csi-agenda-day-2.pdf"
  }

  return (
    <>
      <style>
        {`
          .triangle-down {
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translate(-50%, -0%);
            opacity: 1;
          }

          .triangle-down-active {
            opacity: 0;
          }
        `}
      </style>
      <div className="">
        <div className="relative bg-[url('/images/agenda/Agenda-bg-img.png')] bg-cover bg-bottom bg-no-repeat w-full h-full custom-container">
          <div className="w-full h-full ">
            <div className="pt-16 flex justify-center items-center mx-3">
              <Image
                className="object-cover lg:w-[54%]  h-full  "
                src="/images/agenda/Catalysing_Social_Impact_2024_full.png"
                alt="image description"
                height={200}
                width={1400}
              />
            </div>

            <h1 className="text-4xl  text-[#7E3F98] text-center font-semibold pt-14">
              AGENDA
            </h1>
            <div className="bg-white  rounded-lg mx-4 p-3 lg:w-[40%] sm:mx-auto  mt-10 text-center border border-yellow-200">
              <h2 className="text-xs sm:text-base font-semibold">
                <span className="text-[#8C54A3]">Venue:</span> Dr. Ambedkar
                International Centre, Janpath, New Delhi
              </h2>
              <h2 className="text-xs sm:text-base font-semibold">
                August 1 and 2, 2024
              </h2>
            </div>

            <h3 className="text-center lg:w-[50%] px-1 mx-auto pt-10">
              Discover diverse themes such as Grounded Climate Response,
              Innovative Financing, and Fidelity & Quality, covering topics that
              range from resilience-building for businesses to forging
              partnerships with governments and beyond. Whether you’re a
              seasoned professional, an emerging leader, or an enthusiast for
              social impact, CSI 2024 offers invaluable opportunities to learn,
              network, and contribute to positive change.
            </h3>
            <p className="text-center lg:w-[55%] px-1 mx-auto pt-6">
              View our events schedule below and plan your participation to
              maximise your CSI 2024 experience.
            </p>
          </div>
          
          <div className="flex justify-center items-center lg:pt-24 pt-10">
            <div className="">
              <div className="flex mb-5 justify-center">
                <button
                  className={`mx-4 relative px-11 py-3 rounded ${
                    activeTab === "day1"
                      ? "bg-[#800080] text-white"
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
                  className={`px-11 py-3 rounded relative ${
                    activeTab === "day2"
                      ? "bg-[#800080] text-white"
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
                <p className="text-center font-semibold text-xl mb-6">
                  Registration: 9:30 AM
                </p>
              </div>
              <div className="flex justify-center mb-10">
                <a
                  href={getDownloadLink()}
                  download
                  className="inline-flex items-center justify-center px-6 py-2 border border-[#800080] text-[#800080] font-semibold rounded-md hover:bg-[#800080] hover:text-white transition duration-300"
                >
                  Download PDF
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 16a1 1 0 011-1h12a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1zm7-14a1 1 0 011 1v8.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 11.586V3a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>

              <div>
                {activeTab === "day1" && <Day1Content />}
                {activeTab === "day2" && <Day2Content />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Agendapage
