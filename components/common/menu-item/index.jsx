"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";


const MenuItem = ({fun,title,desc,link,classes,titleClass}) => {
    const pathname = usePathname();
    return (
        <Link
                    onClick={fun}
                    href={link}
                    className={`${
                      pathname == "/" || pathname=="/service/seo" || pathname=="/about-us" ? "menuItem" : "menuItemWhiteBg"
                    } ${classes}`}
                  >
                    <h4 className={`lg:text-[4.361979166666667vw] lg:leading-[5.517578125vw] text-[38px] leading-[40.68px] font-Holispay ${titleClass}`}>
                     {title}
                    </h4>
                    <span className="text-gDarkYellow lg:text-[1.5625vw] lg:leading-[1.8313802083333333vw] text-[12px] leading-[14.06px] font-Holispay ">
                      {desc}
                    </span>
                  </Link>
    );
}

export default MenuItem;