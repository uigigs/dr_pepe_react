import React from 'react'
import MultipleAgentsStyle from './MultipleAgents.style'
import SectionTitle from '../../../Core/SectionTitle/SectionTitle'
import multipleImg from '../../../../assets/images/img/multiple-agents-img.png'
import ScrollAnimate from '../../../Core/ScrollAnimate'

const MultipleAgents = () => {
    return (
        <MultipleAgentsStyle>
            <div className="container">
                <div className="multiple-agents-bg">
                    <ScrollAnimate delay={200}>
                        <div className="multiple-agent-content">
                            <SectionTitle title="FrogNet — One Mind, Multiple Agents" titlealign="text-center" />
                            <p>FrogNet is the collective intelligence layer connecting all Minaris Pro. Each Minari shares its discoveries with the others, improving the accuracy and security of the ecosystem. When one learns, everyone benefits. When one wins, everyone wins. Choose your level of madness.</p>
                            <h6>This is not just a meme — it’s an evolving AI brain, powered by the community.</h6>
                            <button className='hover-btn primary-btn join-btn'>
                                <span className="btn-text">
                                    <span>Join the Frognet</span>
                                    <span>Join the Frognet</span>
                                </span>
                            </button>
                            <div className="multiple-agent-img">
                                <img src={multipleImg} alt="img" />
                            </div>

                        </div>
                    </ScrollAnimate>

                </div>
            </div>
        </MultipleAgentsStyle>
    )
}

export default MultipleAgents