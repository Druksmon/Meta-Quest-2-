import './Included.css'
import {useContext} from "react";
import IncludedCard from "../IncludedCard/IncludedCard";
import Products from "../../Context/ContextProducts";
import { motion } from "framer-motion"

const oculusurl = 'https://z-p3-scontent.fcor2-1.fna.fbcdn.net/v/t39.8562-6/275145951_1265021227322260_8719674243585315719_n.png?_nc_cat=111&ccb=1-7&_nc_sid=6825c5&_nc_ohc=oKLbk-2vvIoAX8-jaqD&_nc_ht=z-p3-scontent.fcor2-1.fna&oh=00_AT_aFPLnt213bXv9V0hbgigf4Aq9BR7LIQGIgh48jsYnjw&oe=62DA648C'

const Included = () => {

    const {includedProducts} = useContext(Products);
    const {metaQuestProduct} = useContext(Products);

    return (
        <>
            <div id='Included' className="Included-container">
                {/*<div className="included-rotate-text">*/}

                {/*    <marquee className="marquee" behavior="scroll" direction="left">*/}
                {/*        <h1>&nbsp; META QUEST 2 - META QUEST 2 - META QUEST 2 - META QUEST 2 - META QUEST 2 - META QUEST*/}
                {/*            2 - META QUEST 2 - META QUEST 2&nbsp;</h1>*/}
                {/*    </marquee>*/}
                {/*</div>*/}
                <div className="Included-selector">
                    <div className="Included-text-selector">
                        <motion.h1 initial={{opacity: 0, y: 50}}
                                   whileInView={{opacity: 1, y: 0}}
                                   viewport={{once: true}}
                                   transition={{duration: 0.8}}>“ Personalize every experience ”</motion.h1>
                        <motion.p initial={{opacity: 0, y: 50}}
                                  whileInView={{opacity: 1, y: 0}}
                                  viewport={{once: true}}
                                  transition={{duration: 0.8}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                            viverra maecenas accumsan lacus vel facilisis. </motion.p>
                    </div>
                    <div className="Included-card-container">
                        <div className="Included-card-box-1">
                            {
                                includedProducts?.map((product) => {
                                    return (
                                        <IncludedCard
                                            key={product.id}
                                            product={product}
                                        />
                                    )
                                })
                            }
                        </div>
                        <div className="Included-card-box-2">
                                {
                                    metaQuestProduct?.map((product) => {
                                        return (
                                            <IncludedCard
                                                key={product.id}
                                                product={product}
                                            />
                                        )
                                    })
                                }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Included