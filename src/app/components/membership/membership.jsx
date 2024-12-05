import PayPalButton from "./paypalButton";

export default function Membership(){

    return(
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2  mt-[35px] sm:mt-[60px] lg:mt-[100px] gap-[19px] items-center">

                <div className="col-span-1">

                    <h3 class="text-[1.56rem] text[#484848] mb-5">Associate Membership</h3>
                    <p class="mb-5">Associate membership is open to all Managers working within General Practice throughout the UK.</p>
                    <p>Our Inclusion Criteria can be found here:</p>
                    <a href="https://igpm.org.uk/more/membership-inclusion-criteria">
                                <button className="mt-5 bg-[#1C4F70] hover:bg-[#71C6EC] py-[10px] px-[20px] text-white rounded-[8px] mb-5">Membership Inclusion Criteria</button>
                    </a>
                    <p>Benefits include but are not limited to:</p>
                    <ul className="list-disc ps-10 flex flex-col gap-1 mt-3 mb-5">
                        <li>The IGPM Whatsapp community - Peer to peer support on a range of topics</li>
                        <li>The IGPM Facebook group - Exclusively for Associate and MIGPM members</li>
                        <li>Our Team of Regional Representatives - Access to local support</li>
                        <li>Our Accreditation process - Professional registration</li>
                        <li>IGPM Toolkits - Access to our members only Toolkits</li>
                        <li>Regular Webinars on a  range of topics</li>
                    </ul>

                    <h3 class="text-[1.56rem] text[#484848] mb-5">Affiliate Membership</h3>
                    <p class="mb-5">Affiliate Membership is available to those in arms length organisations who wish to support IGPM e.g Federations.</p>
                    <h3 class="text-[1.56rem] text[#484848] mb-5">MIGPM Membership</h3>
                    <p class="mb-5">MIGPM Membership, and a place on our professional register, is awarded to Associate members upon successful completion of our accreditation process.</p>
                    <p class="mb-5">They must have had a minimum or two years relevant experience to apply.</p>
                    <p class="mb-5">Being awarded MIGPM membership demonstrates that the manager works to a high standard across the wide range of skills required by the role.</p>
                    <p class="mb-5">To learn more about our Accreditation process please visit our Accreditation page.</p>

                    <h3 class="text-[1.56rem] text[#484848] mb-5">Membership Fee</h3>
                    <p class="mb-5">The cost of Associate or Affiliate membership is £50 plus VAT a year (£60) and renews annually.</p>
                    <p class="mb-5">You do not need a PayPal account to pay online.</p>
                    <p class="mb-5">Alternatively you can email the office for an invoice to pay via BACS should you prefer.</p>
                    <p class="mb-5">Once you have paid, please email info@igpm.org.uk from your @NHS email address. Please include your surgery name and postcode in your email so we can verify your membership.</p>
                    <p>Thank you.</p>

                </div>

                <div className="flex flex-col items-center">

                    <img src="/images/membership-group.png" alt="image of a group of people smiling" className="sm:max-w-[500px]"></img>
{/*                     <a target="_blank" className="w-[100%] sm:max-w-[500px] lg:w-[100%]" href="https://www.paypal.com/webapps/hermes?token=32R33450PE0069346&useraction=commit&wpsFlowRedirectToXorouterSkipHermesStartTime=1697029841117&mfid=1697029840826_f7309533ee478"><button className="bg-[#1B4E70] hover:bg-[#72C6ED] hover:text-[black] w-[100%] sm:max-w-[500px] lg:w-[100%] py-[8px] rounded-[8px] mt-3 text-white">Buy Now</button></a>
 */}
                    <div className="mt-5">
                        <PayPalButton />
                    </div>

                    <div>
                        <a href='#'></a>
                    </div>

                    <div>
                        <script src='https://app.glueup.com/compiled/js/eb-widgets.min.js' type='text/javascript'></script>
                        <script>require(['https://app.glueup.com/compiled/js/eb-widgets.min']);</script>
                        <iframe class="eb-widget" id="eb-widget-membership-type-list" 
                        name="eb-widget-membership-type-list" 
                        data-auto-adjust-height="true" 
                        data-auto-adjust-width="true" 
                        style="" src="https://igpm.glueup.com/organization/6758/widget/membership-type-list/"></iframe>
                    </div>

                </div>

            </div>
        </>
    )
}