"use client";
import OutlinedYellowButton from "@/src/components/common/buttons/outlinedYellow";
import React, { useState, useEffect } from "react";
import SectionTitle from "@/src/components/common/section-title";
import Image from "next/image";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import JoinUsBox from "@/src/components/joinus-box-form";
import { AiOutlineClose } from "react-icons/ai";

function JoinSection() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    // alert("open true")
  };
  const handleClose = () => {
    setOpen(false);
    // alert("open false")
  };
  // const clickHandler=()=>{
  //     alert("ftrjfc")
  // }
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = open ? "hidden" : "auto";
    }
  }, [open]);
  const onSubmitForm = (event) => {
    event.preventDefault();
  };
  return (
    <section className="w-full bg-g21 py-[5%]">
      <div className=" container max-w-none  text-gf grid grid-cols-12 lg:grid-cols-12 lg:gap-16">
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center items-start ">
          <SectionTitle classes="text-gYellow" title="Join our team" />
          <p className="mb-[2vw]  text-gb0 text-xs lg:text-[1.1458333333333335vw] leading-[1.8rem] lg:leading-[1.95vw] text-justify font-PoppinsRegular ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <OutlinedYellowButton handleOpen={handleOpen} title="Join Now" />
          <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
            className="modalBoxContainerBg"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "90%",
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
                borderRadius: "18px",
              }}
            >
              {/* <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography> */}
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-7 h-7  lg:w-9 lg:h-9 rounded-full bg-gd9 flex items-center justify-center p-1"
                >
                  <AiOutlineClose />
                </button>
              </div>
              <SectionTitle classes="text-gDarkYellow" title="Join our team" />
              <JoinUsBox
                title="Send Message"
                inputClasses=" placeholder-g21 "
                onSubmitForm={onSubmitForm}
                classes="border-[#21212199]"
                buttonStyle="text-gf bg-g21  "
              />
            </Box>
          </Modal>
        </div>
        <div className="col-span-12 lg:col-span-7 ">
          {/* <div className="relative">
              <div className="z-20 absolute left-[10rem] -top-7 w-[8vw] p-4 bg-gYellow text-center text-g21  rounded-full">
                <span className="my-[2vw]  text-g21 text-xs lg:text-[1.1rem] leading-[1.8rem]  text-justify font-PoppinsRegular ">Content</span>
              </div>
              <div className="z-20 absolute left-[9rem] -bottom-16 w-[8vw] p-4 bg-gd9 text-center text-g21  rounded-full">
                <span className="my-[2vw]  text-g21 text-xs lg:text-[1.1rem] leading-[1.8rem]  text-justify font-PoppinsRegular ">Develop</span>
              </div>
              <div className="z-20 absolute right-0 -top-2 w-[8vw] p-4 bg-gYellow text-center text-g21  rounded-full">
                <span className="my-[2vw]  text-g21 text-xs lg:text-[1.1rem] leading-[1.8rem]  text-justify font-PoppinsRegular ">Design</span>
              </div>
              <div className="z-20 absolute right-[9.5rem] -bottom-8 w-[8vw] p-4 bg-gd9 text-center text-g21  rounded-full">
                <span className="my-[2vw]  text-g21 text-xs lg:text-[1.1rem] leading-[1.8rem]  text-justify font-PoppinsRegular ">Marketing</span>
              </div>

            <ul className=" relative flex justify-center items-start divide-x-[3px] divide-g96">
              

              <li className="z-0 h-[15.625rem] lg:h-[35rem] flex-1 overflow-hidden relative flex flex-col justify-end items-center" >
                <span className="my-[3vw] mx-auto text-center text-gb0 text-xs lg:text-[1.1rem] leading-[1.8rem] font-PoppinsRegular ">
                  Junior UI <br /> Designer 1
                </span>
                <div className=" relative bottom-5 left-9 lg:left-16 w-[10.625rem] h-[10.625rem] lg:w-[20rem] lg:h-[20rem] rounded-full border-[1px] " >
                  <Image
                    width={30}
                    height={30}
                    alt={"logo picture | img | لوگو | گندم | سایت | طراحی | وبسایت | موبایل | نرم افزار | دیزای| شرکت نرم افزاری گندم | لوگوی گندم"}
                    src={"/g3-2.jpg"}
                    className=" rounded-full w-full h-full grayscale object-cover"
                  />

                  <Image
                    width={30}
                    height={30}
                    alt={"logo picture | img | لوگو | گندم | سایت | طراحی | وبسایت | موبایل | نرم افزار | دیزای| شرکت نرم افزاری گندم | لوگوی گندم"}
                    src={"/Polygon 2.svg"}
                    className="z-50 absolute -bottom-[19px] left-[45%]"
                  />
                </div>
              </li>
              <li className="z-0 h-[15.625rem] lg:h-[35rem] flex-1 overflow-hidden relative flex flex-col justify-start items-center" >
                <div className="relative top-12 w-full h-[14.076rem] lg:h-[21.688rem] rounded-full border-[1px] " >
                  <Image
                    width={30}
                    height={30}
                    alt={"logo picture | img | لوگو | گندم | سایت | طراحی | وبسایت | موبایل | نرم افزار | دیزای| شرکت نرم افزاری گندم | لوگوی گندم"}
                    src={"/g2.jpg"}
                    className="w-full h-full object-cover grayscale rounded-full "
                  />
                  <Image
                    width={30}
                    height={30}
                    alt={"logo picture | img | لوگو | گندم | سایت | طراحی | وبسایت | موبایل | نرم افزار | دیزای| شرکت نرم افزاری گندم | لوگوی گندم"}
                    src={"/Polygon 2.svg"}
                    className="z-50 absolute -top-[18px] left-[45%]  transform rotate-180"
                  />
                  <div className="rounded-full z-0 absolute bottom-0 top-0 right-0 left-0 bg-[#FFD101] opacity-30 "></div>
                </div>
                <span className="my-[4vw] mx-auto text-center text-gb0 text-xs lg:text-[1.1rem] leading-[1.8rem] font-PoppinsRegular ">
                  Junior UI <br /> Designer 3
                </span>
              </li>
              <li className="z-0 h-[15.625rem] lg:h-[35rem] flex-1 overflow-hidden relative flex flex-col justify-end items-center " >
                <span className="my-[4vw] mx-auto text-center text-gb0 text-xs lg:text-[1.1rem] leading-[1.8rem] font-PoppinsRegular ">
                  Junior UI <br /> Designer 2
                </span>
                <div className=" relative bottom-10 w-full h-[14.076rem] lg:h-[21.688rem] rounded-full border-[1px] " >
                  <Image
                    width={30}
                    height={30}
                    alt={"logo picture | img | لوگو | گندم | سایت | طراحی | وبسایت | موبایل | نرم افزار | دیزای| شرکت نرم افزاری گندم | لوگوی گندم"}
                    src={"/g2.jpg"}
                    className="w-full h-full object-cover grayscale rounded-full"
                  />
                  <Image
                    width={30}
                    height={30}
                    alt={"logo picture | img | لوگو | گندم | سایت | طراحی | وبسایت | موبایل | نرم افزار | دیزای| شرکت نرم افزاری گندم | لوگوی گندم"}
                    src={"/Polygon 2.svg"}
                    className="z-50 absolute -bottom-[18px] left-[45%] "
                  />
                </div>
              </li>
              <li className="z-0 h-[15.625rem] lg:h-[35rem] flex-1 overflow-hidden relative flex flex-col justify-start items-center " >
                <div className=" relative top-20 right-9 lg:right-16 w-[10.625rem] h-[10.625rem] lg:w-[20rem] lg:h-[20rem] rounded-full border-[1px] " >
                  <Image
                    width={30}
                    height={30}
                    alt={"logo picture | img | لوگو | گندم | سایت | طراحی | وبسایت | موبایل | نرم افزار | دیزای| شرکت نرم افزاری گندم | لوگوی گندم"}
                    src={"/g3-2.jpg"}
                    className="w-full h-full object-cover grayscale rounded-full"
                  />
                  <Image
                    width={30}
                    height={30}
                    alt={"logo picture | img | لوگو | گندم | سایت | طراحی | وبسایت | موبایل | نرم افزار | دیزای| شرکت نرم افزاری گندم | لوگوی گندم"}
                    src={"/Polygon 2.svg"}
                    className="z-50 absolute -top-[19px] left-[50%]"
                  />
                  <div className="rounded-full z-0 absolute bottom-0 top-0 right-0 left-0 bg-[#FFD101] opacity-30 "></div>
                </div>
                <span className="my-[6.5vw] mx-auto text-center text-gb0 text-xs lg:text-[1.1rem] leading-[1.8rem] font-PoppinsRegular ">
                  Junior UI <br /> Designer 4
                </span>
              </li>

            </ul>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default JoinSection;
