import { CiLaptop } from "react-icons/ci";
import { BsPhone } from "react-icons/bs";
import { TbWorldSearch } from "react-icons/tb";
import React from "react";

export interface ITranslateStaticServiceText {
    title: string
    context: string
}
export interface ILanguagesTranslateStaticServiceText {
    fa?: ITranslateStaticServiceText
    en?: ITranslateStaticServiceText
}
export const translateStaticServiceText: ILanguagesTranslateStaticServiceText = {
    en: {
        title: "Our services",
        context: "Explore our comprehensive suite of services, from innovative UI/UX design to responsive web and mobile solutions, expert SEO, captivating graphic design, and streamlined software solutions:"
    },
    fa: {
        title: "خدمات ما",
        context: "مجموعه کامل خدمات ما را کشف کنید، از طراحی نوآورانه UI/UX گرفته تا راه‌حل‌های واکنش‌گرا وب و موبایل، سئو تخصصی، طراحی گرافیک جذاب، و راه‌حل‌های نرم‌افزاری بهینه شده:"
    },
}

export interface ITranslate {
    id: number
    number: string
    svg: any
    alt: string,
    title: string,
    desc: string,
    shortDesc: string,
    link: string,
}
export interface ILanguages {
    fa?: ITranslate[]
    en?: ITranslate[]
}
export const translate: ILanguages = {
    fa: [
        {
            id: 1,
            number: "01",
            svg: <CiLaptop />,
            alt: "خدمات تقسیم‌بندی وب",
            title: "وب",
            desc: "حضور آنلاین خود را با وب‌سایت‌های بصری خیره‌کننده و پاسخگو که با برند شما سازگار است، متحول کنید.",
            shortDesc: "خدمات طراحی وب",
            link: "/",
        },
        {
            id: 2,
            number: "02",
            svg: <BsPhone />,
            alt: "خدمات تقسیم‌بندی موبایل",
            title: "اپ",
            desc: "در دنیای موبایل با برنامه‌های پیشرفته‌ برای تجربه کاربری روان و کارآمد پیشرو باشید.",
            shortDesc: "خدمات طراحی اپ",
            link: "/",
        },
        {
            id: 3,
            number: "03",
            svg: <TbWorldSearch />,
            alt: "خدمات تقسیم‌بندی سئو",
            title: "سئو",
            desc: "با خدمات تخصصی سئو ما، دید آنلاین خود را افزایش دهید و ترافیک ارگانیک جذب کنید.",
            shortDesc: "کلیدواژه‌های سئو",
            link: "/service/seo",
        },
        {
            id: 4,
            number: "04",
            svg: <CiLaptop />,
            alt: "خدمات تقسیم‌بندی گرافیک",
            title: "گرافیک",
            desc: "با طراحی‌های بصری جذاب که هویت منحصر به فرد برند شما را منعکس می‌کند، تأثیر ماندگاری بگذارید.",
            shortDesc: "خدمات طراحی گرافیک",
            link: "/",
        },
        {
            id: 5,
            number: "05",
            svg: <BsPhone />,
            alt: "خدمات تقسیم‌بندی UI/UX",
            title: "UI/UX",
            desc: "تجربه‌های کاربری یکپارچه و جذاب را با خدمات طراحی UI/UX ما ایجاد کنید.",
            shortDesc: "خدمات طراحی UI/UX",
            link: "/",
        },
        {
            id: 6,
            number: "06",
            svg: <TbWorldSearch />,
            alt: "خدمات تقسیم‌بندی مهندس نرم‌افزار",
            title: "نرم‌افزار",
            desc: "عملیات را با راه‌حل‌های نرم‌افزاری سفارشی بهینه کنید و اطمینان حاصل کنید که کارایی، مقیاس‌پذیری و نوآوری برای کسب‌وکار شما فراهم باشد.",
            shortDesc: "خدمات نرم‌افزار",
            link: "/",
        }
    ],
    en:
        [
            {
                id: 1,
                number: "01",
                svg: <CiLaptop />,
                alt: "Web Segmentation Services",
                title: "Web",
                desc: "Transform your online presence with visually stunning and responsive websites tailored to your brand.",
                shortDesc: "Web Design Services",
                link: "/",
            },
            {
                id: 2,
                number: "02",
                svg: <BsPhone />,
                alt: "Mobile Segmentation Services",
                title: "App",
                desc: "Stay ahead in the mobile realm with cutting-edge apps for a smooth and efficient user experience.",
                shortDesc: "App Design Services",
                link: "/",
            },
            {
                id: 3,
                number: "03",
                svg: <TbWorldSearch />,
                alt: "SEO Segmentation Services",
                title: "SEO",
                desc: "Boost your online visibility and drive organic traffic with our expert SEO services.",
                shortDesc: "SEO keywords",
                link: "/service/seo",
            },
            {
                id: 4,
                number: "04",
                svg: <CiLaptop />,
                alt: "Graphic Segmentation Services",
                title: "Graphic",
                desc: "Make a lasting impression with visually compelling designs that reflect your unique brand identity.",
                shortDesc: "Graphic Design Services",
                link: "/",
            },
            {
                id: 5,
                number: "05",
                svg: <BsPhone />,
                alt: "UI/UX Segmentation Services",
                title: "UI/UX",
                desc: "Craft seamless and engaging user experiences with our dedicated UI/UX design service.",
                shortDesc: "UI/UX Design Services",
                link: "/",
            },
            {
                id: 6,
                number: "06",
                svg: <TbWorldSearch />,
                alt: "Software Engineer Segmentation Services",
                title: "Software",
                desc: "Streamline operations with bespoke software solutions, ensuring efficiency, scalability, and innovation for your business.",
                shortDesc: "Software Services",
                link: "/",
            },
        ]
}