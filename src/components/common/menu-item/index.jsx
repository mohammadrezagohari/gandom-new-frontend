"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import useLocale from "@/src/hooks/locale/useLocale";

const MenuItem = ({
  fun,
  title,
  desc,
  link,
  classes,
  titleClass,
  descClass,
  localActive = null,
}) => {
  const pathname = usePathname();
  //   const localActive = useLocale();
  console.log("pathname", pathname, localActive);
  return (
    <Link
      onClick={fun}
      href={link}
      className={`${
        pathname == `/${localActive}` ||
        pathname == `/${localActive}/service/seo` ||
        pathname == `/${localActive}/about-us`
          ? "menuItem"
          : "menuItemWhiteBg"
      } ${classes} transition-all duration-300 lg:h-[9.440104166666666vw] h-[71px] border-[1px] text-center rounded-lg col-span-1`}
    >
      <h4
        className={`lg:text-[4.361979166666667vw] lg:leading-[5.517578125vw] text-[38px] leading-[40.68px]  ${titleClass}`}
      >
        {title}
      </h4>
      <span
        className={`text-gDarkYellow lg:text-[1.5625vw] lg:leading-[1.8313802083333333vw] text-[12px] leading-[14.06px] ${descClass}`}
      >
        {desc}
      </span>
    </Link>
  );
};

export default MenuItem;
