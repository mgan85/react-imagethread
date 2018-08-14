import React, { Component } from 'react';
import './ImageThread.css';
import PostsList from './PostsList/PostsList';
import ReplyBox from './ReplayBox/ReplyBox';
import TopBar from './TopBar/TopBar';
import {database} from "../Utils/firebase";

class ImageThread extends Component {
    constructor() {
        super();
        this.state = {
            views: "",
            amountPosts: ""
        }

        this.incrementView();
        this.getAmountPosts();
    }

    /*
     * Function Increment views of app
     */
    incrementView = () => {
        let self = this;
        //Increment views number in database
        database.ref('/AppInfo/views').once('value')
            .then(function (snapshot) {
                let views = parseInt(snapshot.val(), 10);
                database.ref('/AppInfo/views')
                    .set(views + 1);
            });

        /* Listening if value of views change in database. If change
         * detected we get new value and show in app
         */
        database.ref('/AppInfo/views').on('value', function (snapshot) {
            let views = parseInt(snapshot.val(), 10);
            self.setState({views: views + 1});
        });
    }

    /* Function listening if number of posts change in database. If change
    * detected we get new number of posts and show in app
    */
    getAmountPosts = () => {
        let self = this;
        database.ref('/AppInfo/currentPostID')
            .on('value', function (snapshot) {
                let postsID = parseInt(snapshot.val(), 10);
                self.setState({amountPosts: postsID})
            });
    }

    render() {
        return (
            <div className="ImageThread">
                <TopBar
                    views={this.state.views}
                    posts={this.state.amountPosts}/>
                <ReplyBox/>
                <PostsList/>
            </div>
        );
    }
}

export default ImageThread;