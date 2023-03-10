import React from 'react'
import './footer.css'
import socialIcon1 from '../images/social-icons/1.png'
import socialIcon2 from '../images/social-icons/2.png'
import socialIcon3 from '../images/social-icons/3.png'
import socialIcon4 from '../images/social-icons/4.png'
import socialIcon5 from '../images/social-icons/5.png'


export default function Footer(){
    return(
        <div>
            <footer className="footer">
                <div className="container">
                <div className="footer-wrapper">
                    <section className="upper-footer-wrapper">
                    <div>
                        <p className="upper-footer-wrapper-lefthandside-text">©2020 Yourcompany</p>
                    </div>
                    <div>
                        <h2 className="upper-footer-wrapper-center-text">Landie</h2>
                    </div>
                    <div>
                        <button className="upper-footer-wrapper-right-btn" type="button">Purchase</button>
                    </div>
                </section>
                <hr/>
                <section className="lower-footer-wrapper">
                    <div className="bottom-nav">
                    <p className="bottom-nav-home">Home</p>
                    <p className="bottom-nav-about">About</p>
                    <p className="bottom-nav-contact">Contact</p>
                    </div>
                    <div className="social-icons">
                    <img src={socialIcon1} alt="FB" />
                    <img src={socialIcon2} alt="twitter" />
                    <img src={socialIcon3} alt="YT" />
                    <img src={socialIcon4} alt="Insta" />
                    <img className="social-icons-last2right-item"src={socialIcon5} alt="other-social-media" />
                    </div>
                </section>
                </div>
            </div>
            </footer>
        </div>
    )
}