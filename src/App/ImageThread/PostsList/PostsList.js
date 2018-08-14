import React from 'react';
import './PostsList.css';
import ImagePostBox from './ImagePostBox/ImagePostBox';
import {database} from "../../Utils/firebase";


class postsList extends React.Component{
    constructor() {
        super();
        this.state = {posts: []};
        this.getPosts();
    }

    renderPostBox = (props) => {
        return <ImagePostBox
            key={props.id}
            src={props.url}
            label={props.label}
            id={props.id}
        />
    }

    getPosts = () => {
        let self = this;
        let posts = database.ref('/Posts');
        posts.on('value', function(snapshot) {
            let posts = Object.values(snapshot.val() || {});
            posts.sort(function (a, b) {
                return b.id - a.id
            });

            self.setState({posts: posts});
        });
    }

    renderAllPostBox = () => {
        return this.state.posts.map(this.renderPostBox);
    }

    render() {
        return (
            <div className="PostsList">
                {this.renderAllPostBox()}
            </div>
        )
    }
}

export default postsList;
