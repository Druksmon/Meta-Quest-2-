import './Home.css'
import Header from "../../Header/Header";
import NavBar from "../../NavBar/NavBar";
import Features from "../../Features/Features";
import Included from "../../Included/Included";
import Footer from "../../Footer/Footer";
import SecondaryNavBar from "../../SecondaryNavBar/SecondaryNavBar";
import Cart from "../../Cart/Cart";
import Accessories from "../../Accessories/Accessories";

const Home = ({loading}) => {
    return (
        <div className={loading ? 'home-selector-none' : 'home-selector-block '}>
            <NavBar/>
            <Header/>
            <SecondaryNavBar/>
            <Cart/>
            <Features/>
            <Included/>
            <Accessories/>
            <Footer/>
        </div>
    )
}


export default Home