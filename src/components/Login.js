import React, { Component } from 'react';
import '../App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

class Login extends Component {
    
    constructor(props){
        super(props);
        
        this.state={
            modalOpen: true
        }
        

    this.toggle = this.toggle.bind(this);    
    this.sendData = this.sendData.bind(this);
    this.login = this.login.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.signup = this.signup.bind(this);
    this.signupEmail = this.signupEmail.bind(this);
    this.signupPass = this.signupPass.bind(this);
    this.signupName = this.signupName.bind(this);
    this.signupCheck = this.signupCheck.bind(this);
    }
    
    
sendData(){
}    
        //bare-bones login; use "test@test.com" and "tester" to login
    login(){
        let email = this.state.email;
        let password = this.state.password;
        fetch('http://localhost:4567/users/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then((res) => res.json())
        .then((data) => this.authenticate(data));
    }
    authenticate(data){
        console.log(data);
        if(data.token){
            this.setState({
                loggedin:true
            });
                var obj = {
                    email:this.state.email,
                    token:data.token,
                    loggedin:true
                };
            this.props.userInfo(obj);
            console.log("You're logged in!");
        } else if(data.message == "Auth failed"){
            console.log("failed!");
        }
    }
    
    signup(){
        let name = this.state.signupName;
        let password = this.state.signupPass;
        let email = this.state.signupEmail;
        console.log(name, email, password);
        fetch('http://localhost:4567/users/signup', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
            name: name
        })
        })
        .then((res) => res.json())
        //.then((data) => console.log(data))
        .then((data) => this.signupCheck(data))
    }
    
    signupCheck(obj){
        if(obj.error){
            console.log("failed");
        } else {
            console.log(obj.message);
        }
    }    
    
    signupEmail(evt){
        this.setState({
            signupEmail:evt.target.value
        });
    }
    
    signupPass(evt){
        this.setState({
            signupPass:evt.target.value
        });
    }
    
    signupName(evt){
        this.setState({
            signupName:evt.target.value
        });
    }

    handleEmail(evt){
        this.setState({
            email:evt.target.value
        });
    }
    
    handlePass(evt){
        this.setState({
            password:evt.target.value
        });
    }
    
    toggle() {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }

  render() {
      
    var headerContent = null;
    var bodyContent = null;
      
      if (this.props.modalName === "login"){
          headerContent ="Login";
          bodyContent = (
                <div className="acctModal">
                <Input type="text" placeholder="username" onChange={this.handleEmail}/>
                <br /><br />
                <Input type="text" placeholder="password" onChange={this.handlePass}/>
                <br /><br />
                <button className="account-btns" id="Btn" onClick={this.login}>Go</button>
                </div>
          );
          
      } else if (this.props.modalName === "signup"){
          headerContent = "Sign Up"
          bodyContent = (
                <div className="acctModal">
                <Input  type="text" placeholder="email" onChange={this.signupEmail}/>
                <br /><br />
                <Input type="text" placeholder="name" onChange={this.signupName}/>
                <br /><br />
                <Input type="text" placeholder="password" onChange={this.signupPass}/>
                <br /><br />
                <button className="account-btns" id="Btn" onClick={this.signup}>Create Account</button>
                </div>
          );
      }
    return (
            <Modal isOpen={this.props.modalOpen}>
                <ModalHeader className="modalHeader"  toggle={this.props.closeModal}>
                    {headerContent}
                </ModalHeader>
                <ModalBody className="modalBody">
                    {bodyContent}
                </ModalBody>
            </Modal>
    );
  }
}

export default Login;
