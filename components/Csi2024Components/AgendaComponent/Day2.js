import React from "react"

const Day2 = () => {
  return (
    <div>
      <div className="p-4 ">
        <div className="container mx-auto mt-5  ">
          <div className="flex  flex-row lg:flex-col gap-4 ">
            <div className="flex-col rounded-lg bg-gradient-to-r from-[#2CAA90] to-[#37A2B4] p-4 w-1/10 ">
              <p className="text-base sm:text-xl   text-white text-center">
                Time
              </p>
            </div>

            <div className="flex-col rounded-lg  bg-gradient-to-r from-[#639AD1] to-[#7E64BE]  p-4 w-3/5">
              <p className="text-base sm:text-xl text-white  text-center">
                Event
              </p>
            </div>
            <div className="flex-col rounded-lg  bg-gradient-to-r from-[#B766B1] to-[#DA6372]   p-4 w-1/5">
              <p className="text-base sm:text-xl  text-white  text-center">
                Location
              </p>
            </div>
            <div className="flex-col rounded-lg  bg-gradient-to-r from-[#F1B761] to-[#F4D077]  p-4    w-1/5 ">
              <p className="text-base sm:text-xl  text-white  text-center">
                Theam
              </p>
            </div>
          </div>
        </div>
        {/* ROW 1 */}

        <div className="mt-5 ">
          <div className="flex flex-row bg-white my-4 shadow rounded-lg px-2 ">
            <div className="w-1/10 border-r border-dotted border-blue-300">
              <div className="p-4 py-3">
                <p className=" text-green-600 mb-0 text-xs sm:text-base ">
                  10:30-11:15
                </p>
              </div>
            </div>
            <div className="w-3/5 border-r border-dotted border-blue-300">
              <div className="p-4 py-3">
                <p className="   mb-0 text-xs sm:text-base ">CSI Awards</p>
              </div>
            </div>
            <div className="w-1/5 border-r border-dotted border-blue-300">
              <div className="p-4 py-3">
                <p className=" mb-0 text-xs sm:text-base ">Bhim</p>
              </div>
            </div>
            <div className="w-1/5">
              <div className="p-4 py-3">
                <p className="text-xs sm:text-base  mb-0"></p>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="container mx-auto mt-5 ">
          <div className="flex flex-row bg-white my-4 shadow-lg rounded-lg px-2">
            <div className="w-1/10 border-r border-dotted border-blue-300 ">
              <div className="flex items-center justify-center h-full border-b border-dotted border-blue-300">
                <div className="p-4 py-3 ">
                  <p className="text-xs sm:text-base  text-green-600 mb-0">
                    11:30-13:30
                  </p>
                </div>
              </div>
            </div>

            <div className="w-3/5 border-r border-dotted border-blue-300">
              <div className="p-4 py-3 border-b border-dotted border-blue-300">
                <p className="text-xs sm:text-base  mb-0">
                  Frightening Futures. Nourishing Now
                </p>
              </div>
              <div className="p-4 py-3 border-b border-dotted border-blue-300">
                <p className="text-xs sm:text-base  mb-0">
                  Measuring the Impact of Shared Value Initiatives
                </p>
              </div>
              <div className="p-4 py-3 border-b border-dotted border-blue-300">
                <p className="text-xs sm:text-base  mb-0">
                  Mainstreaming Capacity Building (Invite Only)
                </p>
              </div>
              <div className="p-4 py-3 border-b border-dotted border-blue-300">
                <p className="text-xs sm:text-base  mb-0">
                  Lessons from Scaling with Government
                </p>
              </div>

              <div className="p-4 py-3">
                <p className="text-xs sm:text-base  mb-0">
                  Demystifying Blended Finance : Philanthropic Capital Solutions
                  for Commercial Social Ventures
                </p>
              </div>
            </div>

            <div className="w-1/5 border-r border-dotted border-blue-300">
              <div className="p-4 py-3 border-b border-dotted border-blue-300">
                <p className="text-xs sm:text-base  mb-0">Samrastha</p>
              </div>
              <div className="p-4 py-3  border-b border-dotted border-blue-300">
                <p className="text-xs sm:text-base  mb-0">Nalanda</p>
              </div>
              <div className="p-4 py-3 border-b border-dotted border-blue-300">
                <p className="text-xs sm:text-base  mb-0">Conference 1</p>
              </div>
              <div className="p-4 py-3 border-b border-dotted border-blue-300">
                <p className="text-xs sm:text-base  mb-0">VIP Lounge</p>
              </div>

              <div className="p-4 py-3">
                <p className="text-xs sm:text-base  mb-0">Conference 2</p>
              </div>
            </div>

            <div className="w-1/5">
              <div className="p-4 py-3 border-b border-dotted border-blue-300">
                <p className="text-xs sm:text-base  text-orange-600 mb-0">
                  Grounded Climate Response
                </p>
              </div>

              <div className="p-4 py-3 border-b border-dotted border-blue-300">
                <p className="text-xs sm:text-base  text-orange-600 mb-0">
                  Side Event
                </p>
              </div>
              <div className="p-4 py-1 border-b border-dotted border-blue-300">
                <p className="text-xs sm:text-base  text-orange-600 mb-0">
                  Implementation - Fidelity & Quality
                </p>
              </div>
              <div className="p-4 py-1 border-b border-dotted border-blue-300">
                <p className="text-xs sm:text-base  text-orange-600 mb-0">
                  Implementation - Fidelity & Quality
                </p>
              </div>
              <div className="p-4 py-3">
                <p className="text-xs sm:text-base  text-orange-600 mb-0">
                  Innovative Financing
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 3*/}
        <div className="mt-5 ">
          <div className="flex flex-row bg-white my-4 shadow rounded-lg px-2">
            <div className="w-1/10 border-r border-dotted border-blue-300">
              <div className="p-4 py-3">
                <p className=" text-green-600 mb-0 text-xs sm:text-base ">
                  11:30-17:30
                </p>
              </div>
            </div>
            <div className="w-3/5 border-r border-dotted border-blue-300">
              <div className="p-4 py-3">
                <p className="   mb-0 text-xs sm:text-base ">
                  Wicked Solutions Show
                </p>
              </div>
            </div>
            <div className="w-1/5 border-r border-dotted border-blue-300">
              <div className="p-4 py-3">
                <p className=" mb-0 text-xs sm:text-base ">Bhim</p>
              </div>
            </div>
            <div className="w-1/5">
              <div className="p-4 py-3">
                <p className="text-orange-600 mb-0 text-xs sm:text-base ">
                  Side Event
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 4 */}
        <div className="container mx-auto mt-5 ">
          <div className="flex flex-row bg-white my-4 shadow-lg rounded-lg px-2 lg:col-span-12">
            <div className="w-1/10 justify-center flex flex-col border-r border-dotted border-blue-300">
              <div className="p-4 py-3">
                <p className="text-xs sm:text-base  text-green-500 mb-0">
                  12:30-13:30
                </p>
              </div>
            </div>
            <div className="w-3/5 border-r border-dotted border-blue-300">
              <div className="p-4 py-3 border-b border-dotted border-blue-300">
                <p className="text-xs sm:text-base  mb-0">
                  Lunch at VIP Dining (Available from 12:30 PM - 2:30 PM)
                </p>
              </div>
              <div className="p-4 py-3">
                <p className="text-xs sm:text-base  mb-0">
                  Tea/Coffee (Available from 9:30 AM - 6:00 PM, Snacks served
                  twice AM and PM)
                </p>
              </div>
            </div>
            <div className="w-1/5 border-r border-dotted border-blue-300">
              <div className="p-4 py-3 border-b border-dotted border-blue-300">
                <p className="text-xs sm:text-base  mb-0">VIP Dining</p>
              </div>
              <div className="p-4 py-3">
                <p className="text-xs sm:text-base  mb-0">Foyer</p>
              </div>
            </div>
            <div className="w-1/5">
              <div className="p-4 py-3">
                <p className="text-xs sm:text-base  mb-0"></p>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 5*/}
        <div className="container mx-auto mt-5 ">
          <div className="flex flex-row bg-white my-4 shadow-lg rounded-lg px-2 lg:col-span-12">
            <div className="w-1/10 justify-center flex flex-col border-r border-dotted  border-blue-300">
              <div className="p-4 py-3">
                <p className="text-xs sm:text-base  text-green-500 mb-0">
                  14:30-16:00
                </p>
              </div>
            </div>
            <div className="w-3/5 border-r border-dotted border-blue-300">
              <div className="p-4 py-3 border-b border-dotted">
                <p className="text-xs sm:text-base  mb-0">
                  Bridging the Gap: Collaborating between Development Sector and
                  Government
                </p>
              </div>
              <div className="p-4 py-3">
                <p className="text-xs sm:text-base  mb-0">
                  Accelerating FPOs to Thriving Business Organisations
                </p>
              </div>
            </div>
            <div className="w-1/5 border-r border-dotted">
              <div className="p-4 py-3 border-b border-dotted border-blue-300">
                <p className="text-xs sm:text-base  mb-0">Conference 1</p>
              </div>

              <div className="p-4 py-3">
                <p className="text-xs sm:text-base  mb-0">Conference 2</p>
              </div>
            </div>
            <div className="w-1/5 text-agenda-orange">
              <div className="p-4 py-1 border-b border-dotted border-blue-300">
                <p className="text-xs sm:text-base  mb-0 text-orange-600">
                  Implementation -Fidelity & Quality
                </p>
              </div>
              <div className="p-4 py-3">
                <p className="text-xs sm:text-base  mb-0 text-orange-600">
                  Innovative Financing
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 6 */}
        <div className="container mx-auto mt-5 ">
          <div className="flex flex-row bg-white my-4 shadow-lg rounded-lg px-2 lg:col-span-12">
            <div className="w-1/10 justify-center flex flex-col border-r border-dotted border-blue-300">
              <div className="p-4 py-3">
                <p className="text-xs sm:text-base  text-green-500 mb-0">
                  14:30-17:30
                </p>
              </div>
            </div>
            <div className="w-3/5 border-r border-dotted border-blue-300">
              <div className="p-4 py-3 border-b border-dotted border-blue-300">
                <p className="text-xs sm:text-base  mb-0">
                  Data for Decisions and Stories
                </p>
              </div>
              <div className="p-4 py-3 border-b border-dotted border-blue-300">
                <p className="text-xs sm:text-base  mb-0">Misfits Pitch</p>
              </div>
              <div className="p-4 py-3">
                <p className="text-xs sm:text-base  mb-0">
                  Global Warming - A Systems Mapping Game
                </p>
              </div>
            </div>
            <div className="w-1/5 border-r border-dotted border-blue-300">
              <div className="p-4 py-3 border-b border-dotted border-blue-300">
                <p className="text-xs sm:text-base  mb-0">Nalanda</p>
              </div>
              <div className="p-4 py-3 border-b border-dotted border-blue-300">
                <p className="text-xs sm:text-base  mb-0">Samrastha</p>
              </div>
              <div className="p-4 py-3">
                <p className="text-xs sm:text-base  mb-0">VIP Lounge</p>
              </div>
            </div>
            <div className="w-1/5 text-agenda-orange">
              <div className="p-4 py-3 border-b border-dotted border-blue-300">
                <p className="text-xs sm:text-base  mb-0 text-orange-600">
                  Implementation - Fidelity & Quality
                </p>
              </div>
              <div className="p-4 py-3 border-b border-dotted border-blue-300">
                <p className="text-xs sm:text-base text-orange-600  mb-0">
                  Side Event
                </p>
              </div>
              <div className="p-4 py-3">
                <p className="text-xs sm:text-base text-orange-600  mb-0">
                  Grounded Climate Response
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ROW 7*/}
        <div className="container mx-auto mt-5 ">
          <div className="flex flex-row bg-white my-4 shadow-lg rounded-lg px-2 lg:col-span-12">
            <div className="w-1/10 justify-center flex flex-col border-r border-dotted  border-blue-300">
              <div className="p-4 py-3">
                <p className="text-xs sm:text-base  text-green-500 mb-0">
                  16:00-17:30
                </p>
              </div>
            </div>
            <div className="w-3/5 border-r border-dotted border-blue-300">
              <div className="p-4 py-4 border-b border-dotted">
                <p className="text-xs sm:text-base  mb-0">
                  Integrated Climate and Health Roundtable
                </p>
              </div>
              <div className="p-4 py-3">
                <p className="text-xs sm:text-base  mb-0">
                  Herding Cats: Making Collaborations and Partnerships Work
                </p>
              </div>
            </div>
            <div className="w-1/5 border-r border-dotted">
              <div className="p-4 py-4 border-b border-dotted border-blue-300">
                <p className="text-xs sm:text-base  mb-0">Conference 1</p>
              </div>

              <div className="p-4 py-3">
                <p className="text-xs sm:text-base  mb-0">Conference 2</p>
              </div>
            </div>
            <div className="w-1/5 text-agenda-orange">
              <div className="p-4  border-b border-dotted border-blue-300">
                <p className="text-xs sm:text-base  mb-0 text-orange-600">
                  Grounded Climate Response
                </p>
              </div>
              <div className="p-4 py-3">
                <p className="text-xs sm:text-base  mb-0 text-orange-600">
                  Implementation Fidelity & Quality
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*ROW 8 */}
        <div className="container mx-auto mt-5  ">
          <div className="flex flex-row bg-white my-4 shadow-lg rounded-lg px-2">
            <div className="w-1/10 border-r border-dotted border-blue-300">
              <div className="p-4 py-3 ">
                <p className="text-xs sm:text-base  text-green-500 mb-0">
                  17:30-18:15
                </p>
              </div>
            </div>
            <div className="w-3/5 border-r border-dotted border-blue-300">
              <div className="p-4 py-3">
                <p className="text-xs sm:text-base  mb-0">Closing Plenary</p>
              </div>
            </div>
            <div className="w-1/5  border-r border-dotted border-blue-300">
              <div className="p-4 py-3">
                <p className="text-xs sm:text-base  mb-0">Bhim</p>
              </div>
            </div>
            <div className="w-1/5">
              <div className="p-4 py-3">
                <p className="text-xs sm:text-base  mb-0"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Day2
