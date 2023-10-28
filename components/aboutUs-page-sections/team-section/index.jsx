import SectionTitle from "@/components/common/section-title";
import OutlinedButton from "@/components/common/buttons/outlined";
import Link from 'next/link'
import Image from "next/image";

function TeamSection() {
  const statisticsItems=[
    {
      id: 1,
      number: "12+",
      title: "Personnel",
    },
    {
      id: 2,
      number: "43+",
      title: "Programmer",
    },
    {
      id: 3,
      number: "74+",
      title: "Designer",
    },
  ]
  return ( 
    <section className='w-full'>
      <div className="container flex flex-col items-center justify-start">
        <div className="w-full lg:w-[50%] text-center">
          <SectionTitle
            classes="text-g21"
            title="Professional Staff, Professional Results"
          />
        </div>
        <div className="w-full my-[3vw] grid grid-cols-12 lg:grid-cols-12 gap-3 ">

          <div className="col-span-12 lg:col-span-2  lg:order-1 order-3">
            <div className="w-full h-full flex flex-col justify-center items-center lg:items-start gap-14">
              <h5 className="hidden lg:block text-g8 text-xs lg:text-[1.2rem] leading-[1.8rem]  text-justify font-PoppinsRegular line-clamp-5 ">
                Log in here to get to know all our team members
              </h5>
              <OutlinedButton classes="border-g8 text-g8" title='see all' link='/' />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8  lg:order-2 order-1">
            <div className="w-full  flex items-start justify-center gap-[0.9vw]">
              <div className="w-full flex flex-col items-center justify-center gap-[0.9vw] ">
                <div className="gridItem  relative w-full h-[20vw] rounded-t-full flex flex-col items-center justify-center border-2  ">
                  1.1
                  <div className=" absolute left-0 right-0 top-0 bottom-0 bg-g21 rounded-t-full flex flex-col items-center justify-center gap-3">
                    <h5 className={`text-gf lg:text-2xl  text-justify font-Holispay `} >Ali Asadpoure</h5>
                    <p className={`text-g8 text-bsae  text-justify font-PoppinsLight line-clamp-5 `} >Product Designer</p>
                    <Link
                      href="/"
                      className=" mt-3 border-[1px] border-gbc text-gbc text-base lg:text-sm font-PoppinsLight rounded-xl py-2 px-6 lg:px-8"
                    >
                      See More
                    </Link>
                  </div>

                </div>             
                <div className="gridItem relative w-full h-[14vw] rounded-bl-[50%] flex flex-col items-center justify-center border-2  ">
                  1.2
                  <div className=" absolute left-0 right-0 top-0 bottom-0 bg-g21 rounded-bl-[50%] flex flex-col items-center justify-center gap-3">
                    <h5 className={`text-gf lg:text-2xl  text-justify font-Holispay `} >Ali Asadpoure</h5>
                    <p className={`text-g8 text-bsae  text-justify font-PoppinsLight line-clamp-5 `} >Product Designer</p>
                    <Link
                      href="/"
                      className=" mt-3 border-[1px] border-gbc text-gbc text-base lg:text-sm font-PoppinsLight rounded-xl py-2 px-6 lg:px-8"
                    >
                      See More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-center gap-[0.9vw] ">
                <div className="gridItem relative w-full h-[17vw] flex flex-col items-center justify-center border-2  ">
                  2.1
                  <div className=" absolute left-0 right-0 top-0 bottom-0 bg-g21 flex flex-col items-center justify-center gap-3">
                    <h5 className={`text-gf lg:text-2xl  text-justify font-Holispay `} >Ali Asadpoure</h5>
                    <p className={`text-g8 text-bsae  text-justify font-PoppinsLight line-clamp-5 `} >Product Designer</p>
                    <Link
                      href="/"
                      className=" mt-3 border-[1px] border-gbc text-gbc text-base lg:text-sm font-PoppinsLight rounded-xl py-2 px-6 lg:px-8"
                    >
                      See More
                    </Link>
                  </div>
                </div>             
                <div className="gridItem relative w-full h-[17vw] flex flex-col items-center justify-center border-2  ">
                  2.2
                  <div className=" absolute left-0 right-0 top-0 bottom-0 bg-g21 flex flex-col items-center justify-center gap-3">
                    <h5 className={`text-gf lg:text-2xl  text-justify font-Holispay `} >Ali Asadpoure</h5>
                    <p className={`text-g8 text-bsae  text-justify font-PoppinsLight line-clamp-5 `} >Product Designer</p>
                    <Link
                      href="/"
                      className=" mt-3 border-[1px] border-gbc text-gbc text-base lg:text-sm font-PoppinsLight rounded-xl py-2 px-6 lg:px-8"
                    >
                      See More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-center gap-[0.9vw] ">
                <div className="overflow-hidden gridItem relative w-full h-[22.5vw] rounded-tr-[50%] flex flex-col items-center justify-center border-2  ">
                  <Image src={'/mrfamuse.svg'} width={100} height={100} alt={"menu icon"} className="w-full h-full object-cover" />
                  <div className=" absolute left-0 right-0 top-0 bottom-0 bg-g21 rounded-tr-[50%] flex flex-col items-center justify-center gap-3">
                    <h5 className={`text-gf lg:text-2xl  text-justify font-Holispay `} >Ali Asadpoure</h5>
                    <p className={`text-g8 text-bsae  text-justify font-PoppinsLight line-clamp-5 `} >Product Designer</p>
                    <Link
                      href="/"
                      className=" mt-3 border-[1px] border-gbc text-gbc text-base lg:text-sm font-PoppinsLight rounded-xl py-2 px-6 lg:px-8"
                    >
                      See More
                    </Link>
                  </div>
                </div>             
                <div className="gridItem relative w-full h-[11.5vw] rounded-b-full flex flex-col items-center justify-center border-2  ">
                  3.2
                  <div className=" absolute left-0 right-0 top-0 bottom-0 bg-g21 rounded-b-full flex flex-col items-center justify-center gap-3">
                    <h5 className={`text-gf lg:text-2xl  text-justify font-Holispay `} >Ali Asadpoure</h5>
                    <p className={`text-g8 text-bsae  text-justify font-PoppinsLight line-clamp-5 `} >Product Designer</p>
                    <Link
                      href="/"
                      className=" mt-3 border-[1px] border-gbc text-gbc text-base lg:text-sm font-PoppinsLight rounded-xl py-2 px-6 lg:px-8"
                    >
                      See More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-2 p-4 lg:order-3 order-2 my-[20%]">
            <ul className="flex lg:flex-col flex-row lg:items-center items-center lg:justify-center justify-between gap-3 ">
             {
              statisticsItems.map((item,i)=>(
                <li key={i} className="text-center lg:text-start">
                  <span className="text-g21 lg:text-[3.7rem] lg:leading-[84.75px] text-[38px] leading-[40.68px] font-Holispay">{item.number}</span>
                  <span className="text-g70 text-xs lg:text-[1.15rem] text-justify font-PoppinsRegular line-clamp-5">{item.title}</span>
                </li>
              ))
             }
          
            </ul>
          </div>

        </div>
    
      </div>
    </section>
  )
}

export default TeamSection