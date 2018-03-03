import React, { Component } from 'react';
import logo from './logo.svg';
//import GMap from './components/Gmap.js';
import './App.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Container, Row, Col } from 'reactstrap';
import Narrative from './components/Narrative.js';
import NarrativePin from './components/NarrativePin.js';
import HoodCard from './components/HoodCard.js';
import Login from './components/Login.js';
import PostModal from './components/PostModal.js';
import MapGraphic from './components/MapGraphic.js';
import { slide as Menu } from 'react-burger-menu';
import GMap from './components/iMap.js';

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
        this.markerCoords = this.markerCoords.bind(this);
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
            markerCoords: { lat:'', long:'' },
            userInfo: [],
            modal:'',
            postModal:false,
            modalOpen: false,
            modalName: null,
            sidebar: "landingMsg",
            pageTitle: "neybour.",
            menuOpen: true,
            width: window.innerWidth,
            hoodImg: require("./img/icons/neighbourhood.svg"),
            hoodName: "Vancouver",
            hoodDesc: "Explore the neighbourhoods",
            credits: false
        };   
    }
    
    componentDidMount(){
        fetch('https://neybourapi.herokuapp.com/posts/')
        .then((res)=>{
        return res.json(); 
        })
            .then((data)=>{
    //    console.log(data);
        this.setState({
            posts:data.posts
        });
        console.log(this.state.posts);
        });
    }
    
    addPost(post){
        var temp = this.state.posts;
  //      console.log(temp);
       temp.push(post);
        this.setState({
            posts:temp
        });
  //      console.log(this.state.posts);
        this.setState({
            postModal:false
        });
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
    markerCoords(data){
        console.log("app.js coords:" +data.long, data.lat);
        this.setState({
            markerCoords: {
                lat:data.lat,
                long: data.long
            }
        });
    }
    
    userInfo(data){
        this.setState({
            loggedin:true,
            userInfo:data,
            token:data.token,
            userId:data.userId
        });
        console.log(data);
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
    
    updateCenter(coords, name, icon){
        this.setState({
            centerLat:coords.lat,
            centerLng:coords.lng,
            sidebar: "postList",
            hoodName: name,
            pageTitle: name,
            menuOpen: false,
            hoodImg: icon
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
      
    const { width } = this.state;
    const isMobile = width <= 576;
    var menuWidth;
      
      if (isMobile) {
            menuWidth = "50%";
                
        } else {
            menuWidth = "35%";
        }

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
            <div style={{borderTopColor: bgColor}} className="listItems" key={i} onClick={()=>{this.updateCenter(obj.coords, obj.name, obj.icon)}}>
                <img style={{height: "30px"}} src={obj.icon} />
                <span className="listNames">{obj.name}</span>
            </div>
        );
    });
                  
    var modalContent = null;

      if (this.state.loggedin === false && this.state.modalOpen === true){
          modalContent = (
            <Login 
                closeModal={this.closeModal}
                modalOpen={this.state.modalOpen}
                userInfo={this.userInfo} 
                modalName={this.state.modalName}
            />
          )
      } if (this.state.credits = true && this.state.modalOpen === true){
          modalContent = (
            <Login 
              closeModal ={this.closeModal}
              modalOpen={this.state.modalOpen}
              modalName={this.state.modalName}
              />
          )
      } else if (this.state.modalOpen === true){
          modalContent = (
            <Login 
                closeModal={this.closeModal}
                modalOpen={this.state.modalOpen}
                modalName={this.state.modalName}
              />
          )
      }

    var sidebar;

        if (this.state.sidebar == "landingMsg"){
            sidebar = (
                <div>
                    <div className="header-home">{this.state.pageTitle}</div>
                    <div className="about-home">A place to share the stories and memories of your Vancouver neighbourhood.
                    <br />
                    Choose to share posts publicly with your neighbours, or keep them private. 
                    </div>
                    <br />
                    <Button id="explore-btn" onClick={()=>{this.setState({sidebar: "neighbourhoodList"})}}>
                        Share your story</Button>
                </div>
            
            )
        }
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
        
                     <Navbar id="navbar-custom" fixed="top">
                        <NavbarBrand href="/" className="mr-auto">
                            <img id="nav-brand"src={require('./img/nav-brand-04.png')} alt="favicon" width="15" height="15" />
                        </NavbarBrand>

                        <Button className="account-btns navBtn" id="login-btn" 
                            onClick={()=>{this.setState({ modalName:"login", modalOpen: true })}}>
                            login
                        </Button>

                        <Button className="account-btns navBtn" id="signup-btn" 
                            onClick={()=>this.setState({ modalName:"signup", modalOpen: true })}>
                            sign up
                        </Button>
                    </Navbar>

         {modalContent}
            
        <Container id="map-container" fluid>

            <Row>
                <Col xs="12">
                    

                        <div id="menu-outer-container">
                            <Menu style={{boxShadow: "2px 2px 5px 0px #ccc"}}
                                outerContainerId={ "menu-outer-container" }
                                isOpen={this.state.menuOpen}
                                onStateChange={(state) => this.handleStateChange(state)}
                                noOverlay width={menuWidth}
                            >
                                <Col xs="12">
                                    {sidebar}
                                </Col>    
                            </Menu>
                        </div>

        
                    <Col xs="12">
                        <div id="inner-map-container">
                            <GMap/>
                        </div>
                    </Col>

                    <div id="miniMap">
                        <MapGraphic />
                    </div>

                    <div id="sideCard">
                        <Row>
                            <Col xs="12">
                                <HoodCard
                                    onClick={()=>this.updateCenter(49.2536, -123.1604)}
                                    hoodName={this.state.hoodName}
                                    hoodDesc={this.state.hoodDesc}
                                    hoodImg={this.state.hoodImg}
                                    hoodLat={49.2536}
                                    hoodLng={123.1604}
                                />
                            </Col>
                        </Row>
                    </div>

                </Col>
            </Row>
        </Container>
            

                    {
                    /*
                    <GMap
                        addCoords={this.markerCoords}
                        loggedin = {this.state.loggedin}
                        token = {this.state.token}
                        addPost = {this.addPost}
                        markersData={this.state.markersData}
                        pushMarkersData={this.pushMarkersData} googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: '100%' }}/> }
                        containerElement={<div style={{ height: '100vh', maxWidth: "100%", marginLeft:"0", marginRight:"0" }} /> }
                        mapElement={<div style={{ height: '100%' }}/>}
                        centerLat={this.state.centerLat}
                        centerLng={this.state.centerLng}
                        markerCoords = {this.state.markerCoords}
                        postModalState = {this.state.postModal}
                        posts = {this.state.posts}
                    />
                    */
                    }

        <Container fluid id="footer-container">
            <Row >
                <Col xs="12" >
                    <div id="footer">
                        <Button onClick={()=>this.setState({credits: true, modalOpen: true, modalName:"credits"})} id="credit-btn">credits</Button>
                    </div>
                </Col>
            </Row>
        </Container>

      </div>
    );
  }
}

export default App;
