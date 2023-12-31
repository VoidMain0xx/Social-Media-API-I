export default class userModel{
    constructor(id , name , email , password){
        this.id = id,
        this.name = name,
        this.email = email,
        this.password = password;
    }

    static signUp(name, email , password){
        const id = Users.length + 1;
        const newUser = new userModel(id ,name , email , password);
        Users.push(newUser);
        return newUser;
    }

    static signIn(email , password){
        const user = Users.find((u) => u.email == email && u.password == password);
        return user;
    }

    static getAll(){
        return Users;
    }

    static getById(id){
      const result = Users.find((i)=> i.id == id);
      return result
    }
}

var Users = [
    {
        id : 1,
        name : 'Social User',
        email : 'socialuser@gmail.com',
        password : 'pass@1234'   
    },
]