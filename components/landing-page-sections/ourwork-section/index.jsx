
import SectionTitle from "@/components/common/section-title";
import OutlinedButton from "@/components/common/buttons/outlined";
import ParallaxPart from "@/components/landing-parallax-section";
// import image1 from '/pic1.png'
// import image2 from '/pic2.png'
// import image3 from '/pic3.png'
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollSmoother } from 'scroll-smoother';

// gsap.registerPlugin(ScrollTrigger);

function OurworkSection() {


  return (
    <section className="w-full mt-24">
      <div className="container">
        <SectionTitle classes="text-g21" title="Our Work" />
        <p className="text-g4c lg:text-xl lg:leading-9 text-base leading-6 font-PoppinsMedium pb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae
        </p>
        <ParallaxPart  />

        <div className="py-4 flex justify-center items-center">

         <OutlinedButton classes="border-g8 text-g8"  title='See More' link='/' />
        </div>
      </div>
    </section>
  );
}

export default OurworkSection;
