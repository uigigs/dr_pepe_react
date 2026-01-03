import React from 'react'
import SpecificationsStyle from './Specifications.style'
import SectionTitle from '../../../Core/SectionTitle/SectionTitle'
import ScrollAnimate from '../../../Core/ScrollAnimate'

const Specifications = () => {
    return (
        <SpecificationsStyle>
            <div className="container">
                <ScrollAnimate delay={200}>
                    <SectionTitle title="Technical Specifications" />
                </ScrollAnimate>
                <ScrollAnimate delay={250}>
                    <ul>
                        <li><span className='text-left'>Token name</span> <span className='text-right'>Dr. Pepe ($DRPEPE)</span></li>
                        <li><span className='text-left'>Utility</span> <span className='text-right'>Power Miners AI, staking and governance</span></li>
                        <li><span className='text-left'>Blockchain</span> <span className='text-right'>Solana</span></li>
                        <li><span className='text-left'>Total offer</span> <span className='text-right'>To be determined (deflationary model)</span></li>
                        <li><span className='text-left'>Liquidity</span> <span className='text-right'>Locked</span></li>
                        <li><span className='text-left'>KNIFE</span> <span className='text-right'>Progressive governance</span></li>
                        <li><span className='text-left'>Central theme</span> <span className='text-right'>AI × Meme × Collective Intelligence</span></li>
                    </ul>
                </ScrollAnimate>
            </div>
        </SpecificationsStyle>
    )
}

export default Specifications