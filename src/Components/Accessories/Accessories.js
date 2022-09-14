import './Accessories.css'
import IncludedCard from "../IncludedCard/IncludedCard";
import {useContext} from "react";
import Products from "../../Context/ContextProducts";
import { motion } from "framer-motion"

const Accessories = () => {

    const {accessoriesProducts} = useContext(Products);


    return (
        <>
            <div id='accessories' className="accessories-container">
                <div className="accessories-selector">
                    <div className="accessories-text">
                        <motion.h1 initial={{opacity: 0, y: 50}}
                                   whileInView={{opacity: 1, y: 0}}
                                   viewport={{once: true}}
                                   transition={{duration: 0.8}}>Accessories</motion.h1>
                        <motion.p initial={{opacity: 0, y: 50}}
                                  whileInView={{opacity: 1, y: 0}}
                                  viewport={{once: true}}
                                  transition={{duration: 0.8}}>SHOP META QUEST 2</motion.p>
                    </div>
                    <div className="accessories-cards">
                        {
                            accessoriesProducts?.map((product) => {
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
        </>
    )
}


export default Accessories