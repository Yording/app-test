export const CONFIG:object = {
    logo: "Empresa",
    // Todas las configuraciones para el sub-módulo de authentication
    authentication: {
        // Por defecto será localhost:3000
        apiSecurity:{
            host: 'localhost',
            port: 62073
        },
        // Configuración para el formulario de sign up
        signUpOpts:{
            fields:[
                {
                    name: 'Name'
                },
                {
                    name: 'Phone'
                },
                {
                    name: 'Email'
                }
            ]
        }
    },
    authorization: {
        user: 'Yording', // por defecto Admin
        password: '123', // por defecto Admin2017*
        
    
    }
}