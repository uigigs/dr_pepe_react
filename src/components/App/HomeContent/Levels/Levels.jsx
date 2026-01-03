import React from 'react'
import LevelsStyle from './Levels.style'
import SectionTitle from '../../../Core/SectionTitle/SectionTitle'
import labelImg1 from '../../../../assets/images/img/lv-1.png'
import labelImg2 from '../../../../assets/images/img/lv-2.png'
import labelImg3 from '../../../../assets/images/img/lv-3.png'
import ScrollAnimate from '../../../Core/ScrollAnimate'

const Levels = () => {

    const levelsData = [
        {
            img: labelImg1,
            title: 'Level Basic',
            description: '1 Minari starter. Personal alerts + individual learning. Perfect for discovering the Dr. Pepe universe.',
        },
        {
            img: labelImg2,
            title: 'Level Booster',
            description: '1. Enhanced Minari. Advanced analytics, on chain monitoring, adaptive AI',
        },
        {
            img: labelImg3,
            title: 'Level Pro',
            description: 'Several coordinated Minaris accounts, all the advantages of the basic and booster versions. Multi-wallets + full access to FrogNet.',
        },
    ]

    return (
        <LevelsStyle>
            <div className="container">

                <ScrollAnimate delay={200}>
                    <SectionTitle
                        title="Choose Your Level of Madness — The Minaris Access Levels"
                        titlealign="text-center"
                    />
                </ScrollAnimate>

                <ScrollAnimate delay={250}>
                    <div className="row">
                        {levelsData.map((item, index) => (
                            <div className="col-lg-4 col-sm-6 pb-30px" key={index}>
                                <div className="label-card">
                                    <div className="card-img">
                                        <img src={item.img} alt="icon" />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollAnimate>

                <ScrollAnimate delay={300}>
                    <div className="label-bottom">
                        <p>
                            Start small, think big. When one wins, everyone wins! Each level brings you more intelligence and income within the Pepe ecosystem.
                        </p>
                    </div>
                </ScrollAnimate>

            </div>
        </LevelsStyle>
    )
}

export default Levels
