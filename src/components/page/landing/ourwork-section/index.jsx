import SectionTitle from "../../../../components/common/section-title";
import OutlinedButton from "../../../../components/common/buttons/outlined";
import ParallaxPart from "../../../../components/landing-parallax";
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
      <div className="container max-w-none">
        <SectionTitle classes="text-g21" title="Our Work" />
        <p className="text-g4c lg:text-[1.3020833333333333vw] lg:leading-[2.34375vw] text-justify text-base leading-6 font-PoppinsLight pb-6">
          Our dedicated support doesn`t end when the project is complete. We are
          always there to support our projects from their basic conception to
          their final state. Our commitment to our clients extends beyond the
          development phase, as we provide ongoing maintenance and updates to
          ensure that our software solutions continue to perform at their best
          and remain compatible with evolving technologies and standards. We
          believe in building long-lasting partnerships based on trust and
          reliability, and we are always ready to assist our clients in
          maximizing the value of our products as their businesses grow and
          evolve.
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
