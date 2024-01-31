import React from "react";
import FilledButton from "@/components/common/buttons/filled";
import FilledYellowButton from "@/components/common/buttons/fillYellow";
import Image from "next/image";
function HeadSection() {
  return (
    <section className="w-full bg-g21 h-auto lg:h-screen" id='landing_header'>
      {/* headerlandingGandomLogo */}
      <div className="serviceCont py-[4vw] grid grid-cols-1 lg:grid-cols-2 text-gf gap-7 lg:gap-0">

        <div className=" relative h-full order-2 lg:order-1">

          <div className="absolute bottom-3 left-0 w-[12.5vw] lg:block hidden ">
            <Image
              width={100}
              height={100}
              alt={"head picture"}
              src={"/landing/LTwoSquare.svg"}
              className="w-full"
            />
          </div>
          <div className="absolute right-0 w-[14.5vw] lg:block hidden ">
            <Image
              width={100}
              height={100}
              alt={"head picture"}
              src={"/landing/RTwoSquare.svg"}
              className="w-full"
            />
          </div>
          
          <div className="container h-full flex flex-col items-start justify-start">
            <h1 className="text-gYellow lg:text-[5vw]  text-[3em]  font-Holispay ">
              Our specialty
            </h1>
            <h2 className="text-gf lg:text-[3.75vw]  text-[2em] leading-[2rem] lg:leading-[6.16vw]  font-Holispay ">
              is the reason for your trust
            </h2>
            <p className="text-gf lg:text-[1.2vw] text-justify lg:leading-[2.34375vw] text-base leading-6 font-PoppinsLight pb-6">
              Our service software company is dedicated to creating cutting-edge
              software solutions for mobile, website, and desktop platforms,
              with a strong focus on bespoke UI/UX designs. Our team of
              talented developers and designers work collaboratively to craft
              custom-tailored software products that not only meet the
              functional needs of our clients but also provide a seamless and
              visually engaging user experience. With a strong commitment to
              innovation and excellence, we strive to empower businesses and
              individuals with high-quality, user-friendly software solutions
              that stand out in today`s competitive digital landscape.
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae  */}
            </p>
            <div className="flex items-center lg:justify-start justify-between gap-3">
              <FilledButton link="/" title="About Us" />
              <FilledYellowButton
                classes="w-auto"
                link={"/"}
                title="Contact Us"
              />
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex lg:justify-end justify-center">
          <div className="w-[45vw] hidden h-[80%] lg:block overflow-hidden">
            <Image
              width={100}
              height={100}
              alt={"head picture"}
              src={"/landing/headerPic.svg"}
              className="w-full h-full"
            />
          </div>
          <div className="w-[90vw] lg:hidden block ">
            <Image
              width={100}
              height={100}
              alt={"head picture"}
              src={"/landing/headerPicSm.svg"}
              className="w-full h-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeadSection;
