"use client"
import React from "react"
import Csi2019Components from "@/components/Csi2019Components"
import Seo from "@/components/SeoComponents/Seo"
import { usePathname } from "next/navigation"

const page = () => {
  const pathname = usePathname()
  const title = "CSI 2019 | CSI"
  const description =
    "Landscape data storytelling intertwines diverse data sets to craft narratives"
  const path = `${pathname}`
  const metaImage = ""
  return (
    <>
      <Seo
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      />
      <Csi2019Components />
    </>
  )
}

export default page
