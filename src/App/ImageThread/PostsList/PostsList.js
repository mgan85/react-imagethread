import React from 'react';
import './PostsList.css';
import ImagePostBox from './ImagePostBox/ImagePostBox';


const postsList = () => {
    return (
        <div>
            <ImagePostBox/>
            <ImagePostBox/>
        </div>
    )
}

export default postsList;