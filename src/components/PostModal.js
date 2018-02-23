import React, { Component } from 'react';

class PostModal extends Component {
    
    constructor(props){
        super(props);
        
        this.state={

        }
        
    this.postCreate = this.postCreate.bind(this);
    this.postCheck = this.postCheck.bind(this);
    this.postTitle = this.postTitle.bind(this);
    this.postDesc = this.postDesc.bind(this);
    this.addPicture = this.addPicture.bind(this);
    this.postCheck = this.postCheck.bind(this);
    }
    
postCreate(){
    console.log(this.props.token);
    console.log(this.props.markersData)
    fetch('http://localhost:4567/posts/', {
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.props.token
    },
    body: JSON.stringify({
        title:this.state.title,
        body:this.state.desc,
        coords: {
            //fake coords - not sure how to access lat/lng from google click
            lat:12,
            long:12
        },
        toggle:true
    })
})
.then((res) => res.json())
.then((data) => this.postCheck(data)) 
}  
    
postCheck(obj){
    if(obj.error){
        console.log("failed");
    } else {
        let post = {
        title:this.state.title,
        body:this.state.desc,
        coords: {
            lat:12,
            long:12
        },
        toggle:true
    };
        console.log(obj.message);
        this.props.addPost(post);
    }
}    
    postTitle(evt){
        this.setState({
            title:evt.target.value
        });
    }

    postDesc(evt){
        this.setState({
            desc:evt.target.value
        });
    }

    addPicture(){
        console.log("hi");
    }

  render() {
   
    return (
        <div>
            <div>
              <input type="text" placeholder="Title" onChange={this.postTitle}/><br/>
              <input type="text" placeholder="Description" onChange={this.postDesc}/><br/>
              <button onClick={this.addPicture}>Add Picture</button><br/>
              <button onClick={this.postCreate}>Create Post</button>
              </div>
        </div>
        

    );
  }
}

export default PostModal;
