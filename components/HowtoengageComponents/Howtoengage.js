import React from "react"
import Image from "next/image"
import Link from "next/link"

const Howtoengage = () => {
  return (
    <>
      <div class="bg-[url('/images/how-to-contribute/CSI_2024_bg.png')] bg-cover bg-center h-full w-full ">
        <div className="container mx-auto pt-5 custom-container ">
          <p className="text-4xl  text-[#7E3F98] text-center font-medium pt-4 pb-7 ">
            HOW TO ENGAGE
          </p>
          {/* Mobile version (hidden on desktop) */}
          <div className="block sm:hidden">
            <div className="flex justify-center items-center">
              <Image
                className="w-full"
                src="/images/csi_2024/engage-mobile-banner.png"
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
                src="/images/csi_2024/how-to-engage.png"
                alt="image description"
                height={800}
                width={1400}
              />
            </div>
          </div>
        </div>
        <div className="text-center p-10">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScwwcEsK3tlih6udYZ1dU2WADxcCf846G6pf4K_qrEfGeYO-A/viewform"
            target="_blank"
            className=" focus:outline-none text-violet-600 bg-[#F3D479] hover:bg-[#7e3f98] hover:text-yellow-200 font-normal rounded-3xl text-sm px-14 py-4 me-2 mb-14 "
          >
            Subscribe Now
          </Link>
        </div>
      </div>
    </>
  )
}

export default Howtoengage
