import React from "react"
import Overviewpage from "./Overviewpage"
import WhatMakeUs from "./What_make_us"
import Seo from "@/components/SeoComponents/Seo"

const index = () => {
  const title = "CSI 2024 | CSI"
  const description ="Catalysing Social Impact is all about celebrating India’s achievements"
  const path = "csi-2024"
  const metaImage = ""
  return (
    <>
      <Seo
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      />
      <Overviewpage />
      <WhatMakeUs/>
    </>
  )
}

export default index
