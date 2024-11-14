import Director from "./director"

export default function OurDirectors(){

    const directors = [

        { url: '/', image: '/images/director.png', name: 'Robyn Clark', backgroundColor: '#83C5E9', job: '' }

    ];


    return(
        <>
            <div className="mt-[140px] lg:mt-[200px]">

                <h1 className="text-[#484848]">Our Team</h1>

                <p className="mt-4">Our board is made up of skilled professionals who bring together a wealth of experience.</p>

                <div className="mt-[40px] grid gap-[20px] justify-center sm:grid-cols-4 flex-wrap">

                    <div className="col-span-4 sm:justify-self-end sm:col-span-2 2xl:col-span-1">

                        <Director 
                            url={'/our-directors/robyn-clark'}
                            image={'/images/robyn-clark.png'}
                            name={'Robyn Clark'}
                            backgroundColor={'#83C5E9'}
                            job={'Director'}
                        />

                    </div>


                    <div className="col-span-4  sm:col-span-2 2xl:col-span-1">

                        <Director
                            url={'/our-directors/nicola-davies'}
                            image={'/images/nicola-davies.png'}
                            name={'Nicola Davies'}
                            backgroundColor={'#83C5E9'}
                            job={'Director'}
                        />

                    </div>


                    <div className="col-span-4 sm:justify-self-end sm:col-span-2 2xl:col-span-1">

                        <Director
                            url={'/our-directors/kay-kean'}
                            image={'/images/kay-kean.png'}
                            name={'Kay Keane'}
                            backgroundColor={'#83C5E9'}
                            job={'Director'}
                        />

                    </div>

                </div>

                <div className="mt-[40px] grid gap-[20px] justify-center sm:grid-cols-4 flex-wrap">

                    <div className="col-span-4 sm:justify-self-end sm:col-span-2 2xl:col-span-1">

                        <Director
                            url={'#'}
                            image={'/images/Alison-Daff.png'}
                            name={'Alison Daff'}
                            backgroundColor={'#83C5E9'}
                            job={'Business Manager'}
                        />

                    </div>    

                    <div className="col-span-4 sm:justify-self-end sm:col-span-2 2xl:col-span-1">

                        <Director
                            url={'#'}
                            image={'/images/Samantha-Alley.png'}
                            name={'Samantha Alley'}
                            backgroundColor={'#83C5E9'}
                            job={'Membership Officer'}
                        />

                    </div>                                    

                </div>

                <div className="mt-[40px] grid gap-[20px] justify-center sm:grid-cols-4 flex-wrap">

                    <div className="col-span-4 sm:justify-self-end sm:col-span-2 2xl:col-span-1">

                        <Director
                            url={'#'}
                            image={'/images/Mike-Neville.png'}
                            name={'Mike Neville'}
                            backgroundColor={'#83C5E9'}
                            job={'National Lead - North'}
                        />

                    </div>    

                    <div className="col-span-4 sm:justify-self-end sm:col-span-2 2xl:col-span-1">

                        <Director
                            url={'#'}
                            image={'/images/Pete-Maynard.png'}
                            name={'Pete Maynard'}
                            backgroundColor={'#83C5E9'}
                            job={'National Lead - South'}
                        />

                    </div>

                    <div className="col-span-4 sm:justify-self-end sm:col-span-2 2xl:col-span-1">

                        <Director
                            url={'#'}
                            image={'/images/Ceri-Gardener.png'}
                            name={'Ceri Gardener'}
                            backgroundColor={'#83C5E9'}
                            job={'National Lead - Midlands'}
                        />

                    </div>    

                    <div className="col-span-4 sm:justify-self-end sm:col-span-2 2xl:col-span-1">

                        <Director
                            url={'#'}
                            image={'/images/Gareth-Thomas.png'}
                            name={'Gareth Thomas'}
                            backgroundColor={'#83C5E9'}
                            job={'National Lead - Wales'}
                        />

                    </div>                                  

                </div>

            </div>
        </>
    )
}