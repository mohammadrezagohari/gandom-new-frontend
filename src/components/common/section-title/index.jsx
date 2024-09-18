import React from "react";

function SectionTitle({ title, classes, lang }) {
  return (
    <h2
      className={`${classes} lg:text-[3.8vw] lg:leading-[5.51vw] text-[38px] leading-[40.68px] ${
        lang == "fa" ? "rokh-font-bold" : "font-Holispay"
      }  py-5`}
    >
      {title}
    </h2>
  );
}

export default SectionTitle;
