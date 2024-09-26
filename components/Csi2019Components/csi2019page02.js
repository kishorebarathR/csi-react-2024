import React from "react"
import Image from "next/image"

const Csi2019page02 = () => {
  return (
    <div className=" ">
      <div className="lg:flex w-full  h-full mt-14   ">
        <div className="flex flex-col lg:flex-row mx-auto w-full lg:px-8 space-y-3 ">
          <div className="lg:w-1/2 mt-3 ">
            <div className="relative">
              <Image
                className="px-3 object-cover w-full h-full"
                src="/images/csi_2019/video-cover2.png"
                alt="image description"
                height={200}
                width={200}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  data-modal-target="default-modal3"
                  data-modal-toggle="default-modal3"
                  className="text-white w-14"
                  src="/images/csi_2019/play-circle-filled.svg"
                  alt="image description"
                  height={200}
                  width={500}
                />
              </div>
            </div>

            <div
              id="default-modal3"
              tabindex="-1"
              aria-hidden="true"
              className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Video
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="default-modal3"
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
                            src="/vedio/Homepage-vedio.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button
                      data-modal-hide="default-modal3"
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

          <div className="lg:w-1/2   ">
            <div className="relative">
              <Image
                className="px-3 object-cover w-full h-full"
                src="/images/csi_2019/video-cover1.png"
                alt="image description"
                height={200}
                width={500}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  data-modal-target="default-modal3"
                  data-modal-toggle="default-modal3"
                  className="text-white w-14"
                  src="/images/csi_2019/play-circle-filled.svg"
                  alt="image description"
                  height={200}
                  width={200}
                />
              </div>
            </div>
            <div
              id="default-modal4"
              tabindex="-1"
              aria-hidden="true"
              className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Video
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="default-modal4"
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
                            src="/vedio/Homepage-vedio.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button
                      data-modal-hide="default-modal4"
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

          <div className="lg:w-1/2   ">
            <div className="relative">
              <Image
                className="px-3 object-cover w-full h-full"
                src="/images/csi_2019/video-cover3.png"
                alt="image description"
                height={200}
                width={500}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  data-modal-target="default-modal3"
                  data-modal-toggle="default-modal3"
                  className="text-white w-14"
                  src="/images/csi_2019/play-circle-filled.svg"
                  alt="image description"
                  height={200}
                  width={200}
                />
              </div>
            </div>
            <div
              id="default-modal5"
              tabindex="-1"
              aria-hidden="true"
              className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Video
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="default-modal5"
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
                            src="/vedio/Homepage-vedio.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button
                      data-modal-hide="default-modal5"
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

          <div className="lg:w-1/2  ">
            <div className="relative">
              <Image
                className="px-3 object-cover w-full h-full"
                src="/images/csi_2019/video-cover4.png"
                alt="image description"
                height={200}
                width={500}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  data-modal-target="default-modal3"
                  data-modal-toggle="default-modal3"
                  className="text-white w-14"
                  src="/images/csi_2019/play-circle-filled.svg"
                  alt="image description"
                  height={200}
                  width={200}
                />
              </div>
            </div>

            <div
              id="default-modal6"
              tabindex="-1"
              aria-hidden="true"
              className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Video
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="default-modal6"
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

                  <div className="flex justify-center items-center h-full mt-5">
                      <div className="flex flex-col lg:flex-row  ">
                        <div className="w-full ">
                          <video
                            className="h-full w-full lozad"
                            autoPlay
                            muted
                            loop
                          >
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
                      data-modal-hide="default-modal6"
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
      </div>

      <div className="text-center mt-10 mb-10">
        <a
          href="/csi-2019-report.pdf"
          download
          className="focus:outline-none text-violet-600 bg-[#F3D479] hover:bg-[#7e3f98] hover:text-yellow-200 focus:ring-4 focus:ring-yellow-200 font-normal rounded-3xl text-sm px-14 py-4 me-2 mb-14 dark:focus:ring-yellow-900"
        >
          CSI 2019 Report
        </a>
      </div>
    </div>
  )
}

export default Csi2019page02
