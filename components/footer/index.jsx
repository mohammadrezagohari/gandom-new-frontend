import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full bg-g21">
      <div className="container max-w-none">
        <div className="lg:flex lg:justify-between lg:items-center text-gf mb-14 lg:pt-24 pt-14">

          <div className="flex flex-col justify-center items-center lg:mb-0 mb-5 lg:pb-0 pb-8 border-b-[1px] border-[#FFD10159] lg:border-b-0  ">
               <Image width={130} height={130} alt="gandom logo" className="lg:block hidden " src={"/gandomFooter.svg"}/>
                <Image width={80} height={80} alt="gandom logo" className="lg:hidden block " src={"/gandomFooter.svg"}/>
           
          </div>

          <ul className="lg:flex lg:justify-center lg:items-center lg:gap-24 lg:divide-y-0 divide-y divide-[#FFD10133]">
            <li className="text-gf text-center lg:text-[24px] lg:leading-[45px] text-xl leading-[30px] font-PoppinsLight lg:py-0 py-4"><Link className="block w-full h-full" href="/"><span>About us</span></Link></li>
            <li className="text-gf text-center lg:text-[24px] lg:leading-[45px] text-xl leading-[30px] font-PoppinsLight lg:py-0 py-4"><Link className="block w-full h-full" href="/"><span>Contact us</span></Link></li>
            <li className="text-gf text-center lg:text-[24px] lg:leading-[45px] text-xl leading-[30px] font-PoppinsLight lg:py-0 py-4"><Link className="block w-full h-full" href="/"><span>Our works</span></Link></li>
            <li className="text-gf text-center lg:text-[24px] lg:leading-[45px] text-xl leading-[30px] font-PoppinsLight lg:py-0 py-4"><Link className="block w-full h-full" href="/"><span>Weblog</span></Link></li>
          </ul>

          <div className="flex justify-center items-center lg:gap-4 gap-8  lg:pt-0 pt-12">
            <Link href={`#`} className="text-gYellow lg:w-[60px] lg:h-[60px] w-12 h-12 border-[1px] border-gYellow rounded-full inline-flex items-center justify-center">
              
              <Image width={32} height={32} alt="" src={"/landing/instagram.svg"}/>
            </Link>
            <Link href={`#`} className="text-gYellow lg:w-[60px] lg:h-[60px] w-12 h-12 border-[1px] border-gYellow rounded-full inline-flex items-center justify-center">
             
              <Image width={24} height={24} alt="" src={"/landing/linkdin.svg"}/>

            </Link>
            <Link href={`#`} className="text-gYellow lg:w-[60px] lg:h-[60px] w-12 h-12 border-[1px] border-gYellow rounded-full inline-flex items-center justify-center">
             
              <Image width={24} height={24} alt="" src={"/landing/dirrible.svg"}/>

            </Link>
          </div>

        </div>

        <div className="flex justify-center items-center mx-auto lg:w-[65%] lg:border-t-[1px] lg:border-[#FFD10159]  lg:py-8 pb-12">
          <h6 className="text-gf lg:text-[16px] lg:leading-[33px] text-base leading-6 font-extralight ">
            {" "}
            Copyright © 2023 HubSpot, Inc.{" "}
          </h6>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
