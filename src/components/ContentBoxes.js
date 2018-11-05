import React from 'react';

export const TextBlock = () => {
    return(
        <div className="content-box text-block">
            <h3>{this.props.content.sectionHeading}</h3>
            <p>{this.props.content.text}</p>
        </div>
    );
}


