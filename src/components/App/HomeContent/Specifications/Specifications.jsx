import React from 'react'
import SpecificationsStyle from './Specifications.style'
import SectionTitle from '../../../Core/SectionTitle/SectionTitle'
import ScrollAnimate from '../../../Core/ScrollAnimate'

const Specifications = () => {

    const specificationsData = [
        {
            left: 'Token name',
            right: 'Dr. Pepe ($DRPEPE)',
        },
        {
            left: 'Utility',
            right: 'Power Miners AI, staking and governance',
        },
        {
            left: 'Blockchain',
            right: 'Solana',
        },
        {
            left: 'Total offer',
            right: 'To be determined (deflationary model)',
        },
        {
            left: 'Liquidity',
            right: 'Locked',
        },
        {
            left: 'KNIFE',
            right: 'Progressive governance',
        },
        {
            left: 'Central theme',
            right: 'AI × Meme × Collective Intelligence',
        },
    ]

    return (
        <SpecificationsStyle>
            <div className="container">

                <ScrollAnimate delay={200}>
                    <SectionTitle title="Technical Specifications" />
                </ScrollAnimate>

                <ScrollAnimate delay={250}>
                    <ul>
                        {specificationsData.map((item, index) => (
                            <li key={index}>
                                <span className="text-left">{item.left}</span>
                                <span className="text-right">{item.right}</span>
                            </li>
                        ))}
                    </ul>
                </ScrollAnimate>

            </div>
        </SpecificationsStyle>
    )
}

export default Specifications
