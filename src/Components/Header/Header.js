import './Header.css'
import scroll from '../Assets/Icons/scroll-down-icon.png'
import {useState} from "react";
import {motion} from "framer-motion"

import lentsVideoImg from '../Assets/lentsVideo.jpg'

const oculus = 'https://firebasestorage.googleapis.com/v0/b/metaquest2-102c0.appspot.com/o/metaquestlent.mp4?alt=media&token=45c5f5d0-cc6d-47cb-8f07-a36253298003'

const Header = () => {


    const [color, setColor] = useState(false);

    const changeColor = () => {
        {
            window.scrollY >= 150 ? setColor(true) : setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (<header className='header'>

            <div className=" header-selector">
                <div className="header-box">
                    <motion.p initial={{opacity: 0, y: -100}}
                              whileInView={{opacity: 1, y: 0}}
                              viewport={{once: true}}
                              transition={{duration: 0.8}}>TOP VR GAMING
                    </motion.p>
                    <motion.h1 initial={{opacity: 0, y: -100}}
                               whileInView={{opacity: 1, y: 0}}
                               viewport={{once: true}}
                               transition={{duration: 0.8}}>META QUEST 2
                    </motion.h1>
                    <motion.p initial={{opacity: 0, y: 100}}
                              whileInView={{opacity: 1, y: 0}}
                              viewport={{once: true}}
                              transition={{duration: 0.8}} className='header-discount'>25% OFF 25% OFF 25% OFF 25% OFF
                        25% OFF 25% OFF
                    </motion.p>
                    <motion.p initial={{opacity: 0, y: 100}}
                              whileInView={{opacity: 1, y: 0}}
                              viewport={{once: true}}
                              transition={{duration: 0.8}} className='header-description'>Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Aliquam
                        aliquid commodi corporis cumque
                        dolor, dolore, ducimus exercitationem, inventore maiores placeat reiciendis repudiandae.
                    </motion.p>

                </div>
                <motion.a initial={{opacity: 0}}
                          whileInView={{opacity: 1}}
                          viewport={{once: true}}
                          transition={{duration: 2}} href="/#accesories">
                    <img className='scroll-icon' src={scroll} alt="#accesories"/>
                </motion.a>

            </div>
            <video className={color ? 'oculus-video-opacity' : 'oculus-video'} autoPlay loop muted preload={'auto'}
                   poster={lentsVideoImg}>
                <source src={oculus} type='video/mp4'/>
            </video>
        </header>)
}

export default Header