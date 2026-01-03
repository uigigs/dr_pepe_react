import React from 'react'
import BuyDrPepeStyle from './BuyDrPepe.style'
import SectionTitle from '../../../Core/SectionTitle/SectionTitle'
import checkIcon from '../../../../assets/images/icon/check.png'
import cursorIcon from '../../../../assets/images/icon/cursor.png'
import ScrollAnimate from '../../../Core/ScrollAnimate'

const BuyDrPepe = () => {

    const leftList = [
        {
            icon: checkIcon,
            text: 'Access to Minaris AI, your intelligent crypto co-pilots. Access to',
        },
        {
            icon: checkIcon,
            text: 'Access to Minaris Pools: stakes, winnings and AI development.',
        },
        {
            icon: checkIcon,
            text: 'Participation in community governance via FrogNet.',
        },
    ]

    const rightList = [
        {
            icon: cursorIcon,
            text: 'Real yield gives you access to real returns.',
        },
        {
            icon: cursorIcon,
            text: 'Each transaction makes the network smarter, the Minaris more precise, and the community more prosperous.',
        },
        {
            icon: cursorIcon,
            text: 'Buy $DRPEPE now — own the token that powers the next crypto intelligence revolution',
        },
    ]

    return (
        <BuyDrPepeStyle>
            <div className="container">
                <SectionTitle title="Buy $DrPepe" />

                <div className="row">
                    {/* LEFT */}
                    <div className="col-lg-6">
                        <ScrollAnimate delay={200}>
                            <div className="buy-drpepe-left">
                                <h6>$DRPEPE is the energy that powers the entire Dr. Pepe universe:</h6>

                                <ul>
                                    {leftList.map((item, index) => (
                                        <li key={index}>
                                            <img src={item.icon} alt="icon" />
                                            <span>{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollAnimate>
                    </div>

                    {/* RIGHT */}
                    <div className="col-lg-6">
                        <ScrollAnimate delay={300}>
                            <div className="buy-drpepe-right">
                                <h6>Staking Dr Pepe and capturing a portion of the subscription revenue.</h6>

                                <ul>
                                    {rightList.map((item, index) => (
                                        <li key={index}>
                                            <img src={item.icon} alt="icon" />
                                            <span>{item.text}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className="buy-btn hover-btn primary-btn">
                                    <span className="btn-text">
                                        <span>Buy $DRPEPE</span>
                                        <span>Buy $DRPEPE</span>
                                    </span>
                                </button>
                            </div>
                        </ScrollAnimate>
                    </div>
                </div>
            </div>
        </BuyDrPepeStyle>
    )
}

export default BuyDrPepe
