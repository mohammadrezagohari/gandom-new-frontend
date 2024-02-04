import React from 'react'
import LgMenu from "@/components/weblog-page-componenet/lg-menu";
import MegaMenu from "@/components/weblog-page-componenet/mega-menu";



function FilterCategoryBox({options,handleChange,setValue,value}) {
  return (
    <>
        <nav className="relative container max-w-none border-b-[1px] border-t-[1px] border-gb8 py-3 lg:py-[0.78125vw] flex items-center justify-between">
          <div className=" order-2 lg:order-1">
             <LgMenu options={options} />
             <MegaMenu options={options} />
          </div>
          <div className="border-[1px] border-g70 rounded-lg p-1 order-1 lg:order-2">
            <select
              className=" focus:outline-none text-g70"
              value={value}
              onChange={handleChange}
            >
              {options.map((option, i) => (
                <option className="text-g70 mt-8" key={i} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </nav>
    </>
  )
}

export default FilterCategoryBox