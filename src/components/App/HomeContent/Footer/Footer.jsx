import React from 'react'
import FooterStyle from './Footer.style'
import SectionTitle from '../../../Core/SectionTitle/SectionTitle'
import papeImg from '../../../../assets/images/img/pape-img.png'
import coinImg from '../../../../assets/images/img/coin-img.png'
import xIcon from '../../../../assets/images/icon/x.png'
import tgIcon from '../../../../assets/images/icon/tg.png'
import discord from '../../../../assets/images/icon/discord.png'
import medium from '../../../../assets/images/icon/medium.png'
import arrowTop from '../../../../assets/images/icon/arrow-top.png'
import ScrollAnimate from '../../../Core/ScrollAnimate'

const Footer = () => {
    const handleBackToTop = (e) => {
        e.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <FooterStyle>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <ScrollAnimate delay={200}>
                            <div className="footer-left">
                                <SectionTitle title="Get ready for the Minaris Release" />
                                <p>The Minaris will be freed. Each one is unique. Each one is intelligent. Each one can become yours. Capture your Minari. Feed it with $DRPEPE. Join the collective intelligence</p>
                                <p>Buy your $DRPEPE now and be among the first to own a piece of the next crypto cultural  revolution.</p>

                                <button className="primary-btn buy-btn hover-btn">
                                    <span className="btn-text">
                                        <span>Buy Dr Pepe Now!</span>
                                        <span>Buy Dr Pepe Now!</span>
                                    </span>
                                </button>

                            </div>
                        </ScrollAnimate>
                    </div>
                    <div className="col-lg-6">
                        <ScrollAnimate delay={250}>
                            <div className="footer-right">
                                <div className="footer-img">
                                    <img src={papeImg} alt="img" className='pepe-img' />
                                    <img src={coinImg} alt="img" className='coin-img' />
                                </div>
                            </div>
                        </ScrollAnimate>
                    </div>
                </div>
                <ScrollAnimate delay={250}>
                    <div className="footer-social">
                        <ul>
                            <li>
                                <a href="#" className='buy-btn hover-btn'>
                                    <span className="btn-text">
                                        <span><img src={xIcon} alt="icon" /></span>
                                        <span><img src={xIcon} alt="icon" /></span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className='buy-btn hover-btn'>
                                    <span className="btn-text">
                                        <span><img src={tgIcon} alt="icon" /></span>
                                        <span><img src={tgIcon} alt="icon" /></span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className='buy-btn hover-btn'>
                                    <span className="btn-text">
                                        <span><img src={discord} alt="icon" /></span>
                                        <span><img src={discord} alt="icon" /></span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className='buy-btn hover-btn'>
                                    <span className="btn-text">
                                        <span><img src={medium} alt="icon" /></span>
                                        <span><img src={medium} alt="icon" /></span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </ScrollAnimate>
            </div>
            <div className="footer-bottom">
                <ScrollAnimate delay={200}>
                    <div className="container">
                        <div className="footer-bottom-inner">
                            <ul>
                                <li><a href="#">Terms and conditions</a></li>
                                <li><a href="#">Privacy policy</a></li>
                                <li><a href="#">Whitepaper</a></li>
                            </ul>

                            <a
                                href="#"
                                className="back-to-top"
                                onClick={handleBackToTop}
                            >
                                Back to Top <img src={arrowTop} alt="icon" />
                            </a>
                        </div>
                    </div>
                </ScrollAnimate>
            </div>
        </FooterStyle>
    )
}

export default Footer