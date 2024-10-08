"use client"
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState(null)
  const [activeSubLink, setActiveSubLink] = useState(null)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = (index) => {
    if (activeLink === index) {
      setActiveLink(null)
    } else {
      setActiveLink(index)
    }
    setActiveSubLink(null)
    setIsMenuOpen(false) // Close the mobile menu when a link is clicked
  }

  const handleSubLinkClick = (linkIndex, subLinkIndex) => {
    setActiveLink(null)
    setActiveSubLink(subLinkIndex)
    setIsMenuOpen(false) // Close the mobile menu when a sublink is clicked
  }

  return (
    <>
      <div className="py-5 px-5 flex fixed inset-0 h-[6em] top-6 w-[94.5%] mx-auto rounded-lg bg-white justify-between">
        <Link href="/" className="block bg-white rounded-lg">
          <Image
            className="w-full h-[58px]"
            src="/images/catalysing_logo (1).png"
            alt="image description"
            height={200}
            width={800}
          />
        </Link>

        <div className="bg-white rounded-lg">
          <nav className="bg-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-white">
              <div className="w-full md:w-auto">
                <ul className="font-medium hidden md:flex flex-col p-4 md:p-0 mt-4 bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                  <Link
                    href="/"
                    className={`block -py-2 -px-8 hover:text-purple-700 text-gray-900 rounded bg-white md:border-0 ${
                      pathname === "/" ? "text-purple-700" : ""
                    }`}
                    onClick={() => handleLinkClick(null)} // Close any open submenu
                  >
                    Home
                  </Link>

                  {/* Main menu with submenu */}
                  <li className="bg-white relative group">
                    <button
                      className={`block -py-2 -px-8 hover:text-purple-700 text-gray-900 rounded bg-white md:border-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-700 ${
                        activeLink === 1 ? "null" : ""
                      }`}
                      onClick={() => handleLinkClick(1)}
                    >
                      CSI 2024
                    </button>

                    {/* Show submenu if the link is active */}
                    {activeLink === 1 && (
                      <ul className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg">
                        <li>
                          <Link
                            href="/csi-2024"
                            className={`block py-2 px-4  hover:bg-gray-300 hover:text-purple-500 text-gray-800 ${
                              pathname === "/csi-2024" || activeSubLink === 5
                                ? "text-purple-700"
                                : ""
                            }`}
                            onClick={() => handleSubLinkClick(1, 5)}
                          >
                            Overview
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/csi-agenda"
                            className={`block py-2 px-4 hover:bg-gray-300 hover:text-purple-500 text-gray-800 ${
                              pathname === "/csi-agenda" || activeSubLink === 6
                                ? "text-purple-700"
                                : ""
                            }`}
                            onClick={() => handleSubLinkClick(1, 6)}
                          >
                            Agenda
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/csi-2024-films"
                            className={`block py-2 px-4 hover:bg-gray-300 hover:text-purple-500  text-gray-800 ${
                              pathname === "/csi-2024-films" ||
                              activeSubLink === 7
                                ? "text-purple-700"
                                : ""
                            }`}
                            onClick={() => handleSubLinkClick(1, 7)}
                          >
                            Films
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  {/* Other main menu links */}
                  <li className="bg-white">
                    <Link
                      href="/csi-2019"
                      className={`block -py-2 -px-8 hover:text-purple-700 text-gray-900 rounded bg-white md:border-0 ${
                        pathname === "/csi-2019" ? "text-purple-700" : ""
                      }`}
                      onClick={() => handleLinkClick(null)} // Close any open submenu
                    >
                      CSI 2019
                    </Link>
                  </li>
                  <li className="bg-white">
                    <Link
                      href="/csi-2024-how-to-engage"
                      className={`block -py-2 -px-8 hover:text-purple-700 text-gray-900 rounded bg-white md:border-0 ${
                        pathname === "/csi-2024-how-to-engage"
                          ? "text-purple-700"
                          : ""
                      }`}
                      onClick={() => handleLinkClick(null)} // Close any open submenu
                    >
                      How to Engage
                    </Link>
                  </li>
                  <li className="bg-white">
                    <Link
                      href="https://docs.google.com/forms/d/e/1FAIpQLScwwcEsK3tlih6udYZ1dU2WADxcCf846G6pf4K_qrEfGeYO-A/viewform"
                      className="block py-2 px-8 text-black bg-[#F3D479] hover:text-[#7e3f98] font-normal rounded-3xl text-sm"
                    >
                      Subscribe Now
                    </Link>
                  </li>
                </ul>

                {/* Mobile menu toggle */}
                <button
                  className="block md:hidden"
                  onClick={toggleMenu}
                  aria-label="Toggle Menu"
                >
                  {isMenuOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
                <div
                  className={`fixed top-0 left-0 h-full w-full max-w-md bg-white shadow-lg transform ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                  } transition-transform duration-300 ease-in-out md:hidden`}
                >
                  <div className="flex justify-end p-4">
                    <button
                      className="text-gray-900"
                      onClick={toggleMenu}
                      aria-label="Close Menu"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 bg-white">
                    <li className="bg-white">
                      <Link
                        href="/"
                        className={`block py-2 px-3 text-gray-900 rounded bg-white md:border-0 md:p-0 ${
                          activeLink === 0 ? "text-purple-700" : ""
                        }`}
                        aria-current="page"
                        onClick={() => handleLinkClick(0)}
                      >
                        Home
                      </Link>
                    </li>
                    <li className="relative group">
                      <button
                        className={`block py-2 px-3 text-gray-900 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-700 ${
                          activeLink === 1 ? "text-purple-700" : ""
                        }`}
                        onClick={() => handleLinkClick(1)}
                      >
                        CSI 2024
                      </button>
                      {isMenuOpen && (
                        <ul className="mt-2 ">
                          <li>
                            <Link
                              href="csi-2024"
                              className={`block py-2 px-4 text-gray-800 ${
                                activeSubLink === 5 ? "text-purple-700" : ""
                              }`}
                              onClick={() => handleSubLinkClick(1, 5)}
                            >
                              Overview
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="csi-agenda"
                              className={`block py-2 px-4 text-gray-800 ${
                                activeSubLink === 7 ? "text-purple-700" : ""
                              }`}
                              onClick={() => handleSubLinkClick(1, 7)}
                            >
                              Agenda
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="csi-2024-films"
                              className={`block py-2 px-4 text-gray-800 ${
                                activeSubLink === 6 ? "text-purple-700" : ""
                              }`}
                              onClick={() => handleSubLinkClick(1, 6)}
                            >
                              Films
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="bg-white">
                      <Link
                        href="csi-2019"
                        className={`block py-2 px-3 text-gray-900 rounded bg-white md:border-0 md:p-0 ${
                          activeLink === 2 ? "text-purple-700" : ""
                        }`}
                        onClick={() => handleLinkClick(2)}
                      >
                        CSI 2019
                      </Link>
                    </li>
                    <li className="bg-white">
                      <Link
                        href="csi-2024-how-to-engage"
                        className={`block py-2 px-3 text-gray-900 rounded bg-white md:border-0 md:p-0 ${
                          activeLink === 3 ? "text-purple-700" : ""
                        }`}
                        onClick={() => handleLinkClick(3)}
                      >
                        How to Enagage
                      </Link>
                    </li>
                    <li className="bg-white">
                      <Link
                        href="https://docs.google.com/forms/d/1eq7SGApyH7qT3UgunUMlJleY1uc_lP1TbtJr7bzkz0E/viewform?edit_requested=true"
                        className={`block w-44 -py-2  text-center mt-3 focus:outline-none text-black bg-[#F3D479] hover:text-[#7e3f98]  font-normal rounded-3xl text-sm px-8 py-3   ${
                          activeLink === 4 ? "text-purple-700" : ""
                        }`}
                        onClick={() => handleLinkClick(4)}
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
      </div>
    </>
  )
}

export default Header
