import React from "react";

function SectionCounter({ classes, lineHeight, title, count,writingMode }) {
  return (
    <div
      className={` flex flex-col items-center justify-between  ${classes}`}
    >
      <span className="lg:text-[1.5833333333333333vw] inline-block  font-Holispay">
        {count}
      </span>
      <div className={`w-[1px]  ${lineHeight}`}></div>
      <span
        style={{ writingMode: `${writingMode}` }}
        className=" lg:text-[1.4583333333333333vw] inline-block text-gDarkYellow font-Holispay"
      >
        {title}
      </span>
    </div>
  );
}
// "vertical-lr"
export default SectionCounter;
