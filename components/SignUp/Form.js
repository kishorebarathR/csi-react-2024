
const Form = () => {
  return (
    <>
      <div class="container text-center custom-container  lg:ms-16 mb-10">
        <div class=" m-5 ">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdxv50HE-LWzfrK_MNPUfb_P5fH1QdWzijqCf6gkpdDP7_Ajg/viewform?embedded=true"
            class="focus:outline-none text-violet-600 bg-[#F3D479] hover:bg-[#7e3f98] hover:text-yellow-200 focus:ring-4 focus:ring-yellow-200 font-normal rounded-3xl text-sm px-14 py-4 me-2 mb-14 dark:focus:ring-yellow-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            Submit form on Google forms
          </a>
          </div>
          <section class="padding-bottom ">
            <div class="container text-center">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdxv50HE-LWzfrK_MNPUfb_P5fH1QdWzijqCf6gkpdDP7_Ajg/viewform?embedded=true"
                width="100%"
                height="2200"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              >
                Loading…
              </iframe>
            </div>
          </section>
       
      </div>
    </>
  )
}

export default Form
