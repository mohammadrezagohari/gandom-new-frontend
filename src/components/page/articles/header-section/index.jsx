"use client";
import React, { useState, useRef } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import FilterCategoryBox from "@/src/components/common/filter-category-box";
// import LgMenu from "@/components/weblog-page-componenet/lg-menu";
// import MegaMenu from "@/components/weblog-page-componenet/mega-menu";
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
        <FilterCategoryBox
          value={value}
          setValue={setValue}
          handleChange={handleChange}
          options={options}
        />
      </div>
    </section>
  );
}

export default HeaderSection;
