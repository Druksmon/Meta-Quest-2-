import './Footer.css'
import metaLogo from '../Assets/meta-logo.png'


const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="footer-selector">
                    <div className="footer-logo">
                        <img src={metaLogo} alt=""/>
                    </div>
                    <div className="footer-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad autem dolores eaque ex
                            facilis fugiat nam nihil nulla obcaecati odit quisquam reiciendis, saepe sapiente totam
                            ullam vel voluptate voluptatibus.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer