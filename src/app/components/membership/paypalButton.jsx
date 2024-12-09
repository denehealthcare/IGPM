import Script from 'next/script';

export default function PaypalButton(){

    return (
        <>
            <Script  
                src="https://www.paypal.com/sdk/js?client-id=BAAlGfbM8N1Lkb5nw26HO59BLpXaV53SgPVnV7yuhQIGjIcPTlhqW_h-A16bvk4OXhDKZec9adaXGGHbes&components=hosted-buttons&disable-funding=venmo&currency=GBP" id="show-paypal"
                onReady={()=> {
                    paypal.HostedButtons({
                        hostedButtonId: "TFZMMVDAP37NL",
                    }).render("#paypal-container-TFZMMVDAP37NL")
                }}
                />
            {/*<div id="paypal-container-TFZMMVDAP37NL"></div>*/}
            <>
                <Script src='https://app.glueup.com/compiled/js/eb-widgets.min.js' async/>
            </>
            <div>
            <iframe class="eb-widget" id="eb-widget-membership-type-list" name="eb-widget-membership-type-list" data-auto-adjust-height="true" data-auto-adjust-width="true" style={{display:'block', margin: '0', padding: '0', border: '0', outline: '0', background:'transparent'}} src="https://igpm.glueup.com/organization/6758/widget/membership-type-list/"></iframe>
            </div>
        </>
    )
}