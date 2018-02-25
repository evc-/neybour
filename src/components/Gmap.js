import React, { Component } from 'react';

import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

import PostModal from './PostModal.js';

const GMap = withScriptjs(withGoogleMap((props) =>{
    this.mapClick = function(resp){
        if(props.loggedin === true){

        let coords = {
            lat:resp.latLng.lat(),
            lng:resp.latLng.lng()
        };
        props.addCoords(coords);
        props.pushMarkersData(resp.latLng);
        } else if(props.loggedin === false){
            //alert("You need to log in!");
        }
    }
    
   var markers = props.markersData.map((obj, i)=>{
        return (
            <Marker key={i} position={obj}>
            <InfoWindow>
            <PostModal
                coords={props.markersData}
                token={props.token}
                addPost={props.addPost}
            />
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
        </GoogleMap>
    );
    
}))

export default GMap;
