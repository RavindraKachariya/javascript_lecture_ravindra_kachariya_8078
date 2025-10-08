// User Registration System

function CreateIDGenerator() {
    let userID = 0;

    return function () {
        userID += 1;
        return userID;
    };
}

let generateID = CreateIDGenerator();

function User(name, email, password) {
    this.id = generateID();
    this.name = name;
    this.email = email;
    this.password = password;

    this.register = function () {
        console.log(`${this.name} is now registered.`);
    };

    this.showUserInfo = function () {
        console.log("User Details:");
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log("----------------------------");
    };

    this.resetPassword = function (newPassword) {
        this.password = newPassword;
        console.log(`${this.name}'s password has been reset.`);
    };

    this.deleteUser = function () {
        console.log(`${this.name} has been deleted.`);
        this.id = null;
        this.name = null;
        this.email = null;
        this.password = null;
    };

    this.login = function (inputEmail, inputPassword) {
        if (this.email === inputEmail && this.password === inputPassword) {
            console.log(`${this.name} logged in successfully.`);
        } else {
            console.log(`Invalid email or password for ${this.name}.`);
        }
    };

    this.logout = function () {
        console.log(`${this.name} has logged out.`);
    };
}

const user1 = new User("Ravindra", "ravindra03@gmail.com", "123456");
const user2 = new User("Yagnik", "yagnik05@gmail.com", "654321");

user1.register();
user1.showUserInfo();

user2.register();
user2.showUserInfo();

user1.login("ravindra03@gmail.com", "123456");
user1.resetPassword("newpass123");
user1.login("ravindra03@gmail.com", "newpass123");

user2.login("yagnik05@gmail.com", "wrongpass");
user2.deleteUser();
user2.showUserInfo();