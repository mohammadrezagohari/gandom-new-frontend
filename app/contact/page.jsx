import FormBox from '@/components/contact-page-components/form-box'
import YellowBox from '@/components/contact-page-components/yellow-box'
import React from 'react'

function ContactUs() {
  return (
    <main className="w-full" >
        <section className="container max-w-none px-0 lg:!px-[7.291666666666667vw] mt-5 lg:mt-[2.34375vw]" >
          <div className="lg:hidden flex items-center justify-center my-7">
            <h1 className={`text-left lg:text-[61.666666666666664vw] lg:leading-[5.517578125vw] text-[38px] leading-[40.68px] font-Holispay gap-6 lg:gap-3`}>
              <span className="text-g21">Contact</span>
              <span className="text-gYellow">Us</span>
            </h1>
          </div>
          <div className=" my-5 lg:my-[2.6041666666666665vw] w-full relative p-0 lg:p-[2vw] rounded-3xl h-full grid grid-cols-12 lg:grid-cols-12 gap-8 lg:gap-[1.5vw] lg:border-[1px] lg:border-g21 " >
            
            <div className=" hidden lg:block bg-gf w-[32vw] absolute -top-[1px] -right-[1px] rounded-bl-2xl  border-l-[1px] border-b-[1px] border-l-g21 border-b-g21 border-t-gf border-r-gf pl-5 pb-5
              before:absolute before:w-6 before:h-6 
              before:-left-[24px] before:top-[0.1px] before:rounded-tr-[15px]
              before:border-t-[1px] before:border-t-g21
              before:border-r-[1px] before:border-r-g21
              before:shadow-[10px_-12px_0px_0px_#fff]


              after:absolute after:w-6 after:h-6 after:right-0
              after:-bottom-[24px] after: after: after:
              after:border-t-[1px] after:border-t-g21
              after:border-r-[1px] after:border-r-g21
              after:rounded-tr-[15px]
              after:shadow-[10px_-12px_0px_0px_#fff]
              
              ">

              <div className="">
                <h1
                className={`text-left lg:text-[3.8541666666666665vw] lg:leading-[5.517578125vw] text-[38px] leading-[40.68px] font-Holispay gap-2`}
                >
                <span className="text-g21 pe-[0.78125vw]">Contact</span>
                <span className="text-gYellow">Us</span>
                </h1>
                <span className='text-[1.1rem] lg:text-[1.3541666666666667vw] text-[#212121B2] font-PoppinsRegular' >Lorem Ipsum</span>
                
              </div>
            </div>

            <div className="order-2 lg:order-1  col-span-12 lg:col-span-8 flex items-center lg:items-end justify-center">
              <FormBox />
            </div>

            <div className="order-1 lg:order-2  col-span-12 lg:col-span-4 flex items-center lg:items-end justify-center">
              <YellowBox />
            </div>
          
          </div>
        </section> 
    </main>
  )
}

export default ContactUs


{/* <div className=" hidden lg:block bg-gf w-[35vw] absolute -top-[1px] -right-[1px] rounded-bl-2xl  border-l-[1px] border-b-[1px] border-l-g21 border-b-g21 border-t-gf border-r-gf pl-5 pb-5
before:absolute before:w-6 before:h-6 
before:-left-[24px] before:top-[0.1px] before:rounded-tr-[15px]
before:border-t-[1px] before:border-t-g21
before:border-r-[1px] before:border-r-g21
before:shadow-[10px_-12px_0px_0px_#fff]
before:bg-red-200

after:absolute after:w-6 after:h-6 after:right-0
after:-bottom-[24px] after: after: after:
after:border-t-[1px] after:border-t-g21
after:border-r-[1px] after:border-r-g21
after:rounded-tr-[15px]
after:shadow-[10px_-12px_0px_0px_#fff]
after:bg-red-200
">

<div className="">
<h1
className={`text-left lg:text-[3.7rem] lg:leading-[84.75px] text-[38px] leading-[40.68px] font-Holispay gap-2`}
>
<span className="text-g21">Contact</span>
<span className="text-gYellow">Us</span>
</h1>
<span className='text-[1.1rem] lg:text-[1.3rem] text-[#212121B2] font-PoppinsRegular' >Lorem Ipsum</span>
</div>
</div>



<div className="order-2 lg:order-1 border-2 col-span-12 lg:col-span-7 flex items-end justify-center ">
<FormBox />
</div>
<div className="order-1 lg:order-2 border-2 col-span-12 lg:col-span-5 flex items-end justify-center ">
<YellowBox />
</div> */}