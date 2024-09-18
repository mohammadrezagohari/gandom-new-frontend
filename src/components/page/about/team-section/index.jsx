import SectionTitle from "@/src/components/common/section-title";
import OutlinedButton from "@/src/components/common/buttons/outlined";
import Link from "next/link";
import Image from "next/image";
import GridCard from "@/src/components/common/cards/grid-card-about-page";

function TeamSection() {
  const statisticsItems = [
    {
      id: 1,
      number: "6+",
      title: "Developers",
    },
    {
      id: 2,
      number: "4+",
      title: "Designers",
    },
    {
      id: 3,
      number: "4+",
      title: "SEO",
    },
  ];
  const gridItems = [
    {
      id: 1,
      parentClasses: "bg-gYellow rounded-t-full overflow-hidden inline-block ",
      hoverClasses: "",
      position: "CEO | UI/UX",
      name: "Ali Asadpuor",
      img: "/webp/GT_AA.png",
    },

    {
      id: 2,
      parentClasses:
        "bg-g21 overflow-hidden inline-block rounded-tr-[50%] lg:rounded-none ",
      hoverClasses: "",
      position: "SEO Techneical",
      name: "Mostafa Barimani",
      img: "/webp/topusers/motafabarimani.png",
    },
    {
      id: 3,
      parentClasses:
        "bg-gYellow rounded-tr-[50%] overflow-hidden hidden lg:inline-block",
      hoverClasses: "",
      position: "CEO | Fullstack",
      name: "Mohamadreza Gohari",
      img: "/webp/GT_MG.png",
    },
    {
      id: 4,
      parentClasses: "bg-g21  rounded-bl-[50%] overflow-hidden inline-block",
      hoverClasses: "",
      position: "Account Manager",
      name: "Amirreza Ranjbar",
      img: "/webp/topusers/amirrezaranjbar.png",
    },
    {
      id: 5,
      parentClasses:
        "bg-gYellow overflow-hidden inline-block rounded-b-full lg:rounded-none",
      hoverClasses: "",
      position: "UI/UX Designer",
      name: "Atefe Mohseni",
      img: "/webp/GT_AM.png",
    },
    {
      id: 6,
      parentClasses:
        "bg-g21 rounded-br-[50%] overflow-hidden hidden lg:inline-block",
      hoverClasses: "",
      position: "UI/UX Designer",
      name: "Bita Ghanbari",
      img: "/webp/topusers/bitaghanbari.png",
    },
  ];
  return (
    <section className="w-full">
      <div className=" container max-w-none h-auto lg:min-h-screen bg-gf flex flex-col items-center justify-start gap-8">
        <div className="w-full lg:w-[50%] text-center">
          <SectionTitle
            classes="text-g21"
            title="Professional Staff, Professional Results"
          />
        </div>

        <div className="w-full grid grid-cols-12 lg:grid-cols-12 lg:gap-3 ">
          <div className=" lg:order-1 order-3 col-span-12 lg:col-span-2 flex items-center justify-start">
            <div className="w-full h-full flex flex-col justify-center items-center lg:items-start gap-12">
              <h5 className="hidden lg:block text-g8 text-xs lg:text-[1.25vw] leading-[1.8rem] lg:leading-[2vw]  text-justify font-PoppinsRegular line-clamp-5 ">
                Log in here to get to know all our team members
              </h5>
              <OutlinedButton
                classes="border-g8 text-g8"
                title="see all"
                link="/team"
              />
            </div>
          </div>
          {/* parentClasses="bg-[#ccc] lg:rounded-bl-[50%] rounded-bl-[80%] h-[7.564rem]  lg:h-[12.5rem]" hoverClasses="lg:rounded-bl-[50%] rounded-bl-[80%] " */}
          <Grid gridItems={gridItems} />

          <div className="my-10 lg:my-auto lg:order-3 order-2 col-span-12 lg:col-span-2 flex items-center  justify-center lg:justify-end">
            <ul className="flex flex-row items-center  justify-between  lg:flex-col lg:justify-center lg:items-start gap-10 lg:gap-[1.3020833333333333vw] ">
              {statisticsItems.map((item, i) => (
                <li key={i} className="text-center lg:text-start">
                  <span className="text-g21 lg:text-[3.8541666666666665vw] lg:leading-[5.517578125vw] text-[38px] leading-[40.68px] font-Holispay">
                    {item.number}
                  </span>
                  <span className="text-g70 text-xs lg:text-[1.1979166666666665vw] text-justify font-PoppinsRegular line-clamp-5">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;

export function Grid({ gridItems }) {
  return (
    <div className=" lg:px-5 lg:order-2 order-1 col-span-12 lg:col-span-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-2 lg:gap-[1vw] lg:h-[36vw] ">
      {gridItems.map((g) => (
        <GridCard
          key={g.id}
          parentClasses={g.parentClasses}
          hoverClasses={g.hoverClasses}
          position={g.position}
          name={g.name}
          link={`/team/${g.id}/${g.name}`}
          img={g.img}
        />
      ))}
    </div>
  );
}
