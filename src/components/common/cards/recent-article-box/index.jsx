import Link from "next/link"
import Image from "next/image"

export default function RecentArticleBox({ href, cardTitle, cardDesc, date, author }) {
  return (
    <div className="recentArticleBox grid grid-cols-12 gap-5 lg:grid-cols-12 lg:gap-0">
      <div className="pictureBox col-span-12 lg:col-span-6">
        <Link href={href} className="block w-[87%] overflow-hidden rounded-lg lg:w-[88%] lg:rounded-r-lg lg:rounded-l-none">
          <Image width={1200} height={700} src="/wimg.png" alt={cardTitle} className="h-[13.188rem] w-full rounded-lg object-cover lg:h-[21.549479166666668vw] lg:rounded-r-lg lg:rounded-l-none" />
        </Link>
      </div>
      <div className="textBox col-span-12 flex flex-col items-start justify-center gap-2 lg:col-span-6 lg:gap-[1.0416666666666667vw]">
        <div className="divide-x divide-gb8">
          <span className="pe-2 text-[0.95rem] text-gDarkYellow lg:px-2 lg:text-[1.25vw] lg:leading-[2.0833333333333335vw] font-PoppinsRegular">{author}</span>
          <span className="px-2 text-[0.95rem] text-gb8 lg:text-[1.25vw] lg:leading-[2.0833333333333335vw] font-PoppinsRegular">{date}</span>
        </div>
        <Link href={href}>
          <h3 className="line-clamp-3 text-[0.95rem] font-normal tracking-wide text-g21 lg:text-[1.775vw] lg:leading-[2.34375vw] font-PoppinsMedium">{cardTitle}</h3>
        </Link>
        <p className="line-clamp-3 text-[0.95rem] font-normal tracking-wide text-g8 lg:text-[1.3541666666666667vw] lg:leading-[2.0833333333333335vw] font-PoppinsRegular">{cardDesc}</p>
      </div>
    </div>
  )
}
