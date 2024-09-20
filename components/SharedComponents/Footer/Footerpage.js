import Image from "next/image"
import Link from "next/link"
import React from "react"

const Footerpage = () => {
  return (
    <>
      {/* DESKTOP VIEW */}
      <div class="bg-[#7E3F98] border-b border-white-500 pt-5 lg:flex items-center justify-between hidden md:flex">
        {/* Left side with image */}
        <div class="w-1/2">
          <Image
            src="/images/logo-light (1).png"
            alt="image description"
            class="w-10/12 md:w-auto"
            height={400}
            width={400}
          />
        </div>

        {/* Right side with text */}
        <div class="flex-1 text-white pb-5 p-5 md:text-end">
          <a
            href="mailto:csi@catalysts.org"
            class="hover:text-green-600 text-md"
          >
            csi2014@catalysts.org
          </a>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div class="bg-[#7E3F98] border-b border-white-500 pt-5 flex flex-col md:flex-row items-center md:justify-between md:hidden">
        {/* Left side with image */}
        <div class="w-full md:w-1/2 flex justify-center md:justify-start">
          <Image
            src="/images/logo-light (1).png"
            alt="image description"
            class="w-10/12 md:w-auto"
            height={400}
            width={400}
          />
        </div>

        {/* Right side with text */}
        <div class="w-full text-white pb-5 p-5 text-center md:text-end">
          <a
            href="mailto:csi@catalysts.org"
            class="hover:text-green-600 text-md"
          >
            csi2014@catalysts.org
          </a>
        </div>
      </div>

      <div className="bg-[#7E3F98] px-10 text-center md:text-left">
        <nav className="">
          <div className="max-w-screen-xl mx-auto  violet">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="w-full md:w-auto mb-4 md:mb-0 lg:-mt-16 ">
                <ul className="font-medium flex flex-col md:flex-row md:space-x-8">
                  <li className="violet">
                    <Link
                      href="/"
                      className="block py-2 px-3 text-white md:bg-violet-700 rounded md:bg-transparent md:text-violet-700 md:p-0 md:dark:text-violet-500 hover:text-green-600"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-auto mb-4 md:mb-0 lg:-mt-16">
                <ul className="font-medium flex flex-col md:flex-row md:space-x-8">
                  <li className="violet">
                    <Link
                      href="csi-2019"
                      className="block py-2 px-3 text-white md:bg-violet-700 rounded md:bg-transparent md:text-violet-700 md:p-0 md:dark:text-violet-500 hover:text-green-600"
                      aria-current="page"
                    >
                      CSI 2019
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-auto mb-4 md:mb-0  lg:mt-6 pb-4 ">
                <ul className="font-medium flex flex-col md:flex-row md:space-x-8 ">
                  <li className="violet">
                    <p
                      className="block py-2 px-3 mt-1 text-md text-white md:bg-violet-700 rounded md:bg-transparent md:text-violet-700 md:p-0 md:dark:text-violet-500 hover:text-green-600"
                      aria-current="page"
                    >
                      CSI 2024
                    </p>
                    <Link
                      href="csi-2024"
                      className="block py-2 px-3 lg:ms-1 mt-1 text-sm  text-white md:bg-violet-700 rounded md:bg-transparent md:text-violet-700 md:p-0 md:dark:text-violet-500 hover:text-green-600"
                      aria-current="page"
                    >
                      Overview
                    </Link>
                    <Link
                      href="csi-agenda"
                      className="block py-2 px-3 lg:ms-2 mt-1 text-sm text-white md:bg-violet-700 rounded md:bg-transparent md:text-violet-700 md:p-0 md:dark:text-violet-500 hover:text-green-600"
                      aria-current="page"
                    >
                      Agenda
                    </Link>
                    <Link
                      href="csi-2024-films"
                      className="block py-2 px-3 lg:ms-2 mt-1 text-sm text-white md:bg-violet-700 rounded md:bg-transparent md:text-violet-700 md:p-0 md:dark:text-violet-500 hover:text-green-600"
                      aria-current="page"
                    >
                      Films
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-auto mb-4 md:mb-0 lg:-mt-16">
                <ul className="font-medium flex flex-col md:flex-row md:space-x-8">
                  <li className="violet">
                    <Link
                      href="csi-2024-how-to-engage"
                      className="block py-2 px-3 text-white md:bg-violet-700 rounded md:bg-transparent md:text-violet-700 md:p-0 md:dark:text-violet-500 hover:text-green-600"
                      aria-current="page"
                    >
                      How to Enagage
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-auto lg:-mt-16">
                <ul className="font-medium flex flex-col md:flex-row md:space-x-8">
                  <li className="violet">
                    <Link
                      href="https://docs.google.com/forms/d/e/1FAIpQLScwwcEsK3tlih6udYZ1dU2WADxcCf846G6pf4K_qrEfGeYO-A/viewform"
                      className="block py-2 px-3 text-white md:bg-violet-700 rounded md:bg-transparent md:text-violet-700 md:p-0 md:dark:text-violet-500 hover:text-green-600"
                      aria-current="page"
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
      {/* </div> */}
    </>
  )
}

export default Footerpage
