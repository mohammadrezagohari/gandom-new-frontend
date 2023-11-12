"use client";
import OutlinedYellowButton from "@/components/common/buttons/outlinedYellow";
import React, { useState, useEffect } from "react";
import SectionTitle from "@/components/common/section-title";
import Image from "next/image";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import JoinUsBox from "@/components/joinus-box-form";
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
      <div className="container  text-gf grid grid-cols-12 lg:grid-cols-12">
        {/* <div className="w-full text-gf grid grid-cols-12 lg:grid-cols-12"> */}

        <div className="col-span-12 lg:col-span-5 ">
          <SectionTitle classes="text-gYellow" title="Join our team" />
          <p className="mb-[2vw]  text-gb0 text-xs lg:text-[1.1rem] leading-[1.8rem]  text-justify font-PoppinsRegular ">
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
          <div className="relative flex justify-center items-start divide-x-[3px] divide-g96">

            {/*  texts */}
            <div className="absolute left-[11.625rem] -top-10 w-[8vw] p-4 bg-gYellow text-center text-g21  rounded-full">
              <span className="my-[2vw]  text-g21 text-xs lg:text-[1.1rem] leading-[1.8rem]  text-justify font-PoppinsRegular ">Content</span>
            </div>
            <div className="absolute left-[10.813rem] -bottom-10 w-[8vw] p-4 bg-gd9 text-center text-g21  rounded-full">
              <span className="my-[2vw]  text-g21 text-xs lg:text-[1.1rem] leading-[1.8rem]  text-justify font-PoppinsRegular ">Develop</span>
            </div>

            <div className="absolute right-10 -top-3 w-[8vw] p-4 bg-gYellow text-center text-g21  rounded-full">
              <span className="my-[2vw]  text-g21 text-xs lg:text-[1.1rem] leading-[1.8rem]  text-justify font-PoppinsRegular ">Design</span>
            </div>
            <div className="absolute right-[11.5rem] -bottom-10 w-[8vw] p-4 bg-gd9 text-center text-g21  rounded-full">
              <span className="my-[2vw]  text-g21 text-xs lg:text-[1.1rem] leading-[1.8rem]  text-justify font-PoppinsRegular ">Marketing</span>
            </div>

              {/*  pictures */}
            <div className="h-[53vh] lg:h-[73vh] py-[5%] overflow-hidden  flex flex-col justify-end items-center">
              <span className="my-[2vw]  text-gb0 text-xs lg:text-[1.1rem] leading-[1.8rem]  text-justify font-PoppinsRegular ">
                Junior UI Designer
              </span>
              <div
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: `url(https://picsum.photos/523/768/?random4)`,
                }}
                className="relative grayscale -right-10 lg:-right-16 bottom-10 w-[11rem] h-[11rem] lg:w-[15rem] lg:h-[15rem] border-[1px] border-red-400 rounded-full"
              >
                {/* <Image
                    width={30}
                    height={30}
                    alt={"logo picture"}
                    src={"/about/images (2).jpg"}
                    className="w-full h-full grayscale rounded-full object-cover"
                  /> */}
                <Image
                  width={30}
                  height={30}
                  alt={"logo picture | img | لوگو | گندم | سایت | طراحی | وبسایت | موبایل | نرم افزار | دیزای| شرکت نرم افزاری گندم | لوگوی گندم"}
                  src={"/Polygon 2.svg"}
                  className="absolute -bottom-[15.5px] left-[45%]"
                />
              </div>
            </div>

            <div className="h-[53vh] lg:h-[73vh] py-[5%] flex flex-col justify-start items-center">
              <div
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: `url(https://picsum.photos/523/768/?random3)`,
                }}
                className="relative w-[5.5rem] lg:w-[10.5rem] h-[30vh] lg:h-[40vh] border-[1px] border-red-400 rounded-full"
              >
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-gYellow opacity-50 rounded-full"></div>
                <Image
                  width={30}
                  height={30}
                  alt={"logo picture | img | لوگو | گندم | سایت | طراحی | وبسایت | موبایل | نرم افزار | دیزای| شرکت نرم افزاری گندم | لوگوی گندم"}
                  src={"/Polygon 2.svg"}
                  className="absolute -top-[16px] left-[50%] transform rotate-180"
                />
              </div>
              <span className="my-[2vw]  text-gb0 text-xs lg:text-[1.1rem] leading-[1.8rem]  text-justify font-PoppinsRegular ">
                Junior UI Designer
              </span>
            </div>

            <div className="h-[53vh] lg:h-[73vh] py-[5%] flex flex-col justify-end items-center">
              <span className="my-[2vw]  text-gb0 text-xs lg:text-[1.1rem] leading-[1.8rem]  text-justify font-PoppinsRegular ">
                Junior UI Designer
              </span>
              <div
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: `url(https://picsum.photos/523/768/?random1)`,
                }}
                className="relative  w-[5rem] lg:w-[10rem]  h-[30vh] lg:h-[40vh] border-[1px] border-red-400 rounded-full"
              >
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-gYellow opacity-50 rounded-full"></div>
                {/* <Image
                    width={30}
                    height={30}
                    alt={"logo picture"}
                    src={"/about/images (2).jpg"}
                    className="w-full h-full grayscale rounded-full object-cover"
                  /> */}
                <Image
                  width={30}
                  height={30}
                  alt={"logo picture | img | لوگو | گندم | سایت | طراحی | وبسایت | موبایل | نرم افزار | دیزای| شرکت نرم افزاری گندم | لوگوی گندم"}
                  src={"/Polygon 2.svg"}
                  className="lg:block hidden absolute -bottom-[15.5px] left-[45%]"
                />
              </div>
            </div>

            <div className="h-[53vh] lg:h-[73vh] py-[5%] overflow-hidden">
              <div
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: `url(https://picsum.photos/523/768/?random2)`,
                }}
                className="relative grayscale -left-20 lg:-left-16 top-10 w-[11rem] h-[11rem] lg:w-[15rem] lg:h-[15rem] border-[1px] border-red-400 rounded-full"
              >
                {/* <Image
                    width={30}
                    height={30}
                    alt={"logo picture"}
                    src={"/about/images (2).jpg"}
                    className="w-full h-full grayscale rounded-full object-cover"
                  /> */}
                <Image
                  width={30}
                  height={30}
                  alt={"logo picture | img | لوگو | گندم | سایت | طراحی | وبسایت | موبایل | نرم افزار | دیزای| شرکت نرم افزاری گندم | لوگوی گندم"}
                  src={"/Polygon 2.svg"}
                  className="absolute -top-[16px] left-[50%] transform rotate-180"
                />
              </div>
              <span className="my-[2vw] text-gb0 text-xs lg:text-[1.1rem] leading-[1.8rem]  text-justify font-PoppinsRegular ">
                Junior UI Designer
              </span>
            </div>

          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}

export default JoinSection;
