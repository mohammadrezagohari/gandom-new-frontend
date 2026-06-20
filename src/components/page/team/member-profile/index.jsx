import Image from "next/image";
import Link from "next/link";

export default function TeamMemberProfile({ team }) {
  const hasInstagram = team.instagram && team.instagram !== "/";
  const hasLinkedin = team.linkedin && team.linkedin !== "/";

  return (
    <main className="container grid h-auto max-w-none grid-cols-1 overflow-hidden md:grid-cols-2 lg:min-h-screen lg:grid-cols-2 lg:gap-8">
      <div className="camma relative order-2 pb-10 pt-4 lg:order-1 lg:pt-0">
        <h1 className="z-10 flex flex-col font-Holispay">
          <span className="text-[2.25rem] text-gb0 lg:-mb-6 lg:text-[4.166666666666667vw]">{team.name}</span>
          <span className="text-[3.125rem] text-g21 lg:text-[6.25vw]">{team.family}</span>
        </h1>
        <h2 className="font-PoppinsLight text-[1.25rem] text-gDarkYellow lg:text-[2.0833333333333335vw]">{team.position}</h2>
        {team.joinedAt && (
          <div className="z-10 my-3 flex gap-2 font-PoppinsLight lg:my-5">
            <span className="text-[0.75rem] text-gb0 lg:text-[1.5625vw]">joined us:</span>
            <span className="text-[0.75rem] text-g70 lg:text-[1.5625vw]">{team.joinedAt}</span>
          </div>
        )}
        <p className="whitespace-pre-wrap text-justify font-PoppinsLight text-[0.9rem] leading-7 text-g70 lg:text-[1.3vw] lg:leading-[2vw]">{team.about}</p>
        <h3 className="mb-2 mt-6 font-PoppinsLight text-[1.25rem] text-gDarkYellow lg:mb-3 lg:text-[2.0833333333333335vw]">Skills:</h3>
        <ul className="flex flex-wrap gap-2 lg:gap-[0.78125vw]">
          {team.skills.map((skill) => (
            <li key={skill} className="rounded-[0.9375rem] border border-gd9 px-2 py-1 text-[0.75rem] text-g70 lg:px-[0.78125vw] lg:py-[0.5208333333333334vw] lg:text-[1.3020833333333333vw]">{skill}</li>
          ))}
        </ul>
      </div>

      <div className="relative order-1 mt-2 flex items-end justify-between lg:order-2 lg:mt-1">
        <div className="absolute right-0 top-0 z-10 h-[12rem] lg:h-[21vw]">
          <Image className="h-full w-full" width={400} height={400} alt="" src="/img/commaone.png" />
        </div>
        <div className="relative z-0 h-full w-[90%] pt-4 lg:w-[46vw] lg:pt-0">
          <Image className="h-full w-full object-cover lg:-mb-8" width={900} height={1100} alt={`${team.name} ${team.family}`} src={team.singlePageImage} priority />
        </div>
        {(hasInstagram || hasLinkedin) && (
          <ul className="mb-[15%] flex w-[15%] flex-col gap-3 ps-2 lg:ps-5">
            {hasInstagram && <li><Link target="_blank" rel="noopener noreferrer" href={team.instagram} className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gDarkYellow transition-all hover:bg-gDarkYellow lg:h-[60px] lg:w-[60px]"><Image width={32} height={32} alt="Instagram" src="/img/instagram.png" /></Link></li>}
            {hasLinkedin && <li><Link target="_blank" rel="noopener noreferrer" href={team.linkedin} className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gDarkYellow transition-all hover:bg-gDarkYellow lg:h-[60px] lg:w-[60px]"><Image width={24} height={24} alt="LinkedIn" src="/img/linkdin.png" /></Link></li>}
          </ul>
        )}
      </div>
    </main>
  );
}
