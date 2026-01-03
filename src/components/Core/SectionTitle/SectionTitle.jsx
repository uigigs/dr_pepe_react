import React from 'react'
import SectionTitleStyle from './SectionTitle.style'

const SectionTitle = ({title, titlealign}) => {
  return (
    <SectionTitleStyle className={`section-title ${titlealign}`}>
        <h2>{title}</h2>
    </SectionTitleStyle>
  )
}

export default SectionTitle