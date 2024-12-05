import Link from "next/link";

export default function Footer(){

    const more =[
        {title: 'Membership', href: '/membership' },
        {title: 'Accreditation', href: '/accreditation' },
        {title: 'Get involved', href: '/get-involved' },
        {title: 'IGPM Northern Ireland', href: '/more/igpm-northern-ireland' },
        {title: 'IGPM Wales', href: '/more/igpm-wales' },
        {title: 'Toolkits', href: '/toolkits' },
        {title: 'Regulatory Process', href: '/more/regulatory-process' },
        {title: 'PCN Managers', href: '/more/pcn-managers' },
        {title: 'Our Newsletter', href: 'https://mailchi.mp/a499843ce039/the-igpm-institute-of-general-practice-management-newsletter' },
    ];

    const about = [
        { title: 'Our Directors', href: '/our-directors' },
        { title: 'Member case studies', href: '/about-igpm/member-case-studies' },
        { title: 'Our Representatives', href: '/about-igpm/our-representatives' },
        { title: 'Webinars', href: '/webinars' },
        { title: 'Membership inclusion criteria', href: '/more/membership-inclusion-criteria' },
        { title: 'Our Campaigns', href: '/about-igpm/our-campaigns' },
    ];



    return(
        <>        
            <div className="bg-[#1C4F70]  min-h-[265px] pb-[70px]">

                <div className="max-w-[1440px] m-auto">

                    <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]">

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-4 pt-[42px]">

                            <div className="col-span-4 sm:col-span-1 md:col-span-1">

                                <h4 className="onset-bold text-[20px] text-[white]">More</h4>
                                
                                <ul className="mt-4 flex flex-col gap-3 text-[0.93rem]">
                                    {more.map((m, index) => (
                                        <li key={index} className="underline text-[#CBCBCB] hover:text-[#ffffff]">
                                            <Link href={m.href} >
                                                {m.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                            <div className="col-span-4 sm:col-span-1 md:col-span-1">

                                <h4 className="onset-bold text-[20px] text-[white]">About IGPM</h4>

                                <ul className="mt-4 flex flex-col gap-3 text-[0.93rem]">
                                    {about.map((a, index) => (
                                        <li key={index} className="underline text-[#CBCBCB] hover:text-[#ffffff]">
                                            <Link href={a.href}>
                                                {a.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                            <div className="col-span-4 md:col-span-1">

                                <h4 className="onset-bold text-[20px] text-[white]">Contact us</h4>

                                <div className="flex gap-2 items-center text-[#484848] mt-3">

                                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-[white]" height="1em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                                    <div className="text-[#ADB6BB]">info@igpm.org.uk</div>

                                </div>



                            </div>

                            <div className="col-span-4 md:col-span-1 sm:self-end">

                                <div className="flex sm:justify-end  mt-4 gap-2">

                                    <a href="https://www.facebook.com/TheIGPM">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-[white]" height="1.6em" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" /></svg>
                                    </a>

                                    <a href="https://twitter.com/TheIGPM">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-[white]" height="1.6em" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" /></svg>
                                    </a>

                                    <a href="https://www.instagram.com/igpm_uk/">
                                    <svg  fill="#000" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em"
	 viewBox="0 0 448 512">
		<path class="logo" fill="#fff" id="XMLID_17_" d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722 c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156 C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156 c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722 c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z"/>
	
		<path id="XMLID_81_" fill="#fff" d="M275.517,133C196.933,133,133,196.933,133,275.516 s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6 c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083 C362.6,323.611,323.611,362.6,275.517,362.6z"/>
	
		<circle id="XMLID_83_" fill="#fff" cx="418.306" cy="134.072" r="34.149"/>

</svg>
                                    </a>

                                </div>

                            </div>


                        </div>

                        


                    </div>

                </div>    




            </div>
        
        </>
    )
}