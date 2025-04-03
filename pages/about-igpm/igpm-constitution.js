import Layout from "../layout";
import ResponsiveContainer from "@/app/components/layout/responsiveContainer";


export default function igpmConstitution() {

    return(
        <Layout>
            <ResponsiveContainer>
                <main className="mb-[70px] md:mb-[114px]">
                    <div className="mt-[140px] lg:mt-[200px]">

                        <h1 className="text-[#484848]">IGPM Constitution</h1>
                        <p className="mt-5 md:mt-6">
                            <a href="#" target="_blank">IGPM Constitution Download</a>
                        </p>
                    </div>
                </main>
            </ResponsiveContainer>
        </Layout>
    )

}