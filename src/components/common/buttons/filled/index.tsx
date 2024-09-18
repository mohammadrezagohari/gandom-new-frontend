import useLocale from "@/src/hooks/locale/useLocale";
import Link from "next/link";
import React from "react";
interface IFilledButton {
    link: string,
    title: string,
    classes?: string,
    locale?: string
}
function FilledButton({ link, title, classes, locale }: IFilledButton) {
    return (
        <>
            <Link
                href={`${locale}/${link}`}
                className={`text-center border-[1px] transform opacity-100 hover:opacity-80  transition duration-700 ease-in-out border-g31 bg-g31 text-gf text-md lg:text-[1.0416666666666667vw] ${locale == "fa" ? "yekan-bakh-font" : "font-PoppinsLight"
                    } rounded-lg py-2 lg:px-[2.6041666666666665vw] ${classes}`}
            >
                {title}
            </Link>
        </>
    );
}

export default FilledButton;
