import React from 'react';
import './ImagePostBox.css';

const imagePostBox = (props) => {
    return (
        <div className="ImagePostBox">
            <label>{props.label}</label>
            <img alt="" src={props.src}/>
        </div>
    )
}

export default imagePostBox;