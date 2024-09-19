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

const Day2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState(null)

  const handleLinkClick = (content) => {
    setModalContent(content)
    setIsModalOpen(true)
  }

  return (
    <div>
      <div className=" mb-10  ">
        <table className=" text-sm font-semibold lg:w-[1320px] ">
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
        <table className="  text-sm font-semibold lg:w-[1320px] mx-3">
          <thead>
            <tr>
              <th className=" lg:px-4 py-3 text-left w-[10%]"></th>
              <th className=" lg:px-4 py-3 text-left w-[60%]"></th>
              <th className=" lg:px-4 py-3 text-left w-[15%]"></th>
              <th className=" lg:px-4 py-3 text-left w-[15%]"></th>
            </tr>
          </thead>
          <tbody className="bg-white ">
            <tr>
              <td className="border border-gray-300 lg:px-4 py-3 text-green-600">
                10:30-11:15
              </td>
              <td className="border border-gray-300 lg:px-4 py-3">
                <button
                  className="text-[#8458B9] underline"
                  onClick={() =>
                    handleLinkClick(
                      <div className="max-w-4xl   p-1 bg-white">
                        <h2 className="text-xl font-bold mb-2">CSI Awards</h2>
                        <p className="text-gray-700 mb-4">
                          The CSI Innovation for Transformation Awards
                          celebrates organisations and ideas for social
                          innovation, keeping people and the planet at the
                          centre of their work.
                        </p>
                        <h2 className="text-xl font-semibold mb-2">
                          Presenter:
                        </h2>
                        <div className="grid grid-cols-2 gap-2 md:flex md:flex-row md:space-x-4">
                          <div className="lg:px-4 py-3 w-32 h-32 md:w-40 md:h-32 flex items-center justify-center col-span-1">
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
                  Opening Plenary & CSI Awards
                </button>
              </td>
              <td className="border border-gray-300 lg:px-4 py-3">
                Bhim, Ground floor
              </td>
              <td className="border border-gray-300 lg:px-4 py-3"></td>
            </tr>
            <tr>
              <td
                className="border border-gray-300 lg:px-4 py-3 text-green-600"
                rowspan="5"
              >
                11:30-13:30
              </td>
              <td className="border border-gray-300 lg:px-4 py-3">
                <button
                  className="text-[#8458B9] underline "
                  onClick={() =>
                    handleLinkClick(
                      <div className="max-w-4xl   p-1 bg-white">
                        <h2 className="text-xl font-bold mb-2">
                          Being UpFront: Unconventional Stories and Solutions
                          for a Thriving Workforce
                        </h2>
                        <p className="text-gray-700 mb-4">
                          Join us on Being UpFront for a 20-30 minute
                          conversation on Worker Wellbeing. Discover
                          unconventional approaches, hear from experts, and
                          participate in interactive discussions. Be part of the
                          conversation and learn how to support worker
                          wellbeing.
                        </p>
                        <h2 className="text-xl font-semibold mb-2">
                          Collaborator:
                        </h2>
                        <div className="flex space-x-4">
                          <div className=" lg:px-4 py-3 w-40 h-32 flex items-center justify-center">
                            <Image
                              src="/images/agenda/upfront.svg"
                              alt="Nexus of Good logo"
                              width={500}
                              height={500}
                              className="w-full"
                            />
                          </div>
                          <div className=" lg:px-4 py-3 w-40 h-32 flex items-center justify-center">
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
                  Being UpFront: Unconventional Stories and Solutions for a
                  Thriving Workforce
                </button>
              </td>
              <td className="border border-gray-300 lg:px-4 py-3">
                Bhim, Ground floor
              </td>
              <td className="border border-gray-300 lg:px-4 py-3 text-orange-600 ">
                Side Event
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 lg:px-4 py-3">
                <div className="">
                  <button
                    className="text-[#8458B9] underline"
                    onClick={() =>
                      handleLinkClick(
                        <div className="max-w-4xl p-1 bg-white">
                          <h2 className="text-xl md:text-2xl font-bold mb-2">
                            Frightening Future to Nourishing Now
                          </h2>
                          <p className="text-gray-700 mb-4  text-base">
                            An interactive workshop gathering climate leaders
                            and changemakers to discuss strategies for a
                            sustainable and hopeful future.
                          </p>
                          <h2 className="text-lg md:text-xl font-semibold mb-2">
                            Collaborator:
                          </h2>
                          <div className="grid grid-cols-2 gap-2 md:flex md:flex-row md:space-x-4">
                            <div className="lg:px-4 py-3 w-32 h-32 md:w-40 md:h-32 flex items-center justify-center col-span-1">
                              <Image
                                src="/images/agenda/community.png"
                                alt="Common logo"
                                width={500}
                                height={500}
                                className="w-full"
                              />
                            </div>
                            <div className="lg:px-4 py-3 w-32 h-32 md:w-40 md:h-32 flex items-center justify-center col-span-1">
                              <Image
                                src="/images/agenda/vartha.png"
                                alt="Vrutti logo"
                                width={500}
                                height={500}
                                className="w-full"
                              />
                            </div>
                            <div className="lg:px-4 py-3 w-32 h-32 md:w-40 md:h-32 flex items-center justify-center col-span-2 md:col-span-1">
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
                    Frightening Future to Nourishing Now
                  </button>
                </div>
              </td>
              <td className="border border-gray-300 lg:px-4 py-3">
                Samrastha, Ground floor
              </td>
              <td className="border border-gray-300 lg:px-4 py-3 text-orange-600">
                Grounded Climate Response
              </td>
            </tr>

            <tr>
              <td className="border border-gray-300 lg:px-4 py-3">
                Mainstreaming Capacity Building (Invite Only)
              </td>
              <td className="border border-gray-300 lg:px-4 py-3">
                VIP Lounge, First floor
              </td>
              <td className="border border-gray-300 lg:px-4 py-3 text-orange-600">
                Implementation - Fidelity & Quality
              </td>
            </tr>

            <tr>
              <td className="border border-gray-300 lg:px-4 py-3">
                <button
                  className="text-[#8458B9] underline"
                  onClick={() =>
                    handleLinkClick(
                      <div className="max-w-4xl p-1 bg-white">
                        <h2 className="text-xl font-bold mb-2">
                          Lessons from Scaling with Government
                        </h2>
                        <p className="text-gray-700 mb-4">
                          This World Cafe session will explore collaborations
                          with government to achieve scale, sharing lessons from
                          successful case studies.
                        </p>
                        <h2 className="text-xl font-semibold mb-2">
                          Collaborator:
                        </h2>
                        <div className="flex space-x-4">
                          <div className=" lg:px-4 py-3 w-40 h-32 flex items-center justify-center">
                            <Image
                              src="/images/agenda/nexus.png"
                              alt="Nexus of Good logo"
                              width={500}
                              height={500}
                              className="w-full"
                            />
                          </div>
                          <div className=" lg:px-4 py-3 w-40 h-32 flex items-center justify-center">
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
                  Lessons from Scaling with Government
                </button>
              </td>

              <td className="border border-gray-300 lg:px-4 py-3">
                Conference 1, Second floor
              </td>
              <td className="border border-gray-300 lg:px-4 py-3 text-orange-600">
                Implementation Fidelity & Quality
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 lg:px-4 py-3">
                <div className="mt-6">
                  <button
                    className="text-[#8458B9] underline"
                    onClick={() =>
                      handleLinkClick(
                        <div className="max-w-4xl p-1 bg-white">
                          <h2 className="text-xl md:text-2xl font-bold mb-2">
                            Demystifying Blended Finance: Philanthropic Capital
                            Solutions for Commercial Social Ventures
                          </h2>
                          <p className="text-gray-700 mb-4  text-base">
                            This session brings together donors, structuring
                            wizards, and legal experts to showcase the latest
                            funding trends for social enterprises. Through case
                            studies, it will highlight how philanthropic capital
                            can catalyse the private sector to drive
                            sustainability and scale.
                          </p>
                          <h2 className="text-lg md:text-xl font-semibold mb-2">
                            Collaborator:
                          </h2>
                          <div className="grid grid-cols-2 md:grid-cols-4">
                            <div className="lg:px-4 py-3 w-32 h-32 md:w-40 md:h-32 flex items-center justify-center  ">
                              <Image
                                src="/images/agenda/blended.png"
                                alt="Common logo"
                                width={500}
                                height={500}
                                className="w-full"
                              />
                            </div>
                            <div className="lg:px-4 py-3 w-32 h-32 md:w-40 md:h-32 flex items-center justify-center">
                              <Image
                                src="/images/agenda/waterfield.png"
                                alt="Vrutti logo"
                                width={500}
                                height={500}
                                className="w-full"
                              />
                            </div>
                            <div className="lg:px-4 py-3 w-32 h-32 md:w-40 md:h-32 flex items-center justify-center">
                              <Image
                                src="/images/agenda/gamer.png"
                                alt="CMS logo"
                                width={500}
                                height={500}
                                className="w-full"
                              />
                            </div>
                            <div className="lg:px-4 py-3 w-32 h-32 md:w-40 md:h-32 flex items-center justify-center">
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
                    Unlocking Blended Finance: Philanthropic Capital Solutions
                    for Commercial Social Ventures
                  </button>
                </div>
              </td>
              <td className="border border-gray-300 lg:px-4 py-3">
                Conference 2, Second floor
              </td>
              <td className="border border-gray-300 lg:px-4 py-3 text-orange-600">
                Innovative Financing
              </td>
            </tr>

            <tr>
              <td className="border border-gray-300 lg:px-4 py-3 text-green-600 ">
                12:30-13:30
              </td>
              <td className="border border-gray-300 lg:px-4 py-3">
                <button
                  className="text-[#8458B9] underline"
                  onClick={() =>
                    handleLinkClick(
                      <div className="max-w-4xl   p-1 bg-white">
                        <h2 className="text-xl font-bold mb-2">
                          Measuring the Impact of Shared Value Initiatives
                        </h2>
                        <p className="text-gray-700 mb-4">
                          An interactive session with corporate speakers,
                          sharing stories of change, while creating shared value
                          with social entrepreneurs.
                        </p>
                        <h2 className="text-xl font-semibold mb-2">
                          Collaborator:
                        </h2>
                        <div className="grid grid-cols-2 gap-2 md:flex md:flex-row md:space-x-4">
                          <div className="lg:px-4 py-3 w-32 h-32 md:w-40 md:h-32 flex items-center justify-center col-span-1">
                            <Image
                              src="/images/agenda/catalyst-2030.png"
                              alt="CMS logo"
                              width={500}
                              height={500}
                              className="w-full "
                            />
                          </div>
                          <div className="lg:px-4 py-3 w-32 h-32 md:w-40 md:h-32 flex items-center justify-center col-span-1">
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
                  Measuring the Impact of Shared Value Initiatives
                </button>
              </td>
              <td className="border border-gray-300 lg:px-4 py-3">
                Nalanda, Ground floor
              </td>
              <td className="border border-gray-300 lg:px-4 py-3 text-orange-600 ">
                Side Event
              </td>
            </tr>

            <tr>
              <td
                className="border border-gray-300 lg:px-4 py-3 text-green-600"
                rowspan="3"
              >
                14:30 - 17:30
              </td>
              <td className="border border-gray-300 lg:px-4 py-3">
                <button
                  className="text-[#8458B9] underline"
                  onClick={() =>
                    handleLinkClick(
                      <div className="max-w-4xl   p-1 bg-white">
                        <h2 className="text-xl font-bold mb-2">
                          Misfits Pitch
                        </h2>
                        <p className="text-gray-700 mb-4">
                          The fourth edition of Misfits Global provides a
                          platform for social entrepreneurs and innovators
                          across Asia to showcase solutions and connect with key
                          stakeholders. This pitch competition will highlight
                          impactful ideas and foster collaboration in the social
                          impact ecosystem.
                        </p>
                        <h2 className="text-xl font-semibold mb-2">
                          Collaborator:
                        </h2>
                        <div className="grid grid-cols-2 gap-2 md:flex md:flex-row md:space-x-4">
                          <div className="lg:px-4 py-3 w-32 h-32 md:w-40 md:h-32 flex items-center justify-center col-span-1">
                            <Image
                              src="/images/agenda/mistfits.jpg"
                              alt="CMS logo"
                              width={500}
                              height={500}
                              className="w-full "
                            />
                          </div>
                          <div className="lg:px-4 py-3 w-32 h-32 md:w-40 md:h-32 flex items-center justify-center col-span-1">
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
                  Misfits Pitch
                </button>
              </td>

              <td className="border border-gray-300 lg:px-4 py-3">
                Samrastha, Ground floor
              </td>
              <td className="border border-gray-300 lg:px-4 py-3 text-orange-600 ">
                Side Event
              </td>
            </tr>

            <tr>
              <td className="border border-gray-300 lg:px-4 py-3">
                <div className="">
                  <button
                    className="text-[#8458B9] underline"
                    onClick={() =>
                      handleLinkClick(
                        <div className="max-w-4xl   p-1 bg-white">
                          <h2 className="text-xl font-bold mb-2">
                            Global Warming - A Systems Mapping Game
                          </h2>
                          <p className="text-gray-700 mb-4">
                            This interactive group game will delve into the
                            complexities of global warming, providing
                            participants with a hands-on learning experience.
                          </p>
                          <h2 className="text-xl font-semibold mb-2">
                            Collaborator:
                          </h2>
                          <div className="grid grid-cols-2 gap-2 md:flex md:flex-row md:space-x-4">
                            <div className="lg:px-4 py-3 w-32 h-32 md:w-40 md:h-32 flex items-center justify-center col-span-1">
                              <Image
                                src="/images/agenda/si.png"
                                alt="CMS logo"
                                width={500}
                                height={500}
                                className="w-full "
                              />
                            </div>
                            <div className="lg:px-4 py-3 w-32 h-32 md:w-40 md:h-32 flex items-center justify-center col-span-1">
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
                    Global Warming - A Systems Mapping Game
                  </button>
                </div>
              </td>

              <td className="border border-gray-300 lg:px-4 py-3">
                VIP Lounge, First floor
              </td>
              <td className="border border-gray-300 lg:px-4 py-3 text-orange-600">
                Grounded Climate Response
              </td>
            </tr>

            <tr>
              <td className="border border-gray-300 lg:px-4 py-3  ">
                <div className="">
                  <button
                    className="text-[#8458B9] underline"
                    onClick={() =>
                      handleLinkClick(
                        <div className="max-w-4xl   p-1 bg-white">
                          <h2 className="text-xl font-bold mb-2">
                            Herding Cats: Making Collaborations and Partnerships
                            Work
                          </h2>
                          <p className="text-gray-700 mb-4">
                            Partnerships and collaborations are essential for
                            amplifying social impact. However, they are fraught
                            with challenges like misaligned goals, communication
                            barriers and resource constraints. Join this
                            engaging session to explore the complexities of
                            forming and managing effective collaborations.
                          </p>
                          <h2 className="text-xl font-semibold mb-2">
                            Collaborator:
                          </h2>
                          <div className="grid grid-cols-2 gap-2 md:flex md:flex-row md:space-x-4">
                            <div className="lg:px-4 py-3 w-32 h-32 md:w-40 md:h-32 flex items-center justify-center col-span-1">
                              <Image
                                src="/images/agenda/phicus.png"
                                alt="CMS logo"
                                width={500}
                                height={500}
                                className="w-full "
                              />
                            </div>
                            <div className="lg:px-4 py-3 w-32 h-32 md:w-40 md:h-32 flex items-center justify-center col-span-1">
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
                    Herding Cats: Making Collaborations and Partnerships Work
                  </button>
                </div>
              </td>

              <td className="border border-gray-300 lg:px-4 py-3">
                Conference 1, Second floor
              </td>
              <td className="border border-gray-300 lg:px-4 py-3 text-orange-600">
                Implementation Fidelity & Quality
              </td>
            </tr>

            <tr>
              <td
                className="border-gray-300 border lg:px-4 py-3 text-green-600"
                rowspan="2"
              >
                12:30-14:30
              </td>
              <td className="border  border-gray-300 lg:px-4 py-3">
                Lunch at VIP Dining (Available from 12:30 PM - 2:30 PM)
              </td>
              <td className="border border-gray-300 lg:px-4 py-3">
                VIP Dining, First floor
              </td>
              <td className="border border-red-300 lg:px-4 py-3"></td>
            </tr>
            <tr>
              <td className="border border-gray-300 lg:px-4 py-3">
                Tea/Coffee (Available from 9:30 AM - 6:00 PM, Snacks served
                twice AM and PM)
              </td>
              <td className="border border-gray-300 lg:px-4 py-3">
                Foyer, First floor
              </td>
              <td className="border border-gray-300 lg:px-4 py-3"></td>
            </tr>

            <tr>
              <td className="border border-gray-300 lg:px-4 py-3 text-green-600 ">
                14:30-15:00
              </td>
              <td className="border border-gray-300 lg:px-4 py-3">
                <button
                  className="text-[#8458B9] underline"
                  onClick={() =>
                    handleLinkClick(
                      <div className="max-w-4xl p-1 bg-white">
                        <h2 className="text-xl md:text-2xl font-bold mb-2">
                          Precision Action for Climate and Health - Launch with
                          IMD
                        </h2>
                        <p className="text-gray-700 mb-4 text-base">
                          This session explores innovative approaches to
                          financing value chains through a Payment for Ecosystem
                          Services model. Emphasising small and marginal
                          farmers, particularly women, it focuses on promoting
                          ecological restoration and maintaining ecosystem
                          balance.
                        </p>
                        <h2 className="text-lg md:text-xl font-semibold mb-2">
                          Collaborator:
                        </h2>
                        <div className="grid grid-cols-2 gap-2 md:flex md:flex-row md:space-x-4">
                          <div className="lg:px-4 py-3 w-32 h-32 md:w-40 md:h-32 flex items-center justify-center col-span-1">
                            <Image
                              src="/images/agenda/swasti.png"
                              alt="Common logo"
                              width={500}
                              height={500}
                              className="w-full"
                            />
                          </div>
                          <div className="lg:px-4 py-3 w-32 h-32 md:w-40 md:h-32 flex items-center justify-center col-span-1">
                            <Image
                              src="/images/agenda/imd.jpg"
                              alt="Vrutti logo"
                              width={500}
                              height={500}
                              className="w-full"
                            />
                          </div>
                          <div className="lg:px-4 py-3 w-32 h-32 md:w-40 md:h-32 flex items-center justify-center col-span-2 md:col-span-1">
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
                  Precision Action for Climate and Health - Launch with IMD
                </button>
              </td>
              <td className="border border-gray-300 lg:px-4 py-3">
                <div>Bhim, Ground floor </div>
              </td>
              <td className="border border-gray-300 lg:px-4 py-3 text-orange-600 ">
                <div>Side Event</div>
              </td>
            </tr>

            <tr>
              <td className="border border-gray-300 lg:px-4 py-3 text-green-600 ">
                14:30-17:30
              </td>
              <td className="border border-gray-300 lg:px-4 py-3">
                <button
                  className="text-[#8458B9] underline"
                  onClick={() =>
                    handleLinkClick(
                      <div className="max-w-4xl   p-1 bg-white">
                        <h2 className="text-xl font-bold mb-2">
                          Wicked Solutions Show
                        </h2>
                        <p className="text-gray-700 mb-4">
                          Tune in to &apos;The Wicked Solutions Show&apos;
                          hosted by Shiv Kumar, Co-founder of the Catalyst
                          Foundation . This curiosity-fueled talk show features
                          changemakers and visionaries in the development sector
                          who are redefining the future of work through their
                          innovative and impactful solutions to complex, wicked
                          problems.
                        </p>
                        <h2 className="text-xl font-semibold mb-2">
                          Collaborator:
                        </h2>
                        <div className="grid grid-cols-2 gap-2 md:flex md:flex-row md:space-x-4">
                          <div className="lg:px-4 py-3 w-32 h-32 md:w-40 md:h-32 flex items-center justify-center col-span-1">
                            <Image
                              src="/images/agenda/catalyst.png"
                              alt="CMS logo"
                              width={500}
                              height={500}
                              className="w-full "
                            />
                          </div>
                          <div className="lg:px-4 py-3 w-32 h-32 md:w-40 md:h-32 flex items-center justify-center col-span-1">
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
                  Wicked Solutions Show
                </button>
              </td>
              <td className="border border-gray-300 lg:px-4 py-3">
                <div>Bhim, Ground floor </div>
              </td>
              <td className="border border-gray-300 lg:px-4 py-3 text-orange-600 ">
                <div>Side Event</div>
              </td>
            </tr>

            <tr>
              <td className="border border-gray-300 lg:px-4 py-3 text-green-600 ">
                14:30-16:00
              </td>
              <td className="border border-gray-300 lg:px-4 py-3  ">
                Market Access for Farmers – Effective Institutional Framework to
                Make the Solution Work at Scale; Going<p className="mb-0"></p>
                Beyond Fitting Solutions Within the Framework
              </td>

              <td className="border border-gray-300 lg:px-4 py-3">
                Conference 2, Second floor
              </td>
              <td className="border border-gray-300 lg:px-4 py-3 text-orange-600 ">
                <div> Innovative Financing</div>
              </td>
            </tr>

            <tr>
              <td className="border border-gray-300 lg:px-4 py-3 text-green-600 ">
                14:30-16:00
              </td>
              <td className="border border-gray-300 lg:px-4 py-3 ">
                Data for Decisions and Stories
              </td>

              <td className="border border-gray-300 lg:px-4 py-3">
                Nalanda, Ground floor
              </td>
              <td className="border border-gray-300 lg:px-4 py-3 text-orange-600 ">
                <div> Implementation Fidelity & Quality</div>
              </td>
            </tr>

            <tr>
              <td className="border border-gray-300 lg:px-4 py-3 text-green-600 ">
                16:00-17:30
              </td>
              <td className="border border-gray-300 lg:px-4 py-3">
                <button
                  className="text-[#8458B9] underline"
                  onClick={() =>
                    handleLinkClick(
                      <div className="max-w-4xl   p-1 bg-white">
                        <h2 className="text-xl font-bold mb-2">
                          Micro-Equity: Boosting Growth for Women Micro and
                          Nano-Entrepreneurs
                        </h2>
                        <p className="text-gray-700 mb-4">
                          This panel discussion along with practitioners and
                          funders will increase awareness among participants
                          about the challenges and opportunities for women in
                          entrepreneurship and how micro equity can tackle these
                          challenges and build consensus on actionable
                          strategies to address financing of rural women’s
                          entrepreneurship.
                        </p>
                        <h2 className="text-xl font-semibold mb-2">
                          Collaborator:
                        </h2>
                        <div className="grid grid-cols-2 gap-2 md:flex md:flex-row md:space-x-4">
                          <div className="lg:px-4 py-3 w-32 h-32 md:w-40 md:h-32 flex items-center justify-center col-span-1">
                            <Image
                              src="/images/agenda/buzzwomen.jpg"
                              alt="CMS logo"
                              width={500}
                              height={500}
                              className="w-full "
                            />
                          </div>
                          <div className="lg:px-4 py-3 w-32 h-32 md:w-40 md:h-32 flex items-center justify-center col-span-1">
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
                  Micro-Equity: Boosting Growth for Women Micro and
                  Nano-Entrepreneurs
                </button>
              </td>

              <td className="border border-gray-300 lg:px-4 py-3">
                Nalanda, Ground floor
              </td>
              <td className="border border-gray-300 lg:px-4 py-3 text-orange-600">
                Innovative Financing
              </td>
            </tr>

            <tr>
              <td className="border border-gray-300 lg:px-4 py-3 text-green-600 ">
                17:30-18:15
              </td>
              <td className="border border-gray-300 lg:px-4 py-3 ">
                Closing Plenary
              </td>

              <td className="border border-gray-300 lg:px-4 py-3">
                Bhim, Ground floor
              </td>
              <td className="border border-gray-300 lg:px-4 py-3 text-orange-600 ">
                <div></div>
              </td>
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

export default Day2
