import React, { Component } from 'react';

import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

import PostModal from './PostModal.js';

const GMap = withScriptjs(withGoogleMap((props) =>{
    
    this.mapClick = function(resp){
        console.log(resp.latLng);
        props.pushMarkersData(resp.latLng);
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
        defaultZoom={10}
        defaultCenter={{ lat: props.centerLat, lng: props.CenterLng }}
            onClick = {this.mapClick}
        >
        {markers}
        </GoogleMap>
    );
    
}))

export default GMap;
