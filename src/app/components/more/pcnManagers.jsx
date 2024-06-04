import Link from "next/link";

export default function PcnManagers(){

    return(
        <>
            <div className="h-[50vh]">

                <h1 className="mt-[140px] lg:mt-[200px] text-[#484848]">PCN Managers</h1>

                <p className="mt-5"><b>IGPM Representatives</b> - Sarah Cole - PCN Manager </p>

                <h3 className="text-[1.56rem] text-[#484848] mt-5">IGPM Accreditation Manager</h3>

                <p className="mt-5">If you would like to apply for accreditation, please contact us, and we can arrange to raise an invoice. You can read more about accreditation <Link href="/accreditation" className="text-blue-600 hover:text-blue-800">here</Link>.</p>

                <a href="https://dashboard.igpm.org.uk/wp-content/uploads/2024/06/IGPM-Accreditation-Framework-England-FINAL.pdf">
                    <button className="bg-[#1C4F70] hover:bg-[#72C6ED] px-[29px] py-[9px] text-white rounded-[13px] text-[15px] hover:bg-[#83C5E9]:flex mb-5 mt-5">Accreditation Framework</button>
                </a>


            </div>

        </>
    )
}