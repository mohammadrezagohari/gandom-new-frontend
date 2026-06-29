"use client"
import React from "react"
import { useTranslations } from "next-intl"
import GlassmorphismBox from "../../components/common/glassmorphism-box/lg"

const projects=[
  {index:0,link:"https://freecancer.ir/",background:"bg-[url(/img/freecancer.jpg)] lg:bg-[url(/img/para1.webp)]",align:"lg:justify-end lg:pr-14"},
  {index:1,link:"https://testato.ir",background:"bg-[url(/img/Tetato-banner.jpg)] lg:bg-[url(/img/para3.webp)]",align:"lg:justify-start lg:pl-14"},
  {index:4,link:"https://arefset.com",background:"bg-[url(/img/Arefset.jpg)] lg:bg-[url(/img/para2.jpg)]",align:"lg:justify-end lg:pr-14"}
]
export default function ParallaxPart(){
  const t=useTranslations("portfolio")
  return <div>{projects.map(project=><section key={project.index} className={`relative h-screen flex justify-center items-start lg:items-end pt-[15%] lg:pb-28 ${project.align}`}>
    <div className={`${project.background} absolute inset-0 w-full h-full`} style={{filter:"brightness(0.68)",zIndex:-1,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"}}/>
    <GlassmorphismBox title={t(`items.${project.index}.title`)} link={project.link} desc={t(`items.${project.index}.description`)}/>
  </section>)}</div>
}
