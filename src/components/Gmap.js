import React, {Component} from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";


const MyMapComponent = withScriptjs(withGoogleMap((props) =>{
    
    this.mapClick = function(resp){
        console.log(resp);
        props.pushMarkersData(resp.latLng);
    }
    
    var markers = props.markersData.map((obj, i)=>{
        return <Marker key={i} position={obj} />
    })
    
    return(
      <GoogleMap
        defaultZoom={4}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
        onClick={this.mapClick}
      >
        <Marker position ={{lat: -34.397, lng: 150.644}}/>
        {markers}
      </GoogleMap>
    )
}))

export default MyMapComponent;