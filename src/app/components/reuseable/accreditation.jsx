import ArrowAccordion from "./arrowAccordion";
import { useInView } from 'react-intersection-observer';
import 'animate.css';

export default function Accreditation(){

    const options = {
        rootMargin: '150px',
        threshold: 0,
        triggerOnce: true,
    };

    //Intersection Observer
    const { ref, inView, entry } = useInView(options);


    const accordionData = [

        {
            title: 'How to apply', 
            content: 
            <>
                <p className="mb-5">
                    To apply for Accreditation please email info@igpm.org.uk. An application fee of £280 plus VAT is payable prior to receiving your application pack.
                </p>
                <p className="mb-5">
                    The application form is broken down into 10 domains, and then further into bullet points within the domains.
                </p>
                <p className="mb-5">
                    Your submission would consist of addressing these points in written form.
                </p>
                <p className="mb-5">
                    Once completed your application can be submitted by email to info@igpm.org.uk, for one of our assessment sessions.
                </p>
                <p className="mb-5">
                    These are held three times a year, January, May and September. The application deadline for each is the last day of the previous month.
                </p>
            </>
        },

        {
            title: 'Assessment',
            content:
            <>
                <p>
                    Once received, your application will be edited for your anonymity.                
                </p>

                <p className="mt-5">
                    Your application will be assessed by a panel of three independent assessors.
                </p>

                <p className="mt-5">
                    Then each assessment session is externally moderated.               
                </p>

                <p className="mt-5">
                    Outcomes will be communicated to the applicants by email.
                </p>
            </>
        },
        {
            title: 'Outcome',
            content:
            <>
                <p>
                    Successful applicants will receive their printable certificate, their MIGPM e-signature and a place on our Accredited managers register.
                </p>
    
                <p className="mt-5">
                    The annual retainer fee for MIGPM, which replaces the Associate membership fee, IS £85 plus VAT. This is subject to review every 3 years.
                </p>
    
                <p className="mt-5">
                    If the candidate did not meet the criteria on this occasion, this will be explained via email for the opportunity to resubmit.
                </p>
    
                <p className="mt-5">
                    Resubmission (should your application not meet the criteria) - £120 plus VAT within 12 months.
                </p>
            </>
        },
        {
            title: 'Further Questions',
            content:
            <>
                <p>
                    If you have any further questions on the accreditation process, you would like to talk to us about group funding or you would like to ask about eligibility, please do email us at info@igpm.org.uk.
                </p>
            
            </>
        }

    ]



    return(
        <>

            <div className="grid grid-cols-2 mt-[35px] sm:mt-[60px] lg:mt-[100px]">

                <div ref={ref} className={`${inView ? 'animate__animated animate__fadeInLeft opacity-100' : 'opacity-0'} col-span-2 lg:col-span-1`}>

                    <p>
                        The IGPM has been created to support the development and career progression of the General Practice Management community and to provide a governing body through which managers can become accredited and fully recognised as a distinct profession.
                    </p>
    
                    <p className="mt-5">
                        Associate members of the IGPM can apply, if the Associate is appropriately experienced, to be accredited as a full Member of the IGPM.
                    </p>
    
                    <p className="mt-5">
                        Applicants for the award of Member of the Institute of General Practice Management (MIGPM) must demonstrate the required proficiency as detailed in the accreditation framework.
                    </p>

                    <p className="mt-5">
                        Comprehensive written evidence needs to be supplied in each of 10 domains and the awarding panel must be satisfied that an aggregate pass level has been reached in all of these domains.
                    </p>
    
                </div>
    
                <div ref={ref} className={`${inView ? 'animate__animated animate__fadeInRight opacity-100' : 'opacity-0'} col-span-2 lg:col-span-1 flex items-center justify-center lg:justify-end`}>
    
                    <img src="/images/accreditation-three.png" className="h-[200px] mt-[40px] lg:mt-[0px]"></img>
    
                </div>

        </div>

            <div ref={ref} className={`${inView ? 'animate__animated animate__fadeInUp opacity-100' : 'opacity-0'} mt-10`}>

                <h3 className="text-[1.56rem] text-[#484848] mb-5">Suitability</h3>

                <p>
                    To be eligible and apply to become a full member of the IGPM:
                </p>

                <div className="flex flex-col sm:flex-row justify-between mt-12 gap-[40px] sm:gap-[10px]">

                    <div className="w-[100%] text-center border-[2px] border-[#1C4F70] bg-[#1C4F70] py-[28px] px-[10px] rounded-[25px] flex justify-center shadow-lg relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-[-25px] left-[50px] fill-[#1C4F70]" height="30px" viewBox="0 0 512 512"><path d="M290.5 51.8C283.3 39.5 270.2 32 256 32s-27.3 7.5-34.5 19.8l-216 368c-7.3 12.4-7.3 27.7-.2 40.1S25.7 480 40 480H472c14.3 0 27.6-7.7 34.7-20.1s7-27.8-.2-40.1l-216-368z" /></svg>
                        <div className="max-w-[340px] text-[white]">
                            The applicant must have been in a substantive managerial role in general practice for not less than 2 years.
                        </div>
                    </div>

                    <div className="w-[100%] text-center border-[2px] border-[#1C4F70] bg-[#1C4F70] py-[28px] px-[10px] rounded-[25px] flex justify-center shadow-lg relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-[-25px] left-[50px] fill-[#1C4F70]" height="30px" viewBox="0 0 512 512"><path d="M290.5 51.8C283.3 39.5 270.2 32 256 32s-27.3 7.5-34.5 19.8l-216 368c-7.3 12.4-7.3 27.7-.2 40.1S25.7 480 40 480H472c14.3 0 27.6-7.7 34.7-20.1s7-27.8-.2-40.1l-216-368z" /></svg>
                        <div className="max-w-[340px] text-white">
                            The applicant must not be in breach of any article in the Constitution of the IGPM.
                        </div>
                    </div>

                    <div className="w-[100%] text-center border-[2px] border-[#1C4F70] bg-[#1C4F70] py-[28px] px-[10px] rounded-[25px] flex justify-center shadow-lg relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-[-25px] left-[50px] fill-[#1C4F70]" height="30px" viewBox="0 0 512 512"><path d="M290.5 51.8C283.3 39.5 270.2 32 256 32s-27.3 7.5-34.5 19.8l-216 368c-7.3 12.4-7.3 27.7-.2 40.1S25.7 480 40 480H472c14.3 0 27.6-7.7 34.7-20.1s7-27.8-.2-40.1l-216-368z" /></svg>
                        <div className="max-w-[340px] text-white">
                            The applicant must not be in any pending or active disciplinary action at the time of application. 
                        </div>
                    </div>

                </div>
            </div>

        <div>


        </div>

            <div className={`${inView ? 'animate__animated animate__fadeInRight opacity-100' : 'opacity-0'} mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]`}>

                <h3  className="text-[1.56rem] text-[#484848] mb-5">Accreditation process</h3>

                {accordionData.map((data, index) => (
                    <div key={index} className="col-span-1 lg:col-span-1">
                        <ArrowAccordion
                            key={index}
                            title={data.title}
                            content={data.content}
                        />
                    </div>
                ))}
    
            </div>
    
        <div>
            <a href="https://dashboard.igpm.org.uk/wp-content/uploads/2024/06/IGPM-Accreditation-Framework-England-FINAL.pdf"><button class="bg-[#1C4F70] hover:bg-[#72C6ED] px-[29px] py-[9px] text-white rounded-[13px] text-[15px] hover:bg-[#83C5E9]:flex mb-5">Accreditation Framework</button></a>
        </div>

        </>
    )
}