"use client";

import React, { useState } from "react";
import { PiUserLight } from "react-icons/pi";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function ReplayBox() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="w-[90%] border-[1px] border-gb9 border-opacity-[20%]  p-5 rounded-xl ">
      <div className="flex items-center justify-start">
        <div className="flex items-center justify-center">
          {/* <div className="w-[3rem] h-[3rem] rounded-full bg-[#BCBCBC80]"></div> */}
          <div className="w-[2.3rem] h-[2.3rem] flex items-center justify-center rounded-full bg-[#BCBCBC80] ">
            <PiUserLight className="text-g75 text-lg" />
          </div>
          <div className="mx-2 h-[2.3rem] w-[3px] bg-gDarkYellow rounded-full  "></div>
          <div className="">
            <span
              className={`block text-g4c text-[0.8rem] text-start    font-Holispay`}
            >
              Ali Asadpour
              {/* We are a leader in the field of web and mobile software services */}
            </span>

            <span
              className={`block text-g8 text-[0.8rem] text-start  font-Holispay`}
            >
              20 July 2023
              {/* We are a leader in the field of web and mobile software services */}
            </span>
          </div>
        </div>
      </div>

      <p className="text-g8 lg:text-[0.75rem] leading-5   font-PoppinsLight py-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempormpor incididunt ut labore et dolore magna.Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore .
      </p>

      <div>
        <Accordion
          className="!shadow-none !px-0"
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              className="text-g4c text-[0.55rem] lg:text-[0.743rem] lg:leading-5  "
              sx={{ width: "100%", flexShrink: 0 }}
            >
              Response
              <ExpandMoreIcon
                className={`mx-2 transform transition-all duration-200 ${
                  expanded ? "rotate-180" : "rotate-0"
                } `}
              />
            </Typography>
            {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
      
      </div>

      {/* <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div> */}
    </div>
  );
}

export default ReplayBox;
