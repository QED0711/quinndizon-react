import React from 'react';
import {Link} from 'react-router-dom';

const ResumeFocus = (props) => {
    const musicFocus = props.focus === 'music';
    return(
        <div id="resume-focus">
            <div className="resume-toggle-links">
                <Link to="/resume/music" className={`focus-${musicFocus}`} >Music Focus</Link>
                <Link to="/resume/programming" className={`focus-${!musicFocus}`}>Programming Focus</Link>
            </div>
            <br />
            <a href="#" target="_blank">View as PDF</a>
        </div>
    )
}

export default ResumeFocus;