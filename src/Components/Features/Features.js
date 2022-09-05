import './Features.css'
import VideoCard from "../VideoCard/VideoCard";
import {motion} from "framer-motion"

import controlsVideoImg from '../Assets/controlsVideo.jpg'
import lentsVideoImg from '../Assets/lentsVideo.jpg'
import processorVideoImg from '../Assets/processorVideo.jpg'
import castVideoImg from '../Assets/castVideo.jpg'
import guardianVideoImg from '../Assets/guardianVideo.jpg'

const controlsVideo = 'https://firebasestorage.googleapis.com/v0/b/metaquest2-102c0.appspot.com/o/metacontrolls.mp4?alt=media&token=7ce132ef-43b3-42d2-9a47-d69c9476a8f0'
const lentsVideo = 'https://firebasestorage.googleapis.com/v0/b/metaquest2-102c0.appspot.com/o/metaquestlent.mp4?alt=media&token=45c5f5d0-cc6d-47cb-8f07-a36253298003'
const processorVideo = 'https://firebasestorage.googleapis.com/v0/b/metaquest2-102c0.appspot.com/o/metaprocessor.mp4?alt=media&token=6c885d5c-911b-4840-b8c7-379807e066e5'
const castVideo = 'https://firebasestorage.googleapis.com/v0/b/metaquest2-102c0.appspot.com/o/metacasting.mp4?alt=media&token=6135b52f-b229-4395-afe6-5af6875eee3c'
const guardianVideo = 'https://firebasestorage.googleapis.com/v0/b/metaquest2-102c0.appspot.com/o/metaguardian.mp4?alt=media&token=86620ed6-2c70-4b9e-94c3-0f35f1e02c9b'


const Features = () => {

    return (


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
                        <motion.h1 initial={{opacity: 0, y: 50}}
                                   whileInView={{opacity: 1, y: 0}}
                                   viewport={{once: true}}
                                   transition={{duration: 0.8}}>“ New worlds await ”
                        </motion.h1>
                        <motion.p initial={{opacity: 0, y: 50}}
                                  whileInView={{opacity: 1, y: 0}}
                                  viewport={{once: true}}
                                  transition={{duration: 0.8}}>Discover new adventures, master epic challenges or
                            revisit classic moments in your favorite games and experiences.
                        </motion.p>
                    </div>
                </div>
                <div className="Features-card-container">
                    <div className="Features-principal">
                        <VideoCard className='Features-card ' video={controlsVideo} img={controlsVideoImg} text={'Controls'}/>
                    </div>
                    <div className="Features-secondary">
                        <VideoCard className='Features-card' video={processorVideo} img={processorVideoImg} text={'Processor'}/>
                        <VideoCard className='Features-card' video={lentsVideo} img={lentsVideoImg} text={'Graphics'}/>
                        <VideoCard className='Features-card' video={castVideo} img={castVideoImg} text={'Friends'}/>
                        <VideoCard className='Features-card' video={guardianVideo} img={guardianVideoImg} text={'Play Area'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features