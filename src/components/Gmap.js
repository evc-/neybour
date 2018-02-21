import React, {Component} from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";
        
 const MyMapComponent = withScriptjs(withGoogleMap((props) =>{
        
        this.updateCenter = this.updateCenter.bind(this);
        
        this.state={
             defaultCenter:{
                lat: -34.397,
                lng: 150.644
            }
        }
    
    
    this.mapClick = function(resp){
        console.log(resp);
        props.pushMarkersData(resp.latLng);
    }
    
    var markers = props.markersData.map((obj, i)=>{
        return <Marker key={i} position={obj} />
    })
    
    updateCenter(){
        this.setState({
            defaultCenter:{
                lat: this.props.mapCoords.lat,
                lng: this.props.mapCoords.lng
            }
        });
    }
    

     render({
        return(
          <GoogleMap
            defaultZoom={4}
            defaultCenter={this.state.defaultCenter}
            onClick={this.mapClick}
          >
            <Marker position ={{lat: -34.397, lng: 150.644}}/>
            {markers}
          </GoogleMap>
        ) 
     })