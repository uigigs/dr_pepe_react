import React from 'react'
import BuyDrPepeStyle from './BuyDrPepe.style'
import SectionTitle from '../../../Core/SectionTitle/SectionTitle'
import buyDrPepeImg from '../../../../assets/images/img/buy-drpepe-img.png'
import checkIcon from '../../../../assets/images/icon/check.png'
import cursorIcon from '../../../../assets/images/icon/cursor.png'
import ScrollAnimate from '../../../Core/ScrollAnimate'

const BuyDrPepe = () => {
    return (
        <BuyDrPepeStyle>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <ScrollAnimate delay={200}>
                            <div className="buy-drpepe-left">
                                <SectionTitle title="Buy $DrPepe" />
                                <h6>$DRPEPE is the energy that powers the entire Dr. Pepe universe:</h6>
                                <div className="top">
                                    <ul>
                                        <li>
                                            <img src={checkIcon} alt="icon" />
                                            <span>Access to Minaris AI, your intelligent crypto co-pilots. Access to</span>
                                        </li>
                                        <li>
                                            <img src={checkIcon} alt="icon" />
                                            <span>Access to Minaris Pools: stakes, winnings and AI development.</span>
                                        </li>
                                        <li>
                                            <img src={checkIcon} alt="icon" />
                                            <span>Participation in community governance via FrogNet.</span>
                                        </li>
                                    </ul>
                                </div>

                                <h6>Staking Dr Pepe and capturing a portion of the subscription revenue.</h6>
                                <div className="bottom">
                                    <ul>
                                        <li>
                                            <img src={cursorIcon} alt="icon" />
                                            <span>Real yield gives you access to real returns.</span>
                                        </li>
                                        <li>
                                            <img src={cursorIcon} alt="icon" />
                                            <span>Each transaction makes the network smarter, the Minaris more precise, and the community more  prosperous.</span>
                                        </li>
                                        <li>
                                            <img src={cursorIcon} alt="icon" />
                                            <span>Buy $DRPEPE now — own the token that powers the next crypto intelligence revolution</span>
                                        </li>
                                    </ul>
                                </div>

                                <button className='buy-btn hover-btn primary-btn'>
                                    <span className="btn-text">
                                        <span>Buy $DRPEPE</span>
                                        <span>Buy $DRPEPE</span>
                                    </span>
                                </button>
                            </div>
                        </ScrollAnimate>
                    </div>
                    <div className="col-lg-6">
                        <ScrollAnimate delay={300}>
                            <div className="buy-drpepe-right">
                                <img src={buyDrPepeImg} alt="img" />
                            </div>
                        </ScrollAnimate>
                    </div>
                </div>
            </div>
        </BuyDrPepeStyle>
    )
}

export default BuyDrPepe