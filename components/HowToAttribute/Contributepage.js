import Image from "next/image"
const Contributepage = () => {
  return (
    <>
      <div className="mx-5 custom-container lg:px-10">
        <h1 className="text-[#7E3F98] font-semibold  font40px">
          How can you contribute?
        </h1>
        <div className="font16px">
        <h2 className="mt-5  font16px">
          Catalysing Social Impact [CSI] is a space for everyone. Whether you
          are a thinker, doer, investor or just an observer, we have
          opportunities for everyone to come together to ignite positive changes
          in the field of social impact through strategic initiatives.
        </h2>
        <h3 className="font-semibold mt-5">Here is how you can contribute:</h3>
        <ul className="ms-5 space-y-2 list-disc ps-4 mt-5">
          <li>
            <b>
        
              Non-Governmental Organisations and Civil Society Organisations:
            </b>
            NGOs and CSOs can play a vital role by engaging as collaborators and
            enhancing the reach of CSI 2024, bringing in key stakeholders and
            perspectives. NGOs and CSOs can also leverage this opportunity to
            showcase their products and innovations for social impact at the
            exhibition.
          </li>
          <li>
            <b>Funders and Sponsors:CSI</b> 2024 provides funders and sponsors a
            platform to gain visibility, directly engage with social innovators
            to gauge insights into emerging trends, scope potential
            opportunities of interest, and co-develop forward-thinking business
            strategies.
          </li>
          <li>
            <b> Implementing Organisations:</b> Implementing organisations can
            access collaborative opportunities and contribute to the
            conversations through their on-ground experiences to enhance project
            reach and effectiveness.
          </li>
          <li>
            <b>Volunteers: </b> CSI 2024 provides experienced individuals in the
            sector an opportunity to learn from and work with an experienced
            mentor and expand their network. Even if you do not fall into these
            categories, we encourage you to explore the interest form and the
            sign-up form for the working groups linked below to find the right
            space for you at CSI 2024:
          </li>
        </ul>
        <p className="mt-3">
          Even if you do not fall into these categories, we encourage you to
          explore the interest form linked below to find the right space for you
          at CSI 2024
        </p>
      </div>
      </div>

      <div className="text-center mt-11">
        <a
          href="interest-form"
          className="focus:outline-none text-violet-600 bg-[#F3D479] hover:bg-[#7e3f98] hover:text-yellow-200 focus:ring-4 focus:ring-yellow-200 font-normal rounded-3xl text-sm px-14 py-4 me-2 mb-14 dark:focus:ring-yellow-900"
        >
          Interest Form: CSI 2024
        </a>
      </div>
      <div className="lg:mx-10 mt-14 mb-10">
  <div className="lg:flex justify-center items-center h-full">
    <div className="lg:flex flex-col lg:flex-row">
      <div className="w-full">
        <Image
          className="object-cover w-full h-full px-2"
          src="/images/how-to-contribute/contribute-img-1.jpg"
          alt="image description"
          layout="responsive"
          width={200}
          height={200}
        />
      </div>
    </div>
    <div className="lg:flex flex-col lg:flex-row px-2">
      <div className="w-full">
        <Image
          className="object-cover w-full h-full"
          src="/images/how-to-contribute/contribute-img-2.jpg"
          alt="image description"
          layout="responsive"
          width={200}
          height={200}
        />
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Contributepage
