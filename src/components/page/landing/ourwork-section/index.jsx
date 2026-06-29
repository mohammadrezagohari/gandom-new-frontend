import SectionTitle from "../../../../components/common/section-title";
import OutlinedButton from "../../../../components/common/buttons/outlined";
import ParallaxPart from "../../../../components/landing-parallax";
import { useLocale, useTranslations } from "next-intl";
// import image1 from '/pic1.png'
// import image2 from '/pic2.png'
// import image3 from '/pic3.png'
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollSmoother } from 'scroll-smoother';

// gsap.registerPlugin(ScrollTrigger);

function OurworkSection() {
  const t = useTranslations("landing.our_work");
  const buttons = useTranslations("share.button");
  const locale = useLocale();
  return (
    <section className="w-full mt-24">
      <div className="container max-w-none">
        <SectionTitle classes="text-g21" title={t("title")} />
        <p className="text-g4c lg:text-[1.3020833333333333vw] lg:leading-[2.34375vw] text-justify text-base leading-6 font-PoppinsLight pb-6">
          {t("context")}
        </p>
        <ParallaxPart />

        <div className="py-4 flex justify-center items-center">
          <OutlinedButton
            classes="border-g8 text-g8"
            title="See More"
            link="/"
          />
        </div>
      </div>
    </section>
  );
}

export default OurworkSection;
