import DirectorLarge from "./directorLarge";
import { useInView } from 'react-intersection-observer';
import 'animate.css';


export default function CeriChaplin() {

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
                        image={'/images/ceri-chaplin.png'}
                        backgroundColor={'#83C5E9'}
                    />

                </div>



                <div ref={ref} className={`${inView ? 'animate__animated animate__fadeInRight opacity-100' : 'opacity-0'}`}>

                    <h1 className="text-[#484848]">ceri-chaplin</h1>

                    <p className="mt-5 md:mt-6">
                    Ceri started his career in healthcare as a graduate trainee with Boots Opticians.  After 7 years in a variety of store management roles, Ceri spent 2 years in a Hospital Trust in Wales in general management.  Following this, the next 6 years were spent managing primary care complaints on behalf of 6 Local Health Board before moving for 2 years following a reorganisation to manage Complaints, Claims and Patient Safety at a large Local Health Board in South Wales.

 

Ceri moved into Practice Management in 2013 managing a practice across the border in Hereford.  Following a merger of 5 local practices in 2018, Ceri was appointed as the Business Manager for the new organisation serving a population of over 47,000 patients.  In 2022, he was asked by the Partnership to join them as Managing Partner.


Ceri is a keen advocate of the power of the collective mind and how as peers, we can support each other as managers in general practice.  He is a great believer that the role of managers is critical in the running of general practice, and that, like GPs, managers in general practice can be considered ‘expert generalists’.

 

Outside of work, Ceri has been a Magistrate for over 20 years and is involved in the local community in which he lives as a Trustee of the Painswick Centre.  He enjoys walking, music and travelling whenever work allows!                      
                    </p>

                </div>



            </div>
        </>
    )
}