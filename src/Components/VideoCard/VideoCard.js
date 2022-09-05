import './VideoCard.css'
import {useRef, useState, useEffect} from "react";
import { motion } from "framer-motion"

const VideoCard = ({video, img, text}) => {

    const ref = useRef(null);
    const [focus, setFocus] = useState(false);

    const loop = () => {
        ref.current.play();
    };
    const stopLoop = () => {
        ref.current.pause();
        ref.current.load();
    };

    useEffect(() => {
        {
            focus ? loop() : stopLoop()
        }
    }, [focus]);

    return (
        <>
            <motion.div initial={{opacity: 0, x: 50}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8}} className='video-container'>
                <video
                    ref={ref} className='video-card'
                    poster={img}
                    loop muted
                >
                    <source src={video} type='video/mp4'/>
                </video>
                <div onMouseOver={() => setFocus(true)}
                     onMouseOut={() => setFocus(false)} className={focus ? 'video-text-hidden' : 'video-text'}>
                    <h3>{text}</h3>
                </div>
            </motion.div>

        </>


    )
}

export default VideoCard