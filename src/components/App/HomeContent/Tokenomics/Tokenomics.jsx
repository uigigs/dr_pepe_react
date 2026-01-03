import React from 'react'
import TokenomicsStyle from './Tokenomics.style'
import SectionTitle from '../../../Core/SectionTitle/SectionTitle'

import TokenomicsImg from '../../../../assets/images/img/tokenomics-pie-img.png'
import blueFire from '../../../../assets/images/icon/blue-fire.png'
import coin from '../../../../assets/images/icon/coin.png'
import chain from '../../../../assets/images/icon/chain.png'
import lock from '../../../../assets/images/icon/lock.png'
import peoples from '../../../../assets/images/icon/peoples.png'
import ScrollAnimate from '../../../Core/ScrollAnimate'

const Tokenomics = () => {
    return (
        <TokenomicsStyle>
            <div className="container">
                <ScrollAnimate delay={200}>
                    <SectionTitle title="Tokenomics — Designed for Growth and Sustainability" />
                </ScrollAnimate>
                <div className="row">
                    <div className="col-lg-6">
                        <ScrollAnimate delay={250}>
                            <div className="tokenomics-left">
                                <h6>Distribution of $DRPEPE:</h6>
                                <ul>
                                    <li><span className='list-icon'><img src={peoples} alt="icon" /></span> Community — staking, liquidity, rewards <span>50%</span></li>
                                    <li><span className='list-icon'><img src={lock} alt="icon" /></span> Development — AI research and product evolution <span>20%</span></li>
                                    <li><span className='list-icon'><img src={coin} alt="icon" /></span> Team — long-term vision <span>15%</span></li>
                                    <li><span className='list-icon'><img src={chain} alt="icon" /></span> Partnerships & Integrations <span>10%</span></li>
                                    <li><span className='list-icon'><img src={blueFire} alt="icon" /></span> Cash — reserve & stabilization <span>5%</span></li>
                                </ul>

                                <h6>Key Mechanisms:</h6>
                                <ol className='mb-0'>
                                    <li>🔥 Automatic Burn</li>
                                    <li>💧 Locked Liquidity</li>
                                    <li>🗳 Progressive DAO Governance</li>
                                </ol>
                            </div>
                        </ScrollAnimate>
                    </div>
                    <div className="col-lg-6">
                        <ScrollAnimate delay={300}>
                            <div className="tokenomics-right">
                                <div className="tokenomics-img">
                                    <img src={TokenomicsImg} alt="img" />
                                </div>
                                <p>Each holder feeds the intelligence network. The more you hold, the more intelligent the system  becomes.</p>
                            </div>
                        </ScrollAnimate>
                    </div>
                </div>
            </div>
        </TokenomicsStyle>
    )
}

export default Tokenomics