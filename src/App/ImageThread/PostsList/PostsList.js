import React from 'react';
import './PostsList.css';
import ImagePostBox from './ImagePostBox/ImagePostBox';
import {database} from "../../Utils/firebase";


class postsList extends React.Component {
    constructor() {
        super();
        this.state = {posts: []};
        this.getPosts();
    }

    //Function render post
    renderPostBox = (props) => {
        return <ImagePostBox
            key={props.id}
            src={props.url}
            label={props.label}
            id={props.id}
        />
    }

    //Function get all posts from db and sort them desc
    getPosts = () => {
        let self = this;
        let posts = database.ref('/Posts');
        posts.on('value', function (snapshot) {
            let posts = Object.values(snapshot.val() || {});
            posts.sort(function (a, b) {
                return b.id - a.id
            });

            self.setState({posts: posts});
        });
    }

    //Function render all posts
    renderAllPostBox = () => {
        return this.state.posts.map(this.renderPostBox);
    }

    render() {
        let list = this.state.posts.length > 0 ?
            <div className="PostsList">
                {this.renderAllPostBox()}
            </div>
            : null;

        return (
            <div>
                {list}
            </div>
        )
    }
}

export default postsList;
