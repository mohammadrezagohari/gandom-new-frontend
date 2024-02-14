import SectionTitle from "@/components/common/section-title";
import OutlinedButton from "@/components/common/buttons/outlined";
import Link from 'next/link'
import Image from "next/image";
import GridCard from "@/components/common/cards/grid-card-about-page";


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
              <OutlinedButton classes="border-g8 text-g8" title='see all' link='/team' />
            </div>
          </div>
          {/* parentClasses="bg-[#ccc] lg:rounded-bl-[50%] rounded-bl-[80%] h-[7.564rem]  lg:h-[12.5rem]" hoverClasses="lg:rounded-bl-[50%] rounded-bl-[80%] " */}
          <div className=" lg:px-5 lg:order-2 order-1 col-span-12 lg:col-span-8 flex  items-start justify-center gap-2 lg:gap-4">
            <div className="w-full  flex flex-1 flex-col items-center justify-center  gap-2 lg:gap-4 ">
              <GridCard parentClasses="bg-[#ccc] rounded-t-full min-h-[10.563rem]  lg:h-[20vw] " hoverClasses=" rounded-t-full" position="Product designer1" name="Ali Asadpuor" link="/" img='/mrfamuse.svg' />
              <GridCard parentClasses="bg-[#ccc] lg:rounded-bl-[10.438rem] rounded-bl-[6.688rem] min-h-[7.564rem]  lg:h-[13vw]" hoverClasses="lg:rounded-bl-[10.438rem] rounded-bl-[6.688rem] " position="Product designer2" name="Ali Asadpuor" link="/" img='' />
            </div>
            <div className="w-full  hidden lg:flex flex-1 flex-col items-center justify-center  gap-2 lg:gap-4 ">
              <GridCard parentClasses="bg-[#ccc] min-h-[15.25rem] lg:h-[15.8vw] " hoverClasses="" position="Product designer3" name="Ali Asadpuor" link="/" img='' />
              <GridCard parentClasses="bg-[#ccc] min-h-[16.563rem] lg:h-[17.08vw] " hoverClasses="" position="Product designer4" name="Ali Asadpuor" link="/" img='' />
            </div>
            <div className="w-full  flex flex-1 flex-col items-center justify-center  gap-2 lg:gap-4 ">
              <GridCard parentClasses="bg-[#ccc] min-h-[11.887rem] lg:h-[22.5vw] rounded-tr-[50%]" hoverClasses="rounded-tr-[50%]" position="Product designer5" name="Ali Asadpuor" link="/" img='/mrfamuse.svg' />
              <GridCard parentClasses="bg-[#ccc] min-h-[6.233rem] lg:h-[10.6vw] rounded-b-full" hoverClasses="rounded-b-full" position="Product designer6" name="Ali Asadpuor" link="/" img='' />
            </div>
          </div>

          <div className="my-10 lg:my-auto lg:order-3 order-2 col-span-12 lg:col-span-2 flex items-center  justify-center lg:justify-end">
            <ul className="flex flex-row items-center  justify-between  lg:flex-col lg:justify-center lg:items-start  gap-5 ">
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


