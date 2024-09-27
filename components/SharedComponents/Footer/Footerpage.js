"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Footerpage = () => {
  const defaultLinkClass = "text-white hover:text-green-500";

  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="bg-[#7E3F98] border-b border-white-500 pt-5 lg:flex items-center justify-between hidden md:flex">
        {/* Left side with image */}
        <div className="w-1/2">
          <Image
            src="/images/logo-light (1).png"
            alt="image description"
            className="w-10/12 md:w-auto"
            height={400}
            width={400}
          />
        </div>

        {/* Right side with text */}
        <div className="flex-1 text-white pb-5 p-5 md:text-end">
          <a href="mailto:csi@catalysts.org" className="hover:text-green-600 text-md">
            csi2014@catalysts.org
          </a>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="bg-[#7E3F98] border-b border-white-500 pt-5 flex flex-col md:flex-row items-center md:justify-between md:hidden">
        {/* Left side with image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <Image
            src="/images/logo-light (1).png"
            alt="image description"
            className="w-10/12 md:w-auto"
            height={400}
            width={400}
          />
        </div>

        {/* Right side with text */}
        <div className="w-full text-white pb-5 p-5 text-center md:text-end">
          <a href="mailto:csi@catalysts.org" className="hover:text-green-600 text-md">
            csi2014@catalysts.org
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="bg-[#7E3F98] px-10 text-center md:text-left">
        <nav className="">
          <div className="max-w-screen-xl mx-auto violet">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              {/* Home Link */}
              <div className="w-full md:w-auto mb-4 md:mb-0 lg:-mt-16">
                <ul className="font-medium flex flex-col md:flex-row md:space-x-8">
                  <li className="violet">
                    <Link href="/" className={`block py-2 px-3 ${defaultLinkClass}`} aria-current="page">
                      Home
                    </Link>
                  </li>
                </ul>
              </div>

              {/* CSI 2019 Link */}
              <div className="w-full md:w-auto mb-4 md:mb-0 lg:-mt-16">
                <ul className="font-medium flex flex-col md:flex-row md:space-x-8">
                  <li className="violet">
                    <Link href="/csi-2019" className={`block py-2 px-3 ${defaultLinkClass}`} aria-current="page">
                      CSI 2019
                    </Link>
                  </li>
                </ul>
              </div>

              {/* CSI 2024 Links */}
              <div className="w-full md:w-auto md:mb-0 lg:mt-9 pb-4">
                <ul className="font-medium flex flex-col md:flex-row md:space-x-8">
                  <li className="violet">
                    <p className="block px-3 text-md text-white">CSI 2024</p>
                    <Link href="/csi-2024" className={`block py-1 px-3 lg:ms-1 text-sm ${defaultLinkClass}`} aria-current="page">
                      Overview
                    </Link>
                    <Link href="/csi-agenda" className={`block py-1 px-3 lg:ms-2 text-sm ${defaultLinkClass}`} aria-current="page">
                      Agenda
                    </Link>
                    <Link href="/csi-2024-films" className={`block py-1 px-3 lg:ms-2 text-sm ${defaultLinkClass}`} aria-current="page">
                      Films
                    </Link>
                  </li>
                </ul>
              </div>

              {/* How to Engage Link */}
              <div className="w-full md:w-auto mb-4 md:mb-0 lg:-mt-16">
                <ul className="font-medium flex flex-col md:flex-row md:space-x-8">
                  <li className="violet">
                    <Link href="/csi-2024-how-to-engage" className={`block py-2 px-3 ${defaultLinkClass}`} aria-current="page">
                      How to Engage
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Subscribe Now Link */}
              <div className="w-full md:w-auto lg:-mt-16">
                <ul className="font-medium flex flex-col md:flex-row md:space-x-8">
                  <li className="violet">
                    <Link
                      href="https://docs.google.com/forms/d/e/1FAIpQLScwwcEsK3tlih6udYZ1dU2WADxcCf846G6pf4K_qrEfGeYO-A/viewform"
                      className="block py-2 px-3 text-white rounded hover:text-green-500"
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
    </>
  );
};

export default Footerpage;
