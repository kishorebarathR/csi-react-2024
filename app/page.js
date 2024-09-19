"use client"
import React from "react"
import HomeComponents from "@/components/HomeComponents"
import Seo from "@/components/SeoComponents/Seo"
import { usePathname } from "next/navigation"

const Page = () => {
  const pathname = usePathname()
  const title = "CSI"
  const description =
    "Catalysing Social Impact [CSI] is a living forum hosted by the Catalyst Group for thinkers, doers, and investors who come together to ignite positive changes in the field of social impact through strategic initiatives."
  const path = `${pathname}`
  const metaImage = ""

  return (
    <div>
      <Seo
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      />
      <HomeComponents />
    </div>
  )
}

export default Page
