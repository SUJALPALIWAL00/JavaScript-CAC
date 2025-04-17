function user(email,password){
    this._email = email; 
    this._password = password;

    Object.defineProperty(this,"email",{
        get : function(){
            return this._email.toUpperCase();               // Here we need to add_ or change the variable name of avoid conflicts
        },
        set : function(value){
            this._email = value;
        }
    })
}

let user1 = new user("sujal@google.com",12345678);
console.log(user1.email);

user1.email = "Rohan@fb.com"
console.log(user1.email);