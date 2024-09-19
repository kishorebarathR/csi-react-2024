'use client'
import React from 'react'
import FilmsComponents from "@/components/Csi2024Components/FilmsComponents"
import Seo from "@/components/SeoComponents/Seo"
import { usePathname } from "next/navigation"

const page = () => {
  const pathname = usePathname()
  const title = "CSI 2024 | CSI"
  const description =
    "Centre for Strategic Communications for Public Health"
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
        <FilmsComponents/>
    </div>
  )
}

export default page