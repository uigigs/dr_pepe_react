import React from 'react'
import DiscoverStyle from './Discover.style'
import SectionTitle from '../../../Core/SectionTitle/SectionTitle'
import Discoverimg1 from '../../../../assets/images/img/discover-1.png'
import Discoverimg2 from '../../../../assets/images/img/discover-2.png'
import Discoverimg3 from '../../../../assets/images/img/discover-3.png'
import DiscoverShape from '../../../../assets/images/shape/discover-shape-min.png'
import cursorIcon from '../../../../assets/images/icon/cursor.png'
import ScrollAnimate from '../../../Core/ScrollAnimate'


const Discover = () => {
    return (
        <DiscoverStyle>
            <div className="container">
                <div className="discover-images">
                    <img src={DiscoverShape} alt="shape" className='discover-shape' />
                    <div className="row">
                        <div className="col-sm-4">
                            <ScrollAnimate delay={200}>
                                <div className="discover-img">
                                    <img src={Discoverimg1} alt="img" />
                                </div>
                            </ScrollAnimate>
                        </div>
                        <div className="col-sm-4">
                            <ScrollAnimate delay={250}>
                                <div className="discover-img">
                                    <img src={Discoverimg2} alt="img" />
                                </div>
                            </ScrollAnimate>
                        </div>
                        <div className="col-sm-4">
                            <ScrollAnimate delay={300}>
                                <div className="discover-img">
                                    <img src={Discoverimg3} alt="img" />
                                </div>
                            </ScrollAnimate>
                        </div>
                    </div>
                </div>
                <div className="discover-content">
                    <div className="row">
                        <div className="col-md-6">
                            <ScrollAnimate delay={300}>
                                <div className="discover-left">
                                    <SectionTitle title="Discover the Minaris — Your AI Companions" />
                                    <h6>Each Minari is a unique intelligent agent designed to learn from you:</h6>

                                </div>
                            </ScrollAnimate>
                        </div>
                        <div className="col-md-6">
                            <ScrollAnimate delay={350}>
                                <div className="discover-right">
                                    <ul>
                                        <li><img src={cursorIcon} alt="icon" /> <span>Detects market opportunities</span></li>
                                        <li><img src={cursorIcon} alt="icon" /> <span>Anticipate risks before panicking</span></li>
                                        <li><img src={cursorIcon} alt="icon" /> <span>Analyze social and on-chain signals</span></li>
                                        <li><img src={cursorIcon} alt="icon" /> <span>Adapts to your trading style</span></li>
                                        <li><img src={cursorIcon} alt="icon" /> <span>Execute your strategies automatically</span></li>
                                    </ul>
                                    <p>The more you use it, the smarter it becomes. And when Minari Drop starts, you'll be able to capture  your own and train it in your image</p>
                                </div>
                            </ScrollAnimate>
                        </div>
                    </div>
                    <button className='hover-btn primary-btn join-btn'>
                        <span className="btn-text">
                            <span>Join the Frognet</span>
                            <span>Join the Frognet</span>
                        </span>
                    </button>
                </div>
            </div>
        </DiscoverStyle>
    )
}

export default Discover