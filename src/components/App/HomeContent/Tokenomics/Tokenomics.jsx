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

    const distributionList = [
        {
            icon: peoples,
            text: 'Community — staking, liquidity, rewards',
            percent: '50%',
        },
        {
            icon: lock,
            text: 'Development — AI research and product evolution',
            percent: '20%',
        },
        {
            icon: coin,
            text: 'Team — long-term vision',
            percent: '15%',
        },
        {
            icon: chain,
            text: 'Partnerships & Integrations',
            percent: '10%',
        },
        {
            icon: blueFire,
            text: 'Cash — reserve & stabilization',
            percent: '5%',
        },
    ]

    const mechanismsList = [
        '🔥 Automatic Burn',
        '💧 Locked Liquidity',
        '🗳 Progressive DAO Governance',
    ]

    return (
        <TokenomicsStyle>
            <div className="container">

                <ScrollAnimate delay={200}>
                    <SectionTitle title="Tokenomics — Designed for Growth and Sustainability" />
                </ScrollAnimate>

                <div className="row">

                    {/* LEFT */}
                    <div className="col-lg-6">
                        <ScrollAnimate delay={250}>
                            <div className="tokenomics-left">
                                <h6>Distribution of $DRPEPE:</h6>

                                <ul>
                                    {distributionList.map((item, index) => (
                                        <li key={index}>
                                            <span className="list-icon">
                                                <img src={item.icon} alt="icon" />
                                            </span>
                                            {item.text}
                                            <span>{item.percent}</span>
                                        </li>
                                    ))}
                                </ul>

                                <h6>Key Mechanisms:</h6>

                                <ol className="mb-0">
                                    {mechanismsList.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ol>
                            </div>
                        </ScrollAnimate>
                    </div>

                    {/* RIGHT */}
                    <div className="col-lg-6">
                        <ScrollAnimate delay={300}>
                            <div className="tokenomics-right">
                                <div className="tokenomics-img">
                                    <img src={TokenomicsImg} alt="img" />
                                </div>
                                <p>
                                    Each holder feeds the intelligence network. The more you hold, the more intelligent the system becomes.
                                </p>
                            </div>
                        </ScrollAnimate>
                    </div>

                </div>
            </div>
        </TokenomicsStyle>
    )
}

export default Tokenomics
