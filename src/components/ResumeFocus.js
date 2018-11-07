import React from 'react';

const ResumeFocus = (props) => {
    return(
        <div id="focus-buttons">
            <button onClick={props.handleFocusMusic}>Music</button>
            <button onClick={props.handleFocusProgramming}>Programming</button>
        </div>
    )
}

export default ResumeFocus;