import Layout from "../layout";
import OurCampaigns from "@/app/components/about-igpm/ourCampaigns";
import ResponsiveContainer from "@/app/components/layout/responsiveContainer";


export default function ourCampaigns() {

    return(
        <Layout>
            <ResponsiveContainer>
                <main className="mb-[70px] md:mb-[114px]">
                    <OurCampaigns />
                </main>
            </ResponsiveContainer>
        </Layout>
    )

}