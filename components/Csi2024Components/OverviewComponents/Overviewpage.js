"use client"
import React from "react"
// import React, { useState, useEffect } from "react"
import Image from "next/image"
import Overview from "../../../utils/data"
import Link from "next/link"
const Overviewpage = () => {
  return (
    <div>
      <div className="relative bg-[url('/images/csi_2024/CSI_2024_bg.png')] bg-cover bg-bottom bg-no-repeat w-full lg:h-[180vh] custom-container">
        <div className=" pt-5 top-[18%] px-6 lg:px-0">
          <div className="w-full h-full    lg:pt-44 lg:absolute top-0 start-0  ">
            <div className="lg:px-80 lg:pt-10 ">
              <Image
                className=" object-cover w-full h-full "
                src="/images/csi_2024/Catalysing_Social_Impact_2024_full.png"
                alt="image description"
                height={400}
                width={800}
              />
            </div>

            <div className="lg:px-48 lg:pt-10">
              <Image
                className=" w-full h-full"
                src="/images/csi_2024/CSI_Group.png"
                alt="image description"
                height={400}
                width={1000}
              />
            </div>

            {/* desktop responsive */}
            <div className="hidden sm:block">
              <div className="">
                <div className="flex justify-center items-center">
                  <div className="flex rounded-full bg-[#F5D47B] mt-16 lg:p-2 p-1 lg:px-6 justify-center items-center text-center">
                    <div>
                      <Image
                        className="w-10 h-full p-1"
                        src="/images/csi_2024/calander_logo.png"
                        alt="image description"
                        height={400}
                        width={400}
                      />
                    </div>
                    <div className="text-md font-semibold border-r-2 border-red-800 pr-2 pe-3">
                      <p className="p-1 sm:text-sm">August 1 and 2, 2024</p>
                    </div>
                    <div>
                      <Image
                        className="w-10 h-full p-1"
                        src="/images/csi_2024/location_logo.png"
                        alt="image description"
                        height={400}
                        width={400}
                      />
                    </div>
                    <div className="text-md font-semibold  p-1">
                      <Link
                        href="https://www.google.com/maps/dir//15,+Janpath+Rd,+Windsor+Place,+New+Delhi,+Delhi+110001/@28.6173717,77.1352264,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390ce2c9f0ba8411:0x4e632d73e149eb25!2m2!1d77.2182388!2d28.6177245?entry=ttu"
                        className="sm:text-sm"
                        target="_blank"
                      >
                        Dr Ambedkar International Centre, Janpath, New Delhi
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile responsive */}
            <div className="sm:hidden">
              <div className="flex flex-row">
                <div className="flex flex-col  rounded-xl bg-[#F5D47B] mt-16 py-2 px-2 ">
                  <div className="mb-3">
                    <Image
                      className="w-10 h-full p-2 "
                      src="/images/csi_2024/calander_logo.png"
                      alt="image description"
                      height={400}
                      width={400}
                    />
                  </div>
                  <div className="text-xs mb-3 mt-2">
                    <p className="p-1 sm:text-sm -mt-12 ms-8">
                      August 1 and 2, 2024
                    </p>
                  </div>
                  <div className="mb-4 -mt-10 ">
                    <Image
                      className="w-10 h-full p-2 pb-6"
                      src="/images/csi_2024/location_logo.png"
                      alt="image description"
                      height={400}
                      width={400}
                    />
                  </div>
                  <div className="text-xs  -mt-14 ms-8">
                    <Link
                      href="https://www.google.com/maps/dir//15,+Janpath+Rd,+Windsor+Place,+New+Delhi,+Delhi+110001/@28.6173717,77.1352264,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390ce2c9f0ba8411:0x4e632d73e149eb25!2m2!1d77.2182388!2d28.6177245?entry=ttu"
                      className="sm:text-sm"
                      target="_blank"
                    >
                      Dr Ambedkar International Centre, Janpath, New Delhi
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-4xl  text-[#7E3F98] text-center font-medium pt-14 ">
              SETTING THE STAGE
            </p>
            <p className="text-center font-semibold lg:px-40 pt-6">
              In the last decade, the combined efforts of the government,
              private sector, civil society, and international allies have
              driven the growth of the Indian economy. And the best part? The
              economy is on a rocket ride, projected to hit USD 5 Trillion by
              2024-25 and potentially doubling to a staggering USD 10 Trillion
              by 2030. But to keep this excitement going, we need to tackle
              challenges with creativity and teamwork.
            </p>
          </div>
        </div>
      </div>

      <div className=" bg-white pb-36">
        <div className="container mx-auto pt-5 ">
          <p className="text-4xl  text-[#7E3F98] text-center font-medium pt-4 pb-7 ">
            HOW TO ENGAGE
          </p>
          {/* Mobile version (hidden on desktop) */}
          <div className="block sm:hidden">
            <div className="flex justify-center items-center">
              <Image
                className="w-full"
                src="/images/csi_2024/how-to-engage-mobile-banner (1).jpg"
                alt="image description"
                height={800}
                width={1400}
              />
            </div>
          </div>

          {/* Desktop version (hidden on mobile) */}
          <div className="hidden sm:block">
            <div className="flex">
              <Image
                className="w-full h-full px-24"
                src="/images/csi_2024/how-to-engage01.jpg"
                alt="image description"
                height={800}
                width={1400}
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto lg:p-0   p-4">
          <h1 className="text-3xl text-center pt-10 lg:px-14">
            Catalysing Social Impact
            <span className=" text-[#7E3F98] text-center">
              is all about celebrating India’s achievements and finding
              meaningful cross-sectoral opportunities
            </span>
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:flex justify-center pt-10 lg:px-10 lg:gap-10">
            {Overview.map((items, index) => (
              <div key={index} className="p-4">
                <div className="flex justify-center items-center ">
                  <Image
                    className="w-32 h-auto"
                    src={items.image}
                    alt=""
                    height={400}
                    width={400}
                  />
                </div>
                <div className="text-xl font-light text-center pt-5">
                  <p className="text-center">{items.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center pt-10 lg:w-[70%] mx-auto lg:text-xl text-2xl">
            By sparking innovation and boosting investments, we can embark on an
            inclusive and transformative journey towards the visionary goal of
            India@2047.
          </p>
        </div>
      </div>

      <div className=" bg-[url('/images/csi_2024/purple_bg.png')] bg-cover bg-bottom bg-no-repeat w-full ">
        <div className=" flex justify-center items-center ">
          <Image
            className=" w-44 -mt-24"
            src="/images/csi_2024/CSI_2024_logo.png"
            alt="image description"
            height={400}
            width={400}
          />
        </div>
        <p className="text-white text-2xl text-center font-medium pt-10">
          Catalysing Social Impact 2024 (CSI 2024) is a dynamic gathering of
          <p className="mb-0"></p>
          <span className="text-[#FFC107]">
            visionaries, innovators, movers,
          </span>
          and <span className="text-[#FFC107]">investors</span> with a mission
          to
        </p>
        <div className="lg:flex  justify-center items-center pt-10 ">
          <div className="flex1 px-10">
            <Image
              className="w-full h-full"
              src="/images/csi_2024/people-1.svg"
              alt="image description"
              height={200}
              width={200}
            />
            <div className=" lg:flex pt-5 ">
              <div className="  px-5">
                <Image
                  className="w-20 h-full mx-auto"
                  src="/images/csi_2024/Supercharge_Collective_Action.png"
                  alt="image description"
                  height={200}
                  width={600}
                />
              </div>
              <div className=" flex justify-center items-center mb-14 lg:mb-0">
                <p className="text-white">
                  <span className="text-[#FFC107] font-semibold">
                    Supercharge Collective Action
                  </span>
                  <p className="mb-0"></p> Propel India’s journey towards
                  becoming <p className="mb-0"></p> a USD 5 trillion inclusive
                  economy
                </p>
              </div>
            </div>
          </div>
          <div className=" flex1 ">
            <Image
              className="w-full  h-full px-10"
              src="/images/csi_2024/people-2.svg"
              alt="image description"
              height={200}
              width={600}
            />
            <div className=" lg:flex  pt-5 px-10">
              <div className="">
                <Image
                  className="w-28  h-full px-5 mx-auto"
                  src="/images/csi_2024/Engage_in_Insightful_Discussions.png"
                  alt="image description"
                  height={200}
                  width={200}
                />
              </div>
              <div className=" flex justify-center items-center">
                <p className="text-white">
                  <span className="text-[#FFC107] font-semibold">
                    Engage in Insightful Discussions
                  </span>
                  <p className="mb-0"></p> Dive deep into key topics and
                  <p className="mb-0"></p>
                  explore impactful ideas
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pb-5  mt-10 text-white">
          <p className="text-xl lg:w-[38%] mx-auto">
            Join us for an exciting and transformative event
             that promises to spark ideas and drive
            meaningful change
          </p>
        </div>
      </div>
    </div>
  )
}

export default Overviewpage
