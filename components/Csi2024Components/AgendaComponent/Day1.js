import React from "react"

const Day1 = () => {
  return (
    <div>
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

          <div class="mt-5 flex flex-col">
            <div class="flex flex-row bg-white my-4 shadow rounded-lg px-2">
              <div class="w-1/10 border-r border-dotted border-blue-300">
                <div class="p-4 py-3">
                  <p class="text-green-600 mb-0 text-xs sm:text-base">
                    10:30-12:00
                  </p>
                </div>
              </div>
              <div class="w-3/5 border-r border-dotted border-blue-300">
                <div class="p-4 py-3">
                  <p class="mb-0 text-xs sm:text-base">Inaugural</p>
                </div>
              </div>
              <div class="w-1/5 border-r border-dotted border-blue-300">
                <div class="p-4 py-3">
                  <p class="mb-0 text-xs sm:text-base">Bhim</p>
                </div>
              </div>
              <div class="w-1/5">
                <div class="p-4 py-3">
                  <p class="text-xs sm:text-base mb-0"></p>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="container mx-auto mt-5 ">
            <div class="flex flex-row bg-white my-4 shadow-lg rounded-lg px-2">
              <div class="w-1/10 border-r border-dotted border-blue-300">
                <div class="flex items-center justify-center h-full border-b border-dotted border-blue-300">
                  <div class="p-4 py-3">
                    <p class="text-xs sm:text-base text-green-600 mb-0">
                      12:00-13:30
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-3/5 border-r border-dotted border-blue-300">
                <div class="p-4 py-3 border-b border-dotted border-blue-300">
                  <p class="text-xs sm:text-base mb-0">
                    Centre for Public Health Comms: Film Showcase
                  </p>
                </div>
                <div class="p-4 py-3 border-b border-dotted border-blue-300">
                  <p class="text-xs sm:text-base mb-0">Wicked Solutions Show</p>
                </div>
                <div class="p-4 py-3 border-b border-dotted border-blue-300">
                  <p class="text-xs sm:text-base mb-0">
                    Reimagining Implementation @Scale
                  </p>
                </div>
                <div class="p-4 py-3 border-b border-dotted border-blue-300">
                  <p class="text-xs sm:text-base mb-0">
                    Demystifying Outcome-Based Finance (OBF): A Practical Guide
                    to and AMA Session
                  </p>
                </div>
                <div class="p-4 py-3 border-b border-dotted border-blue-300">
                  <p class="text-xs sm:text-base mb-0">
                    Private Financing for Decarbonization: Community Based
                    Ecosystem Services for Commons
                  </p>
                </div>
              </div>
              <div class="w-1/5 border-r border-dotted border-blue-300">
                <div class="p-4 py-3 border-b border-dotted border-blue-300">
                  <p class="text-xs sm:text-base mb-0">Nalanda</p>
                </div>
                <div class="p-4 py-3 border-b border-dotted border-blue-300">
                  <p class="text-xs sm:text-base mb-0">Bhim</p>
                </div>
                <div class="p-4 py-5 border-b border-dotted border-blue-300">
                  <p class="text-xs sm:text-base mb-0">Conference 1</p>
                </div>
                <div class="p-4 py-3 border-b border-dotted border-blue-300">
                  <p class="text-xs sm:text-base mb-0">VIP Lounge</p>
                </div>
                <div class="p-4 py-3">
                  <p class="text-xs sm:text-base mb-0">Samrastha</p>
                </div>
              </div>
              <div class="w-1/5">
                <div class="p-4 py-3 border-b border-dotted border-blue-300">
                  <p class="text-xs sm:text-base text-orange-600 mb-0">
                    Side Event
                  </p>
                </div>
                <div class="p-4 py-3 border-b border-dotted border-blue-300">
                  <p class="text-xs sm:text-base text-orange-600 mb-0">
                    Side Event
                  </p>
                </div>
                <div class="lg:p-4 lg:py-3 border-b border-dotted border-blue-300">
                  <p class="text-xs sm:text-base text-orange-600 mb-0">
                    Implementation - Fidelity & Quality
                  </p>
                </div>
                <div class="p-4 py-3 border-b border-dotted border-blue-300">
                  <p class="text-xs sm:text-base text-orange-600 mb-0">
                    Innovative Financing
                  </p>
                </div>
                <div class="p-4 py-3">
                  <p class="text-xs sm:text-base text-orange-600 mb-0">
                    Innovative Financing
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* row 3 */}
          <div className="mt-5 ">
            <div className="flex flex-row bg-white my-4 shadow rounded-lg px-2">
              <div className="w-1/10 border-r border-dotted border-blue-300">
                <div className="p-4 py-3">
                  <p className=" text-green-600 mb-0 text-xs sm:text-base ">
                    12:00-16:00
                  </p>
                </div>
              </div>
              <div className="w-3/5 border-r border-dotted border-blue-300">
                <div className="p-4 py-3">
                  <p className="   mb-0 text-xs sm:text-base ">
                    Procure with Purpose: Building a Coalition for Social
                    Procurement in India
                  </p>
                </div>
              </div>
              <div className="w-1/5 border-r border-dotted border-blue-300">
                <div className="p-4 py-3">
                  <p className=" mb-0 text-xs sm:text-base ">Conference 2</p>
                </div>
              </div>
              <div className="w-1/5">
                <div className="p-4 py-3">
                  <p className="text-xs sm:text-base  mb-0 text-orange-600">
                    Side Event
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 4*/}
          <div className="container mx-auto mt-5 ">
            <div className="flex flex-row bg-white my-4 shadow-lg rounded-lg px-2 lg:col-span-12">
              <div className="w-1/10 justify-center flex flex-col border-r border-dotted border-blue-300">
                <div className="p-4 py-3">
                  <p className="text-xs sm:text-base  text-green-600 mb-0">
                    13:30-14:30
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

          {/* row 5 */}
          <div className="mt-5 ">
            <div className="flex flex-row bg-white my-4 shadow rounded-lg px-2">
              <div className="w-1/10 border-r border-dotted border-blue-300">
                <div className="p-4 py-3">
                  <p className=" text-green-600 mb-0 text-xs sm:text-base ">
                    14:30-16:00
                  </p>
                </div>
              </div>
              <div className="w-3/5 border-r border-dotted border-blue-300">
                <div className="p-4 py-3">
                  <p className="   mb-0 text-xs sm:text-base ">
                    Social Protection Coalition Launch
                  </p>
                </div>
              </div>
              <div className="w-1/5 border-r border-dotted border-blue-300">
                <div className="p-4 py-3">
                  <p className=" mb-0 text-xs sm:text-base ">Nalanda</p>
                </div>
              </div>
              <div className="w-1/5">
                <div className="p-4 py-3">
                  <p className="text-xs sm:text-base  mb-0 text-orange-600">
                    Implementation - Fidelity & Quality
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 6*/}
          <div className="container mx-auto mt-5 ">
            <div className="flex flex-row bg-white my-4 shadow-lg rounded-lg px-2 lg:col-span-12">
              <div className="w-1/10 justify-center flex flex-col border-r border-dotted  border-blue-300">
                <div className="p-4 py-3">
                  <p className="text-xs sm:text-base  text-green-500 mb-0">
                    14:30-18:30
                  </p>
                </div>
              </div>
              <div className="w-3/5 border-r border-dotted border-blue-300">
                <div className="p-4 py-6 border-b border-dotted border-blue-300">
                  <p className="text-xs sm:text-base  mb-0">
                    Building Resilience for VPs - Systemic Risk and Response
                    Perspective
                  </p>
                </div>
                <div className="p-4 py-6 border-b border-dotted">
                  <p className="text-xs sm:text-base  mb-0">
                    Accelerating Implementation and Shaping Policy for the
                    Social Stock Exchange
                  </p>
                </div>
                <div className="p-4 py-5 border-b border-dotted border-blue-300">
                  <p className="text-xs sm:text-base  mb-0">
                    Youth Led Food Transformation using Agroecology Modules |
                    Launching Guidebook for Adolescents and Youth
                  </p>
                </div>
                <div className="p-4 py-6 ">
                  <p className="text-xs sm:text-base  mb-0">
                    Al and No Code Tools for Impact
                  </p>
                </div>
              </div>
              <div className="w-1/5 border-r border-dotted">
                <div className="p-4 py-6 border-b border-dotted border-blue-300">
                  <p className="text-xs sm:text-base  mb-0">Bhim</p>
                </div>
                <div className="p-4 py-6 border-b border-dotted border-blue-300">
                  <p className="text-xs sm:text-base  mb-0">Samrastha </p>
                </div>
                <div className="p-4 py-6 border-b border-dotted border-blue-300">
                  <p className="text-xs sm:text-base  mb-0">VIP Lounge </p>
                </div>
                <div className="p-4 py-10 ">
                  <p className="text-xs sm:text-base  mb-0">Conference 1 </p>
                </div>
              </div>

              <div className="w-1/5 text-agenda-orange">
                <div className="p-4 py-6 border-b border-dotted border-blue-300">
                  <p className="text-xs sm:text-base  text-orange-600 mb-0">
                    Grounded Climate Response
                  </p>
                </div>
                <div className="p-4 py-6 border-b border-dotted border-blue-300">
                  <p className="text-xs sm:text-base text-orange-600 mb-0 ">
                    Innovative Financing
                  </p>
                </div>
                <div className="p-4 py-6 border-b border-dotted border-blue-300">
                  <p className="text-xs sm:text-base text-orange-600 mb-0">
                    Grounded Climate Response
                  </p>
                </div>
                <div className="p-4 py-3">
                  <p className="text-xs sm:text-base text-orange-600  mb-0">
                    Implementation - Fidelity & Quality
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 7 */}
          <div className="container mx-auto mt-5 ">
            <div className="flex flex-row bg-white my-4 shadow-lg rounded-lg px-2 lg:col-span-12">
              <div className="w-1/10 justify-center flex flex-col border-r border-dotted border-blue-300">
                <div className="p-4 py-3">
                  <p className="text-xs sm:text-base  text-green-600 mb-0">
                    16:00-18:30
                  </p>
                </div>
              </div>
              <div className="w-3/5 border-r border-dotted border-blue-300">
                <div className="p-4 py-5 border-b border-dotted border-blue-300">
                  <p className="text-xs sm:text-base  mb-0">
                    Sustained and Effective Market Access for Micro and Small
                    Enterprises (MSEs)
                  </p>
                </div>
                <div className="p-4 py-3">
                  <p className="text-xs sm:text-base  mb-0">
                    Centre for Public Health Comms: Film Showcase
                  </p>
                </div>
              </div>
              <div className="w-1/5 border-r border-dotted border-blue-300">
                <div className="p-4 py-5 border-b border-dotted border-blue-300">
                  <p className="text-xs sm:text-base  mb-0">Conference 2</p>
                </div>
                <div className="p-4 py-3">
                  <p className="text-xs sm:text-base  mb-0">Nalanda</p>
                </div>
              </div>
              <div className="w-1/5 ">
                <div className="p-4 py-3 border-b border-dotted border-blue-300">
                  <p className="text-xs sm:text-base  mb-0 text-orange-600">
                    Implementation - Fidelity & Quality
                  </p>
                </div>
                <div className="p-4 py-3">
                  <p className="text-xs sm:text-base  mb-0 text-orange-600">
                    Side Event
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
                    18:30-19:15
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
    </div>
  )
}

export default Day1
