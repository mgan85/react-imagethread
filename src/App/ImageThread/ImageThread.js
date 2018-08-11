import React, { Component } from 'react';
import './ImageThread.css';
import PostsList from './PostsList/PostsList';
import ReplyBox from './ReplayBox/ReplyBox';
import TopBar from './TopBar/TopBar';

class ImageThread extends Component {
    state = {
        posts: "a"
    }

    render() {
        return (
            <div>
                <TopBar/>
                <ReplyBox/>
                <PostsList/>
            </div>
        );
    }
}

export default ImageThread;