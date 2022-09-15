import './NavBar.css'
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion"
import metaLogo from '../Assets/meta-logo.png'


const NavBar = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [color, setColor] = useState(false);

    const changeColor = () => {
        {
            window.scrollY >= 10 ? setColor(true) : setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    const closeIfOpen = () => {
        if (isNavExpanded === true) {
            setIsNavExpanded(!isNavExpanded)
        }
    }

    return (
        <nav className={color ? 'navigation navigation-scroll' : 'navigation'}>
            <div className='navigation-selector'>

                <a href='#home' className="nav-logo">
                    <img src={metaLogo} alt=""/>
                </a>

                <button
                    className={color ? 'hamburger hamburger-black' : 'hamburger'}
                    onClick={() => {
                        setIsNavExpanded(!isNavExpanded);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="white"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <AnimatePresence>
                    <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                        <motion.ul initial={{opacity: 0, y: 200}} whileInView={{opacity: 1, y: 0}}
                                   exit={{opacity: 0, y: 200}}
                                   transition={{type: 'tween', duration: 0.2}}>
                            <li>
                                <a onClick={closeIfOpen} href='#home'>HOME</a>
                            </li>
                            <li>
                                <a onClick={closeIfOpen} href='#Included'>PRODUCTS</a>
                            </li>
                            <li>
                                <a onClick={closeIfOpen} href='#accessories'>ACCESSORIES </a>
                            </li>
                        </motion.ul>
                    </div>
                </AnimatePresence>
            </div>
        </nav>
    )
}

export default NavBar

