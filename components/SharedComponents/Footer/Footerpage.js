import Image from "next/image"
import Link from "next/link"
import React from "react"

const Footerpage = () => {
  return (
    <>
      <div className="">
        <div className="bg-[#7E3F98]  grid grid-cols-1 md:grid-cols-2 border-b border-white-500 p-5 ">
          <div className="p-5 ">
            <Image
              className="w-10/12  h-full"
              src="/images/logo-light (1).png"
              alt="image description"
              height={200}
              width={800}
            />
          </div>
          <div className="flex items-center justify-center h-full text-white text-center md:text-right md:mt-0">
            <a href="mailto:csi@catalysts.org" className="hover:text-green-600 text-md lg:ms-44">
              csi@catalysts.org
            </a>
          </div>
        </div>

        <div className="bg-[#7E3F98] px-10 ">
          <nav className="violet">
            <div className="max-w-screen-xl mx-auto p-4 violet">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="w-full md:w-auto mb-4 md:mb-0">
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
                <div className="w-full md:w-auto mb-4 md:mb-0">
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
                <div className="w-full md:w-auto mb-4 md:mb-0">
                  <ul className="font-medium flex flex-col md:flex-row md:space-x-8">
                    <li className="violet">
                      <p className="block py-2 px-3 text-md text-white md:bg-violet-700 rounded md:bg-transparent md:text-violet-700 md:p-0 md:dark:text-violet-500 hover:text-green-600" aria-current="page">
                        CSI 2024
                      </p>
                      <Link
                        href="csi-2024"
                        className="block py-2 px-3 text-sm text-white md:bg-violet-700 rounded md:bg-transparent md:text-violet-700 md:p-0 md:dark:text-violet-500 hover:text-green-600"
                        aria-current="page"
                      >
                        Overview
                      </Link>
                      <Link
                        href="csi-awards-2024"
                        className="block py-2 px-3 text-sm text-white md:bg-violet-700 rounded md:bg-transparent md:text-violet-700 md:p-0 md:dark:text-violet-500 hover:text-green-600"
                        aria-current="page"
                      >
                        Awards
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-auto">
                  <ul className="font-medium flex flex-col md:flex-row md:space-x-8">
                    <li className="violet">
                      <Link
                        href="interest-form"
                        className="block py-2 px-3 text-white md:bg-violet-700 rounded md:bg-transparent md:text-violet-700 md:p-0 md:dark:text-violet-500 hover:text-green-600"
                        aria-current="page"
                      >
                        Signup
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Footerpage
