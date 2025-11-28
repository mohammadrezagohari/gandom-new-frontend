import React from "react";
import SectionTitle from "../../../common/section-title";
import ServiceSlider from "../../../all-sliders-component/landing-sliders/service-slider";
import { ITranslate, ITranslateStaticServiceText, translate, translateStaticServiceText } from "./translate";
import { useLocale } from "next-intl";

function ServiceSection() {
    const locale = useLocale();

    const service: ITranslate[] = locale == "fa" ? translate.fa : translate.en;
    const StaticServiceText: ITranslateStaticServiceText = locale == "fa" ? translateStaticServiceText.fa : translateStaticServiceText.en;
    return (
        <section className="w-full  bg-gf5 relative ">
            <div className="serviceCont py-7 lg:py-0">
                <div className="hidden lg:grid lg:grid-cols-12  min-h-[42.31vw] mid:gap-9 lg:gap-7">
                    <ServiceSlider service={service} title={StaticServiceText.title} context={StaticServiceText.context} lang={locale} />
                </div>
                <div className="container lg:hidden">
                    <SectionTitle classes="text-g21" title={StaticServiceText.title} lang={locale} />
                    <p className={`text-g8 lg:text-2xl lg:leading-9 text-justify text-base leading-6 ${locale == "fa" ? "yekan-bakh-font" : "font-PoppinsLight"} pb-6 `}>
                        {StaticServiceText.context}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                        {service.map((item, i) => (
                            <div
                                key={i}
                                className=" !flex !flex-col !justify-between !items-start !gap-5  border-[1px] border-g6f  rounded-lg p-4 "
                            >
                                <h5 className="text-[26px] leading-[30.47px] lg:text-[48px] lg:leading-[56.25px] inline-block text-ge4 pb-[5%] border-b-[1.5px] border-gYellow">
                                    {item.number}
                                </h5>
                                <div className="w-[62px] text-g21 h-[62px] rounded-full border-[1px] border-ge4 flex justify-center items-center ">
                                    {item.svg}
                                </div>
                                <h4 className={`lg:text-[64px] lg:leading-[28.13px] text-[30px] leading-[33.9px] ${locale == "fa" ? "rokh-font-bold" : "font-Holispay"} `}>
                                    {item.title}
                                </h4>
                                <h3 className={`text-gDarkYellow lg:text-2xl lg:leading-[28.13px] text-[12px] leading-[14.06px] ${locale == "fa" ? "yekan-bakh-font" : "font-PoppinsLight"}`}>
                                    {item.shortDesc}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;
