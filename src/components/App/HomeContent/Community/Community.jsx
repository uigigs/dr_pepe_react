import React from 'react'
import CommunityStyle from './Community.style'
import checkIcon from '../../../../assets/images/icon/check.png'
import communityImg1 from '../../../../assets/images/img/community-1.png'
import communityImg2 from '../../../../assets/images/img/community-2.png'
import ScrollAnimate from '../../../Core/ScrollAnimate'


const Community = () => {
    return (
        <CommunityStyle>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 pb-30px">
                        <ScrollAnimate delay={200}>
                            <div className="community-card">
                            <h2>Governance — Led by the community for the community</h2>
                            <p>Dr. Pepe is implementing a progressive DAO that grows with the community.</p>
                            <p> Phase by phase, FrogNet becomes more autonomous:</p>

                            <ul>
                                <li><img src={checkIcon} alt="icon" />Transparency and user feedback first.</li>
                                <li><img src={checkIcon} alt="icon" />Then cash flow proposals, grants to creators and issue adjustments.</li>
                            </ul>
                            <p><i>Each $DRPEPE token is a vote in the evolution of mematic intelligence</i></p>

                            <div className="community-img community-img-1">
                                <img src={communityImg1} alt="img" />
                            </div>

                        </div>
                        </ScrollAnimate>
                    </div>
                    <div className="col-lg-6 pb-30px">
                        <ScrollAnimate delay={250}>
                            <div className="community-card">
                            <h2>Security & Transparency</h2>
                            <ul>
                                <li><img src={checkIcon} alt="icon" />Locked liquidity — no scams, no jokes</li>
                                <li><img src={checkIcon} alt="icon" />Audited contracts — safer than the average meme</li>
                                <li><img src={checkIcon} alt="icon" />Multi-sig treasury and timelock — community control</li>
                                <li><img src={checkIcon} alt="icon" />Ethical Disclaimer: This is not financial advice. It is education, art, and AI evolution</li>
                            </ul>
                            <p><i>The only risk is missing the Minaris release</i></p>

                            <div className="community-img community-img-2">
                                <img src={communityImg2} alt="img" />
                            </div>

                        </div>
                        </ScrollAnimate>
                    </div>
                </div>
                <button className="primary-btn community-btn hover-btn">
                    <span className="btn-text">
                        <span>Join the community</span>
                        <span>Join the community</span>
                    </span>
                </button>
            </div>
        </CommunityStyle>
    )
}

export default Community