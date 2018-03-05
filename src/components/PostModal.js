import React, { Component } from 'react';
import '../App.css';

class PostModal extends Component {
    
    constructor(props){
        super(props);
        
        this.state={
            newPostToggle: false   
        }
        console.log(this.props.userInfo);
    }
    
    postCreate = ()=>{      
        fetch('https://neybourapi.herokuapp.com/posts/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + this.props.userInfo.token
            },
            body: JSON.stringify({
                title: this.state.title,
                body: this.state.desc,
                coords: {
                    lat: this.props.coords.lat,
                    long: this.props.coords.lng
                },
                region: this.props.region,
                toggle: this.state.newPostToggle
            })
        })
        .then((res) => res.json())
        .then((data) => this.updateUserPosts(data)) 
    }  

    updateUserPosts = (obj)=>{
        if(obj.error){
            console.log("failed");
            console.log(obj.error.message);
        } else {
            var postsArr = this.props.userPosts;
            postsArr.push(obj.createdPost._id);            
            
            fetch('https://neybourapi.herokuapp.com/users/' + this.props.userInfo.userId, {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer ' + this.props.userInfo.token
                },
                body: JSON.stringify(
                    [ 
                        { "propName": "posts", "value": postsArr }
                    ]
                )
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
            
            fetch('https://neybourapi.herokuapp.com/users/' + this.props.userInfo.userId)
            .then((res)=>{
                return res.json(); 
            })
            .then((data)=>{ 
                this.props.updateUserInfoPosts(data.user.posts);
                this.props.closeNewPostPin();
                this.props.reprintPins();
            });
        }
    }    
    
    postTitle = (evt)=>{
        this.setState({
            title:evt.target.value
        });
    }

    postDesc = (evt)=>{
        this.setState({
            desc:evt.target.value
        });
    }

    private = (evt)=>{
        this.setState({
            newPostToggle: evt.target.checked   
        })
    }

    render() {

        return (
            <div>
                <div className="posts">
                    <input className="post-input" type="text" placeholder="Title" onChange={this.postTitle}/><br/>
                    <input className="post-input" type="text" placeholder="What's your story?" onChange={this.postDesc}/><br/>
                    <label id="post-label">Private?</label>
                    <input id="post-check" type="checkbox" onChange={this.private}/><br/>
                    <button id="create-post-btn" onClick={this.postCreate}>Create Post</button>
                </div>
            </div>


        );
    }
}

export default PostModal;
