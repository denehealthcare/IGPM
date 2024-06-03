export default function OurCampaigns(){

    const campaigns = [
        { title: 'Right Care First Time', videoLink: 'https://www.youtube.com/embed/FiH-pDos0BE?si=TRYIO0j1arf7xMN3' },
        { title: 'If I die it will be your fault', videoLink: 'https://www.youtube.com/embed/hAM3fSDq9kA?si=-IqKQn8Psn4EBabi' }
    ];


    return (
        <>
            <h1 className="pt-[40px] text-[#484848]">
                Our Campaigns
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-[47px] mb-[73px]">
                {campaigns.map((c => (
                    <div className="col-span-1">
                        <iframe width="100%" height="315" src={c.videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <h3 className="mt-3 text-[#404040] text-[20px]">{c.title}</h3>
                    </div>
                )))}

            </div>
        </>
    )

}