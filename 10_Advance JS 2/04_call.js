function setUsername(username){
    this.username = username;
    console.log("setUsername fx called");
    
}
function createUser(username,email,password){
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

let user1 = new createUser("Sujal","abc@gmail.com",123)
console.log(user1);
