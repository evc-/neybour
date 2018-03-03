import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import PostModal from './PostModal.js';

const GMap = withScriptjs(withGoogleMap((props) =>{
    
    this.mapClick = function(resp){
        if(props.loggedin === true){

        let coords = {
            lat:resp.latLng.lat(),
            long:resp.latLng.lng()
        };
        console.log("click data:"+ coords.lat, coords.long);
        props.addCoords(coords);
        props.pushMarkersData(resp.latLng);
            
        } else if(props.loggedin === false){
            //alert("You need to log in!");
        }
    }
    this.markerInfo = function(){
        console.log("click");
    }

    
   var markers = props.markersData.map((obj, i)=>{
        return (
            <Marker key={i} position={obj}>
            <InfoWindow>
            <PostModal
                coords={props.markerCoords}
                token={props.token}
                addPost={props.addPost}
            />
        </InfoWindow>
        </Marker> 
)
 })
   var posts = props.posts.map((obj, i)=>{
   //    console.log(obj);
       let latLng = { lat:obj.coords.lat, lng:obj.coords.long };
       return (
        <Marker key={i} position={latLng} onClick={this.markerInfo}>
           <InfoWindow>
           <div>{obj.title}</div>
           </InfoWindow>
           </Marker>
       )
   })
   
return (
      <GoogleMap
        defaultZoom={15}
//        defaultCenter={{ lat: 49, lng: -123 }}
        center={{lat: props.centerLat, lng: props.centerLng}}
        onClick = {this.mapClick}
        >
            {markers}
            {posts}
        </GoogleMap>
    );
    
}))

export default GMap;
