import React from 'react';
import './TopBar.css';
import {database} from "../../Utils/firebase";

const topBar = (props) => {
    //Function create csv file with all post and downland this file
    let downloadPosts = () => {
        database.ref('/Posts').on('value', function (snapshot) {
            let headers = ['Title', "FileName"];

            //Get all post ans sort desc
            let posts = Object.values(snapshot.val() || {});
            posts.sort(function (a, b) {
                return b.id - a.id
            });

            let data = posts.map((post) => {
                return {
                    title: post.label,
                    filename: post.url
                }
            })

            let csv = headers.join(',') + '\n';
            data.forEach(function (row) {
                csv += Object.values(row).join(',');
                csv += "\n";
            });

            let hiddenElement = document.createElement('a');
            hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
            hiddenElement.target = '_blank';
            hiddenElement.download = 'posts.csv';
            hiddenElement.click();
        });
    }

    return (
        <div className="TopBar">
            <span id="postCount"><p>Posts:</p> {props.posts}</span>
            <button onClick={downloadPosts}>Export posts</button>
            <span id="viewCount"><p>Views:</p> {props.views} </span>
        </div>)
}

export default topBar;
