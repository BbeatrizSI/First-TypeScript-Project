"use strict";
// Void
// Tipo Explícito
function showInfo(user) {
    console.log('User info:', user.id, user.username, user.firstname);
    // return 'hola';
}
showInfo({ id: 1, username: 'Sacristán', firstname: 'Bárbara' });
// Tipo Inferido
function showFormatedInfo(user) {
    console.log('User info ', "\n    id: " + user.id + ",\n    username: " + user.username + ",\n    firstName: " + user.firstName + "\n    ");
}
showFormatedInfo({ id: 1, username: 'Sacristán', firstname: 'Bárbara' });
// tipo Void como tipo de dato en una variable
var unusable;
// unusable = null;  A no ser que se cambie el strict del json de true a false
unusable = undefined;
// Tipo never
function handleError(code, message) {
    // Procecc your code here
    // Generate a message
    throw new Error(message + ". Code: " + code);
}
try {
    handleError(404, 'Not found');
}
catch (error) {
}
