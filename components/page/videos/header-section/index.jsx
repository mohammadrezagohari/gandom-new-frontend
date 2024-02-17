"use client"
import FilterCategoryBox from "@/components/common/filter-category-box";
import React, { useState, useRef } from "react";
// import FilterCategoryBox from './../../common/filter-category-box/index';

function HeaderSection() {
  const [value, setValue] = useState("fruit");
  const options = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "Services", link: "/" },
    { id: 3, label: "About Us", link: "/" },
    { id: 4, label: "Services", link: "/" },
  ];

  const handleChange = (event) => {
    setValue(event.target.value);
    // setAge(event.target.value);
  };

  return (
    <section className="w-full ">
      <div className="container max-w-none">
        <FilterCategoryBox value={value} setValue={setValue} handleChange={handleChange} options={options} />
       
      </div>
    </section>
  );
}

export default HeaderSection;
