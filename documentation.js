// To Get All Users:
fetch('http://localhost:4567/users/')
.then((res)=>{
    return res.json(); 
})
.then((data)=>{
    console.log(data);
});
 // Returns {count: Number, users: [{ _id: String, email: String, password: Hash, posts: [postId,...] },...]}

//-------------------------------------------------------

// To Sign Up User:
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
// IF Email exists => Returns {message: 'Email already exists'}
// IF Email unique => Returns {message: 'User created'}

//-------------------------------------------------------

// To Login User:
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
// IF successful => Returns {message: 'Auth failed'}
// IF unsuccessful => Returns {message: 'Auth successful', token: 'tokenString'}

//-------------------------------------------------------

// To Delete User (SECURED with token):
fetch('http://localhost:4567/users/' + userId, {
    method: 'DELETE',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify({
        email: email,
        password: password
    })
})
.then((res) => res.json())
.then((data) => console.log(data)) 
// Returns {message: "User deleted"}

//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------

// To Get All Posts:
fetch('http://localhost:4567/posts/')
.then((res)=>{
    return res.json(); 
})
.then((data)=>{
    console.log(data);
});
// Returns { count: Number, posts: [{ _id: String, title: String, body: String, coords: { lat: Number, long: Number }, toggle: Boolean }] }

//-------------------------------------------------------

// Create New Post:
fetch('http://localhost:4567/posts/', {
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify({
        title: 'String',
        body: 'String',
        coords: { lat: 'Number', long: 'Number' },
        toggle: 'Boolean'
    })
})
.then((res) => res.json())
.then((data) => console.log(data)) 
// Returns { message: 'Created post successfully', createdPost: { _id: String, title: String, body: 'String', coords: { lat: Number, long: Number }, toggle: Boolean } }

//-------------------------------------------------------

// Get Post by ID:
fetch('http://localhost:4567/posts/' + postId)
.then((res)=>{
    return res.json(); 
})
.then((data)=>{
    console.log(data);
});
// Returns { post: { _id: String, title: String, body: String, toggle: Boolean, coords: { lat: Number, long: Number } } }  

//-------------------------------------------------------

// Update Existing Post:
fetch('http://localhost:4567/posts/' + postId, {
    method: 'PATCH',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify({
        //Here you can add multiple objects for props to be changed (title, body, coordinates etc.)
        [ 
            { "propName": "title", "value": "newTitle" },
//            { "propName": "body", "value": "newBody" },
//            { "propName": "coordinates", "value": { lat: 120.00, long: 45.00 } }
        ]
    })
})
.then((res) => res.json())
.then((data) => console.log(data)) 
// Returns { "message": "Post updated" }

//-------------------------------------------------------

// To Delete User (SECURED with token):
fetch('http://localhost:4567/posts/' + postId, {
    method: 'DELETE',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
})
.then((res) => res.json())
.then((data) => console.log(data)) 
// Returns {message: "Post deleted"}

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
