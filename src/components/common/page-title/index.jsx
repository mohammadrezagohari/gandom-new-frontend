import React from "react";

function PageTitle({ title, classes }) {
  return (
   
       
         <h1 className={`${classes} text-g21 lg:text-[6.8em] text-center text-[3.125em]  font-Holispay container`}>
         {title}
        </h1>

  );
}

export default PageTitle;