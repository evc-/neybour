import React, { Component } from 'react';
//import '../App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

class Login extends Component {
    
    constructor(props){
        super(props);
        
        this.state={
            modal: false
        }
        
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
        var email = this.state.email;
        var password = this.state.password;
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
        if(data.message == "Auth successful"){
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
        } else {
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

  render() {
    var modal = null;
      if (this.props.modalState === "login"){
          modal = (
            <div className="loginModal">
              <ModalHeader>Login!</ModalHeader>
              <ModalBody>
                <Input type="text" placeholder="username" onChange={this.handleEmail}/>
                <br /><br />
                <Input type="text" placeholder="password" onChange={this.handlePass}/>
                <br /><br />
                <button onClick={this.login}>Go</button>
              </ModalBody>
            </div>
          )
      } else if (this.props.modalState === "signup"){
          modal = (
              <div className="signupModal">
              <ModalHeader >Sign up!</ModalHeader>
              <ModalBody>
                <Input type="text" placeholder="email" onChange={this.signupEmail}/>
                <br /><br />
                <Input type="text" placeholder="name" onChange={this.signupName}/>
                <br /><br />
                <Input type="text" placeholder="password" onChange={this.signupPass}/>
                <br /><br />
                <button onClick={this.signup}>Create Account</button>
             </ModalBody>
            </div>   
              
          )
      }
    return (
        <div>
            {modal}
        </div>
        

    );
  }
}

export default Login;
