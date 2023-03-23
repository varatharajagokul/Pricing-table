import React from 'react'
import './price.css'

function Pricetable() {
    const cardData = [
        {
            name: "Free",
            namestyle: true,
            price: "0",
            user: "Single User",
            datastorage: "5 Gb Storage",
            quality: "Good",
            resolution: "Resolution: 480p + Recording",
            ads: "Ads Free",
            adsstyle: true,
            Phone: "Mobile",
            audio: " Audio - Dolby 5.1",
            audiostyle: true,
            dolby: true,
            button: "free",
            Redeem: "Not Avaliable for Free",
            redeemstyle: true,
        },
        {
            name: "Plus",
            namestyle: false,
            price: "29",
            user: "Duo Users",
            datastorage: "10 Gb Storage",
            quality: "Good",
            resolution: "Resolution: 720p + Recording",
            ads: "Ads Free",
            adsstyle: false,
            Phone: "Mobile,TV",
            audio: " Audio - Dolby 5.1",
            audiostyle: true,
            dolby: true,
            button: "Get Plus",
            Redeem: "Not Avaliable for Plus",
            redeemstyle: true,
        },
        {
            name: "Premium",
            namestyle: false,
            price: "49",
            user: "Multiple Users",
            datastorage: "100 Gb Storage",
            quality: "Better",
            resolution: "Resolution: 1080p + Recording",
            ads: "Ads Free",
            adsstyle: false,
            Phone: "Mobile,TV,Tablet",
            audio: " Audio - Dolby 5.1",
            audiostyle: false,
            dolby: false,
            button: "Get Premium",
            Redeem: "Not Avaliable for Premium",
            redeemstyle: true,
        },
        {
            name: "Pro",
            namestyle: false,
            price: "79",
            user: " Multiple Users",
            datastorage: "1 TB Storage",
            quality: "Best",
            resolution: "Resolution: <b>4K+HDR</b> + Recording ",
            ads: "Ads Free",
            adsstyle: false,
            Phone: "Mobile,TV,Tablet,PC",
            audio: "Audio - <b>Dolby 5.1 surround</b>",
            audiostyle: false,
            dolby: false,
            button: "Get Pro",
            Redeem: "Avaliable with (50% off) for Pro",
            redeemstyle: false,
        }
    ]
    return (
        <section class="pricing py-5">
            <div className='style'>
                <div class="container">
                    <div class="row">
                        {
                            cardData.map((a) => {
                                return <div class="col-lg-3">
                                    <div class="card mb-4 mb-lg-0">
                                        <div class="card-body">
                                            <h5 class="card-title text-muted text-uppercase text-center">{a.name}</h5>
                                            <h6 class="card-price text-center">${a.price}<span class="period">/month</span></h6>
                                            <hr />
                                            <ul class="fa-ul">
                                                <li><span class="fa-li"><i class="fa fa-check"></i></span>{a.user}</li>
                                                <li><span class="fa-li"><i class="fa fa-check"></i></span>{a.datastorage}/Download</li>
                                                <li><span class="fa-li"><i class="fa fa-check"></i></span> Video Quality - {a.quality}</li>
                                                <li><span class="fa-li"><i class="fa fa-check"></i></span><div dangerouslySetInnerHTML={{ __html: a.resolution }}></div></li>
                                                <li class=""><span class="fa-li"><i class="fa fa-check"></i></span>Devices - {a.Phone}</li>
                                                <li class={a.adsstyle === (true) ? "text-muted" : ""}><span class="fa-li"><i class={a.namestyle === (true) ? "fa fa-times" : "fa fa-check"}></i></span>{a.ads} / Background play</li>
                                                <li class={a.audiostyle === (true) ? "text-muted" : ""}><span class="fa-li"><i class={a.dolby === (true) ? "fa fa-times" : "fa fa-check"}></i></span><div dangerouslySetInnerHTML={{ __html: a.audio }}></div>
                                                </li>
                                                <li class={a.redeemstyle === (true) ? "text-muted" : ""}><span class="fa-li"><i class={a.redeemstyle === (true) ? "fa fa-times" : "fa fa-check"}></i></span>Redeem code: {a.Redeem}
                                                    Members</li>
                                            </ul>
                                            <div class="d-grid">
                                                <a href="#" class="btn btn-dark text-uppercase">{a.button}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                </div>
             </div >
        </section>
    )
}

export default Pricetable
