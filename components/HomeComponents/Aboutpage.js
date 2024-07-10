import React from 'react';

const Aboutpage = () => {
    return (
        <>
             <div className=" lg:mt-24 mt-72 lg:px-10  ">
          <h2 className=" text-4xl text-[#7E3F98]">
            <b className="font40px px-3 lg:px-0">About</b>
          </h2>
          <div className='font16px lg:px-0 px-3'>

          <p className="mt-5 ">
            <b>Catalysing Social Impact [CSI]</b> is a living forum hosted by
            the Catalyst Group for thinkers, doers, and investors who come
            together to ignite positive changes in the field of social impact
            through strategic initiatives.
          </p>
          <ul className="list-disc ps-4 ms-3 space-y-3 mt-3">
            <li>
              The first forum was held in 2019 using the Solutions Circle
              approach - in hybrid and physical spaces in Bengaluru and morphed
              into the
              <a
                href="https://covidactioncollab.org/"
                target="_blank"
                class="text-blue-500 hover:text-blue-700"
              >
                #COVIDActionCollab
              </a>
              for pandemic response during 2020-2022.
            </li>
            <li>
              In 2022, the #COVIDActionCollab further transformed into
              <a
                href="https://communityactioncollab.org/"
                target="_blank"
                class="text-blue-500 hover:text-blue-700"
              >
                #CommunityActionCollab
              </a>
              to build pandemic preparedness and resilience.
            </li>
          </ul>
          <p className="mt-3">
            Catalysing Social Impact is back in 2024 as a convening between 
            August 1 and 2, 2024in New Delhi to craft an inclusive and transformative
            path towards 2047 - India at 100 | Viksit Bharat @2047 the vision to
            make India a developed nation by 2047, the 100th year of
            independence.
          </p>
          <ul className="list-disc ps-4 ms-3 space-y-3 mt-3">
            <li>
              The vision encompasses various aspects of development, including
              economic growth, social progress, environmental sustainability,
              and good governance. CSI 2024 is also where the SDG Conclave will
              find a home.
            </li>
            <li>
              The forum seeks to bring community organisations, social
              innovators, governments, academia, think tanks, and networks &
              collaboratives to take stock and accelerate actions.
            </li>
          </ul>
          <p className="mt-3">
            Whether your efforts are in specific domains - education,
            healthcare, environmental or cross-cutting issues or any other -
            financing, gender, governance or others -the goal is to drive deeper
            and more impactful actions that enable a collective vision of India
            at 100.
          </p>
          </div>
          <h3 className="text-4xl mt-14 text-[#7E3F98] ">
            <b className="font40px lg:px-3">Conversations Cafe</b>
          </h3>

          <div className="lg:grid lg:grid-cols-3 mt-10 mb-10 ">
            <div className="cursor-pointer py-2 px-2">
              <iframe
                width="100%"
                height="230px"
                src="https://www.youtube.com/embed/8z7q1k2akBo"
                title="Sandip and Vivekanadan on the Struggles of Fisher Folk"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                className=""
              ></iframe>
            </div>
            <div className="py-2 px-2">
              <iframe
                width="100%"
                height="230px"
                src="https://www.youtube.com/embed/0r3_c-KLicc"
                title="Nitya and Divya on Socially Responsible Business Leaders"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="py-2 px-2">
              <iframe
                width="100%"
                height="230px"
                src="https://www.youtube.com/embed/o4s8lN_wyLw"
                title="Narendran and Royston on Impact Financing"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            {/* </div>

          <div className="lg:grid grid-cols-3 mt-5 mb-5 gap-10 px-5"> */}
            <div className="py-2 px-2">
              <iframe
                width="100%"
                height="230px"
                src="https://www.youtube.com/embed/5tKtE0KAXcE"
                title="Sandip and Shirish on Social Problems and Solution Circles"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div> 
            <div className="py-2 px-2">
              <iframe
                width="100%"
                height="230px"
                src="https://www.youtube.com/embed/GZi4WjkRCZo"
                title="Rhea and Arun on Artificial Intelligence in the Social Sector"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="py-2 px-2">
              <iframe
                width="100%"
                height="230px"
                src="https://www.youtube.com/embed/wGGRPEfSOAE"
                title="Ravi and Catherine on Innovative Financing in Agribusiness"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                // allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        
        </>
    );
}

export default Aboutpage;
