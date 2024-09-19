import React, { useState } from "react"
import { X } from "lucide-react"
import Image from "next/image"

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white shadow-lg max-w-xl  px-4 py-3 mx-4 flex flex-col items-end">
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
        <div className="mt-4 w-full">{content}</div>
      </div>
    </div>
  )
}

const Day1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState(null)

  const handleLinkClick = (content) => {
    setModalContent(content)
    setIsModalOpen(true)
  }

  return (
    <div>
      <div className=" mb-10">
        <table className=" text-sm font-semibold lg:w-[1320px]  ">
          <thead className="">
            <tr className="flex lg:flex-col flex-row">
              <th className="p-4 rounded-xl text-white font-semibold text-lg lg:w-[10%] bg-gradient-to-r from-[#2ecc71] to-[#3498db] flex flex-col items-center justify-center mx-1 ">
                <div className=" flex items-center justify-center">
                  <Image
                    src="/images/agenda/clock.svg"
                    width={24}
                    height={24}
                    alt="Time Icon"
                    className="w-full h-14 -mt-12"
                  />
                </div>
                <span>TIME</span>
              </th>
              <th className="p-4 rounded-xl text-white font-semibold text-lg lg:w-[60%] bg-gradient-to-r from-[#5DA7D6] to-[#8458B9] flex flex-col items-center justify-center mx-1 ">
                <div className=" flex items-center justify-center">
                  <Image
                    src="/images/agenda/event.svg"
                    width={24}
                    height={24}
                    alt="Topic Icon"
                    className="w-full h-14 -mt-12"
                  />
                </div>
                <span>TOPIC</span>
              </th>
              <th className="p-4 rounded-xl text-white font-semibold text-lg lg:w-[15%] bg-gradient-to-r from-[#B267B9] to-[#DE636C] flex flex-col items-center justify-center mx-1 ">
                <div className=" flex items-center justify-center">
                  <Image
                    src="/images/agenda/location1.svg"
                    width={24}
                    height={24}
                    alt="Location Icon"
                    className="w-full h-14 -mt-12"
                  />
                </div>
                <span>LOCATION</span>
              </th>
              <th className="p-4 rounded-xl text-white font-semibold text-lg lg:w-[15%] bg-gradient-to-r from-[#F0B55F] to-[#F4D078] flex flex-col items-center justify-center mx-1 ">
                <div className=" flex items-center justify-center">
                  <Image
                    src="/images/agenda/brush.svg"
                    width={24}
                    height={24}
                    alt="Theme Icon"
                    className="w-full h-14 -mt-12"
                  />
                </div>
                <span>THEME</span>
              </th>
            </tr>
          </thead>
        </table>
        <table className="  text-sm font-semibold lg:w-[1320px]">
          <thead>
            <tr>
              <th className=" px-4 py-3 text-left w-[10%]"></th>
              <th className=" px-4 py-3 text-left w-[60%]"></th>
              <th className=" px-4 py-3 text-left w-[15%]"></th>
              <th className=" px-4 py-3 text-left w-[15%]"></th>
            </tr>
          </thead>
          <tbody className="bg-white ">
            <tr>
              <td className="border border-gray-300 px-4 py-3 text-green-600">
                10:30-12:00
              </td>
              <td className="border border-gray-300 px-4 py-3">Inaugural</td>
              <td className="border border-gray-300 px-4 py-3">
                Bhim, Ground floor
              </td>
              <td className="border border-gray-300 px-4 py-3 text-orange-600"></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 text-green-600">
                12:00-13:00
              </td>

              <td className="border border-gray-300 px-4 py-3">
                <button
                  className="text-[#8458B9] underline "
                  onClick={() =>
                    handleLinkClick(
                      <div className="max-w-4xl   p-1 bg-white">
                        <h2 className="text-xl font-bold mb-2">
                          Bridging the Gap: Collaborative Strategies for
                          Development Sector Professionals and Government
                        </h2>
                        <p className="text-gray-700 mb-4">
                          This masterclass focuses on collaborative strategies
                          to bridge the gap between sector professionals and
                          government for enhanced impact.
                        </p>
                        <h2 className="text-xl font-semibold mb-2">
                          Collaborator:
                        </h2>
                        <div className="flex space-x-4">
                          <div className=" px-4 py-3 w-40 h-32 flex items-center justify-center">
                            <Image
                              src="/images/agenda/nexus.png"
                              alt="Nexus of Good logo"
                              width={500}
                              height={500}
                              className="w-full"
                            />
                          </div>
                          <div className=" px-4 py-3 w-40 h-32 flex items-center justify-center">
                            <Image
                              src="/images/agenda/cms.png"
                              alt="CMS logo"
                              width={500}
                              height={500}
                              className="w-full "
                            />
                          </div>
                        </div>
                      </div>
                    )
                  }
                >
                  Bridging the Gap: Collaborating between Development Sector and
                  Government
                </button>
              </td>
              <td className="border border-gray-300 px-4 py-3">
                VIP Dining, First floor
              </td>
              <td className="border border-gray-300 px-4 py-3 text-orange-600">
                Implementation Fidelity & Quality
              </td>
            </tr>

            <tr>
              <td className="border border-gray-300 px-4 py-3 text-green-600">
                12:00-13:00
              </td>
              <td className="border border-gray-300 px-4 py-3">
                <div className="">
                  <button
                    className="text-[#8458B9] underline"
                    onClick={() =>
                      handleLinkClick(
                        <div className="max-w-4xl   p-1 bg-white">
                          <h2 className="text-xl font-bold mb-2">
                            Building Capacity for a Partnership State with Dr.
                            R. Balasubramaniam
                          </h2>
                          <p className="text-gray-700 mb-4">
                            State capacity is a combination of its capability
                            and partnership with Civil Society and the private
                            sector towards Jan Bhagidhari and Viksit Bharat.
                            Join us to understand how the Capacity Building
                            Commission works in this area, explained by{" "}
                            <a
                              href="https://www.linkedin.com/in/r-balasubramaniam/"
                              target="_blank"
                              className="text-purple-600"
                            >
                              Dr. R. Balasubramaniam.
                            </a>
                          </p>
                          <h2 className="text-xl font-semibold mb-2">
                            Collaborator:
                          </h2>
                          <div className="flex space-x-4">
                            <div className=" px-4 py-3 w-40 h-32 flex items-center justify-center">
                              <Image
                                src="/images/agenda/cms.png"
                                alt="CMS logo"
                                width={500}
                                height={500}
                                className="w-full "
                              />
                            </div>
                          </div>
                        </div>
                      )
                    }
                  >
                    Building Capacity for a Partnership State with Dr. R.
                    Balasubramaniam
                  </button>
                </div>
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Bhim, Ground floor
              </td>
              <td className="border border-gray-300 px-4 py-3 text-orange-600">
                Side Event
              </td>
            </tr>

            <tr>
              <td
                className="border border-gray-300 px-4 py-3 text-green-600"
                rowspan="4"
              >
                12:00-13:30
              </td>

              <td className="border border-gray-300 px-4 py-3">
                <button
                  className="text-[#8458B9] underline"
                  onClick={() =>
                    handleLinkClick(
                      <div className="max-w-4xl   p-1 bg-white">
                        <h2 className="text-xl font-bold mb-2">
                          The Big Picture Film Festival Curated by The Centre
                          for Strategic Communications for Public Health, Swasti
                        </h2>
                        <p className="text-gray-700 mb-4">
                          Welcome to The Big Picture Film Festival Curated by
                          The Centre for Strategic Communications for Public
                          Health, Swasti. Explore a curated selection of
                          impactful films that delve into critical public health
                          issues, innovative soluons, and the voices of those
                          affected.
                        </p>
                        <h2 className="text-xl font-semibold mb-2">
                          Presenter:
                        </h2>
                        <div className="flex space-x-4">
                          <div className=" px-4 py-3 w-40 h-32 flex items-center justify-center">
                            <Image
                              src="/images/agenda/swasti.png"
                              alt="CMS logo"
                              width={500}
                              height={500}
                              className="w-full "
                            />
                          </div>
                          <div className=" px-4 py-3 w-40 h-32 flex items-center justify-center">
                            <Image
                              src="/images/agenda/cms.png"
                              alt="CMS logo"
                              width={500}
                              height={500}
                              className="w-full "
                            />
                          </div>
                        </div>
                      </div>
                    )
                  }
                >
                  The Big Picture Film Festival Curated by The Centre for
                  Strategic Communications for Public Health, Swasti
                </button>
              </td>

              <td className="border border-gray-300 px-4 py-3">
                Nalanda, Ground floor
              </td>
              <td className="border border-gray-300 px-4 py-3 text-orange-600">
                Side Event
              </td>
            </tr>

            <tr>
              <td className="border border-gray-300 px-4 py-3 text-green-600 ">
                <div className="">
                  <button
                    className="text-[#8458B9] underline"
                    onClick={() =>
                      handleLinkClick(
                        <div className="max-w-4xl  p-1 bg-white">
                          <h2 className="text-xl font-bold mb-2">
                            Reimagining Implementation@Scale
                          </h2>
                          <p className="text-gray-700 mb-4">
                            This session will enumerate challenges faced by
                            states, identifying roles that CSOs, funders, and
                            states can play in creating an enabling environment
                            for scalable programs.
                          </p>
                          <h2 className="text-xl font-semibold mb-2">
                            Collaborator:
                          </h2>
                          <div className="flex space-x-4">
                            <div className=" px-4 py-3 w-40 h-32 flex items-center justify-center">
                              <Image
                                src="/images/agenda/socion.png"
                                alt="CMS logo"
                                width={500}
                                height={500}
                                className="w-full "
                              />
                            </div>
                            <div className=" px-4 py-3 w-40 h-32 flex items-center justify-center">
                              <Image
                                src="/images/agenda/cms.png"
                                alt="CMS logo"
                                width={500}
                                height={500}
                                className="w-full "
                              />
                            </div>
                          </div>
                        </div>
                      )
                    }
                  >
                    Reimagining Implementation @Scale
                  </button>
                </div>
              </td>

              <td className="border border-gray-300 px-4 py-3">
                Conference 1, Second floor
              </td>
              <td className="border border-gray-300 px-4 py-3 text-orange-600">
                Implementation - Fidelity & Quality
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 text-green-600 ">
                <div className="">
                  <button
                    className="text-[#8458B9] underline"
                    onClick={() =>
                      handleLinkClick(
                        <div className="max-w-4xl   p-1 bg-white">
                          <h2 className="text-xl font-bold mb-2">
                            Demystifying Outcomes-Based Finance (OBF): A
                            Practical Guide and AMA Session
                          </h2>
                          <p className="text-gray-700 mb-4">
                            Outcomes-based financing (OBF) is an increasingly
                            popular approach to development finance, but there
                            are deep-rooted questions and concerns about what
                            OBF looks like in practice. This session, led by the
                            British Asian Trust (BAT), will explore how OBF can
                            be unlocked and more easily accessed, aiming to
                            mitigate risks and enable sustainable investments.
                          </p>
                          <h2 className="text-xl font-semibold mb-2">
                            Collaborator:
                          </h2>
                          <div className="flex space-x-4">
                            <div className=" px-4 py-3 w-40 h-32 flex items-center justify-center">
                              <Image
                                src="/images/agenda/british.png"
                                alt="CMS logo"
                                width={500}
                                height={500}
                                className="w-full "
                              />
                            </div>
                            <div className=" px-4 py-3 w-40 h-32 flex items-center justify-center">
                              <Image
                                src="/images/agenda/cms.png"
                                alt="CMS logo"
                                width={500}
                                height={500}
                                className="w-full "
                              />
                            </div>
                          </div>
                        </div>
                      )
                    }
                  >
                    Demystifying Outcome-Based Finance (OBF): A Practical Guide
                    and AMA Session
                  </button>
                </div>
              </td>

              <td className="border border-gray-300 px-4 py-3">
                Samarthya, Ground floor
              </td>
              <td className="border border-gray-300 px-4 py-3 text-orange-600">
                Innovative Financing
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">
                <div className="mt-6">
                  <button
                    className="text-[#8458B9] underline"
                    onClick={() =>
                      handleLinkClick(
                        <div className="max-w-4xl p-1 bg-white">
                          <h2 className="text-xl md:text-2xl font-bold mb-2">
                            Private Financing for Decarbonization:
                            Community-Based Ecosystem Services for Commons
                          </h2>
                          <p className="text-gray-700 mb-4 text-base">
                            This session explores innovative approaches to
                            financing value chains through a Payment for
                            Ecosystem Services model. Emphasising small and
                            marginal farmers, particularly women, it focuses on
                            promoting ecological restoration and maintaining
                            ecosystem balance.
                          </p>
                          <h2 className="text-lg md:text-xl font-semibold mb-2">
                            Collaborator:
                          </h2>
                          <div className="grid grid-cols-2 gap-2 md:flex md:flex-row md:space-x-4">
                            <div className="px-4 py-3 w-32 h-32 md:w-40 md:h-32 flex items-center justify-center col-span-1">
                              <Image
                                src="/images/agenda/common.png"
                                alt="Common logo"
                                width={500}
                                height={500}
                                className="w-full"
                              />
                            </div>
                            <div className="px-4 py-3 w-32 h-32 md:w-40 md:h-32 flex items-center justify-center col-span-1">
                              <Image
                                src="/images/agenda/vrutti.png"
                                alt="Vrutti logo"
                                width={500}
                                height={500}
                                className="w-full"
                              />
                            </div>
                            <div className="px-4 py-3 w-32 h-32 md:w-40 md:h-32 flex items-center justify-center col-span-2 md:col-span-1">
                              <Image
                                src="/images/agenda/cms.png"
                                alt="CMS logo"
                                width={500}
                                height={500}
                                className="w-full"
                              />
                            </div>
                          </div>
                        </div>
                      )
                    }
                  >
                    Private Financing for Decarbonization: Community-Based
                    Ecosystem Services for Commons
                  </button>
                </div>
              </td>

              <td className="border border-gray-300 px-4 py-3">
                VIP lounge, First floor
              </td>
              <td className="border border-gray-300 px-4 py-3 text-orange-600">
                Innovative Financing
              </td>
            </tr>

            <tr>
              <td className="border border-gray-300 px-4 py-3 text-green-600 ">
                12:00-16:00
              </td>
              <td className="border border-gray-300 px-4 py-3">
                <button
                  className="text-[#8458B9] underline"
                  onClick={() =>
                    handleLinkClick(
                      <div className="max-w-4xl   p-1 bg-white">
                        <h2 className="text-xl font-bold mb-2">
                          Procure with Purpose: Building a Coalition for Social
                          Procurement in India
                        </h2>
                        <p className="text-gray-700 mb-4">
                          This closed-door workshop will focus on building a
                          coalition for social procurement in India, aligning
                          with SDGs and promoting economic and social
                          development.
                        </p>
                        <h2 className="text-xl font-semibold mb-2">
                          Collaborator:
                        </h2>
                        <div className="grid grid-cols-2 gap-2 md:flex md:flex-row md:space-x-4">
                          <div className="px-4 py-3 w-32 h-32 md:w-40 md:h-32 flex items-center justify-center col-span-1">
                            <Image
                              src="/images/agenda/sap.png"
                              alt="CMS logo"
                              width={500}
                              height={500}
                              className="w-full "
                            />
                          </div>
                          <div className=" px-4 py-3 w-40 h-32 flex items-center justify-center col-span-1">
                            <Image
                              src="/images/agenda/sattva.jpg"
                              alt="CMS logo"
                              width={500}
                              height={500}
                              className="w-full "
                            />
                          </div>
                          <div className=" px-4 py-3 w-40 h-32 flex items-center justify-center col-span-2 md:col-span-1">
                            <Image
                              src="/images/agenda/cms.png"
                              alt="CMS logo"
                              width={500}
                              height={500}
                              className="w-full "
                            />
                          </div>
                        </div>
                      </div>
                    )
                  }
                >
                  Procure with Purpose: Building a Coalition for Social
                  Procurement in India
                </button>
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Conference 2, Second floor
              </td>
              <td className="border border-gray-300 px-4 py-3 text-orange-600 ">
                Side Event
              </td>
            </tr>

            <tr>
              <td
                className="border border-gray-300 px-4 py-3 text-green-600"
                rowspan="2"
              >
                12:30-14:30
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Lunch at VIP Dining (Available from 12:30 PM - 2:30 PM)
              </td>
              <td className="border border-gray-300 px-4 py-3">
                VIP Dining, First floor
              </td>
              <td className="border-r border-l border-gray-300 px-4 py-3"></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">
                Tea/Coffee (Available from 9:30 AM - 6:00 PM, Snacks served
                twice AM and PM)
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Foyer, First floor
              </td>
              <td className="border-r border-gray-300 px-4 py-3"></td>
            </tr>

            <tr>
              <td className="border border-gray-300 px-4 py-3 text-green-600">
                14:30-16:00
              </td>
              <td className="border border-gray-300 px-4 py-3">
                <button
                  className="text-[#8458B9] underline"
                  onClick={() =>
                    handleLinkClick(
                      <div className="max-w-4xl   p-1 bg-white">
                        <h2 className="text-xl font-bold mb-2">
                          Social Protection Coalition Launch
                        </h2>
                        <p className="text-gray-700 mb-4">
                          A round table and launch session to discuss and
                          strategise social protection for vulnerable
                          communities, promoting resilience and inclusion.
                        </p>
                        <h2 className="text-xl font-semibold mb-2">
                          Collaborator:
                        </h2>
                        <div className="flex space-x-4">
                          <div className=" px-4 py-3 w-40 h-32 flex items-center justify-center">
                            <Image
                              src="/images/agenda/cms.png"
                              alt="CMS logo"
                              width={500}
                              height={500}
                              className="w-full "
                            />
                          </div>
                        </div>
                      </div>
                    )
                  }
                >
                  Social Protection Coalition Launch
                </button>
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Nalanda, Ground floor
              </td>
              <td className="border border-gray-300 px-4 py-3 text-orange-600">
                Implementation Fidelity & Quality
              </td>
            </tr>

            <tr>
              <td
                className="border border-gray-300 px-4 py-3 text-green-600"
                rowspan="4"
              >
                14:30-18:30
              </td>

              <td className="border border-gray-300 px-4 py-3">
                <button
                  className="text-[#8458B9] underline"
                  onClick={() =>
                    handleLinkClick(
                      <div className="max-w-4xl   p-1 bg-white">
                        <h2 className="text-xl font-bold mb-2">
                          Building Resilience for Vulnerable Populations:
                          Systemic Risk and Response Perspective
                        </h2>
                        <p className="text-gray-700 mb-4">
                          A World Cafe session to explore strategies to assess
                          and respond to systemic risks, enhancing resilience in
                          the face of global challenges.
                        </p>
                        <h2 className="text-xl font-semibold mb-2">
                          Collaborator:
                        </h2>
                        <div className="flex space-x-4">
                          <div className=" px-4 py-3 w-40 h-32 flex items-center justify-center">
                            <Image
                              src="/images/agenda/asra.png"
                              alt="CMS logo"
                              width={500}
                              height={500}
                              className="w-full "
                            />
                          </div>
                          <div className=" px-4 py-3 w-40 h-32 flex items-center justify-center">
                            <Image
                              src="/images/agenda/cms.png"
                              alt="CMS logo"
                              width={500}
                              height={500}
                              className="w-full "
                            />
                          </div>
                        </div>
                      </div>
                    )
                  }
                >
                  Building Resilience for VPs Systemic Risk and Response
                  Perspective
                </button>
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Bhim, Ground floor
              </td>
              <td className="border border-gray-300 px-4 py-3 text-orange-600">
                Grounded Climate Response
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">
                <div className="">
                  <button
                    className="text-[#8458B9] underline"
                    onClick={() =>
                      handleLinkClick(
                        <div className="max-w-4xl   p-1 bg-white">
                          <h2 className="text-xl font-bold mb-2">
                            Pioneering the Future: Accelerating Implementation
                            and Shaping Policy for the Social Stock Exchange
                          </h2>
                          <p className="text-gray-700 mb-4">
                            Co-hosted by the Institute of Cost Accountants of
                            India-Social Auditors Organization (ICMAI-SAO), this
                            session offers a platform for engagement with
                            leading experts to explore pathways for sustainable
                            development via the Social Stock Exchange (SSE).
                          </p>
                          <h2 className="text-xl font-semibold mb-2">
                            Collaborator:
                          </h2>
                          <div className="grid grid-cols-2 gap-2 md:flex md:flex-row md:space-x-4">
                            <div className="px-4 py-3 w-40 h-32 md:w-40 md:h-32 flex items-center justify-center col-span-1">
                              <Image
                                src="/images/agenda/icmai.png"
                                alt="CMS logo"
                                width={500}
                                height={500}
                                className="w-full "
                              />
                            </div>
                            <div className=" px-4 py-3 w-40 h-32 flex items-center justify-center col-span-1">
                              <Image
                                src="/images/agenda/catalyst.png"
                                alt="CMS logo"
                                width={500}
                                height={500}
                                className="w-full "
                              />
                            </div>
                            <div className=" px-4 py-3 w-40 h-32 flex items-center justify-center col-span-2 md:col-span-1">
                              <Image
                                src="/images/agenda/cms.png"
                                alt="CMS logo"
                                width={500}
                                height={500}
                                className="w-full "
                              />
                            </div>
                          </div>
                        </div>
                      )
                    }
                  >
                    Pioneering the Future: Accelerating Implementation and
                    Shaping Policy for the Social Stock Exchange
                  </button>
                </div>
              </td>

              <td className="border border-gray-300 px-4 py-3">
                Samrastha, Ground floor
              </td>
              <td className="border border-gray-300 px-4 py-3 text-orange-600">
                Innovative Financing
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">
                <div className="">
                  <button
                    className="text-[#8458B9] underline"
                    onClick={() =>
                      handleLinkClick(
                        <div className="max-w-4xl   p-1 bg-white">
                          <h2 className="text-xl font-bold mb-2">
                            Youth-Led Food Transformation Using Agroecology
                            Modules
                          </h2>
                          <p className="text-gray-700 mb-4">
                            This workshop will launch a guidebook for
                            adolescents and youth, focusing on sustainable food
                            practices and revitalising local ecosystems.
                          </p>
                          <h2 className="text-xl font-semibold mb-2">
                            Collaborator:
                          </h2>
                          <div className="grid grid-cols-2 gap-2 md:flex md:flex-row md:space-x-4">
                            <div className="px-4 py-3 w-32 h-32 md:w-40 md:h-32 flex items-center justify-center col-span-1">
                              <Image
                                src="/images/agenda/community.png"
                                alt="CMS logo"
                                width={500}
                                height={500}
                                className="w-full "
                              />
                            </div>
                            <div className=" px-4 py-3 w-40 h-32 flex items-center justify-center  col-span-1">
                              <Image
                                src="/images/agenda/farm.png"
                                alt="CMS logo"
                                width={500}
                                height={500}
                                className="w-full "
                              />
                            </div>
                            <div className=" px-4 py-3 w-40 h-32 flex items-center justify-center col-span-2 md:col-span-1">
                              <Image
                                src="/images/agenda/cms.png"
                                alt="CMS logo"
                                width={500}
                                height={500}
                                className="w-full "
                              />
                            </div>
                          </div>
                        </div>
                      )
                    }
                  >
                    Youth Led Food Transformation using Agroecology Modules |
                    Launching Guidebook for Adolescents and Youth
                  </button>
                </div>
              </td>
              <td className="border border-gray-300 px-4 py-3">
                VIP Lounge, First Floor
              </td>
              <td className="border border-gray-300 px-4 py-3 text-orange-600">
                Grounded Climate Response
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">
                <div className="">
                  <button
                    className="text-[#8458B9] underline"
                    onClick={() =>
                      handleLinkClick(
                        <div className="max-w-4xl p-1 bg-white">
                          <h2 className="text-xl font-bold mb-2">
                            AI and No Code Tools for Impact
                          </h2>
                          <p className="text-gray-700 mb-4">
                            In today’s digital landscape, integrating technology
                            into social impact projects is essential. This
                            session equips stakeholders with the knowledge to
                            harness AI and No-code tools for impactful outcomes.
                          </p>
                          <h2 className="text-xl font-semibold mb-2">
                            Collaborator:
                          </h2>
                          <div className="flex space-x-4">
                            <div className=" px-4 py-3 w-40 h-32 flex items-center justify-center">
                              <Image
                                src="/images/agenda/future.png"
                                alt="CMS logo"
                                width={500}
                                height={500}
                                className="w-full "
                              />
                            </div>

                            <div className=" px-4 py-3 w-40 h-32 flex items-center justify-center">
                              <Image
                                src="/images/agenda/cms.png"
                                alt="CMS logo"
                                width={500}
                                height={500}
                                className="w-full "
                              />
                            </div>
                          </div>
                        </div>
                      )
                    }
                  >
                    Tech for All: Leveraging AI and No Code Tools for Social
                    Change
                  </button>
                </div>
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Conference 1, Second floor
              </td>
              <td className="border border-gray-300 px-4 py-3 text-orange-600">
                Implementation - Fidelity & Quality
              </td>
            </tr>

            <tr>
              <td
                className="border border-gray-300 px-4 py-3 text-green-600"
                rowspan="3"
              >
                16:00-18:30
              </td>
              <td className="border border-gray-300 px-4 py-3">
                <button
                  className="text-[#8458B9] underline"
                  onClick={() =>
                    handleLinkClick(
                      <div className="max-w-4xl p-1 bg-white">
                        <h2 className="text-xl font-bold mb-2">
                          Integrated Climate and Health Response
                        </h2>
                        <p className="text-gray-700 mb-4">
                          A roundtable discussion on integrating climate
                          resilience with health responses to address global
                          challenges.
                        </p>
                        <h2 className="text-xl font-semibold mb-2">
                          Collaborator:
                        </h2>
                        <div className="flex space-x-4">
                          <div className=" px-4 py-3 w-40 h-32 flex items-center justify-center">
                            <Image
                              src="/images/agenda/cphc.png"
                              alt="CMS logo"
                              width={500}
                              height={500}
                              className="w-full "
                            />
                          </div>

                          <div className=" px-4 py-3 w-40 h-32 flex items-center justify-center">
                            <Image
                              src="/images/agenda/cms.png"
                              alt="CMS logo"
                              width={500}
                              height={500}
                              className="w-full "
                            />
                          </div>
                        </div>
                      </div>
                    )
                  }
                >
                  Integrated Climate and Health Response
                </button>
              </td>
              <td className="border border-gray-300 px-4 py-3">
                VIP Dining, First floor
              </td>
              <td className="border border-gray-300 px-4 py-3 text-orange-600">
                Grounded Climate Response
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">
                <div className="">
                  <button
                    className="text-[#8458B9] underline"
                    onClick={() =>
                      handleLinkClick(
                        <div className="max-w-4xl p-1 bg-white">
                          <h2 className="text-xl font-bold mb-2">
                            Transforming District Economies: Leveraging Digital
                            Public Infrastructure for Economic Inclusion of
                            MSMEs
                          </h2>
                          <p className="text-gray-700 mb-4">
                            Leveraging Digital Public Infrastructure for
                            Economic Inclusion of MSMEs - The session will
                            discuss how Digital Public Infrastructure (DPI)
                            could be leveraged for district-level economies, how
                            Business Support Organisations (BSO) can support
                            MSMEs, and how this could lead to decentralisation
                            and democratisation of economic opportunities.
                          </p>
                          <h2 className="text-xl font-semibold mb-2">
                            Collaborator:
                          </h2>
                          <div className="flex space-x-4">
                            <div className=" px-4 py-3 w-40 h-32 flex items-center justify-center">
                              <Image
                                src="/images/agenda/head.jpeg"
                                alt="CMS logo"
                                width={500}
                                height={500}
                                className="w-full "
                              />
                            </div>

                            <div className=" px-4 py-3 w-40 h-32 flex items-center justify-center">
                              <Image
                                src="/images/agenda/cms.png"
                                alt="CMS logo"
                                width={500}
                                height={500}
                                className="w-full "
                              />
                            </div>
                          </div>
                        </div>
                      )
                    }
                  >
                    Transforming District Economies: Leveraging Digital Public
                    Infrastructure for Economic Inclusion of MSMEs{" "}
                  </button>
                </div>
              </td>

              <td className="border border-gray-300 px-4 py-3">
                Conference 2, Second floor
              </td>
              <td className="border border-gray-300 px-4 py-3 text-orange-600">
                Implementation - Fidelity & Quality
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">
                <div className="">
                  <button
                    className="text-[#8458B9] underline"
                    onClick={() =>
                      handleLinkClick(
                        <div className="max-w-4xl p-1 bg-white">
                          <h2 className="text-xl font-bold mb-2">
                            The Big Picture Film Festival Curated by The Centre
                            for Strategic Communications for Public Health,
                            Swasti
                          </h2>
                          <p className="text-gray-700 mb-4">
                            Welcome to The Big Picture Film Festival Curated by
                            The Centre for Strategic Communications for Public
                            Health, Swasti. Explore a curated selection of
                            impactful films that delve into critical public
                            health issues, innovative soluons, and the voices of
                            those affected.
                          </p>
                          <h2 className="text-xl font-semibold mb-2">
                            Presenter:
                          </h2>
                          <div className="flex space-x-4">
                            <div className=" px-4 py-3 w-40 h-32 flex items-center justify-center">
                              <Image
                                src="/images/agenda/swasti.png"
                                alt="CMS logo"
                                width={500}
                                height={500}
                                className="w-full "
                              />
                            </div>

                            <div className=" px-4 py-3 w-40 h-32 flex items-center justify-center">
                              <Image
                                src="/images/agenda/cms.png"
                                alt="CMS logo"
                                width={500}
                                height={500}
                                className="w-full "
                              />
                            </div>
                          </div>
                        </div>
                      )
                    }
                  >
                    The Big Picture Film Festival Curated by The Centre for
                    Strategic Communications for Public Health, Swasti
                  </button>
                </div>
              </td>

              <td className="border border-gray-300 px-4 py-3">
                Nalanda, Ground floor
              </td>
              <td className="border border-gray-300 px-4 py-3 text-orange-600">
                Side Event
              </td>
            </tr>

            <tr>
              <td className="border border-gray-300 px-4 py-3 text-green-600 ">
                18:30-19:15
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Closing Plenary
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Bhim, Ground floor
              </td>
              <td className="border border-gray-300 px-4 py-3 text-orange-600 "></td>
            </tr>
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={modalContent}
      />
    </div>
  )
}

export default Day1
