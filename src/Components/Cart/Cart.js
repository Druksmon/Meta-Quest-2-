import './Cart.css'
import Products, {
    useCartItems,
    useCartOpen,
    useDeleteFromCart,
    useFinish,
    useIsCartOpen
} from '../../Context/ContextProducts';
import closeIcon from '../Assets/Icons/close.png'
import trashIcon from '../Assets/Icons/trash.png'
import {AnimatePresence, motion} from "framer-motion"
import {useContext} from "react";

const Cart = () => {

    const isCartOpen = useIsCartOpen()
    const openCart = useCartOpen()
    const cartItems = useCartItems()
    const deleteProduct = useDeleteFromCart()

    const suma = cartItems.map(item => item.price).reduce((prev, curr) => prev + curr, 0);

    const {setFinish} = useContext(Products);
    const isFinish = useFinish()

    const checkOut = () => {
        if (cartItems.length > 0 && isFinish === false ) {
            setFinish()
        }
    }

    return (
        <>
            <AnimatePresence>
                {
                    isCartOpen &&
                    (
                        <motion.div initial={{x: 1000}} animate={{x: 0}}
                                    transition={{duration: 0.4}} exit={{x: 1000}} className={'cart-container'}>
                            <div className='cart-container-selector'>
                                <div className="cart-container-box">
                                    <h1>Shopping List</h1>
                                    <button className='cart-close-icon' onClick={openCart}>
                                        <img src={closeIcon} alt="close-icon"/>
                                    </button>
                                </div>

                                <div className='modal-cart'>
                                    {
                                        cartItems?.map((item) => {

                                            const {image, price, title} = item

                                            return (
                                                <div key={image} className='modal-item'>
                                                    <img src={image} alt={image}/>
                                                    <div className='modal-item-text'>
                                                        <p>{title}</p>
                                                        <span>${price}</span>
                                                    </div>

                                                    <button className='modal-item-button'
                                                            onClick={() => deleteProduct(item)}>
                                                        <img src={trashIcon} alt=""/>
                                                    </button>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="cart-result-container">
                                    <div className="cart-result-text">
                                        <h2>TOTAL</h2>
                                        <h2>${suma}</h2>
                                    </div>

                                    <button onClick={checkOut}>BUY</button>

                                </div>

                            </div>

                        </motion.div>

                    )
                }
            </AnimatePresence>
        </>
    )
}

export default Cart