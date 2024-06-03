import Layout from "../layout";
import ResponsiveContainer from "@/app/components/layout/responsiveContainer";
import PcnManagers from "@/app/components/more/pcnManagers";

export default function pcnManagers(){

    return(

        <Layout>
            <ResponsiveContainer>
                <PcnManagers/>

            </ResponsiveContainer>
        </Layout>

    )
}