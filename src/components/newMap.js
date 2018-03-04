import React, { Component } from 'react';
import '../App.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'; 

var infoWindow = [];

class Map extends Component{
    constructor(props){
        super(props);
        this.state = {
            showInfo: false,
            infoWindow: [],
            newPostPin: null
        }
    }  

    showTitle(i){
        infoWindow[i] =  
                <InfoWindow onCloseClick={this.closePost(i)}>
                    
                    <div>{this.props.posts[i].title}</div>

                </InfoWindow>
        this.setState({
            infoWindow: infoWindow 
        });
    }
    
    showPost(i){
        infoWindow[i] =  
                <InfoWindow onCloseClick={this.closePost(i)}>
                    <div>
                        <div>{this.props.posts[i].title}</div>
                        <div>{this.props.posts[i].body}</div>
                    </div>
                </InfoWindow>
        this.setState({
            infoWindow: infoWindow 
        });
    }
    
    //closes InfoWindow
    closePost(i){
        infoWindow[i] = null;
        this.setState({
            infoWindow: infoWindow 
        });   
    }
    
    //closes new post pin
    closeNewPostPin = ()=>{
        this.setState({
            newPostPin: null    
        });   
    }
    
    //when map is pressed
    handleMapClick = (resp)=>{
        //checks that google place is not pressed (so pin isn't placed when clicking on google places)
        if(resp.oa !== undefined){
    //        if(this.props.loggedIn === true){
                this.setState({
                    newPostPin: 
                        <Marker
                            position={{lat: resp.latLng.lat(), lng: resp.latLng.lng()}}
                        >
                            <InfoWindow onCloseClick={this.closeNewPostPin}>
                                <button>Create new Post</button>    
                            </InfoWindow>
                        </Marker>
                }); 
                let newPostCoords = {
                    lat: resp.latLng.lat(),
                    long: resp.latLng.lng()
                };
    //        }
            
        }
    }
    
    render(){
        var posts = 
            this.props.posts.map((obj, i)=>{
                return(
                    <Marker key={i} 
                        position={{lat: obj.coords.lat, lng: obj.coords.long}}
                        onClick={this.showTitle.bind(this, i)}
                        onDblClick={this.showPost.bind(this, i)}>
                
                        {this.state.infoWindow[i]}
                    </Marker>
                );  
            });
            
        return(
                <GoogleMap
                    onClick={this.handleMapClick.bind(this)}
                    
                    defaultZoom={this.props.zoom}
                    center={this.props.center}
                > 
                    {posts}
                    {this.state.newPostPin}
                </GoogleMap> 
        );
    }
}

export default withScriptjs(withGoogleMap(Map));