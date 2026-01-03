import React from 'react'
import WelcomeStyle from './Welcome.style'
import SectionTitle from '../../../Core/SectionTitle/SectionTitle'

import welcomeImg from "../../../../assets/images/img/welcome-img.png";
import ScrollAnimate from '../../../Core/ScrollAnimate';

const Welcome = () => {
    return (
        <WelcomeStyle>
            <div className="overlay">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-6 col-md-7">
                            <ScrollAnimate delay={300}>
                                <div className="welcome-right">
                                    <SectionTitle title="Welcome to the Frog Side" />
                                    <h6>Dr. Pepe is not just a meme. He's a scientist, an AI genius, and your crypto best friend.</h6>
                                    <p>On a mysterious and idyllic island called Pepe Island, Dr. Pepe, during his quest, encounters strange  creatures called the Minaris in the underwater depths. From this encounter was born a collaboration with  the Minaris, half-cute, half-frightening, intelligent creatures enhanced with artificial intelligence, capable  of learning, acting for you, evolving, and connecting to a collective brain: FrogNet. Today, the first Minaris are about to be released. The release is approaching. Are you ready to grab yours?</p>
                                </div>
                            </ScrollAnimate>
                        </div>
                        <div className="col-lg-6 col-md-5">
                            <ScrollAnimate delay={200}>
                                <div className="welcome-left">
                                    <img src={welcomeImg} alt="img" />
                                </div>
                            </ScrollAnimate>
                        </div>

                    </div>
                </div>
            </div>
        </WelcomeStyle>
    )
}

export default Welcome