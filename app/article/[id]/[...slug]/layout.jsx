import ArticleContent from "@/components/article-single-page-sections/article-content";
import { getMoviesData } from "@/core/services/api/movies";
import Link from "next/link";
import Image from "next/image";
import { getPostsData } from '@/core/services/api/videos'; 

 const RootLayout= async ({ children })=> {
  const data = await getPostsData();
  return (
    <div className="container  gap-8 relative  grid grid-cols-12 lg:grid-cols-12 ">
      <aside className="hidden lg:flex flex-col lg:sticky lg:top-0 lg:left-0 col-span-12 lg:col-span-4  lg:p-6 ">
        <div className=" relative w-full h-[67vh] rounded-xl lg:mb-12 ">
          <Image 
            width={100}
            height={100}
            className=" h-full w-full rounded-xl object-cover "
            src={"/artti.svg"}
            alt={"article | img | مقاله | گندم | سایت | طراحی | وبسایت | موبایل | نرم افزار | دیزای| شرکت نرم افزاری گندم"}
          />
          <div className=" flex items-end justify-start absolute top-0 left-0 right-0 bottom-0 bg-g4c bg-opacity-[50%] rounded-xl">
            <h4 className=" w-full text-center absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-gf lg:text-[2.7rem] text-[1.7rem]  font-Holispay">Lorem ipsum Lorem   </h4>
            <div className="flex items-center justify-start gap-1 p-5 lg:p-7 " >
              <span className=" text-gDarkYellow lg:text-[1.2rem] text-base  font-PoppinsRegular " >21 July 2023</span>
              <span className=" text-gf lg:text-[1.2rem] text-base  font-PoppinsRegular" >/</span>
              <span className=" text-gf lg:text-[1.2rem] text-base  font-PoppinsRegular" >20 minutes</span>
            </div>
          </div>
        </div>
        <div className="hidden lg:block p-5 w-full border-[1.5px] border-ge4 bg-gec rounded-xl ">

          <h4 className=" w-full pb-3 border-b-[1px] border-gd5 text-g4c lg:text-[2.4rem] text-[1.7rem]  font-Holispay">Lorem ipsum Lorem   </h4>
          <ul className="w-full " >
          
          {data.slice(0,6).map((item, i) => (
            <Link
              href={`/article/${item.id}/${item.title}`}
              key={i}
              className=""
            >
              <li className="flex itmes-center justify-start gap-2 py-2 relative text-g4c lg:text-[1.2rem] text-base font-PoppinsRegular ">
                <span className="text-gDarkYellow text-[3rem]">&#8226;</span>
                <span className="">{item.title}</span>
              </li>
            </Link>
          ))}
          </ul>
          {/* 
          before:content-['\2022'] before:text-gDarkYellow before:text-[40px] before:inline-block before:w-[.3em] before:me-[.3em] before:text-center
          */}
          {/*list-disc  before:font-bold  before:text-[20px]  before:inline-block  before:w-[1em] before:-me-[1em] before: */}
        </div>
      </aside>
      <ArticleContent classes="col-span-12 lg:col-span-8  " >

        <>{children}</>

      </ArticleContent>
    </div>
  );
}
export default RootLayout
      // {/* <main className="container col-span-12 lg:col-span-8 border-2 border-gOrang  ">{children}</main> */}