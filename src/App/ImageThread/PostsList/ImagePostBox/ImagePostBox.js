import React from 'react';
import './ImagePostBox.css';

const imagePostBox = (props) => {
    let cssClasses = "ImagePostBox ";
    cssClasses +=  props.id % 2 == 0 ? "Even" : "Odd";
    return (
        <div className= {cssClasses}>
            <label>{props.label}</label>
            <img alt="" src={props.src}/>
        </div>
    )
}

export default imagePostBox;