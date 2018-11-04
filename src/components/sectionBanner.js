
import React from 'react'

const SectionBanner = (props) => {
    return(
        <div id="section-banner">
            <h1>{props.heading.title}</h1>
            <h3>{props.heading.subtitle}</h3>
        </div>
    )
}

export default SectionBanner;