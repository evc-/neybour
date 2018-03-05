import React, { Component } from 'react';
import '../App.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'; 
import inside from 'point-in-polygon';

import PostModal from './PostModal';

var infoWindow = [];
var newPostCoords = null;

class Map extends Component{
    constructor(props){
        super(props);
        this.state = {
            hoodsArray: {},
            showInfo: false,
            infoWindow: [],
            newPostPin: null,
            newPostRegion: null
        }
    }  

    componentDidMount(){ 
        fetch('http://gruni.ca/neybour/hoods.php')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            this.setState({
                hoodsArray: data
            })
        });   
    }
    
    showTitle(i){
        infoWindow[i] =  
                <InfoWindow onCloseClick={this.closePost(i)}>
                    <div className="infoContent">{this.props.posts[i].title}</div>
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
    
    //displays the post modal inside the InfoWindow of newPostPin
    showPostModal = ()=>{
        this.setState({
            newPostPin: 
                <Marker
                    icon={{
                        url: require("../img/marker8.png"),
                    }}
                    position={{lat: newPostCoords.lat, lng: newPostCoords.lng}}
                    style={{maxHeight:"5px"}}

                >
                    <InfoWindow onCloseClick={this.closeNewPostPin}>
                        <PostModal 
                            coords={newPostCoords}
                            region={this.state.newPostRegion}
                            userInfo={this.props.userInfo}
                        />
                    </InfoWindow>   
                </Marker>
        }); 
        
    }
    
    //when map is pressed
    handleMapClick = (resp)=>{
        //checks that google place is not pressed (so pin isn't placed when clicking on google places)
        if(resp.oa !== undefined){
    //        if(this.props.loggedIn === true){
            newPostCoords = {
                lat: resp.latLng.lat(),
                lng: resp.latLng.lng()
            };
            this.checkRegion(this.state.hoodsArray);
            this.setState({
                newPostPin: 
                    <Marker
                        icon={{
                            url: require("../img/marker8.png"),
                        }}
                        position={{lat: newPostCoords.lat, lng: newPostCoords.lng}}
                        style={{maxHeight:"5px"}}

                    >
                        <InfoWindow onCloseClick={this.closeNewPostPin}>
                            <button className="newPost" onClick={this.showPostModal}>Create New Post</button>
                        </InfoWindow>
                    </Marker>
            }); 
    //        }
            
        }
    }
        
    checkRegion = (data)=>{
        data.features.map((obj, i)=>{
            let polyCheck = obj.geometry.coordinates[0];
            let coords = [newPostCoords.lng, newPostCoords.lat]
            
            if(inside(coords, polyCheck) === true){
                this.setState({
                    newPostRegion: obj.properties.Name 
                })
                console.log(obj.properties.Name)   
            }
            
        });      
    }
    
    render(){
        var posts = 
            this.props.posts.map((obj, i)=>{
                return(
                    <Marker key={i} 
                        position={{lat: obj.coords.lat, lng: obj.coords.long}}
                        onClick={this.showTitle.bind(this, i)}
                        onDblClick={this.showPost.bind(this, i)}
                        icon={{
                            url: require("../img/marker8.png") 
                        }}
                    >
                
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