import React from "react";
import SectionTitle from "@/components/common/section-title";
import Image from "next/image";

function HeaderSection() {
  return (
    <section className=" w-full h-screen bg-g21 relative flex flex-col items-center justify-start">

        <div style={{zIndex:'0'}} className="bg-[#D9D9D905] shadow-[0px_0px_100px_50px_#212121]  parentCircle absolute lg:-top-[70%] xl:-top-[55%] rounded-full h-[95rem] hidden lg:flex items-center justify-center">
          <div className="relative   bg-[rgba(217,217,217,0.02)] shadow-[0px_0px_100px_50px_#212121]  rounded-full w-full h-full flex items-center justify-center">
              <Image className="absolute left-4 bottom-[30%]" src={'/icon/orbir1.svg'} alt="icon" width={50} height={50}  />
              <Image className="absolute left-4 top-[30%]" src={'/icon/orbir1.2.svg'} alt="icon" width={50} height={50}  />
         
              <Image className="absolute right-12 bottom-[25%]" src={'/icon/orbir1.svg'} alt="icon" width={50} height={50}  />
              <Image className="absolute right-4 top-[33%]" src={'/icon/orbir1.2.svg'} alt="icon" width={50} height={50}  />

            <div className="relative bg-[#ffffff00] shadow-[0px_0px_100px_50px_#212121]  rounded-full w-full h-full flex items-center justify-center">
              {/* <div className="absolute left-0 top-[30%]">
                <div className=" bg-gd9 w-[3rem] h-[3rem] rounded-md flex items-center justify-center  "></div>
              </div> */}
              <Image className="absolute -left-6 top-[40%]" src={'/icon/orbir1.svg'} alt="icon" width={50} height={50}  />
              <Image className="absolute -right-0 top-[30%]" src={'/icon/orbir1.2.svg'} alt="icon" width={50} height={50}  />
              <div className="bg-[#D9D9D905] shadow-[0px_0px_100px_50px_#212121]  rounded-full w-full h-full flex items-center justify-center relative"></div> 
            </div>
          </div>
        </div>
      {/* 0px 0px 30px 15px lightblue   00000021 */}
      
      {/* <div style={{zIndex:'0'}} className="bg-[#D9D9D903] shadow-[0px_0px_25px_40px_#212121]  parentCircle absolute -top-[70%]  rounded-full border-2 border-red-400 h-[95rem] flex items-center justify-center">
        <div className="bg-[#D9D9D903] shadow-[0px_0px_25px_40px_#212121] border-2  rounded-full w-full h-full flex items-center justify-center">
          <div className="bg-[#D9D9D903] shadow-[0px_0px_25px_40px_#212121] border-2  rounded-full w-full h-full flex items-center justify-center">
            <div className="bg-[#D9D9D903] shadow-[0px_0px_25px_40px_#212121] border-2  rounded-full w-full h-full flex items-center justify-center"></div> 
          </div>//bg-[#FFD101] blur-[300px]
        </div>
      </div> */}

      <div className="z-10 mt-24  container max-w-none flex flex-col items-center justify-center">
        <div className="relative before:content-[''] before:absolute before:bg-[#FFD101] before:blur-[150px] before:w-[100px] before:h-[100px] before:lg:w-[150px] before:lg:h-[150px] before:rounded-full before:border-2 before:border-red-400 w-[6rem] h-[6rem] lg:w-[10rem] lg:h-[10rem] flex items-center justify-center">
          <Image
            width={100}
            height={100}
            alt={"logo picture | img | لوگو | گندم | سایت | طراحی | وبسایت | موبایل | نرم افزار | دیزای| شرکت نرم افزاری گندم | لوگوی گندم"}
            src={"/about/logoo.svg"}
            className="w-full h-full"
          />
        </div>

        <div className=" lg:w-[60%] text-center flex flex-col items-center justify-center">
          <h1
            className={`text-gf lg:text-[3.6vw] text-center lg:leading-[5.5vw] text-[1.7rem] leading-[40.68px] font-Holispay`}
          >
            We are a leader in the field of web and mobile software services
          </h1>

          <p className="text-gbc lg:text-[1.2395833333333333vw] text-center lg:leading-[2.34375vw] text-sx leading-6 font-PoppinsRegular pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet,
          </p>
        </div> 
      </div>

    </section>
  );
}

export default HeaderSection;
