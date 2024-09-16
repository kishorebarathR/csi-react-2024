"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { initFlowbite } from "flowbite"
import Slider from "react-slick"
import { MdOutlineSlowMotionVideo } from "react-icons/md"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Link from "next/link"

const Homepage = () => {
  useEffect(() => {
    initFlowbite()
  }, [])

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,

    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const [isShowPopup, setIsShowPopup] = useState(false)

  const handleOnClickShowPopup = () => {
    setIsShowPopup(true)
    document.body.style.overflow = "hidden"
  }

  const handleOnClose = () => {
    setIsShowPopup(false)
    document.body.style.overflow = "auto"
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <>
      <div className="custom-container lg:px-10 ">
        <div className="bg-[url('/images/home/homebg-img1.png')] bg-contain bg-bottom bg-no-repeat w-full lg:h-[120vh] h-[80vh] ">
          <Slider {...settings}>
            <div className="mb-0">
              <div className="lg:grid grid-cols-2  h-full w-full rounded-lg-5">
                <div className="rounded-lg-1">
                  <Image
                    className="w-full h-full bg-white"
                    src="/images/home/CSI_banner-img.jpg"
                    alt="image description"
                    height={400}
                    width={800}
                  />
                </div>

                <div className="lg:flex items-middle justify-center flex-col lg:text-end  bg-[#4B2361]">
                  <h1 className="p-5 lg:me-10 text-5xl  text-white rounded-lg-5  bg-[#4B2361]">
                    August 1 and 2, 2024
                  </h1>
                  <p className="lg:p-5 text-5xl  bg-[#4B2361] text-white lg:me-10 mb-0 px-5 ">
                    New Delhi
                  </p>
                  <div className="text-end lg:me-14 lg:mt-5 lg:py-0 py-10 bg-[#4B2361]">
                    {/* Mobile View */}
                    <div className="lg:hidden text-left px-4 ">
                      {" "}
                      {/* Hide on large screens */}
                      <Link
                        href="csi-2024"
                        className="inline-block focus:outline-none text-violet-600 font-normal rounded-3xl text-sm px-14 py-4 mb-14 "
                      >
                        View Details
                      </Link>
                    </div>

                    {/* Desktop View */}
                    <div className="hidden lg:block text-right ">
                      {/* Hide on small screens */}
                      <Link
                        href="csi-2024"
                        className="inline-block focus:outline-none text-violet-600 bg-yellow-200 hover:bg-[#7e3f98] hover:text-yellow-200  font-normal rounded-3xl text-sm px-14 py-4"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" relative lg:ms-0 ms-52">
                <Image
                  className="w-40 h-40 lg:p-4 absolute bottom-0  lg:right-0 "
                  src="/images/home/constellation_3.png"
                  alt="image description"
                  height={400}
                  width={400}
                />
              </div>
            </div>

            {/* Item 2 */}

            <div className="  lg:relative lg:-my-20 ">
              <video className="lg:h-full w-full " autoPlay muted loop>
                <source src="/vedio/Homepage-vedio.mp4" type="video/mp4" />
              </video>

              <div className="inset-0 flex items-end justify-start ">
                <div className="bg-white lg:absolute text-black p-6 rounded-tr-3xl rounded-bs-3xl border border-r px-5 border-black lg:w-1/3 ">
                  <p className="">
                    Social impact catalysis is the catalyst for a ripple effect
                    of positive change, transcending boundaries and leaving a
                    legacy of hope.
                  </p>
                </div>
              </div>

              <div className="inset-0 lg:flex items-end justify-end lg:me-10    ">
                <button
                  onClick={handleOnClickShowPopup}
                  type="button"
                  className=" flex focus:outline-none text-violet-600 absolute bg-yellow-200 hover:bg-[#7e3f98] hover:text-yellow-200 font-normal rounded-3xl text-sm px-14 py-4 me-2 mb-14 "
                >
                  Play the Video
                  <div className="px-1 w mt-1">
                    <MdOutlineSlowMotionVideo />
                  </div>
                </button>
              </div>
            </div>
          </Slider>

          {isShowPopup && (
            <>
              <div className="fixed top-1 h-full z-50 w-full flex justify-center items-center ">
                <span
                  className="absolute top-0 start-0 end-0 bottom-0 bg-black opacity-50"
                  onClick={handleOnClose}
                ></span>
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center z-50 justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="default-modal07"
                        onClick={handleOnClose}
                      >
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>

                    <div className="flex justify-center items-center h-full mt-5">
                      <div className="flex flex-col lg:flex-row  ">
                        <div className="w-full ">
                          <video className="h-full w-full" autoPlay muted loop>
                            <source
                              src="/vedio/Homepage-vedio.mp4"
                              type="video/mp4"
                            />
                          </video>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button
                        onClick={handleOnClose}
                        type="button"
                        className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Homepage
