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
    this.private = this.private.bind(this);
    this.postCheck = this.postCheck.bind(this);
    }
    
postCreate(){
//    console.log(this.props.token);
    //console.log("map data: "+this.props.mapData);
    console.log("modal coords: "+this.props.coords.lat);
    console.log("modal coords: "+this.props.coords.long);
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
            lat:this.props.coords.lat,
            long:this.props.coords.long
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

    private(){
        console.log("hi");
    }

  render() {
   
    return (
        <div>
            <div>
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
