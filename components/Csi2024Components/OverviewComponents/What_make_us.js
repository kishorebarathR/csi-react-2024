import React from "react"
import Image from "next/image"

const WhatMakeUs = () => {
  return (
    <div>
      <div className=" bg-[url('/images/csi_2024/Mask.png')] bg-cover bg-center h-full w-full flex items-center justify-center ">
        <div className=" pb-5  px-5">
          <div className="text-center pt-10   ">
            <p className="text-4xl font-medium text-[#7E3F98] py-2 ">
              WHAT MAKES US <p className="mb-0 pt-3"> </p>DIFFERENT?
            </p>
            <p className="text-2xl mb-10 pt-5">
              At CSI 2024, we’re breaking the mould of traditional conferences.
            </p>
          </div>

          <div className="container mx-auto px-4 py-8 ">
            <div className="lg:flex lg:pt-16 lg:px-4  gap-4 ">
              <div className="flex-1 rounded-lg bg-white p-6  ">
                <Image
                  className="w-28 h-28 lg:-mt-20 -mt-20 m-auto lg:m-0"
                  src="/images/csi_2024/Learning_Corridor_Showcase.png"
                  alt="image description"
                  height={200}
                  width={200}
                />

                <p className="text-2xl pt-5 text-[#8F4898] font-medium">
                  Learning Corridor/Showcase
                </p>
                <p className="pt-4">
                  Dive into interactive exhibits, multimedia presentations,
                  immersive experiences, storytelling sessions, short film
                  screenings, and pitch sessions. It’s all about making learning
                  dynamic and engaging.
                </p>
              </div>
              <div className="flex-1 rounded-lg bg-white p-6  mt-20 lg:mt-0">
                <Image
                  className="w-28 h-28 lg:-mt-20 -mt-20 m-auto lg:m-0"
                  src="/images/csi_2024/Interactive_Sessions.png"
                  alt="image description"
                  height={200}
                  width={200}
                />
                <p className="text-2xl pt-5 text-[#8F4898] font-medium">
                  Interactive Sessions
                </p>
                <p className="pt-5 ">
                  Forget boring panels! We’re all about participatory processes.
                  Games, workshops, and other innovative tools will be
                  co-designed with our partners, ensuring everyone has ample
                  time and space to engage and contribute. It’s not just about
                  intellectual stimulation; it’s about creating an unforgettable
                  experience.
                </p>
              </div>
              <div className="flex-1 rounded-lg bg-white p-6 mt-20 lg:mt-0">
                <Image
                  className="w-28 h-28 lg:-mt-20 -mt-20 m-auto lg:m-0"
                  src="/images/csi_2024/Exciting_Side_Events.png"
                  alt="image description"
                  height={200}
                  width={200}
                />
                <p className="text-2xl pt-5 text-[#8F4898] font-medium">
                  Exciting Side Events
                </p>
                <p className="pt-5">
                  Do you have ideas that don’t quite fit the main themes? No
                  problem. Our side events offer a platform for conversations
                  and activities that align with the overall focus but venture
                  into new territories.
                </p>
              </div>
              <div className="flex-1 rounded-lg bg-white p-6 mt-20 lg:mt-0  ">
                <Image
                  className="w-28 h-28 lg:-mt-20 -mt-20 m-auto lg:m-0"
                  src="/images/csi_2024/Networking_Zones.png"
                  alt="image description"
                  height={200}
                  width={200}
                />
                <p className="text-2xl pt-5 text-[#8F4898] font-medium">
                  Networking Zones
                </p>
                <p className="pt-4">
                  We’ve set up designated areas for attendees to connect,
                  exchange ideas, and explore collaboration opportunities with
                  exhibitors and fellow participants.
                </p>
              </div>
            </div>
          </div>

          <p className=" pt-4 pb-4 text-2xl text-center   font-medium">
            <span className="font-medium">
              CSI 2024 is not just another conference—it’s an exciting
              opportunity designed to inspire and empower.
            </span>
            <span className="text-[#8F4898] font-medium">
              <p className="mb-0"></p> Get ready to experience something truly
              unique!
            </span>
          </p>
        </div>
      </div>

      <div className="  bg-[url('/images/csi_2024/EXPECTED_OUTCOMES_banner.png')] bg-cover bg-bottom bg-no-repeat w-full lg:h-auto">
        <div className="text-center py-10 md:pt-20">
          <p className="text-3xl text-[#7E3F98] font-semibold">
            EXPECTED OUTCOMES
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-around gap-4 px-4   md:px-2 container mx-auto ">
          <div className="flex-1 md:mr-4">
            <Image
              className="lg:w-full h-auto lg:px-10"
              src="/images/csi_2024/contact.png"
              alt="image description"
              height={200}
              width={600}
            />
          </div>

          <div className="flex md:mx-4 text-center">
            <div className="w-10 h-10 mx-auto">
              {/* Mobile view rotation */}
              <Image
                src="/images/csi_2024/Arrow.png"
                alt="image description"
                width={100}
                height={100}
                className="w-full h-full md:hidden transform rotate-90"
              />
              {/* Desktop view (no rotation) */}
              <Image
                src="/images/csi_2024/Arrow.png"
                alt="image description"
                width={400}
                height={100}
                className="w-full h-full hidden md:block"
              />
            </div>
          </div>

          <div className="flex-1 md:mx-4">
            <Image
              className="lg:w-full h-auto lg:px-10"
              src="/images/csi_2024/solve.png"
              alt="image description"
              height={200}
              width={600}
            />
          </div>

          <div className="flex md:mx-4 text-center">
            <div className="w-10 h-10 mx-auto">
              {/* Mobile view rotation */}
              <Image
                src="/images/csi_2024/Arrow.png"
                alt="image description"
                width={100}
                height={100}
                className="w-full h-full md:hidden transform rotate-90"
              />
              {/* Desktop view (no rotation) */}
              <Image
                src="/images/csi_2024/Arrow.png"
                alt="image description"
                width={400}
                height={200}
                className="w-full h-full hidden md:block"
              />
            </div>
          </div>

          <div className="flex-1 md:ml-4">
            <Image
              className="lg:w-full h-auto lg:px-10"
              src="/images/csi_2024/contact.png"
              alt="image description"
              height={200}
              width={600}
            />
          </div>
        </div>

        <div className="text-center py-5">
          <p className="text-xl">
            Stakeholder consensus and commitments with a focus on
            <p className="pb-0"></p>
            <span className="font-semibold">&apos;Connect, Solve&apos;</span>
            and
            <span className="font-semibold">&apos;Catalyse&apos;</span> through
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 pb-20 px-4 md:px-10">
          <div className="  md:text-left">
            <ul className="list-disc list-inside">
              <li className="p-2">
                Enabling catalytic partnerships and <p className="pb-0"></p>
                investment opportunities, reducing <p className="pb-0"></p>
                discovery costs, and ensuring greater <p className="pb-0"></p>
                scale and impact
              </li>
            </ul>
          </div>
          <div className="  md:text-left">
            <ul className="list-disc list-inside">
              <li className="p-2">
                Encouraging positive action among <p className="pb-0"></p>key
                stakeholders to contribute<p className="pb-0"></p>
                collectively
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <p className="text-3xl text-center font-medium   text-[#7E3F98] pt-8 ">
          WHO WE WORK WITH
        </p>
        <p className="text-center pt-5 text-xl font-normal  lg:px-24 ">
          <span className="text-2xl">CSI 2024</span> is a dynamic gathering
          where every organisation has something to take away,
          <p className="mb-0"></p>
          through collaboration and networking
        </p>
      </div>

      <div className="bg-white lg:flex flex-wrap lg:flex-nowrap lg:px-44 gap-8 space-y-2 pb-8 ">
        <div className="w-full lg:w-1/5 lg:flex flex-row items-center border-b p-1  ">
          <div className="w-44 lg:w-auto lg:flex-shrink-0 mx-auto lg:mx-0 ">
            <Image 
              className="w-full h-full "
              src="/images/csi_2024/implementing_organisation.svg"
              alt="Implementing Organisations"
              height={400}
              width={400}
            />
          </div>
          <div className="text-md ml-4 ">
            <p className="p-1">
              <span className="font-semibold font16px text-purple">
                Implementing organisations:
              </span>
              CSOs, NGOs, and social enterprises can come together to join
              forces, showcase innovation, share experiences, and find
              collaborative partners for growth and impact within our dynamic
              event.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/5 lg:flex flex-row items-center border-b p-1">
          <div className="w-44 lg:w-auto lg:flex-shrink-0 m-auto lg:m-0">
            <Image
              className="w-full h-full"
              src="/images/csi_2024/founder.svg"
              alt="Funders, corporates and investors"
              height={400}
              width={400}
            />
          </div>
          <div className="text-md ml-4">
            <p className="p-1">
              <span className="font-semibold font16px text-purple">
                Funders, corporates and investors:
              </span>
              Connect with sectoral leaders, practitioners, and innovators to
              identify partners, collaborations, and innovations. Dive deep into
              SDGs, learn, co-create, and carve out or deepen your niche for
              impactful change.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/5 lg:flex flex-row items-center border-b p-1">
          <div className=" w-44 h-full  lg:w-auto lg:flex-shrink-0 m-auto lg:m-0">
            <Image
              className="w-full h-full"
              src="/images/csi_2024/government.svg"
              alt="Government"
              height={400}
              width={400}
            />
          </div>
          <div className="text-md ml-4">
            <p className="p-1">
              <span className="font-semibold font16px text-purple">
                Government:
              </span>
              Gain insights for policy enhancements and implementation
              strategies for SDGs. Discover potential partners and scalable
              solutions for maximum impact.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/5 lg:flex flex-row items-center border-b p-1">
          <div className="w-44 lg:w-auto lg:flex-shrink-0 m-auto lg:m-0">
            <Image
              className="w-full h-full"
              src="/images/csi_2024/research.svg"
              alt="Research and Policy Organisations / Academia"
              height={400}
              width={400}
            />
          </div>
          <div className="text-md ml-5">
            <p className="p-1">
              <span className="font-semibold font16px text-purple">
                Research and Policy Organisations / Academia:
              </span>
              Exchange knowledge, disseminate insights, and uncover business
              opportunities.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/5 lg:flex flex-row items-center  ">
          <div className="w-44 lg:w-auto lg:flex-shrink-0 m-auto lg:m-0">
            <Image
              className="w-full h-full"
              src="/images/csi_2024/service_providers.svg"
              alt="Service Providers & Domain Experts"
              height={400}
              width={400}
            />
          </div>
          <div className="text-md ml-5">
            <p className="p-1">
              <span className="font-semibold font16px text-purple">
                Service Providers & Domain Experts:
              </span>
              Unveil your products/services and explore new frontiers for
              engagement.
            </p>
          </div>
        </div>
      </div>

      <div className="  bg-[url('/images/csi_2024/Mask-2.png')] bg-cover bg-bottom bg-no-repeat lg:w-full pb-5   ">
        <p className="text-3xl text-center font-medium   text-[#7E3F98] pt-8  ">
          THEMES
        </p>
        <div className="px-4 lg:px-36">
          <div className="lg:flex flex-col lg:flex-row justify-center items-center lg:space-x-5 ">
            <div className="w-60 lg:w-auto lg:flex-shrink-0  m-auto lg:m-0">
              <Image
                className="w-52 h-full"
                src="/images/csi_2024/Icon 19.svg"
                alt="image description"
                height={400}
                width={400}
              />
            </div>
            <div className="text-md mt-5 lg:mt-0">
              <p className="text-3xl font-medium text-[#7E3F98] pt-8">
                Innovative Financing
              </p>
              <p className="p-1">
                Navigating the funding desert in social impact feels like
                chasing mirages. From the “Valley of Death” to limited project
                funds, the struggle persists. With the SDGs requiring trillions,
                we’re rallying to revolutionise financing for a brighter future.
              </p>
              <p>
                Join us as we explore avenues like social stock exchanges, new
                microfinance paradigms, and carbon credit utilisation to unlock
                essential funds for meaningful change.
              </p>
            </div>
          </div>

          <div className="lg:flex flex-col lg:flex-row justify-center items-center pt-16 lg:space-x-5">
            <div className="w-60 lg:w-auto lg:flex-shrink-0 order-1 lg:order-2 m-auto lg:m-0">
              <Image
                className="w-52 h-full"
                src="/images/csi_2024/Icon 20.svg"
                alt="Implementation-Fidelity and Quality"
                height={400}
                width={400}
              />
            </div>
            <div className="text-md mt-5 lg:mt-0 order-2 lg:order-1">
              <p className="text-3xl font-medium text-[#7E3F98] pt-8 pb-3">
                Implementation-Fidelity and Quality
              </p>
              <p className="p-1">
                Navigating the gap between envisioned outcomes and reality is a
                common challenge in social impact. While research emphasises
                implementation fidelity, its practicality in addressing
                real-world problems requires further examination, especially
                regarding the balance between scale and quality.
              </p>
              <p>
                Join us to explore quality care’s impact on maternal and
                neonatal mortality, health outcome measurement, design
                adaptation, technology’s role, and data-driven decisions.
              </p>
            </div>
          </div>

          <div className="lg:flex flex-col lg:flex-row justify-center items-center pt-16 lg:space-x-5 pb-8">
            <div className="w-60 lg:w-auto lg:flex-shrink-0  m-auto lg:m-0">
              <Image
                className="w-52 h-full"
                src="/images/csi_2024/Icon 21.svg"
                alt="image description"
                height={400}
                width={400}
              />
            </div>
            <div className="text-md mt-5 lg:mt-0">
              <p className="text-3xl font-medium text-[#7E3F98] pt-8">
                Grounded Climate Response
              </p>
              <p className="p-1">
                Amidst record-breaking temperatures, the urgency of the climate
                crisis is undeniable, affecting health, livelihoods, and beyond.
                Despite this, community-level action remains underutilised.
                Let’s engage in dialogue: How can we amplify and integrate
                existing efforts to address climate change? Join us as we seek
                solutions and forge pathways for impactful change!
              </p>
              <p>
                Join us to explore quality care’s impact on maternal and
                neonatal mortality, health outcome measurement, design
                adaptation, technology’s role, and data-driven decisions.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="text-center pb-10   ">
          <a
            href="interest-form"
            className="focus:outline-none text-purple bg-[#F3D479] hover:bg-[#7e3f98] hover:text-yellow-200 focus:ring-4 focus:ring-yellow-200 font-normal rounded-3xl text-sm px-14 py-4 me-2 mb-14 dark:focus:ring-yellow-900"
          >
            Express Your interest here
          </a>
        </div> */}
      </div>
    </div>
  )
}

export default WhatMakeUs
