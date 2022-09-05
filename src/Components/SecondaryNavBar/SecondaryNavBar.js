import './SecondaryNavBar.css'
import ShoppingCart from '../Assets/Icons/shopping-cart.png'
import {useCartOpen} from '../../Context/ContextProducts';


const SecondaryNavBar = () => {

    const openCart = useCartOpen()

    return (
        <>
            <div className="secondary-navbar">
                <div className='secondary-navbar-selector'>
                    <div className="secondary-navbar-box-1">
                        <p>SHOP META QUEST 2</p>
                    </div>
                    <div className="secondary-navbar-box-2">

                        <button className='buy-now-button'>BUY NOW</button>
                        <button onClick={openCart} className='shop-cart-button'>
                            <img src={ShoppingCart} alt=""/>
                        </button>

                    </div>

                </div>
            </div>

        </>
    )
}

export default SecondaryNavBar