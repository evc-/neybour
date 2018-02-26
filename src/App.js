import React, { Component } from 'react';
import logo from './logo.svg';
import GMap from './components/Gmap.js';
import './App.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Container, Row, Col } from 'reactstrap';
import Narrative from './components/Narrative.js';
import NarrativePin from './components/NarrativePin.js';
import HoodCard from './components/HoodCard.js';
import Login from './components/Login.js';
import PostModal from './components/PostModal.js';
import MapGraphic from './components/MapGraphic.js';
import { slide as Menu } from 'react-burger-menu'

//import { Carousel } from 'react-responsive-carousel';
//import '../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';

/*
<link rel="stylesheet" href="../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"/>
*/


class App extends Component {
    constructor(props){
        super(props);
        
        this.closeModal = this.closeModal.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.pushMarkersData = this.pushMarkersData.bind(this);
        this.updateCenter = this.updateCenter.bind(this);
        this.shareStory = this.shareStory.bind(this);
        this.userInfo = this.userInfo.bind(this);
        this.addPost = this.addPost.bind(this);
        this.coords = this.coords.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        
        this.state = {
            collapsed: true,
            markersData:[],
            mapCoords:null,
            centerLat: 49,
            centerLng: -123,
            loggedin: false,
            posts:[],
            respMessage: [],
            coords:{ lat:'', lng:''},
            userInfo: [],
            modal:'',
            postModal:false,
            modalOpen: false,
            modalName: null,
            sidebar: "neighbourhoodList",
            pageTitle: "neybour.",
            menuOpen: false
        };   
    }
    
    
    
    addPost(post){
        let temp = this.state.posts;
        temp.push(post);
        this.setState({
            posts:temp
        });
        this.setState({
            postModal:false
        })
    }

    shareStory(){
        if(this.state.loggedin === true){
            this.setState({
                postModal:true
            })   
        } else {
            console.log("log in you doof");
        }
    }
    coords(data){
        console.log(data);
        this.setState({
            coords: {
                lat:data.lat,
                lng:data.lng
            }
        })
    }
    userInfo(data){
        this.setState({
            loggedin:true,
            userInfo:data,
            token:data.token
        });
    }
    
     pushMarkersData(data){
        var arr = this.state.markersData;
        arr.push(data);
        this.setState({
            markersData:arr
        })
         console.log(this.state.markersData);
    }
    
    toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
    }
    
    updateCenter(coords, name){
        this.setState({
            centerLat:coords.lat,
            centerLng:coords.lng,
            sidebar: "postList",
            hoodName: name,
            pageTitle: name,
            menuOpen: false
        })
        
    };
    
    closeModal(){
        this.setState({
            modalOpen:false
        })
    }
    
    handleStateChange(state) {
        this.setState({menuOpen: state.isOpen})  
    }
    
  render() { 

      var neighbourhoodArr = [

          {
            name: "Arbutus Ridge",
            icon: require("./img/newicons/Arbutus-Ridge/icons-01.svg"),
            coords: {lat: 49.2536, lng: -123.1604}
          }, 
          
          {
            name: "Downtown",
            icon: require("./img/newicons/Downtown/icons-06.svg"),
            coords: {lat: 49.2820, lng: -123.1171}
          }, 
          
          {
            name: "Dunbar",
            icon: require("./img/newicons/Dunbar/icons-13.svg"),
            coords: {lat: 49.1404, lng: -123.1109}
          },
          
          {
            name: "Fairview",
            icon: require('./img/newicons/Fairview/icons-10.svg'),
            coords: {lat: 49.2660, lng: -123.1289}
          },
          
          {
            name: "Hastings-Sunrise",
            icon: require('./img/newicons/Hastings-Sunrise/icons-03.svg'),
            coords: {lat: 49.2811, lng: -123.0441}
          },
          
          {
            name: "Kensington",
            icon: require('./img/newicons/Kensington/icons-02.svg'),
            coords: {lat: 49.2484, lng: -123.0701}
          },
          
          {
            name: "Kerrisdale",
            icons: require('./img/newicons/Kerrisdale/icons-05.svg'),
            coords: {lat: 49.2341, lng: -123.1554}
          },
                        
          {
            name: "Kitsilano",
            icon: require('./img/newicons/Kitsilano/icons-14.svg'),
            coords: {lat: 49.2709, lng: -123.1621}
          }, 
          
          {
            name: "Mt. Pleasant",
            icon: require('./img/newicons/Mt-Pleasant/icons-08.svg'),
            coords: {lat: 49.2583, lng: -123.1082}
          }, 
          
          {
            name: "Oakridge",
            icon: require('./img/newicons/Oakridge/icons-07.svg'),
            coords: {lat: 49.2298, lng: -123.1162}
          }, 
          
           {
            name: "Riley Park",
            icon: require('./img/newicons/Riley-Park/icons-12.svg'),
            coords: {lat: 49.2449, lng: -123.1135}
          }, 
          
           {
            name: "Shaughnessy",
            icon: require('./img/newicons/Shaughnessy/icons-11.svg'),
            coords: {lat: 49.2473, lng: -123.1409}
          }, 
          
          {
            name: "Sunset",
            icon: require('./img/newicons/Sunset/icons-04.svg'),
            coords: {lat: 49.2245, lng: -123.0900}
          }, 
          
          {
           name: "West End",
           icon: require('./img/newicons/West-End/icons-09.svg'),
            coords: {lat: 49.2856, lng: -123.1306}
          }, 
          
          {
            name: "West Point Grey",
            icon: require('./img/newicons/West-Point-Grey/icons-15.svg'),
            coords: {lat: 49.2610, lng: -123.2001},
          }

      ];
      
    var hoodList = neighbourhoodArr.map((obj, i)=>{
        var bgColor = i%2==1 ? "#f7f3f0" : "white";
        return (
            <div style={{backgroundColor: bgColor}} className="listItems" key={i} onClick={()=>{this.updateCenter(obj.coords, obj.name)}}>
                <img style={{height: "30px"}} src={obj.icon} />
                <span className="listNames">{obj.name}</span>
                
            </div>
        );
    });
                  
    var loginComp = null;
      console.log(this.state.modalOpen);
      if (this.state.loggedin === false && this.state.modalOpen === true){
          loginComp = (
            <Login 
                closeModal={this.closeModal}
                modalOpen={this.state.modalOpen}
                userInfo={this.userInfo} 
                modalName={this.state.modalName}
            />
          )
      } else if (this.state.modalOpen === true){
          console.log("showme");
          loginComp = (
            <Login 
                closeModal={this.closeModal}
                modalOpen={this.state.modalOpen}
                modalName={this.state.modalName}
              />
          )
      }

    var sidebar;
        if (this.state.sidebar == "neighbourhoodList"){
            sidebar = (
                <div>
                <div id="findHoodTitle">find your neighbourhood
                </div>
                <div className="hoodListContainer" id="scrollbar">
                    {hoodList}
                </div>
            </div>
            );
        } else if (this.state.sidebar == "postList"){
            sidebar = (
                <div>
                    <div id="hoodTitle">{this.state.hoodName}
                </div>
                </div>
            );
        }
  
    return (
        
      <div className="App">
        
         <Navbar id="navbar-custom" light>
            <NavbarBrand href="/" className="mr-auto">
                <img id="nav-brand"src={require('./img/nav-brand-04.png')} alt="favicon" width="30" height="30" />
            </NavbarBrand>

            <Button className="account-btns navBtn" id="login-btn" 
                onClick={()=>{this.setState({modalName:"login", modalOpen: true})}}>
                login
            </Button>

            <Button className="account-btns navBtn" id="signup-btn" 
                onClick={()=>this.setState({modalName:"signup", modalOpen: true})}>
                sign up
            </Button>
        </Navbar>

         {loginComp}

        <Container id="title-container">
            <Row>
                <Col xs="12">
                    <div className="header-home">{this.state.pageTitle}</div>
                    <div className="about-home">Share your stories and memories of your Vancouver neighbourhood.</div>
                </Col>
            </Row>
        </Container>

        

        <br />
            
        <Container id="map-container" fluid>
            <Row>
                <Col xs="12">
                    <Menu
                        isOpen={this.state.menuOpen}
                        onStateChange={(state) => this.handleStateChange(state)}
                        noOverlay width={ '50%' }
                    >
                            {sidebar}
                    </Menu>
                    <GMap
                        addCoords={this.coords}
                        loggedin = {this.state.loggedin}
                        token = {this.state.token}
                        addPost = {this.addPost}
                        markersData={this.state.markersData}
                        pushMarkersData={this.pushMarkersData} googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: '100%' }}/> }
                        containerElement={<div style={{ height: '800px' }} /> }
                        mapElement={<div style={{ height: '100%' }}/>}
                        centerLat={this.state.centerLat}
                        centerLng={this.state.centerLng}
                        coordsData={this.state.coords}
                    />
                    <br />
                        {
                        /*
                        <div id="pin-controls">
                        <button className="pin-btns">See all pins</button>
                        <button className="pin-btns">See my pins</button>
                    </div>
                    */
                    }
                </Col>
            </Row>
        </Container>

        <br />
        <br />
                        
        <Container>
                <Row>
                    <Col xs="12">
                        <h3>Browse all neighbourhoods</h3>
                    </Col>
                </Row>
        <br />
        <br />
                
                            
                
                <Row>
                    <HoodCard
                        onClick={()=>this.updateCenter(49.2536, -123.1604)}
                        hoodName="Arbutus Ridge"
                        hoodDesc="tagline"
                        hoodImg={require('./img/newicons/Arbutus-Ridge/icons-01.svg')}
                        hoodLat={49.2536}
                        hoodLng={123.1604}
                    />
                            
                    <HoodCard
                        hoodName="Downtown"
                        hoodDesc="tagline"
                        hoodImg={require('./img/newicons/Downtown/icons-06.svg')}
                        hoodLat={49.2820}
                        hoodLng= {123.1171}
                                 
                    />
                    
                    <HoodCard
                        hoodName="Dunbar"
                        hoodDesc="tagline"
                        hoodImg={require('./img/newicons/Dunbar/icons-13.svg')}
                        hoodLat={49.1404}
                        hoodLng={123.1109}
                    />
                   
                    <HoodCard
                        hoodName="Fairview"
                        hoodDesc="tagline"
                        hoodImg={require('./img/newicons/Fairview/icons-10.svg')}
                        hoodLat={49.2660}
                        hoodLng={123.1289}
                    />
                                 
                    <HoodCard
                        hoodName="Hastings-Sunrise"
                        hoodDesc="tagline"
                        hoodImg={require('./img/newicons/Hastings-Sunrise/icons-03.svg')}
                        hoodLat={49.2811}
                        hoodLng={123.0441}
                    />
                            
                    <HoodCard
                        hoodName="Kensington"
                        hoodDesc="tagline"
                        hoodImg={require('./img/newicons/Kensington/icons-02.svg')}
                        hoodLat={49.2484}
                        hoodLng={123.0701}
                    />

                    <HoodCard
                        hoodName="Kerrisdale"
                        hoodDesc="tagline"
                        hoodImg={require('./img/newicons/Kerrisdale/icons-05.svg')}
                        hoodLat={49.2341}
                        hoodLng={123.1554}
                    />

                    <HoodCard
                        hoodName="Kitsilano"
                        hoodDesc="tagline"
                        hoodImg={require('./img/newicons/Kitsilano/icons-14.svg')}
                        hoodLat={49.2709}
                        hoodLng={123.1621}
                    />

                    <HoodCard
                        hoodName="Mt. Pleasant"
                        hoodDesc="tagline"
                        hoodImg={require('./img/newicons/Mt-Pleasant/icons-08.svg')}
                        hoodLat={49.2583}
                        hoodLng={123.1082}
                    />

                    <HoodCard
                        hoodName="Oakridge"
                        hoodDesc="tagline"
                        hoodImg={require('./img/newicons/Oakridge/icons-07.svg')}
                        hoodLat={49.2298}
                        hoodLng={123.1162}
                    />

                    <HoodCard
                        hoodName="Riley Park"
                        hoodDesc="tagline"
                        hoodImg={require('./img/newicons/Riley-Park/icons-12.svg')}
                        hoodLat={49.2449}
                        hoodLng={123.1135}
                    />

                    <HoodCard
                        hoodName="Shaughnessy"
                        hoodDesc="tagline"
                        hoodImg={require('./img/newicons/Shaughnessy/icons-11.svg')}
                        hoodLat={49.2473}
                        hoodLng={123.1409}
                    />
    
                    <HoodCard
                        hoodName="Sunset"
                        hoodDesc="tagline"
                        hoodImg={require('./img/newicons/Sunset/icons-04.svg')}
                        hoodLat={49.2245}
                        hoodLng={123.0900}
                    />

                    <HoodCard
                        hoodName="West End"
                        hoodDesc="tagline"
                        hoodImg={require('./img/newicons/West-End/icons-09.svg')}
                        hoodLat={49.2856}
                        hoodLng={123.1306}
                    />

                    <HoodCard
                        hoodName="West Point Grey"
                        hoodDesc="tagline"
                        hoodImg={require('./img/newicons/West-Point-Grey/icons-15.svg')}
                        hoodLat={49.2610}
                        hoodLng={123.2001}
                    />

            </Row>
            
                        
        </Container>
      </div>
    );
  }
}

export default App;
