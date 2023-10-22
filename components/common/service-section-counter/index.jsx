import React from "react";

function SectionCounter({ classes, lineHeight, title, count,writingMode }) {
  return (
    <div
      className={` flex flex-col items-center justify-between  ${classes}`}
    >
      <span className="lg:text-[1.52rem] inline-block  font-Holispay">
        {count}
      </span>
      <div className={`w-[1px]  ${lineHeight}`}></div>
      <span
        style={{ writingMode: `${writingMode}` }}
        className=" lg:text-[1.4rem] inline-block text-gDarkYellow font-Holispay"
      >
        {title}
      </span>
    </div>
  );
}
// "vertical-lr"
export default SectionCounter;
