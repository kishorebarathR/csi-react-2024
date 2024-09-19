'use client'
import React from "react"
import Agenda from "@/components/Csi2024Components/AgendaComponent"
import Seo from "@/components/SeoComponents/Seo"
import { usePathname } from "next/navigation"

const Page = () => {
  const pathname = usePathname()
  const title = "CSI 2024 | CSI"
  const description =
    "Discover diverse themes such as Grounded Climate Response, Innovative Financing, and Fidelity"
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
      <Agenda />
    </div>
  )
}

export default Page
