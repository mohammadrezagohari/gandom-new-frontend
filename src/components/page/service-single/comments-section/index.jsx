import React from "react";
import SectionTitle from "@/src/components/common/section-title";
import CommentSlider from "@/src/components/all-sliders-component/service-single-page-sliders/comment-slider";
import Image from "next/image";
function CommentsSection() {
  return (
    <section className="w-full bg-gec CommentsSection py-[9%] lg:py-[5%] relative">
      {/* <div className="absolute bottom-3 left-0 lg:block hidden ">
            <Image
              width={240}
              height={100}
              alt={"head picture"}
              src={"/service-single-logo-yellow.svg"}
              className=""
            />
          </div>
          <div className="absolute top-[5%] right-0 lg:block hidden ">
            <Image
              width={279}
              height={100}
              alt={"head picture"}
              src={"/landing/RTwoSquare.svg"}
              className=""
            />
          </div> */}

      <div className="container max-w-none flex flex-col items-center justify-center">
        <SectionTitle classes="text-g21" title="Customer comments" />

        <div className="w-full lg:w-[60%]  mt-[3.5%]">
          <CommentSlider />
        </div>
      </div>
    </section>
  );
}
export default CommentsSection;