{/* <section className='w-full'>
<div className="container h-auto lg:h-screen bg-gf flex flex-col items-center justify-start gap-8">

  <div className="w-full lg:w-[50%] text-center">
    <SectionTitle
      classes="text-g21"
      title="Professional Staff, Professional Results"
    />
  </div>

  <div className="w-full  flex lg:flex-nowrap flex-wrap justify-between lg:gap-3 ">
    
    <div className="w-full lg:w-[10%] lg:order-1 order-3  flex items-center justify-start">
      <div className="w-full h-full flex flex-col justify-center items-center lg:items-start gap-12">
        <h5 className="hidden lg:block text-g8 text-xs lg:text-[1.2rem] leading-[1.8rem]  text-justify font-PoppinsRegular line-clamp-5 ">
          Log in here to get to know all our team members
        </h5>
        <OutlinedButton classes="border-g8 text-g8" title='see all' link='/' />
      </div>
    </div>
   
    <div className="w-full lg:w-[50%] border-2 border-red-800 lg:px-5 lg:order-2 order-1  flex items-start justify-center gap-2 lg:gap-4">
      <div className=" flex flex-1 flex-col items-center justify-center  gap-2 lg:gap-4 ">
        <GridCard parentClasses="bg-[#ccc] rounded-t-full h-[10.563rem]  lg:h-[23.3vw] " hoverClasses=" rounded-t-full" position="Product designer 1" name="Ali Asadpuor" link="/" img='' />
        <GridCard parentClasses="bg-[#ccc] lg:rounded-bl-[10.438rem] rounded-bl-[6.688rem] h-[7.564rem]  lg:h-[16.1vw]" hoverClasses="lg:rounded-bl-[10.438rem] rounded-bl-[6.688rem] " position="Product designer" name="Ali Asadpuor" link="/" img='' />
      </div>
      <div className=" hidden lg:flex flex-1 flex-col items-center justify-center  gap-2 lg:gap-4 ">
        <GridCard parentClasses="bg-[#ccc] h-[15.25rem] lg:h-[19.01vw] " hoverClasses="" position="Product designer2" name="Ali Asadpuor" link="/" img='' />
        <GridCard parentClasses="bg-[#ccc] h-[18.3vw] lg:h-[20.3vw]" hoverClasses="" position="Product designer3" name="Ali Asadpuor" link="/" img='' />
      </div>
      <div className=" flex flex-1 flex-col items-center justify-center  gap-2 lg:gap-4 ">
        <GridCard parentClasses="bg-[#ccc] h-[11.887rem] lg:h-[26.6vw] rounded-tr-[50%]" hoverClasses="rounded-tr-[50%]" position="Product designer4" name="Ali Asadpuor" link="/" img='' />
        <GridCard parentClasses="bg-[#ccc] h-[6.233rem] lg:h-[12.7vw] rounded-b-full" hoverClasses="rounded-b-full" position="Product designer5" name="Ali Asadpuor" link="/" img='' />
      </div>
    </div>

    <div className="w-full lg:w-[10%] my-10 lg:my-auto lg:order-3 order-2  flex items-center  justify-center lg:justify-end">
      <ul className="flex flex-row items-center  justify-between  lg:flex-col lg:justify-center lg:items-start  gap-5 ">
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
</section> */}





{/* <div className="w-full  grid grid-cols-12 lg:grid-cols-12 lg:gap-3 ">
          
          <div className=" lg:order-1 order-3 col-span-12 lg:col-span-2 flex items-center justify-start">
            <div className="w-full h-full flex flex-col justify-center items-center lg:items-start gap-12">
              <h5 className="hidden lg:block text-g8 text-xs lg:text-[1.2rem] leading-[1.8rem]  text-justify font-PoppinsRegular line-clamp-5 ">
                Log in here to get to know all our team members
              </h5>
              <OutlinedButton classes="border-g8 text-g8" title='see all' link='/' />
            </div>
          </div>
         
          <div className=" lg:px-5 lg:order-2 order-1 col-span-12 lg:col-span-8 flex items-start justify-center gap-2 lg:gap-4">
            <div className="w-full  flex flex-1 flex-col items-center justify-center  gap-2 lg:gap-4 ">
              <GridCard parentClasses="bg-[#ccc] rounded-t-full h-[10.563rem]  lg:h-[23.3vw] " hoverClasses=" rounded-t-full" position="Product designer 1" name="Ali Asadpuor" link="/" img='' />
              <GridCard parentClasses="bg-[#ccc] lg:rounded-bl-[10.438rem] rounded-bl-[6.688rem] h-[7.564rem]  lg:h-[16.1vw]" hoverClasses="lg:rounded-bl-[10.438rem] rounded-bl-[6.688rem] " position="Product designer" name="Ali Asadpuor" link="/" img='' />
            </div>
            <div className="w-full  hidden lg:flex flex-1 flex-col items-center justify-center  gap-2 lg:gap-4 ">
              <GridCard parentClasses="bg-[#ccc] h-[15.25rem] lg:h-[19.01vw] " hoverClasses="" position="Product designer2" name="Ali Asadpuor" link="/" img='' />
              <GridCard parentClasses="bg-[#ccc] h-[20.3vw]" hoverClasses="" position="Product designer3" name="Ali Asadpuor" link="/" img='' />
            </div>
            <div className="w-full  flex flex-1 flex-col items-center justify-center  gap-2 lg:gap-4 ">
              <GridCard parentClasses="bg-[#ccc] h-[11.887rem] lg:h-[26.6vw] rounded-tr-[50%]" hoverClasses="rounded-tr-[50%]" position="Product designer4" name="Ali Asadpuor" link="/" img='' />
              <GridCard parentClasses="bg-[#ccc] h-[6.233rem] lg:h-[12.7vw] rounded-b-full" hoverClasses="rounded-b-full" position="Product designer5" name="Ali Asadpuor" link="/" img='' />
            </div>
          </div>

          <div className="my-10 lg:my-auto lg:order-3 order-2 col-span-12 lg:col-span-2 flex items-center  justify-center lg:justify-end">
            <ul className="flex flex-row items-center  justify-between  lg:flex-col lg:justify-center lg:items-start  gap-5 ">
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

        </div> */}
