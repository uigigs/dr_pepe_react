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

    const discoverImages = [
        { img: Discoverimg1, delay: 200 },
        { img: Discoverimg2, delay: 250 },
        { img: Discoverimg3, delay: 300 },
    ]

    const discoverList = [
        'Detects market opportunities',
        'Anticipate risks before panicking',
        'Analyze social and on-chain signals',
        'Adapts to your trading style',
        'Execute your strategies automatically',
    ]

    return (
        <DiscoverStyle>
            <div className="container">

                {/* IMAGES */}
                <div className="discover-images">
                    <img src={DiscoverShape} alt="shape" className="discover-shape" />
                    <div className="row">
                        {discoverImages.map((item, index) => (
                            <div className="col-sm-4" key={index}>
                                <ScrollAnimate delay={item.delay}>
                                    <div className="discover-img">
                                        <img src={item.img} alt="img" />
                                    </div>
                                </ScrollAnimate>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CONTENT */}
                <div className="discover-content">
                    <div className="row">

                        {/* LEFT */}
                        <div className="col-md-6">
                            <ScrollAnimate delay={300}>
                                <div className="discover-left">
                                    <SectionTitle title="Discover the Minaris — Your AI Companions" />
                                    <h6>Each Minari is a unique intelligent agent designed to learn from you:</h6>
                                </div>
                            </ScrollAnimate>
                        </div>

                        {/* RIGHT */}
                        <div className="col-md-6">
                            <ScrollAnimate delay={350}>
                                <div className="discover-right">
                                    <ul>
                                        {discoverList.map((text, index) => (
                                            <li key={index}>
                                                <img src={cursorIcon} alt="icon" />
                                                <span>{text}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <p>
                                        The more you use it, the smarter it becomes. And when Minari Drop starts, you'll be able to capture your own and train it in your image
                                    </p>
                                </div>
                            </ScrollAnimate>
                        </div>
                    </div>

                    {/* BUTTON */}
                    <button className="hover-btn primary-btn join-btn">
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
