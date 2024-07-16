"use client"
import React, { useState } from "react"
import Image from "next/image"

const Agendapage = () => {
  const [activeTab, setActiveTab] = useState("day1")

  const handleTabClick = (tab) => {
    setActiveTab(tab)
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
        <div className="relative  bg-[url('/images/agenda/Agenda-bg-img.png')] bg-cover bg-bottom bg-no-repeat w-full h-[140vh] ">
          <div className="w-full h-full     lg:absolute top-0 start-0 pt-32  ">
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
              <p className="text-base font-semibold">
                <span className="text-[#8C54A3] ">Venue:</span> Dr. Ambedkar
                International Centre, Janpath, New Delhi
              </p>
              <p className="text-md font-semibold">August 1 and 2, 2024</p>
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
        </div>

        <div className="relative bg-[url('/images/agenda/agend-img1.png')] bg-cover bg-bottom bg-no-repeat w-full h-full mb-10 ">
          <div className="flex justify-center items-center">
            <div className="p-4">
              <div className="flex mb-4 justify-center">
                {" "}
                {/* Added justify-center */}
                <button
                  className={`mr-4 relative px-10 py-2 rounded ${
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
                {activeTab === "day1" && (
                  <div className="p-4 ">
                    <div className="container mx-auto mt-5  ">
                      <div className="lg:flex  flex-row lg:flex-col gap-4 ">
                        <div className="lg:flex-col rounded-lg bg-gradient-to-r from-[#2CAA90] to-[#37A2B4] p-4 w-1/6 ">
                          <p className="text-xl   text-white text-center">
                            Time
                          </p>
                        </div>

                        <div className="flex-col rounded-lg  bg-gradient-to-r from-[#639AD1] to-[#7E64BE]  p-4 lg:w-1/2">
                          <p className="text-xl  text-white  text-center">
                            Event
                          </p>
                        </div>
                        <div className="flex-col rounded-lg  bg-gradient-to-r from-[#B766B1] to-[#DA6372]   p-4 w-1/6">
                          <p className="text-xl  text-white  text-center">
                            Location
                          </p>
                        </div>
                        <div className="flex-col rounded-lg  bg-gradient-to-r from-[#F1B761] to-[#F4D077]  p-4    w-1/6 ">
                          <p className="text-xl  text-white  text-center">
                            Theam
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* ROW 1 */}

                    <div class="mt-5 ">
                      <div class="flex flex-row bg-white my-4 shadow rounded-lg px-2">
                        <div class="w-1/6 border-r border-dotted border-blue-300">
                          <div class="p-4 py-3">
                            <p class=" text-green-600 mb-0">10:30-12:00</p>
                          </div>
                        </div>
                        <div class="w-1/2 border-r border-dotted border-blue-300">
                          <div class="p-4 py-3">
                            <p class="   mb-0">Inaugural</p>
                          </div>
                        </div>
                        <div class="w-1/6 border-r border-dotted border-blue-300">
                          <div class="p-4 py-3">
                            <p class=" mb-0">Main Hall</p>
                          </div>
                        </div>
                        <div class="w-1/6">
                          <div class="p-4 py-3">
                            <p class="text-xs sm:text-md mb-0"></p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ROW 2 */}
                    <div className="container mx-auto mt-5 ">
                      <div class="grid grid-cols-12 bg-white my-4 shadow-lg rounded-lg px-2">
                        <div class="col-span-2 border-r border-dotted border-blue-300 ">
                          <div class="flex items-center justify-center h-full border-b border-dotted border-blue-300">
                            <div class="p-4 py-3">
                              <p class="text-md  text-green-600 mb-0">
                                12:00-13:30
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="col-span-6 border-r border-dotted border-blue-300">
                          <div class="px-4 py-3 border-b border-dotted border-blue-300">
                            <p class="text-md  mb-0">Wicked Solutions Show</p>
                          </div>
                          <div class="px-4 py-3 border-b border-dotted border-blue-300">
                            <p class="text-md  mb-0">
                              Bridging the Gap: Collaborating between
                              Development Sector and Government
                            </p>
                          </div>
                          <div class="px-4 py-3 border-b border-dotted border-blue-300">
                            <p class="text-md  mb-0">
                              Common Ground Roundtable
                            </p>
                          </div>
                          <div class="px-4 py-3 border-b border-dotted border-blue-300">
                            <p class="text-md  mb-0">
                              Building Resilience for VPs - Systemic Risk and
                              Response Perspective
                            </p>
                          </div>
                          <div class="px-4 py-3 border-b border-dotted border-blue-300">
                            <p class="text-md  mb-0">
                              Reimagining Implementation @Scale
                            </p>
                          </div>
                          <div class="p-4 py-3">
                            <p class="text-md  mb-0">Outcome-based Financing</p>
                          </div>
                        </div>

                        <div class="col-span-2 border-r border-dotted border-blue-300">
                          <div class="p-4 py-3 border-b border-dotted border-blue-300">
                            <p class="text-md  mb-0">Bhim</p>
                          </div>
                          <div class="p-4 py-3 mt-6 border-b border-dotted border-blue-300">
                            <p class="text-md  mb-0">Samrastha</p>
                          </div>
                          <div class="p-4 py-3 border-b border-dotted border-blue-300">
                            <p class="text-md  mb-0">Foyer</p>
                          </div>
                          <div class="p-4 py-3 border-b border-dotted border-blue-300">
                            <p class="text-md  mb-0">VIP Lounge</p>
                          </div>
                          <div class="p-4 py-3 border-b border-dotted border-blue-300">
                            <p class="text-md  mb-0">Conference 1</p>
                          </div>
                          <div class="p-4 py-3">
                            <p class="text-md  mb-0">Conference 2</p>
                          </div>
                        </div>

                        <div class="col-span-2">
                          <div class="p-4 py-3 border-b border-dotted border-blue-300">
                            <p class="text-md  text-orange-600 mb-0">
                              Side Event
                            </p>
                          </div>
                          <div class="p-4 py-1 mt-4 border-b border-dotted border-blue-300">
                            <p class="text-md  text-orange-600 mb-0">
                              Implementation - Fidelity & Quality
                            </p>
                          </div>
                          <div class="p-4 py-3 border-b border-dotted border-blue-300">
                            <p class="text-md  text-orange-600 mb-0">
                              Innovative Financing
                            </p>
                          </div>
                          <div class="p-4 py-1 border-b border-dotted border-blue-300">
                            <p class="text-md  text-orange-600 mb-0">
                              Grounded Climate Response
                            </p>
                          </div>
                          <div class="p-4 py-1 border-b border-dotted border-blue-300">
                            <p class="text-md  text-orange-600 mb-0">
                              Implementation - Fidelity & Quality
                            </p>
                          </div>
                          <div class="p-4 py-3">
                            <p class="text-md  text-orange-600 mb-0">
                              Innovative Financing
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ROW 3*/}
                    <div className="container mx-auto mt-5 ">
                      <div class="flex flex-row bg-white my-4 shadow-lg rounded-lg px-2 lg:col-span-12">
                        <div class="w-1/6 justify-center flex flex-col border-r border-dotted border-blue-300">
                          <div class="p-4 py-3">
                            <p class="text-md  text-green-500 mb-0">
                              13:30-14:30
                            </p>
                          </div>
                        </div>
                        <div class="w-1/2 border-r border-dotted border-blue-300">
                          <div class="p-4 py-3 border-b border-dotted border-blue-300">
                            <p class="text-md  mb-0">
                              Lunch at VIP Dining (Available from 12:30 PM -
                              2:30 PM)
                            </p>
                          </div>
                          <div class="p-4 py-3">
                            <p class="text-md  mb-0">
                              Tea/Coffee (Available from 9:30 AM - 6:00 PM,
                              Snacks served twice AM and PM)
                            </p>
                          </div>
                        </div>
                        <div class="w-1/6 border-r border-dotted border-blue-300">
                          <div class="p-4 py-3 border-b border-dotted border-blue-300">
                            <p class="text-md  mb-0">VIP Dining</p>
                          </div>
                          <div class="p-4 py-3">
                            <p class="text-md  mb-0">Foyer</p>
                          </div>
                        </div>
                        <div class="w-1/6">
                          <div class="p-4 py-3">
                            <p class="text-md  mb-0"></p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ROW 4*/}
                    <div className="container mx-auto mt-5 ">
                      <div class="flex flex-row bg-white my-4 shadow-lg rounded-lg px-2 lg:col-span-12">
                        <div class="w-1/6 justify-center flex flex-col border-r border-dotted  border-blue-300">
                          <div class="p-4 py-3">
                            <p class="text-md  text-green-500 mb-0">
                              14:30-16:00
                            </p>
                          </div>
                        </div>
                        <div class="w-1/2 border-r border-dotted border-blue-300">
                          <div class="p-4 py-3 border-b border-dotted border-blue-300">
                            <p class="text-md  mb-0">
                              Social Protection Coalition Launch
                            </p>
                          </div>
                          <div class="p-4 py-3 border-b border-dotted">
                            <p class="text-md  mb-0">
                              AI and No Code Tools for Impact
                            </p>
                          </div>
                          <div class="p-4 py-3">
                            <p class="text-md  mb-0">
                              Social Procurement Launch
                            </p>
                          </div>
                        </div>
                        <div class="w-1/6 border-r border-dotted">
                          <div class="p-4 py-3 border-b border-dotted border-blue-300">
                            <p class="text-md  mb-0">Bhim</p>
                          </div>
                          <div class="p-4 py-3 border-b border-dotted border-blue-300">
                            <p class="text-md  mb-0">Conference 1</p>
                          </div>
                          <div class="p-4 py-3">
                            <p class="text-md  mb-0">Conference 2</p>
                          </div>
                        </div>
                        <div class="w-1/6 text-agenda-orange">
                          <div class="p-4 py-1 border-b border-dotted border-blue-300">
                            <p class="text-md  mb-0">
                              Implementation - Fidelity & Quality
                            </p>
                          </div>
                          <div class="p-4 py-1 border-b border-dotted border-blue-300">
                            <p class="text-md  mb-0">
                              Implementation - Fidelity & Quality
                            </p>
                          </div>
                          <div class="p-4 py-3">
                            <p class="text-md  mb-0">Side Event</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ROW 5 */}
                    <div className="container mx-auto mt-5 ">
                      <div class="flex flex-row bg-white my-4 shadow-lg rounded-lg px-2 lg:col-span-12">
                        <div class="w-1/6 justify-center flex flex-col border-r border-dotted border-blue-300">
                          <div class="p-4 py-3">
                            <p class="text-md text-green-500 mb-0">
                              16:00-18:30
                            </p>
                          </div>
                        </div>
                        <div class="w-1/2 border-r border-dotted border-blue-300">
                          <div class="p-4 py-3 border-b border-dotted border-blue-300">
                            <p class="text-md mb-0">Wicked Solutions Show</p>
                          </div>
                          <div class="p-4 py-3 border-b border-dotted border-blue-300">
                            <p class="text-md mb-0">
                              Centre for Public Health Comms: Film Showcase
                            </p>
                          </div>
                          <div class="p-4 py-3">
                            <p class="text-md mb-0">
                              Sustained and Effective Market Access for Micro
                              and Small Enterprises (MSEs)
                            </p>
                          </div>
                        </div>
                        <div class="w-1/6 border-r border-dotted border-blue-300">
                          <div class="p-4 py-3 border-b border-dotted border-blue-300">
                            <p class="text-md mb-0">Bhim</p>
                          </div>
                          <div class="p-4 py-3 border-b border-dotted border-blue-300">
                            <p class="text-md mb-0">Nalanda</p>
                          </div>
                          <div class="p-4 py-3">
                            <p class="text-md mb-0">Conference 2</p>
                          </div>
                        </div>
                        <div class="w-1/6 text-agenda-orange">
                          <div class="p-4 py-3 border-b border-dotted border-blue-300">
                            <p class="text-md mb-0">Side Event</p>
                          </div>
                          <div class="p-4 py-3 border-b border-dotted border-blue-300">
                            <p class="text-md mb-0">Side Event</p>
                          </div>
                          <div class="p-4 py-3">
                            <p class="text-md mb-0">
                              Implementation - Fidelity & Quality
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*ROW 6 */}
                    <div className="container mx-auto mt-5  ">
                      <div class="flex flex-row bg-white my-4 shadow-lg rounded-lg px-2">
                        <div class="w-1/6 border-r border-dotted border-blue-300">
                          <div class="p-4 py-3 ">
                            <p class="text-md text-green-500 mb-0">
                              18:30-19:15
                            </p>
                          </div>
                        </div>
                        <div class="w-1/2 border-r border-dotted border-blue-300">
                          <div class="p-4 py-3">
                            <p class="text-md mb-0">Closing Plenary</p>
                          </div>
                        </div>
                        <div class="w-1/6  border-r border-dotted border-blue-300">
                          <div class="p-4 py-3">
                            <p class="text-md mb-0">Main Hall</p>
                          </div>
                        </div>
                        <div class="w-1/6">
                          <div class="p-4 py-3">
                            <p class="text-md  mb-0"></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "day2" && (
                  <div className="p-4">
                    <div className="container mx-auto mt-5 ">
                      <div className="lg:flex  flex-row lg:flex-col gap-4 ">
                        <div className="lg:flex-col rounded-lg bg-gradient-to-r from-[#2CAA90] to-[#37A2B4] p-4 lg:w-[30vh] w-[10vh] ">
                          <p className="text-xl   text-white text-center">
                            Time
                          </p>
                        </div>

                        <div className="flex-col rounded-lg  bg-gradient-to-r from-[#639AD1] to-[#7E64BE]  p-4 lg:w-[80vh] w-[40vh] ">
                          <p className="text-xl  text-white  text-center">
                            Event
                          </p>
                        </div>
                        <div className="flex-col rounded-lg  bg-gradient-to-r from-[#B766B1] to-[#DA6372]   p-4 w-[40vh]">
                          <p className="text-xl  text-white  text-center">
                            Location
                          </p>
                        </div>
                        <div className="flex-col rounded-lg  bg-gradient-to-r from-[#F1B761] to-[#F4D077]  p-4    w-[40vh] ">
                          <p className="text-xl  text-white  text-center">
                            Theam
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="container mx-auto mt-5 ">
                      <div className="lg:flex  flex-row lg:flex-col  ">
                        <div className="flex-col  bg-[white] p-4 w-[33vh] rounded-s-xl ">
                          <p className="text-md   text-green-300 text-center">
                            10:30-11:15
                          </p>
                        </div>

                        <div className="flex-col   bg-[white] p-4 w-[80vh]  ">
                          <p className="text-md  text-black   text-start">
                            CSI Awards
                          </p>
                        </div>
                        <div className="flex-col   bg-[white]  p-4 w-[43vh]">
                          <p className="text-md ms-4  text-black  text-start">
                            Bhim
                          </p>
                        </div>
                        <div className="flex-col   bg-[white] p-4    w-[43vh] rounded-e-xl ">
                          <p className="text-md  text-white  text-center"></p>
                        </div>
                      </div>
                    </div>

                    <div className="container mx-auto mt-5 ">
                      <div className="lg:flex  flex-row lg:flex-col  ">
                        <div className="flex-col  bg-[white] p-4 w-[33vh] rounded-s-xl ">
                          <p className="text-md   text-green-300 text-center pt-16">
                            11:15-12:30
                          </p>
                        </div>

                        <div className="flex-col   bg-[white] p-4 w-[80vh]  ">
                          <p className="text-md  text-black   text-start pt-4">
                            Wicked Solutions Show
                          </p>
                          <p className="text-md  text-black   text-start pt-4">
                            Social Stock Exchange
                          </p>
                          <p className="text-md  text-black   text-start pt-4">
                            Lessons from Scaling with Govt (NoG)
                          </p>
                          <p className="text-md  text-black   text-start pt-4">
                            Measuring the Impact of Shared Value Initiatives
                          </p>
                        </div>
                        <div className="flex-col   bg-[white]  p-4 w-[43vh]">
                          <p className="text-md ms-4  text-black  text-start pt-4">
                            Bhim
                          </p>
                          <p className="text-md ms-4  text-black  text-start  pt-4">
                            Nalanda
                          </p>
                          <p className="text-md ms-4  text-black  text-start  pt-4">
                            Conference 1
                          </p>
                          <p className="text-md ms-4  text-black  text-start  pt-4">
                            Conference 2
                          </p>
                        </div>
                        <div className="flex-col   bg-[white] p-4    w-[43vh] rounded-e-xl ">
                          <p className="text-md  text-yellow-300 text-center pt-4">
                            Side Event
                          </p>
                          <p className="text-md  text-yellow-300 text-center pt-4">
                            Innovative Financing
                          </p>
                          <p className="text-md  text-yellow-300 text-center pt-4">
                            Fidelity & Quality
                          </p>
                          <p className="text-md  text-yellow-300 text-center pt-4">
                            Side Event
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* next content  is uploading here */}
                    <div className="container mx-auto mt-5 ">
                      <div className="lg:flex  flex-row lg:flex-col  ">
                        <div className="flex-col  bg-[white] p-4 w-[33vh] rounded-s-xl ">
                          <p className="text-md   text-green-300 text-center pt-10">
                            12:30-13:30
                          </p>
                        </div>

                        <div className="flex-col   bg-[white] p-4 w-[80vh]  ">
                          <p className="text-md  text-black   text-start pt-4">
                            Lunch at VIP Dining (Available from 12:30 PM - 2:30
                            PM)
                          </p>
                          <p className="text-md  text-black   text-start pt-4">
                            Tea/Coffee (Available from 9:30 AM - 6:00 PM, Snacks
                            served twice AM and PM)
                          </p>
                        </div>
                        <div className="flex-col   bg-[white]  p-4 w-[43vh]">
                          <p className="text-md ms-4  text-black  text-start  pt-4">
                            VIP Dining
                          </p>
                          <p className="text-md ms-4  text-black  text-start  pt-4">
                            Foyer
                          </p>
                        </div>
                        <div className="flex-col   bg-[white] p-4    w-[43vh] rounded-e-xl ">
                          <p className="text-md  text-yellow-300 text-center pt-4"></p>
                          <p className="text-md  text-yellow-300 text-center pt-4"></p>
                          <p className="text-md  text-yellow-300 text-center pt-4"></p>
                          <p className="text-md  text-yellow-300 text-center pt-4"></p>
                        </div>
                      </div>
                    </div>

                    {/* next content  is uploading here */}
                    <div className="container mx-auto mt-5 ">
                      <div className="lg:flex  flex-row lg:flex-col  ">
                        <div className="flex-col  bg-[white] p-4 w-[33vh] rounded-s-xl ">
                          <p className="text-md   text-green-300 text-center pt-16">
                            13:30-14:30
                          </p>
                        </div>

                        <div className="flex-col   bg-[white] p-4 w-[80vh]  ">
                          <p className="text-md  text-black   text-start pt-4">
                            Catalyst 2030 Climate Response
                          </p>
                          <p className="text-md  text-black   text-start pt-4">
                            Data for Decisions and Stories
                          </p>
                          <p className="text-md  text-black   text-start pt-4">
                            Industry and ESG - Benefiting People, Planet, and
                            Business
                          </p>
                          <p className="text-md  text-black   text-start pt-4">
                            Blended Finance Approaches
                          </p>
                        </div>
                        <div className="flex-col   bg-[white]  p-4 w-[43vh]">
                          <p className="text-md ms-4  text-black  text-start  pt-4">
                            Bhim
                          </p>
                          <p className="text-md ms-4  text-black  text-start  pt-4">
                            Nalanda
                          </p>
                          <p className="text-md ms-4  text-black  text-start  pt-4">
                            Conference 1
                          </p>
                          <p className="text-md ms-4  text-black  text-start  pt-4">
                            Conference 2
                          </p>
                        </div>
                        <div className="flex-col   bg-[white] p-4    w-[43vh] rounded-e-xl ">
                          <p className="text-md  text-yellow-300 text-center pt-4">
                            Grounded Climate Response
                          </p>
                          <p className="text-md  text-yellow-300 text-center pt-4">
                            Fidelity & Quality
                          </p>
                          <p className="text-md  text-yellow-300 text-center pt-4">
                            Grounded Climate Response
                          </p>
                          <p className="text-md  text-yellow-300 text-center pt-4">
                            Innovative Financing
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* next content  is uploading here */}
                    <div className="container mx-auto mt-5 ">
                      <div className="lg:flex  flex-row lg:flex-col  ">
                        <div className="flex-col  bg-[white] p-4 w-[33vh] rounded-s-xl ">
                          <p className="text-md   text-green-300 text-center pt-14">
                            14:30-16:00
                          </p>
                        </div>

                        <div className="flex-col   bg-[white] p-4 w-[80vh]  ">
                          <p className="text-md  text-black   text-start pt-4">
                            Wicked Solutions Show
                          </p>
                          <p className="text-md  text-black   text-start pt-4">
                            Misfits Pitch
                          </p>
                          <p className="text-md  text-black   text-start pt-4">
                            Global Warming and Systems Mapping
                          </p>
                        </div>
                        <div className="flex-col   bg-[white]  p-4 w-[43vh]">
                          <p className="text-md ms-4  text-black  text-start  pt-4">
                            Bhim
                          </p>
                          <p className="text-md ms-4  text-black  text-start  pt-4">
                            Atrium
                          </p>
                          <p className="text-md ms-4  text-black  text-start  pt-4">
                            VIP Lounge
                          </p>
                        </div>
                        <div className="flex-col   bg-[white] p-4    w-[43vh] rounded-e-xl ">
                          <p className="text-md  text-yellow-300 text-center pt-4">
                            Side Event
                          </p>
                          <p className="text-md  text-yellow-300 text-center pt-4">
                            Side Event
                          </p>

                          <p className="text-md  text-yellow-300 text-center pt-4">
                            Grounded Climate Response
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* next content  is uploading here */}
                    <div className="container mx-auto mt-5 ">
                      <div className="lg:flex  flex-row lg:flex-col  ">
                        <div className="flex-col  bg-[white] p-4 w-[33vh] rounded-s-xl ">
                          <p className="text-md   text-green-300 text-center pt-5">
                            17:30-18:15
                          </p>
                        </div>

                        <div className="flex-col   bg-[white] p-4 w-[80vh]  ">
                          <p className="text-md  text-black   text-start pt-4">
                            Closing Plenary
                          </p>
                        </div>
                        <div className="flex-col   bg-[white]  p-4 w-[43vh]">
                          <p className="text-md ms-4  text-black  text-start  pt-4">
                            Main Hall
                          </p>
                        </div>
                        <div className="flex-col   bg-[white] p-4    w-[43vh] rounded-e-xl ">
                          <p className="text-md  text-yellow-300 text-center pt-4"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Agendapage
