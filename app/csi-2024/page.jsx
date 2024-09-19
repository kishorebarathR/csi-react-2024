"use client"
import React from "react"
import Csi2024OverviewComponets from "@/components/Csi2024Components/OverviewComponents"
import Seo from "@/components/SeoComponents/Seo"
import { usePathname } from "next/navigation"
const Page = () => {
  const pathname = usePathname()
  const title = "CSI 2024 | CSI"
  const description =
    "Catalysing Social Impact is all about celebrating India’s achievements"
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
      <Csi2024OverviewComponets />
    </>
  )
}

export default Page
