import React from 'react'
import LevelsStyle from './Levels.style'
import SectionTitle from '../../../Core/SectionTitle/SectionTitle'
import labelImg1 from '../../../../assets/images/img/lv-1.png'
import labelImg2 from '../../../../assets/images/img/lv-2.png'
import labelImg3 from '../../../../assets/images/img/lv-3.png'
import ScrollAnimate from '../../../Core/ScrollAnimate'

const Levels = () => {
    return (
        <LevelsStyle>
            <div className="container">
                <ScrollAnimate delay={200}>
                    <SectionTitle title="Choose Your Level of Madness — The Minaris Access Levels" titlealign="text-center" />
                </ScrollAnimate>
                <ScrollAnimate delay={250}>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 pb-30px">
                            <div className="label-card">
                                <div className="card-img">
                                    <img src={labelImg1} alt="icon" />
                                </div>
                                <h3>Level Basic</h3>
                                <p>1 Minari starter. Personal alerts + individual learning. Perfect for discovering the Dr. Pepe universe.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 pb-30px">
                            <div className="label-card">
                                <div className="card-img">
                                    <img src={labelImg2} alt="icon" />
                                </div>
                                <h3>Level Booster</h3>
                                <p> 1. Enhanced Minari. Advanced analytics, on chain monitoring, adaptive AI</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 pb-30px">
                            <div className="label-card">
                                <div className="card-img">
                                    <img src={labelImg3} alt="icon" />
                                </div>
                                <h3>Level Pro</h3>
                                <p> Several coordinated Minaris accounts, all the advantages of the basic and booster versions. Multi-wallets + full access to FrogNet.</p>
                            </div>
                        </div>
                    </div>
                </ScrollAnimate>
                <ScrollAnimate delay={300}>
                    <div className="label-bottom">
                        <p>Start small, think big. When one wins, everyone wins! Each level brings you more intelligence and income within the Pepe ecosystem.</p>
                    </div>
                </ScrollAnimate>
            </div>
        </LevelsStyle>
    )
}

export default Levels