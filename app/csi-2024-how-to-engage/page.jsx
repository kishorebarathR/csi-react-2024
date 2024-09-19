'use client'
import React from "react"
import HowtoengageComponents from "@/components/HowtoengageComponents/Howtoengage"
import Seo from "@/components/SeoComponents/Seo"
import { usePathname } from "next/navigation"

const page = () => {
  const pathname = usePathname()
  const title = "CSI 2024 | CSI"
  const description =
    "Discover diverse themes such as Grounded Climate Response, Innovative Financing, and Fidelity"
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
      <HowtoengageComponents />
    </>
  )
}

export default page
