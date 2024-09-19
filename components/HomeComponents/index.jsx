import React from "react"
import Homepage from "./Homepage"
import Aboutpage from "./Aboutpage"
import Seo from "@/components/SeoComponents/Seo"

const index = () => {
  const title = "CSI"
  const description =
    " Catalysing Social Impact [CSI] is a living forum hosted by the Catalyst Group for thinkers, doers, and investors who come together to ignite positive changes in the field of social impact through strategic initiatives."
  const path = "csi-react-2024"
  const metaImage = ""
  return (
    <div>
      <Seo
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      />
      <Homepage />
      <Aboutpage />
    </div>
  )
}

export default index
