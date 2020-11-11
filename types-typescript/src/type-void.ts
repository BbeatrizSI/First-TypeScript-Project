// Void

// Tipo Explícito
function showInfo(user: any): any {
    console.log('User info:', user.id, user.username, user.firstname);
    // return 'hola';
    
}

showInfo({id: 1, username: 'Sacristán', firstname: 'Bárbara'});


// Tipo Inferido
function showFormatedInfo(user: any) {
    console.log('User info ', `
    id: ${user.id},
    username: ${user.username},
    firstName: ${user.firstName}
    ` );
}

showFormatedInfo({id: 1, username: 'Sacristán', firstname: 'Bárbara'});

// tipo Void como tipo de dato en una variable
let unusable : void;
// unusable = null;  A no ser que se cambie el strict del json de true a false
unusable = undefined;


// Tipo never
function handleError(code: number, message: string): never {

// Procecc your code here
// Generate a message
throw new Error(`${message}. Code: ${code}`)
}

try {
    handleError(404, 'Not found')
} catch (error) {
    
}
