import styles from './index.module.css';
import ImageButton from '../reuseable/image-buttons/imageButton';
import { useInView } from 'react-intersection-observer';
import 'animate.css';


export default function HowWeCanHelp(){

    const options = {
        rootMargin: '-150px',
        threshold: 0,
        triggerOnce: true,
    };

    //Intersection Observer
    const { ref, inView, entry } = useInView(options);


    return(
        <>

        
            <div className="bg-[#1C4F70] py-[100px]">
                <div className="max-w-[1440px] m-auto">

                    <div className='ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]'>

                        <div ref={ref} className={`${inView ? 'animate__animated animate__fadeIn opacity-100' : 'opacity-0'} flex flex-col justify-center`}>


                            <div className="relative">

                                <h2 className="text-[white] text-center sm:text-start">Our promise to you</h2>

                                <svg xmlns="http://www.w3.org/2000/svg" height="125px" className="fill-[#FFFFFF] opacity-[20%] absolute top-[-52px]" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" /></svg>

                            </div>

                            <p className="mt-[20px] lg:mt-[14px] text-[1.1rems] text-center sm:text-start text-white">
                                Our leadership majority will always be people working in Practice Management. We will never be an organisation for profit and any funds generated will go back into our membership. The views of our members will always be the most important part of our constitution.
                            </p>

                        </div>

                    </div>
                </div>
            </div>




        </>
    )
}