import React from 'react';

const ResumeFocus = (props) => {
    return(
        <div id="focus-buttons">
            <button onClick={props.handleFocusMusic}>Music Focused</button>
            <button onClick={props.handleFocusProgramming}>Programming Focused</button>
            <br />
            <a href="#" target="_blank">View as PDF</a>
        </div>
    )
}

export default ResumeFocus;