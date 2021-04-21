async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;


        const mysql = require('mysql2/promise')
        const connectionn = await mysql.createConnection("mysql://root:@localhost:3306/painel-cv19")
        console.log("conectou")
        global.connection = connectionn;
        return connectionn;
}