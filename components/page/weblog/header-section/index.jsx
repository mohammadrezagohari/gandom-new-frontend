"use client"
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import FilterCategoryBox from "@/components/common/filter-category-box";


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
        <div className="w-full  my-[5vh] gap-4 lg:h-[65vh] grid grid-cols-12 lg:grid-cols-12 lg:grid-rows-2 ">
          <div className="rounded-lg col-span-12 lg:col-span-7 lg:row-span-2 border-2">
            <Image
                width={100}
                height={100}
                className="rounded-lg w-full h-full object-cover"
                src={"/w1.svg"}
                alt={"menu icon"}
              />
          </div>
          <div className="rounded-lg col-span-12 lg:col-span-5 lg:row-span-1  border-2">
          <Image
                width={100}
                height={100}
                className="rounded-lg w-full h-full object-cover"
                src={"/w2.svg"}
                alt={"menu icon"}
              />
          </div>
          <div className="rounded-lg col-span-12 lg:col-span-5 lg:row-span-1 border-2">
          <Image
                width={100}
                height={100}
                className="rounded-lg w-full h-full object-cover"
                src={"/w3.svg"}
                alt={"menu icon"}
              />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderSection;
