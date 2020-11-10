export {};
// <tipo> // Angle bracket syntax
let username: any;
username = 'sada';

// tenemos una cadena TS confía en mi!
let message: string = (<string>username).length > 5 ? 
                     `Welcome ${username}` :
                     'Username is too short';
console.log(message);

let userNameWithId: any = 'sadsad 5';
// Como obtener el username
username = (<string>userNameWithId).substring(0,6);
console.log(username);


// Suntaxis "as"
message = (username as string).length > 5 ? 
                `Welcome ${username}` :
                'Username is too short';

let helloUser: any;
helloUser = 'hello asdasdsd';
username = (helloUser as string).substring(6);
console.log(username);