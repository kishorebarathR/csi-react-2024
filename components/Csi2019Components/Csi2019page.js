"use client"
import React, { useEffect, useState } from "react"
import { initFlowbite } from "flowbite"
import Image from "next/image"

import { MdOutlineSlowMotionVideo } from "react-icons/md"

const Csi2019page = () => {
  const [isShow, setIsShow] = useState(false)

  const handleOnClickShow = () => {
    setIsShow(!isShow)
  }

  useEffect(() => {
    initFlowbite()
  })

  return (
    <>
      <div className="lg:px-10 custom-container">
        <div className="  relative  ">
          <video className="h-full w-full " autoPlay muted loop>
            <source src="/vedio/Homepage-vedio.mp4" type="video/mp4" />
          </video>

          <div className="  inset-0 flex items-end justify-start  lg:absolute ">
            <div className="bg-white text-black p-5 lg:ms-10 ms-0 rounded-tr-3xl rounded-bs-3xl border border-r border-black lg:w-1/3 ">
              <p>
                Social impact catalysis is the catalyst for a ripple effect of
                positive change, transcending boundaries and leaving a legacy of
                hope.
              </p>
            </div>
          </div>

          <div className=" inset-0 lg:flex items-end justify-end lg:me-10  lg:absolute  ">
            <button
              data-modal-target="default-modal07"
              data-modal-toggle="default-modal07"
              type="button"
              onclick="window.location.href='signup'"
              className=" flex focus:outline-none text-violet-600 absolute bg-yellow-200 hover:bg-[#7e3f98] hover:text-yellow-200 focus:ring-4 focus:ring-yellow-200 font-normal rounded-3xl text-sm px-14 py-4 me-2 mb-14 dark:focus:ring-yellow-900"
            >
              Play the Video
              <div className="px-1 mt-1">
                <MdOutlineSlowMotionVideo />
              </div>
            </button>

            <div
              id="default-modal07"
              tabindex="-1"
              aria-hidden="true"
              className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    {/* <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Day1
                      </h3> */}
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="default-modal07"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>

                  <div className="flex justify-center items-center h-full mt-5 ">
                    <div className="flex flex-col lg:flex-row  ">
                      <div className="w-full ">
                        <video className="h-full w-full " autoPlay muted loop>
                          <source
                            src="/vedio/cphc-for-subtitle.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button
                      data-modal-hide="default-modal07"
                      type="button"
                      className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex justify-center items-center h-full mt-32">
          <div className="flex flex-col lg:flex-row  w-full">
            <div className="w-full flex justify-center items-center">
              <Image
                className="object-cover w-full h-full"
                src="/images/csi_2019/csi-img1.png"
                alt="image description"
                height={400}
                width={400}
              />
            </div>

            <div className="text-white lg:w-1/2 flex justify-center items-center">
              <div className="bg-[#7E3F98] rounded-xl p-9 m-4 relative lg:end-20">
                <div className="w-full flex lg:justify-end lg:ms-24">
                  <Image
                    className="w-40 lg:-mt-32"
                    src="/images/csi_2019/csi-img2.png"
                    alt="image description"
                    height={400}
                    width={400}
                  />
                </div>
                <h1 className="text-4xl text-white text-center">Landscape</h1>
                <p className="mt-5 text-center">
                  Landscape data storytelling intertwines diverse data sets to
                  craft narratives that contextualise information for specific
                  subgroups. It transforms raw data into compelling stories,
                  bridging gaps between stakeholders by providing nuanced
                  perspectives. By tailoring insights to different groups, it
                  fosters a deeper understanding of complex landscapes,
                  promoting informed decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex justify-center items-center h-full">
          <div className="flex flex-col-reverse lg:flex-row lg:mt-32 w-full justify-center items-center">
            <div className="text-white lg:w-1/2 flex justify-center items-center">
              <div className="bg-[#7E3F98] rounded-xl p-9 m-4 relative lg:start-20 mt-20">
                <div className="w-full">
                  <Image
                    className="w-40 lg:-ms-28 px-2 lg:-mt-24"
                    src="/images/csi_2019/csi-img3.png"
                    alt="image description"
                    height={400}
                    width={400}
                  />
                </div>
                <h2 className="text-4xl violet text-white text-center">
                  Solution Circles
                </h2>
                <p className="mt-3 text-center">
                  The Solution Circles approach, inspired by Socratic circles,
                  facilitates collaborative problem-solving. Participants engage
                  in dialogue, exploring diverse viewpoints to collectively
                  devise solutions. This method encourages critical thinking,
                  empathy, and shared responsibility, fostering a dynamic
                  environment where ideas converge to address challenges through
                  thoughtful and inclusive discourse.
                </p>
              </div>
            </div>

            <div className="w-full">
              <Image
                className=" object-cover w-full h-full"
                src="/images/csi_2019/csi-img4.png"
                alt="image description"
                height={400}
                width={400}
              />
            </div>
          </div>
        </div>

        <div className="lg:flex justify-center items-center h-full lg:mt-32">
          <div className="flex flex-col lg:flex-row  w-full">
            <div className="w-full flex justify-center items-center">
              <Image
                className=" object-cover w-full h-full"
                src="/images/csi_2019/csi-img5.png"
                alt="image description"
                height={400}
                width={400}
              />
            </div>

            <div className="text-white lg:w-1/2 flex justify-center items-center">
              <div className="bg-[#7E3F98] rounded-xl p-9 m-4 relative lg:end-20">
                <div className="w-full flex lg:justify-end lg:ms-28">
                  <Image
                    className="lg:ms-44 px-2 w-40 lg:-mt-24"
                    src="/images/csi_2019/csi-img6.png"
                    alt="image description"
                    height={400}
                    width={400}
                  />
                </div>
                <h3 className="text-4xl text-white text-center">Challengers</h3>
                <p className="mt-5 text-center">
                  Challengers curates and hosts talks from visionaries
                  propelling social change. Through compelling narratives, these
                  speakers share innovative initiatives addressing pressing
                  global issues. Challengers offers a stage for thought leaders,
                  sparking ideas and fostering a global community committed to
                  impactful change, creating an immersive and inspiring
                  experience for its audience.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex justify-center items-center h-full">
          <div className="flex flex-col-reverse lg:flex-row lg:mt-32 w-full justify-center items-center">
            <div className="text-white lg:w-1/2 flex justify-center items-center">
              <div className="bg-[#7E3F98] rounded-xl p-9 m-4 relative lg:start-20 mt-20">
                <div className="w-full">
                  <Image
                    className="w-40 lg:-ms-28 px-2 lg:-mt-24"
                    src="/images/csi_2019/csi-img7.png"
                    alt="image description"
                    height={400}
                    width={400}
                  />
                </div>
                <h3 className="text-4xl violet text-white text-center lg:text-left">
                  Marketplace
                </h3>
                <p className="mt-3 text-center lg:text-left">
                  The Ideas Marketplace, an offshoot of Solution Circles,
                  cultivates collaborative innovation. Participants, inspired by
                  diverse perspectives, exchange and refine ideas within this
                  dynamic forum. By merging collective intellect, this
                  marketplace transforms concepts into actionable solutions,
                  fostering a community-driven approach to problem-solving and
                  promoting positive change on a broader scale.
                </p>
              </div>
            </div>

            <div className="w-full flex justify-center items-center">
              <Image
                className="object-cover w-full h-full"
                src="/images/csi_2019/csi-img8.png"
                alt="image description"
                height={400}
                width={400}
              />
            </div>
          </div>
        </div>

        <div className="lg:flex justify-center items-center h-full mt-32">
          <div className="flex flex-col lg:flex-row w-full">
            <div className="w-full">
              <Image
                className=" object-cover w-full h-full"
                src="/images/csi_2019/csi-img9.png"
                alt="image description"
                height={400}
                width={400}
              />
            </div>

            <div className="text-white lg:w-1/2 flex justify-center items-center ">
              <div className="bg-[#7E3F98] rounded-xl p-9 m-4 relative lg:end-20">
                <div className="w-full flex lg:justify-end lg:ms-20 ">
                  <Image
                    className="lg:ms-52 px-2 w-40 lg:-mt-24"
                    src="/images/csi_2019/csi-img10.png"
                    alt="image description"
                    height={400}
                    width={400}
                  />
                </div>
                <h3 className="text-4xl text-white text-center">Legends</h3>
                <p className="mt-5 text-center">
                  We closed the Catalysing Social Impact 2019 convening with the
                  “Legends” segment - starting with a solemn memorial for the
                  stalwarts who walked so we could run followed by recognising
                  and listening to changemakers whom we are lucky to share our
                  timeline with.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Csi2019page
