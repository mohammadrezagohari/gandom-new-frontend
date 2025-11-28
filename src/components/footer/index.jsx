// import React,{useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

function Footer() {
    const locale = useLocale();

  // const [isHover,setIsHover]=useState(false)
  return (
    <footer className="w-full bg-g21">
      <div className="container max-w-none">
        <div className="lg:flex lg:justify-between lg:items-center text-gf mb-14 lg:mb-[3.6458333333333335vw] lg:pt-[6.25vw] pt-14">
          <div className="flex flex-col justify-center items-center lg:mb-0 mb-5 lg:pb-0 pb-8 border-b-[1px] border-[#FFD10159] lg:border-b-0  ">
            <div className="w-[8.463541666666666vw] h-[8.463541666666666vw]">
              <Image
                width={130}
                height={130}
                alt="gandom logo"
                className="lg:block hidden h-full w-full object-contain"
                src={"/gandomFooter.svg"}
              />
            </div>
            <Image
              width={80}
              height={80}
              alt="gandom logo"
              className="lg:hidden block "
              src={"/gandomFooter.svg"}
            />
          </div>

          <ul className="lg:flex lg:justify-center lg:items-center lg:gap-[6.25vw] lg:divide-y-0 divide-y divide-[#FFD10133]">
            <li className="text-gf text-center lg:text-[1.5625vw] lg:leading-[2.9296875vw] text-xl leading-[30px] font-PoppinsLight lg:py-0 py-4">
              <Link className="block w-full h-full" href={`/${locale}/about-us`}>
                <span>About us</span>
              </Link>
            </li>
            <li className="text-gf text-center lg:text-[1.5625vw] lg:leading-[2.9296875vw] text-xl leading-[30px] font-PoppinsLight lg:py-0 py-4">
              <Link className="block w-full h-full" href={`/${locale}/contact`}>
                <span>Contact us</span>
              </Link>
            </li>
            <li className="text-gf text-center lg:text-[1.5625vw] lg:leading-[2.9296875vw] text-xl leading-[30px] font-PoppinsLight lg:py-0 py-4">
              <Link className="block w-full h-full" href={`/${locale}/portfolio`}>
                <span>Our works</span>
              </Link>
            </li>
            <li className="text-gf text-center lg:text-[1.5625vw] lg:leading-[2.9296875vw] text-xl leading-[30px] font-PoppinsLight lg:py-0 py-4">
              <Link className="block w-full h-full" href={`/${locale}/weblog`}>
                <span>Weblog</span>
              </Link>
            </li>
          </ul>

          <div className="flex justify-center items-center lg:gap-[1.0416666666666667vw] gap-8 lg:gap-[2.0833333333333335vw] lg:pt-0 pt-12">
            <Link
              href="https://instagram.com/gandom.link"
              className="transition-all duration-500 text-gYellow bg-transparent hover:text-g21 hover:bg-gYellow lg:w-[3.90625vw] lg:h-[3.90625vw] w-12 h-12 border-[1px] border-gYellow rounded-full inline-flex items-center justify-center"
            >
              <svg
                className="lg:w-[2.0833333333333335vw] lg:h-[2.0833333333333335vw] "
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0013 29.3333H20.0013C26.668 29.3333 29.3346 26.6666 29.3346 20V12C29.3346 5.33329 26.668 2.66663 20.0013 2.66663H12.0013C5.33464 2.66663 2.66797 5.33329 2.66797 12V20C2.66797 26.6666 5.33464 29.3333 12.0013 29.3333Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.9987 20.6667C18.576 20.6667 20.6654 18.5774 20.6654 16C20.6654 13.4227 18.576 11.3334 15.9987 11.3334C13.4214 11.3334 11.332 13.4227 11.332 16C11.332 18.5774 13.4214 20.6667 15.9987 20.6667Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.5161 9.33329H23.5315"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="https://linkedin.com/company/gandom-eg/"
              className="transition-all duration-500 text-gYellow bg-transparent hover:text-g21 hover:bg-gYellow lg:w-[3.90625vw] lg:h-[3.90625vw] w-12 h-12 border-[1px] border-gYellow rounded-full inline-flex items-center justify-center"
            >
              <svg
                className="lg:w-[2.0833333333333335vw] lg:h-[2.0833333333333335vw] "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.0003 23.9992L18.0481 23.9922H17.737V23.6688C17.737 20.8111 17.738 17.9534 17.74 15.0956C17.74 14.5196 17.5859 14.0227 17.1256 13.6657C16.6448 13.2932 16.1079 13.2205 15.5554 13.4652C14.9965 13.7134 14.681 14.1671 14.6231 14.7938C14.6113 14.9206 14.6118 15.049 14.6118 15.1763C14.6118 18.0107 14.6118 20.8447 14.6118 23.6784V23.9762H8.35938V7.4815H14.6098V8.52382C14.7595 8.42706 14.867 8.35236 14.9789 8.28568C16.7218 7.24987 18.5305 7.19122 20.3466 8.01344C22.1965 8.85071 23.3531 10.3197 23.8418 12.3301C23.9164 12.637 23.9488 12.9553 24.0003 13.2687V23.9992ZM22.9507 22.9128C22.9556 22.8381 22.961 22.7905 22.961 22.7428C22.961 19.7497 22.9919 16.7556 22.9507 13.763C22.9207 11.5636 21.9075 9.92612 19.9427 9.00011C18.3887 8.26813 16.8194 8.32128 15.3729 9.31797C14.8567 9.67344 14.4406 10.1813 13.9822 10.6245C13.8498 10.7529 13.7335 10.8988 13.6103 11.0371L13.5573 11.0146V8.53987H9.40701V22.9083H13.5612V22.5849C13.5612 20.0706 13.5558 17.5563 13.5612 15.042C13.5666 13.0456 15.3685 11.7455 17.1359 12.451C18.16 12.8596 18.7827 13.8372 18.7842 15.0515C18.7862 17.5743 18.7862 20.0968 18.7842 22.619V22.9128H22.9507Z"
                  fill="currentColor"
                />
                <path
                  d="M0.0078125 7.47656H6.23964V23.9762H0.0078125V7.47656ZM1.04612 8.53342V22.9074H5.18955V8.53342H1.04612Z"
                  fill="currentColor"
                />
                <path
                  d="M6.2587 3.22554C6.21895 5.00987 4.80918 6.42119 3.09862 6.38911C1.33653 6.35652 -0.0393766 4.90258 0.000860418 3.11624C0.0425695 1.34745 1.47834 -0.0382982 3.22964 0.000807672C4.90781 0.0399136 6.29746 1.51691 6.2587 3.22554ZM5.21008 3.20047C5.21401 2.03281 4.26696 1.06018 3.12806 1.06318C1.98916 1.06619 1.03132 2.05236 1.04212 3.20298C1.04212 3.76769 1.26168 4.30928 1.6525 4.7086C2.04332 5.10791 2.57339 5.33224 3.1261 5.33224C3.6788 5.33224 4.20887 5.10791 4.5997 4.7086C4.99052 4.30928 5.21008 3.76769 5.21008 3.20298V3.20047Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link
              href={`#`}
              className="transition-all duration-500 text-gYellow bg-transparent hover:text-g21 hover:bg-gYellow lg:w-[3.90625vw] lg:h-[3.90625vw] w-12 h-12 border-[1px] border-gYellow rounded-full inline-flex items-center justify-center"
            >
              <svg
                className="lg:w-[2.0833333333333335vw] lg:h-[2.0833333333333335vw] "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="11.25"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="15.9625"
                  cy="9.60712"
                  r="1.93182"
                  transform="rotate(13.8681 15.9625 9.60712)"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
                <circle
                  cx="9.61089"
                  cy="8.03863"
                  r="1.93182"
                  transform="rotate(13.8681 9.61089 8.03863)"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
                <circle
                  cx="8.04058"
                  cy="14.3929"
                  r="1.93182"
                  transform="rotate(13.8681 8.04058 14.3929)"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
                <circle
                  cx="14.3921"
                  cy="15.9617"
                  r="1.93182"
                  transform="rotate(13.8681 14.3921 15.9617)"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
                <circle
                  cx="12.0008"
                  cy="12"
                  r="0.840909"
                  transform="rotate(13.8681 12.0008 12)"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </svg>
              {/* <Image width={24} height={24} alt="" src={"/landing/dirrible.svg"}/> */}
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center mx-auto lg:w-[65%] lg:border-t-[1px] lg:border-[#FFD10159]  lg:py-[2.0833333333333335vw] pb-12">
          <h6 className="text-gf lg:text-[1.0416666666666667vw] lg:leading-[2.1484375vw] text-base leading-6 font-extralight ">
            Copyright © 2025 GANDOM CO.
          </h6>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
