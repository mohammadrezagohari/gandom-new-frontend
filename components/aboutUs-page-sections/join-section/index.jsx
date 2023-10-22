"use client"
import OutlinedYellowButton from '@/components/common/buttons/outlinedYellow'
import React,{useState,useEffect} from 'react'
import SectionTitle from "@/components/common/section-title";
import Image from "next/image";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

function JoinSection() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true)
    // alert("open true")
  };
  const handleClose = () => {
    setOpen(false)
    // alert("open false")
  } 
  // const clickHandler=()=>{
  //     alert("ftrjfc")
  // }
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = open ? "hidden" : "auto";
    }
  }, [open]);
  return (
    <section className='w-full bg-g21 py-[5%]'>
      <div className="container  text-gf grid grid-cols-12 lg:grid-cols-12">
        {/* <div className="w-full text-gf grid grid-cols-12 lg:grid-cols-12"> */}

          <div className="col-span-12 lg:col-span-5 ">
            <SectionTitle
              classes="text-gYellow"
              title="Join our team"
            />
            <p  className="mb-[2vw]  text-gb0 text-xs lg:text-[1.1rem] leading-[1.8rem]  text-justify font-PoppinsRegular ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
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
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 400,
                  bgcolor: 'background.paper',
                  border: '2px solid #000',
                  boxShadow: 24,
                  p: 4,
                }}
              
              >
                <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
              </Box>
            </Modal>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="flex justify-center items-start divide-x-[3px] divide-g96">

              <div className="p-5 h-[63vh]">1</div>

              <div className="h-[63vh] flex flex-col justify-start items-center">
                <div className="relative w-[11.2vw] h-[40vh] border-[1px] border-red-400 rounded-full">
                  <div className="absolute top-0 bottom-0 left-0 right-0 opacity-50">1</div>
                  <Image
                    width={30}
                    height={30}
                    alt={"logo picture"}
                    src={"/Polygon 2.svg"}
                    className="absolute -top-[16px] left-[50%] transform rotate-180"
                  />
                </div>
                <span className="my-[2vw]  text-gb0 text-xs lg:text-[1.1rem] leading-[1.8rem]  text-justify font-PoppinsRegular ">
                  Junior UI
                  Designer
                </span>
              </div>

              <div className="h-[63vh] flex flex-col justify-end items-center">
                <span className="my-[2vw]  text-gb0 text-xs lg:text-[1.1rem] leading-[1.8rem]  text-justify font-PoppinsRegular ">
                  Junior UI
                  Designer
                </span>
                <div className="relative w-[11.2vw] h-[40vh] border-[1px] border-red-400 rounded-full">
                  <Image
                    width={30}
                    height={30}
                    alt={"logo picture"}
                    src={"/Polygon 2.svg"}
                    className="absolute -bottom-[15.5px] left-[45%]"
                  />
                </div>
              </div>

              <div className="p-5 h-[63vh]">4</div>

            </div>
          </div>
        {/* </div> */}
      </div>
    </section> 
  )
}

export default JoinSection