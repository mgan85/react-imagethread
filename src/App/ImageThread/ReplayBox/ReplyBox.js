import React from 'react';
import './ReplyBox.css';
import {storage, database} from "../../Utils/firebase";

const replyBox = () => {
    let label = "";
    let files = "";

    //Funcion Add new post
    function uploadImage(event) {
        //Get file from input
        files = event.target.files;
        let file = files[0];
        //check format and size
        let msg = CheckImage(file);
        if (msg == null) {
            //create unique name for file in storage
            let name = (+new Date()) + '-' + file.name;

            //add file to storage
            storage.child(name).put(file, {contentType: file.type})
                .then(snapshot => snapshot.ref.getDownloadURL()) //get url for added file
                .then((url) => {
                    //get current post ID
                    database.ref('/AppInfo/currentPostID').once('value')
                        .then(function (snapshot) {
                            let currentPostID = parseInt(snapshot.val(), 10);
                            //Increment postId in database
                            database.ref('/AppInfo/currentPostID')
                                .set(currentPostID + 1);

                            //add post to database
                            database.ref('/Posts/post_' + currentPostID)
                                .set({
                                    id: currentPostID,
                                    label: label,
                                    url: url
                                });

                            //clear controls
                            document.querySelector("#imgLabel").value = "";
                            document.querySelector("#fileInput").value = null;
                        });
                })
                .catch(console.error);
        }
        else {
            return alert(msg);
        }

        //check if file is correct
        function CheckImage(file) {
            if (file.type !== 'image/png' && file.type !== 'image/gif' && file.type !== 'image/jpeg') {
                return "Wrong type of file. Accepted formats jpg, png and gif.";
            }
            else if (file.size > 2097152) {
                return "File size can't exceed 2MB.";
            }
            else
                return null;
        }
    }

    function onChangeLabel(event) {
        label = event.target.value;
    }

    //function add image to post
    function onClickButton(event) {
        event.preventDefault();
        document.querySelector("#fileInput").click();
    }

    return (
        <div className='ReplyBox'>
            <input id='imgLabel' type='text' placeholder="Image tittle" value={this.label}
                   onChange={onChangeLabel}/><br/>
            <input id='fileInput' type='file' value={files} onChange={uploadImage}/>
            <input id='addFileButton' value='Upload Image' type='button' onClick={onClickButton}/>
        </div>
    );
}

export default replyBox;