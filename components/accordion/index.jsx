"use client";
import React, { useState } from "react";
import Link from "next/link";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Accordions({title,desc}) {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Accordion
        className="mb-2 !text-gf !bg-transparent !border-b border-[#FFFFFF45] shadow-0 !rounded-0"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="!text-gYellow text-3xl font-PoppinsRegular" />}
          sx={{
            color: "text.white",
          }}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          {/* <Typography sx={{ width: "5%", flexShrink: 0 }}>
                            <span className="text-2xl  !text-gf">&#9776;</span>
                          </Typography> */}
          <Typography
            sx={{
              width: "84%",
              color: "text.white",
              fontFamily: "IRANSans",
            }}
            className="lg:text-[1.58rem] lg:leading-[2.26rem] text-[1.3rem] leading-[1.413rem] font-Holispay !text-gYellow"
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              //   width: "5%",
              //   color: "text.secondary",
              flexShrink: 0,
              //   fontFamily: "IRANSans",
            }}
            className="  text-gb0 text-xs lg:text-[1rem] leading-[1.8rem]  text-justify font-PoppinsRegular line-clamp-5 "
          >
            {desc}
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* <ul>
            <li>
               <input type="radio" id="huey" name="drone" value="huey" checked />
               <label for="huey">Huey</label>
               <div> </div>
            </li>
        </ul> */}
    </>
  );
}

export default Accordions;
