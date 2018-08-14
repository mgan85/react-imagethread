import React from 'react';
import './ImagePostBox.css';

const imagePostBox = (props) => {
    //adding css class for odd and even post
    let cssClasses = "ImagePostBox ";
    cssClasses += props.id % 2 === 0 ? "Even" : "Odd";

    return (
        <div className={cssClasses}>
            <label>{props.label}</label>
            <img alt="" src={props.src}/>
        </div>
    )
}

export default imagePostBox;