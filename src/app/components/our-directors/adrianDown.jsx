import DirectorLarge from "./directorLarge";
import { useInView } from 'react-intersection-observer';
import 'animate.css';


export default function AdrianDown() {

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
                        image={'/images/adrian-down.png'}
                        backgroundColor={'#83C5E9'}
                    />

                </div>



                <div ref={ref} className={`${inView ? 'animate__animated animate__fadeInRight opacity-100' : 'opacity-0'}`}>

                    <h1 className="text-[#484848]">Adrian Down</h1>

                    <p className="mt-5 md:mt-6">
                    After a successful career in marketing and business development, Adrian transitioned to the NHS 20 years ago, driven by a desire to make a meaningful difference in people’s lives. He joined his rural dispensing practice in Lincolnshire as Practice Manager and, following the retirement of his Senior Partner, became the Managing Partner. Today, he leads a two-site practice serving 10,000 patients.

Adrian is deeply committed to developing strong, compassionate leadership within general practice. He believes in the transformative impact that skilled, professional managers can have in shaping and sustaining high-quality patient care.

In addition to his practice role, Adrian serves as a director and committee member of his local LMC and is a founding director of a GP federation representing 16 practices across the region.                      
                    </p>

                </div>



            </div>
        </>
    )
}