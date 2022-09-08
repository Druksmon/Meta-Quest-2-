import './Finish.css'
import closeIcon from '../Assets/Icons/close.png'
import delivery from '../Assets/delivery.jpg'
import Products, {useFinish} from "../../Context/ContextProducts";
import {useContext} from "react";
import {AnimatePresence, motion} from "framer-motion"

const Finish = () => {

    const isFinish = useFinish()
    const {setFinish} = useContext(Products);

    const closeCheckout = () => {
        setFinish(false)
    }

    return (
        <>
            <AnimatePresence>
                {
                    isFinish && (
                        <div className="finish-container">
                            <motion.div initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}}
                                        transition={{duration: 0.4}} exit={{opacity: 0,y: 1000}} className="finish-selector">
                                <div className="finish-text">
                                    <div>
                                        <h1>Congratulations</h1>
                                        <p>Your purchase is on its way.</p>
                                    </div>
                                    <button onClick={closeCheckout}>
                                        <img src={closeIcon} alt=""/>
                                    </button>
                                </div>
                                <div className="finish-img">
                                    <img src={delivery} alt=""/>
                                </div>
                            </motion.div>

                        </div>
                    )


                }
            </AnimatePresence>
        </>
    )
}

export default Finish