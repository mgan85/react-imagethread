import React from 'react';
import './TopBar.css';

const topBar = (props) => {
    return (
            <span>
                <p>Posts: {props.posts}</p>
                <input type="button" value="Export posts"/>
                <p>Views: {props.views} </p>
            </span>)
}

export default topBar;