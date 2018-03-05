import React, { Component } from 'react';
import '../App.css';

class PostModal extends Component {
    
    constructor(props){
        super(props);
        
        this.state={

        }
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
        .then((data) => this.postCheck(data)) 
    }  

    postCheck = (obj)=>{
        if(obj.error){
            console.log("failed");
            console.log(obj.error.message);
        } else {
            let post = {
            title:this.state.title,
            body:this.state.desc,
            coords: {
                lat:this.props.coords.lat,
                long:this.props.coords.lng
            },
            toggle:true
        };
            console.log(obj.message);
            this.props.addPost(post);
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
            
                    <label id="post-label" className="check-container">
                        Private
                        <input type="checkbox" onChange={this.private}/>
                        <span className="checkmark"></span>
                    </label>
            
            
                    <button id="create-post-btn" onClick={this.postCreate}>Create Post</button>
                </div>
            </div>


        );
    }
}

export default PostModal;
