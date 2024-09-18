import Link from "next/link";
import Image from 'next/image'

const ScrollIndicator = ({scrollProgress}) => {
    return (
        <div ref={scrollProgress} className={`z-50 lg:w-[4vw] lg:h-[4vw] bg-gYellow rounded-full shadow fixed right-8 bottom-8 hidden lg:flex items-center justify-center`} >
            <Link href="#landing_header" className=" rounded-full bg-gYellow w-[90%] h-[90%]  inline-flex items-center justify-center" >

                <Image
                width={30}
                height={30}
                alt={'scroll to top'}
                src={'/img/arrow-up.png'}
                />
            </Link>
        </div>
    );
}

export default ScrollIndicator