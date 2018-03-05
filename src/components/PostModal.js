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
                    <input type="text" placeholder="Title" onChange={this.postTitle}/><br/>
                    <input type="text" placeholder="Description" onChange={this.postDesc}/><br/>
                    <label>Private?</label><input type="checkbox" onChange={this.private}/><br/>
                    <button onClick={this.postCreate}>Create Post</button>
                </div>
            </div>


        );
    }
}

export default PostModal;
