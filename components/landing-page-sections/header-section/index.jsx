import React from "react";
import FilledButton from "@/components/common/buttons/filled";
import FilledYellowButton from "@/components/common/buttons/fillYellow";
import Image from "next/image";
function HeadSection() {
  return (
    <section className=" bg-g21">
      <div className="serviceCont bg-g21 landingHeaderHeight lg:py-0 py-7 grid grid-cols-1 lg:grid-cols-2">
        {/* <div className="relative h-full pt-[12%] order-2 lg:order-1">
          <div className="absolute bottom-3 left-0 lg:block hidden ">
            <Image
              width={240}
              height={100}
              alt={"head picture"}
              src={"/landing/LTwoSquare.svg"}
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
          </div>

          <div className="container h-full flex flex-col items-start justify-center">
            <h1 className="text-gYellow lg:text-[4.6em]  text-[3em]  font-Holispay ">
              Our specialty
            </h1>
            <h2 className="text-gf lg:text-[3.5em]  text-[2em]  font-Holispay ">
              is the reason for your trust
            </h2>
            <p className="text-gf lg:text-xl text-justify lg:leading-9 text-base leading-6 font-PoppinsLight pb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
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
        <div className="h-full flex items-center lg:justify-end justify-center order-1 lg:order-2">
          <Image
            width={100}
            height={100}
            alt={"head picture"}
            src={"/landing/headerPic.svg"}
            className="w-[90%] lg:w-[78%] lg:block hidden "
          />
          <Image
            width={100}
            height={100}
            alt={"head picture"}
            src={"/landing/headerPicSm.svg"}
            className="w-[90%] lg:w-[78%] lg:hidden block"
          />
        </div> */}
      </div>
     
    </section>
  );
}

export default HeadSection;
