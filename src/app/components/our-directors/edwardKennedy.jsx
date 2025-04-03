import DirectorLarge from "./directorLarge";
import { useInView } from 'react-intersection-observer';
import 'animate.css';


export default function EdwardKennedy() {

    const options = {
        rootMargin: '0px',
        threshold: 0,
        triggerOnce: true,
    };

    //Intersection Observer
    const { ref, inView, entry } = useInView(options);



    return (
        <>
            <div className="flex flex-col md:flex-row justify-between mt-[140px] md:mt-[200px] items-center gap-[20px] md:gap-[40px]">


                <div ref={ref} className={`${inView ? 'animate__animated animate__fadeInLeft opacity-100' : 'opacity-0'}`}>

                    <DirectorLarge
                        url={'/'}
                        image={'/images/edward-kennedy.png'}
                        backgroundColor={'#83C5E9'}
                    />

                </div>



                <div ref={ref} className={`${inView ? 'animate__animated animate__fadeInRight opacity-100' : 'opacity-0'}`}>

                    <h1 className="text-[#484848]">Edward Kennedy</h1>

                    <p className="mt-5 md:mt-6">
                    Ed has spent his career in healthcare, including managing community pharmacies, working in the pharmaceutical industry, and spending the past decade in Practice Management. He is the Managing Partner at a two-site dispensing practice in Hampshire, serving 14,000 patients.

 

Originally from the Isle of Wight, Ed has a particular interest in rural healthcare and the sustainability of dispensing practices.

 

He recently completed a Master’s in Health Economics, Policy and Management at the London School of Economics, and is especially interested in academic research exploring the links between leadership and health outcomes.                      
                    </p>

                </div>



            </div>
        </>
    )
}