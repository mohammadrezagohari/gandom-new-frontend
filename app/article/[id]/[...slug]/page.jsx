// "use client"
import React from "react";
import Notfound from "@/app/not-found";
import { getSinglePostData } from "@/core/services/api/videos";
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "@/components/common/section-title";
import MassageBox from "@/components/common/massage-box-form";
import MessageSection from "@/components/article-single-page-sections/message-section";
import CommentSection from "@/components/article-single-page-sections/comment-section";
import RelatedPostSection from "@/components/article-single-page-sections/related-post-section";

const ServiceSinglePage = async ({ params }) => {
  const data = await getSinglePostData(params.id);
  if (!data.id) {
    return Notfound();
  }

  const onSubmitForm = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {/* ServiceSinglePage */}
      <h1
        className={`text-g25 lg:text-[3.7rem] text-start lg:leading-[84.75px] text-[1.7rem] leading-[40.68px] font-Holispay`}
      >
        {data.title}
        {/* We are a leader in the field of web and mobile software services */}
      </h1>
      <p className="text-g8 lg:text-[1.23vw] text-justify lg:leading-[1.95vw] text-base leading-6 font-PoppinsRegular pb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore .
      </p>
      <div className="w-full h-[67vh] rounded-xl ">
        <Image
          width={100}
          height={100}
          className=" h-full w-full rounded-xl object-cover "
          src={"/artti.svg"}
          alt={"article | img | مقاله | گندم | سایت | طراحی | وبسایت | موبایل | نرم افزار | دیزای| شرکت نرم افزاری گندم"}
        />
        {/* artti */}
      </div>
      <p className="text-g8 lg:text-[1.23vw] text-justify lg:leading-[1.95vw] text-base leading-6 font-PoppinsRegular py-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        .
      </p>

     
        <CommentSection />
      
        <RelatedPostSection />
      {/* <div className="flex items-center justify-between">
        <p>{data.title}</p>
        <p>{data.title}</p>
      </div> */}
    </>
  );
};

export default ServiceSinglePage;
