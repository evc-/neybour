//To Get All Users:
fetch('http://localhost:4567/')
    .then((res)=>{
        return res.json(); 
    })
    .then((data)=>{
        console.log(data);
    });

//-------------------------------------------------------

//To Sign Up User:
fetch('http://localhost:4567/users/signup', {
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        email: 'String',
        password: 'String',
        Name: 'String'
    })
    })
    .then((res) => res.json())
    .then((data) => console.log(data)) 

//-------------------------------------------------------

//To Login User:
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
    .then((data) => console.log(data)) 

//To Delete User:

//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
