import React from "react";
import FilledButton from "../../../common/buttons/filled";
import FilledYellowButton from "../../../common/buttons/fillYellow";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

function HeadSection() {
    const translate = useTranslations("landing");
    const shareTranslate = useTranslations("share");
    const locale = useLocale();
    return (
        <section className="w-full bg-g21 h-auto lg:h-screen" id="landing_header">
            {/* headerlandingGandomLogo */}
            <div className="serviceCont py-[4vw] grid grid-cols-1 lg:grid-cols-2 text-gf gap-7 lg:gap-0">
                <div className=" relative h-full order-2 lg:order-1">
                    <div className="absolute bottom-3 left-0 w-[12.5vw] lg:block hidden ">
                        <Image
                            width={100}
                            height={100}
                            alt={"head picture"}
                            src={"/landing/LTwoSquare.svg"}
                            className="w-full"
                        />
                    </div>
                    <div className="absolute right-0 w-[14.5vw] lg:block hidden ">
                        <Image
                            width={100}
                            height={100}
                            alt={"head picture"}
                            src={"/landing/RTwoSquare.svg"}
                            className="w-full"
                        />
                    </div>

                    <div className="container h-full flex flex-col items-start justify-start">
                        <h1
                            className={`text-gYellow lg:text-[5vw]  text-[3em]  ${locale == "fa" ? "rokh-font-bold" : "font-Holispay"
                                } `}
                        >
                            {translate("our_specialty.title")}
                        </h1>
                        <h2
                            className={`text-gf lg:text-[3.75vw]  text-[2em] leading-[2rem] lg:leading-[6.16vw] ${locale == "fa" ? "rokh-font-bold" : "font-Holispay"
                                }  font-Holispay `}
                        >
                            {translate("our_specialty.sub_title")}
                        </h2>
                        <p
                            className={`text-gf lg:text-[1.5rem] text-justify lg:leading-[2.34375vw] text-base leading-6 ${locale == "fa" ? "yekan-bakh-font" : "font-PoppinsLight"
                                } pb-6`}
                        >
                            {translate("our_specialty.context")}
                        </p>
                        <div className="flex items-center lg:justify-start justify-between gap-3 w-full lg:w-auto">
                            <FilledButton
                                locale={locale}
                                link="about-us"
                                title={shareTranslate("button.about_us")}
                                classes="flex-1 lg:flex-none"
                            />
                            <FilledYellowButton
                                locale={locale}
                                classes="w-auto flex-1 lg:flex-none"
                                link={"contact"}
                                title={shareTranslate("button.contact_us")}
                            />
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2 flex lg:justify-end justify-center">
                    <div className="w-[45vw] hidden h-[80%] lg:block overflow-hidden">
                        <Image
                            width={100}
                            height={100}
                            alt={"head picture"}
                            src={"/landing/headerPic.svg"}
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-[90vw] lg:hidden block ">
                        <Image
                            width={100}
                            height={100}
                            alt={"head picture"}
                            src={"/landing/headerPicSm.svg"}
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeadSection;
