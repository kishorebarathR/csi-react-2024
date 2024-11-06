import React from "react"
import Image from "next/image"

const Awardspage = () => {
  return (
    <>
      <div>
        <div className="relative bg-[url('/images/awards/bg-img.png')] bg-cover bg-bottom bg-no-repeat w-full h-[180vh]">
          <p className="absolute pt-6 top-[18%] left-1/2 transform -translate-x-1/2 text-center text-white font-bold text-4xl lg:text-3xl">
            Innovation for Transformation Awards
          </p>

          <p className="absolute top-[70%] font18px text-md text-center text-white lg:px-40 lg:pt-14  ">
            Innovation for Transformation AwardsThe Catalyst Group is delighted
            to announce the call for nominations for the Innovation for
            Transformation Awards! These awards shine a spotlight on the
            incredible individuals and organisations transforming the lives of
            vulnerable communities across India. We are looking for trailblazers
            who are driving change with innovative ideas, collaborative efforts,
            and a community-first mindset. These nominations would be strictly
            within the purview of the three themes for CSI 2024- namely,
            Innovative Financing, Implementation- Fidelity & Quality, and
            Grounded Climate Response.
          </p>
        </div>

        <div className=" bg-[url('/images/awards/csi-bg-awards.png')] bg-cover bg-bottom bg-no-repeat w-full lg:h-full">
          <p className=" lg:pt-10 font40px text-center text-purple font-medium">
            Criteria and Eligibility
          </p>
          <p className="text-center font18px pt-5">
            We are seeking nominees who are:
          </p>

          <div className="pt-10 lg:px-24 ">
            <div className="flex flex-col lg:flex-row  text-center justify-center items-center lg:gap-10 ms-24 lg:ms-0 ">
              <div className="  w-full lg:w-auto flex flex-row lg:flex-col lg:border-r-2 last:lg:border-r-0 border-yellow-300 py-2 lg:py-0 pr-2 ">
                <Image
                  className="w-5 "
                  src="/images/awards/csi2024-awards-star.svg"
                  alt="Collaborative in nature"
                  height={400}
                  width={400}
                />
                <p className="text-start ml-2 flex flex-col justify-center mb-0 pl-0.5 ">
                  <b>Collaborative in nature</b>
                </p>
              </div>
              <div className="w-full lg:w-auto flex flex-row lg:flex-col lg:border-r-2 last:lg:border-r-0 border-yellow-300 py-2 lg:py-0 pr-2">
                <Image
                  className="w-5"
                  src="/images/awards/csi2024-awards-star.svg"
                  alt="Community-focused"
                  height={400}
                  width={400}
                />
                <p className="text-start ml-2 flex flex-col justify-center mb-0 pl-0.5">
                  <b>Community-focused</b>
                </p>
              </div>
              <div className="w-full lg:w-auto flex flex-row lg:flex-col lg:border-r-2 last:lg:border-r-0 border-yellow-300 py-2 lg:py-0 pr-2">
                <Image
                  className="w-5"
                  src="/images/awards/csi2024-awards-star.svg"
                  alt="Tech-enabled"
                  height={400}
                  width={400}
                />
                <p className="text-start ml-2 flex flex-col justify-center mb-0 pl-0.5">
                  <b>Tech-enabled</b>
                </p>
              </div>
              <div className="w-full lg:w-auto flex flex-row lg:flex-col lg:border-r-2 last:lg:border-r-0 border-yellow-300 py-2 lg:py-0 pr-2">
                <Image
                  className="w-5"
                  src="/images/awards/csi2024-awards-star.svg"
                  alt="Embodying innovation"
                  height={400}
                  width={400}
                />
                <p className="text-start ml-2 flex flex-col justify-center mb-0 pl-0.5">
                  <b>Embodying innovation</b>
                </p>
              </div>
              <div className="w-full lg:w-auto flex flex-row lg:flex-col py-2 lg:py-0 pr-2">
                <Image
                  className="w-5"
                  src="/images/awards/csi2024-awards-star.svg"
                  alt="Demonstrating Impact"
                  height={400}
                  width={400}
                />
                <p className="text-start ml-2 flex flex-col justify-center mb-0 pl-0.5">
                  <b>Demonstrating Impact</b>
                </p>
              </div>
            </div>

            <div className="mt-14 border border-violet-400 border-dotted"></div>
            <p className="font40px text-md text-center text-purple font-medium pt-5">
              Nominations
            </p>
            <p className="font18px text-center pt-5">
              This is your chance to help us recognise and celebrate the heroes
              of social impact!
            </p>
          </div>

          <div className="pt-10 lg:px-24">
            <div className="lg:flex pt-3 text-center">
              <div className="w-full md:w-1/4 mb-4  items-center text-center">
                <Image
                  className="img-fluid mx-auto"
                  src="/images/awards/csi2024-log01 (1).svg"
                  alt="Nominate organisations and models for consideration"
                  height={50}
                  width={50}
                />
                <p className="pt-2 mb-3">
                  Nominate organisations and models for consideration
                </p>
              </div>
              <div className="w-full md:w-1/4 mb-4 items-center text-center">
                <Image
                  className="pt-2 img-fluid mx-auto"
                  src="/images/awards/csi2024-log03 (3).svg"
                  alt="Nominations carefully reviewed by a panel of experts"
                  height={50}
                  width={50}
                />
                <p className="pt-2">
                  Nominations carefully reviewed by a panel of experts
                </p>
              </div>
              <div className="w-full md:w-1/4 mb-4  items-center text-center">
                <Image
                  className="pt-2 img-fluid mx-auto"
                  src="/images/awards/csi2024-log02 (2).svg"
                  alt="Finalists undergo interviews"
                  height={50}
                  width={50}
                />
                <p className="pt-2">Finalists undergo interviews</p>
              </div>
              <div className="w-full md:w-1/4 mb-3  items-center text-center">
                <Image
                  className="img-fluid mx-auto"
                  src="/images/awards/csi2024-log04 (4).svg"
                  alt="Exceptional awardees’ work showcased through inspiring case stories"
                  height={40}
                  width={40}
                />
                <p className="pt-2">
                  Exceptional awardees’ work showcased through inspiring case
                  stories
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center  ">
          <p className="font40px text-md font-medium  text-purple text-center mt-6">
            Award Categories
          </p>
          <div className="flex lg:flex-row flex-col items-stretch gap-5 lg:px-20 lg:mx-5 mt-14 ">
            <div className="lg:w-1/2 flex flex-col lg:text-start text-center mt-5 bg-[#F5D47B] rounded-lg">
              <div className="px-5">
                <div className="text-center">
                  <Image
                    src="/images/awards/csi2024-mid.svg"
                    className="mx-auto h-auto max-w-full -mt-20 w-36"
                    alt="..."
                    height={400}
                    width={400}
                  />
                </div>

                <p className="text-2xl text-start">
                  <b>Award for Social Impact Organisation</b>
                </p>

                <p className="text-purple text-start text-lg  border-b-amber-600 border-b pb-2 mt-3">
                  Criteria
                </p>

                <div className="text-lg-start text-start  p-5">
                  <ul className="list-disc list-inside  font16px space-y-2">
                    <li>
                      <b>Dedication to Community Solutions</b>
                    </li>
                    <p>
                      Collaborative organisations solving complex social issues
                      with community-driven approaches
                    </p>
                    <li>
                      <b>Demonstrated Contribution and Impact</b>
                    </li>
                    <p>
                      Community-focused initiatives with impactful,
                      research-backed frameworks and practical approaches
                    </p>
                    <li>
                      <b>Commitment and Leadership</b>
                    </li>
                    <p>
                      Sectoral leadership for sustained community service and
                      policy influence
                    </p>
                    <li>
                      <b>Geographical Focus</b>
                    </li>
                    <p>
                      Indian organisations addressing local challenges with
                      innovative and tailored strategies
                    </p>
                    <li>
                      <b>Documentation and Learning</b>
                    </li>
                    <p>
                      Well-documented case studies and evaluations showcasing
                      impactful work in community
                    </p>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col text-center mt-20 lg:mt-5 bg-[#F5D47B] rounded-lg">
              <div className="px-5">
                <div className="text-center">
                  <Image
                    src="/images/awards/csi2014-mid1.svg"
                    className="mx-auto h-auto max-w-full -mt-20 w-36"
                    alt="..."
                    height={400}
                    width={400}
                  />
                </div>

                <p className="text-2xl text-start ">
                  <b>Award for Social Impact Idea</b>
                </p>

                <p className="text-purple text-start text-lg  border-b-amber-600 border-b pb-2 mt-3">
                  Criteria
                </p>

                <div className="text-lg-start text-start  p-5">
                  <ul className="list-disc list-inside  font16px space-y-2">
                    <li>
                      <b>Innovative Idea or Model</b>
                    </li>
                    <p>
                      Collaborative, community focused and innovative ideas
                      addressing complex human problems
                    </p>
                    <li>
                      <b>Potential for Scalability and Impact</b>
                    </li>
                    <p>
                      Tech-enabled models with potential for scalability and
                      demonstrated impact
                    </p>
                    <li>
                      <b>Human-Centred Approach</b>
                    </li>
                    <p>
                      Community-focused, human-centered solutions with
                      innovative strategies
                    </p>
                    <li>
                      <b>Insightful Learning and Solutions</b>
                    </li>
                    <p>
                      Valuable insights and future application to addressing
                      complex problems
                    </p>
                    <li>
                      <b>Community Focus and Commitment</b>
                    </li>
                    <p>
                      Collaborative dedication and tailored solutions to
                      addressing community needs through community leadership
                    </p>
                    <li>
                      <b>Research Criteria</b>
                    </li>
                    <p>
                      Peer-reviewed research with community-relevant and
                      impactful findings
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 mb-10 lg:px-24 bg-[url('/images/awards/csi2024-award-10.png')] bg-cover bg-bottom bg-no-repeat w-full h-[40vh] flex flex-col items-center justify-center">
          <p className="font16px text-center text-white">
            Do you know a social innovator or model? Nominate them now! Don’t
            miss the chance to bring their inspiring work into the spotlight.
            Submit your nominations by
            <span className="text-yellow-300 ms-2">
              <b>July 15, 2024.</b>
            </span>
          </p>
          <div className="text-center mt-10">
            <a
              href="https://docs.google.com/forms/d/1kmTEaqzl95YBgxpI-A364u68IQPekHqpb-yPAZmb52c/viewform?ts=6666ee29&edit_requested=true"
              className="focus:outline-none text-purple bg-[#F3D479] hover:bg-[#7e3f98] hover:text-yellow-200 focus:ring-4 focus:ring-yellow-200 font-normal rounded-3xl text-sm px-14 py-4 me-2 mb-14 dark:focus:ring-yellow-900"
            >
              Submit Your Nomination
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Awardspage
