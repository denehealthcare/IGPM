import Script from 'next/script';

export default function PaypalButton(){

    return (
        <>
            {/* <Script  
                src="https://www.paypal.com/sdk/js?client-id=BAAlGfbM8N1Lkb5nw26HO59BLpXaV53SgPVnV7yuhQIGjIcPTlhqW_h-A16bvk4OXhDKZec9adaXGGHbes&components=hosted-buttons&disable-funding=venmo&currency=GBP" id="show-paypal"
                onReady={()=> {
                    paypal.HostedButtons({
                        hostedButtonId: "TFZMMVDAP37NL",
                    }).render("#paypal-container-TFZMMVDAP37NL")
                }}
                />
            <div id="paypal-container-TFZMMVDAP37NL"></div> */}
            <script src='https://app.glueup.com/compiled/js/eb-widgets.min.js' type='text/javascript'></script>
        </>
    )
}