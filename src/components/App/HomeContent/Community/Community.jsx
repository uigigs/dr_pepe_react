import React from 'react'
import CommunityStyle from './Community.style'
import checkIcon from '../../../../assets/images/icon/check.png'
import communityImg1 from '../../../../assets/images/img/community-1.png'
import communityImg2 from '../../../../assets/images/img/community-2.png'
import ScrollAnimate from '../../../Core/ScrollAnimate'

const Community = () => {

    const communityData = [
        {
            delay: 200,
            title: 'Governance — Led by the community for the community',
            paragraphs: [
                'Dr. Pepe is implementing a progressive DAO that grows with the community.',
                'Phase by phase, FrogNet becomes more autonomous:',
            ],
            list: [
                'Transparency and user feedback first.',
                'Then cash flow proposals, grants to creators and issue adjustments.',
            ],
            footerText: 'Each $DRPEPE token is a vote in the evolution of mematic intelligence',
            image: communityImg1,
            imageClass: 'community-img-1',
        },
        {
            delay: 250,
            title: 'Security & Transparency',
            paragraphs: [],
            list: [
                'Locked liquidity — no scams, no jokes',
                'Audited contracts — safer than the average meme',
                'Multi-sig treasury and timelock — community control',
                'Ethical Disclaimer: This is not financial advice. It is education, art, and AI evolution',
            ],
            footerText: 'The only risk is missing the Minaris release',
            image: communityImg2,
            imageClass: 'community-img-2',
        },
    ]

    return (
        <CommunityStyle>
            <div className="container">

                <div className="row">
                    {communityData.map((item, index) => (
                        <div className="col-lg-6 pb-30px" key={index}>
                            <ScrollAnimate delay={item.delay}>
                                <div className="community-card">

                                    <h2>{item.title}</h2>

                                    {item.paragraphs.map((text, i) => (
                                        <p key={i}>{text}</p>
                                    ))}

                                    <ul>
                                        {item.list.map((text, i) => (
                                            <li key={i}>
                                                <img src={checkIcon} alt="icon" />
                                                {text}
                                            </li>
                                        ))}
                                    </ul>

                                    <p>
                                        <i>{item.footerText}</i>
                                    </p>

                                    <div className={`community-img ${item.imageClass}`}>
                                        <img src={item.image} alt="img" />
                                    </div>

                                </div>
                            </ScrollAnimate>
                        </div>
                    ))}
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
