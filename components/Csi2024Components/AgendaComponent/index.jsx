import React from "react"
import Agendapage from "./Agendapage"

import Seo from "@/components/SeoComponents/Seo"

const Index = () => {
  const title = "CSI 2024 | CSI"
  const description ="Discover diverse themes such as Grounded Climate Response, Innovative Financing, and Fidelity"
  const path = "csi-agenda"
  const metaImage = ""
  return (
    <div>
      <Seo
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      />
      <Agendapage />
    </div>
  )
}

export default Index
