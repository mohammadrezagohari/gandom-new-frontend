
import Image from 'next/image'
function Loading() {
  return (
    <main className=" bg-af8 arefPatternBg w-full h-screen flex flex-col justify-center items-center gap-6 lg:gap-8 ">
      <div className="animate-bounce w-[5rem] lg:w-[10rem] ">
        <Image
          unoptimized
          src={"/gandomFooter.svg"}
          alt="Gandom Software Group"
          width={96.94}
          height={33}
          className="w-full h-full object-cover"
        />
      </div>
    </main>
  )
}

export default Loading