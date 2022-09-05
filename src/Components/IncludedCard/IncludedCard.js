import './IncludedCard.css'
import {useAddToCart, useCartOpen, useIsCartOpen} from "../../Context/ContextProducts";
import {motion} from "framer-motion"

const IncludedCard = ({product}) => {

    const {image, title, price, stock} = product;
    const addToCar = useAddToCart()
    const openCart = useCartOpen()
    const isCartOpen = useIsCartOpen()

    const addAndOpen = () => {
        if (isCartOpen === false) {
            openCart();
            addToCar(product);
        } else {
            addToCar(product);
        }
    }

    return (
        <>
            <motion.div initial={{opacity: 0, x: -50}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8}} className='included-card'>
                <img src={image} alt={title}/>
                <div className="included-box-text">
                    <h1>{title}</h1>
                    <p>${price} USD</p>
                    <div className="included-box">
                        <button onClick={() => addAndOpen(product)}>BUY NOW</button>
                        <p>Stock: {stock}</p>
                    </div>
                </div>
            </motion.div>

        </>
    )
}

export default IncludedCard