import './Features.css'
import VideoCard from "../VideoCard/VideoCard";
import {useRef, useState, useEffect} from "react";

import img1 from '../Assets/IMG1.jpg'
import img2 from '../Assets/IMG2.jpg'
import img3 from '../Assets/IMG3.jpg'
import img4 from '../Assets/IMG4.jpg'
import img5 from '../Assets/IMG5.jpg'
import img6 from '../Assets/IMG6.jpg'
import SecondaryNavBar from "../SecondaryNavBar/SecondaryNavBar";

const imgExtra = 'https://z-p3-scontent.fcor2-1.fna.fbcdn.net/v/t39.8562-6/277308251_611966556922330_6199960949078560383_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6825c5&_nc_ohc=eqFmumx4HtoAX_ba6Qe&_nc_ht=z-p3-scontent.fcor2-1.fna&oh=00_AT9l14IYFOZ-jo9jAcZKxF7kk-HvhGmAW_JeRpKlHaK4qQ&oe=62DB81A6'

const video1 = 'https://z-p3-scontent.fcor2-1.fna.fbcdn.net/v/t39.2365-6/273999485_486462992883376_1377772866181752050_n.mp4?_nc_cat=111&ccb=1-7&_nc_sid=91d6fd&_nc_ohc=s5wvRQ9gVOEAX-RNc1-&_nc_ht=z-p3-scontent.fcor2-1.fna&oh=00_AT9o1WXe8hjGT3yGEPK0HiiHj8DZa-GiwCx7-FX7ONOhoQ&oe=62DBA686'
const video2 = 'https://z-p3-scontent.fcor2-1.fna.fbcdn.net/v/t39.2365-6/274222899_671110080974622_2028369068007606625_n.mp4?_nc_cat=111&ccb=1-7&_nc_sid=91d6fd&_nc_ohc=8VputmElkV0AX-nDfRE&_nc_ht=z-p3-scontent.fcor2-1.fna&oh=00_AT86OfaNHS3jsU9RqmNcg59KhWOjxVoL7uJdTt6QSiEyew&oe=62DAFEBB'
const video3 = 'https://z-p3-scontent.fcor2-2.fna.fbcdn.net/v/t39.2365-6/274283053_4022301464661057_8599547101682226829_n.mp4?_nc_cat=109&ccb=1-7&_nc_sid=91d6fd&_nc_ohc=LBRj0U2kWOsAX9H7lxY&_nc_oc=AQki4oCHVjzFwaCx3Wg1dtdbrf8i2KCeV_-fiMbqSxAUfSvJcpNbqRHHXneWc8GF17c&_nc_ht=z-p3-scontent.fcor2-2.fna&oh=00_AT-0WSOCBWr3-Go-PhBRYzaH5_CNJQfjlrrxVP5mePo0wQ&oe=62DBB605'
const video4 = 'https://z-p3-scontent.fcor2-2.fna.fbcdn.net/v/t39.2365-6/274198405_482955220087742_540699284242059181_n.mp4?_nc_cat=105&ccb=1-7&_nc_sid=91d6fd&_nc_ohc=ptsfQLmd008AX9dRZLC&_nc_ht=z-p3-scontent.fcor2-2.fna&oh=00_AT8hrE4o5n5qFXZf56FwjLWGI85AD5XulB19OjlgygyGQQ&oe=62DA528B'
const video5 = 'https://z-p3-scontent.fcor2-1.fna.fbcdn.net/v/t39.2365-6/274227890_488394789619166_7413639120466198730_n.mp4?_nc_cat=111&ccb=1-7&_nc_sid=91d6fd&_nc_ohc=TUwHXgWf2bYAX-GcmUa&_nc_ht=z-p3-scontent.fcor2-1.fna&oh=00_AT9H7YSY8bk2vHp4RXbP0MFyrlM3r4Wayhcw2RoPA336gg&oe=62DB24EE'
const video6 = 'https://z-p3-scontent.fcor2-1.fna.fbcdn.net/v/t39.2365-6/274225573_683606812815463_5043647155248667264_n.mp4?_nc_cat=103&ccb=1-7&_nc_sid=91d6fd&_nc_ohc=WjcSciG_e7QAX-jUd6q&_nc_ht=z-p3-scontent.fcor2-1.fna&oh=00_AT-LkoIHuX6_nsAYxWyMOw8Q6tTObMArGxFx9hTDzHRPhQ&oe=62DA0D54'


const Features = () => {


    return (

        <>
            <div id='accesories' className="Features-container">

                <div className="Features-selector">

                    <div className="Features-information">
                        <div className='Features-information-text'>
                            <h1>Next-level hardware that’s <br/> <span>easy to set up</span> <br/> and safe to use</h1>
                            <p>Hundreds of hit games, one-of-a-kind experiences and
                                a growing community awaits you on Meta Quest 2.</p>
                            <div className="Features-information-buttons">
                                <button>BUY NOW</button>
                                <a>ORDER NOW</a>
                            </div>
                        </div>
                    </div>

                    <div className="Features-text-section">
                        <div className="Features-text-selector">
                            <h1>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ”</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                viverra maecenas accumsan lacus vel facilisis. </p>
                        </div>
                    </div>
                    <div className="Features-card-container">
                        <div className="Features-card-box-1">
                            <VideoCard className='Features-card' video={video2} img={img2}/>

                        </div>
                        <div className="Features-card-box-2">
                            <VideoCard className='Features-card' video={video3} img={img3}/>
                            <VideoCard className='Features-card' video={video1} img={img1}/>
                            <VideoCard className='Features-card' video={video6} img={img6}/>
                            <VideoCard className='Features-card' video={video4} img={img4}/>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Features