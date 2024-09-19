import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footerpage = () => {
  return (
    <>
      {/* <!-- Main container --> */}
      <div className="bg-[#7E3F98] flex flex-wrap justify-between items-center border-b border-white-500 p-5">
        {/* <!-- Left side with image --> */}
        <div className="p-5 flex items-center justify-center w-full md:w-auto">
          <img
            src="/images/logo-light (1).png"
            alt="image description"
            className="w-10/12 md:w-auto"
            height={400}
            width={400}
          />
        </div>

        {/* <!-- Right side with text --> */}
        <div className="flex-1 flex justify-center md:justify-end text-white md:text-right lg:pb-8 ps-8 lg:ps-0 p-5">
          <a
            href="mailto:csi@catalysts.org"
            className="hover:text-green-600 text-md"
          >
            csi2014@catalysts.org
          </a>
        </div>
      </div>

      {/* <!-- Navigation section --> */}
      <div className="bg-[#7E3F98] px-10">
        <nav>
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* <!-- Section 1 --> */}
              <div className="w-full md:w-auto mb-4 md:mb-0">
                <ul className="font-medium flex flex-col md:flex-row md:space-x-8 items-center">
                  <li>
                    <Link
                      href="/"
                      className="block py-2 px-3 text-white md:bg-violet-700 rounded md:bg-transparent hover:text-green-600"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                </ul>
              </div>

              {/* <!-- Section 2 --> */}
              <div className="w-full md:w-auto mb-4 md:mb-0">
                <ul className="font-medium flex flex-col md:flex-row md:space-x-8 items-center">
                  <li>
                    <Link
                      href="csi-2019"
                      className="block py-2 px-3 text-white md:bg-violet-700 rounded md:bg-transparent hover:text-green-600"
                      aria-current="page"
                    >
                      CSI 2019
                    </Link>
                  </li>
                </ul>
              </div>

              {/* <!-- Section 3 --> */}
              <div className="w-full md:w-auto mb-4 md:mb-0 text-center">
                <ul className="font-medium flex flex-col md:flex-row md:space-x-8 items-center">
                  <li>
                    <p className="block py-2 px-3 text-md text-white hover:text-green-600">
                      CSI 2024
                    </p>
                    <Link
                      href="csi-2024"
                      className="block py-2 px-3 text-xs text-white hover:text-green-600"
                    >
                      Overview
                    </Link>
                    <Link
                      href="csi-agenda"
                      className="block py-2 px-3 text-xs text-white hover:text-green-600"
                    >
                      Agenda
                    </Link>
                    <Link
                      href="csi-2024-films"
                      className="block py-2 px-3 text-xs text-white hover:text-green-600"
                    >
                      Films
                    </Link>
                  </li>
                </ul>
              </div>

              {/* <!-- Section 4 --> */}
              <div className="w-full md:w-auto mb-4 md:mb-0">
                <ul className="font-medium flex flex-col md:flex-row md:space-x-8 items-center">
                  <li>
                    <Link
                      href="csi-2024-how-to-engage"
                      className="block py-2 px-3 text-white hover:text-green-600"
                    >
                      How to Engage
                    </Link>
                  </li>
                </ul>
              </div>

              {/* <!-- Section 5 --> */}
              <div className="w-full md:w-auto mb-4 md:mb-0">
                <ul className="font-medium flex flex-col md:flex-row md:space-x-8 items-center">
                  <li>
                    <Link
                      href="https://docs.google.com/forms/d/e/1FAIpQLScwwcEsK3tlih6udYZ1dU2WADxcCf846G6pf4K_qrEfGeYO-A/viewform"
                      className="block py-2 px-3 text-white hover:text-green-600"
                    >
                      Subscribe Now
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Footerpage;
