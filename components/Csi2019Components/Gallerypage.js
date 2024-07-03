import React from "react";
import Image from "next/image";
import galleryData from "./GalleryData.json";

const Gallerypage = () => {
  return (
    <div className="lg:mx-10  mt-20 ">
      <p className="text-4xl font-semibold ml-5">{galleryData.title}</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
        {galleryData.sections.map((section, index) => (
          <div key={index} className="relative">
            <Image
              className="object-cover w-full h-full"
              src={section.mainImage.src}
              alt={section.mainImage.alt}
              height={section.mainImage.height}
              width={section.mainImage.width}
            />
            <button
              data-modal-target={`default-modal${index}`}
              data-modal-toggle={`default-modal${index}`}
              type="button"
              className="text-white absolute bottom-2 left-2 lg:bottom-4 lg:left-4 hover:text-black border border-gray-800 hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              {section.day}
            </button>
            <div
              id={`default-modal${index}`}
              tabIndex="-1"
              aria-hidden="true"
              className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div className="relative p-4 w-full max-w-4xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {section.day}
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide={`default-modal${index}`}
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
                    {section.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="w-full h-64 relative">
                        <Image
                          className="object-cover w-full h-full"
                          src={image.src}
                          alt={image.alt}
                          layout="fill"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button
                      data-modal-hide={`default-modal${index}`}
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
        ))}
      </div>
    </div>
  );
};

export default Gallerypage;
