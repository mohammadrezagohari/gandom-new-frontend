import React from "react";
import FilledButton from "@/components/common/buttons/filled";
import FilledYellowButton from "@/components/common/buttons/fillYellow";
import Image from "next/image";
function HeadSection() {
  return (
    <section className="w-full bg-g21">
      {/* headerlandingGandomLogo */}
      <div className="serviceCont py-[4vw] grid grid-cols-1 lg:grid-cols-2 text-gf ">
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
          {/* <div className="absolute -top-[30%] left-0 w-[30vw] lg:block hidden z-0">
              <Image
                width={100}
                height={100}
                alt={"head picture"}
                src={"/landing/headerlandingGandomLogo.svg"}
                className="w-full"
              />
            </div> */}
          {/* <div claassName="" ></div> */}
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
        <div className="order-1 lg:order-2 flex lg:justify-end justify-center">
          <div className="w-[40.5vw] hidden h-[400px] lg:block overflow-hidden">
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
