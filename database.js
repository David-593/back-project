const {Pool} = require('pg');
const {db} = require ('../src/configdb');

const pool = new Pool ({
    user: 'postgres',
    password: 'sniper593',
    host: 'localhost',
    port: '5432',
    database: 'Database'
});

 module.exports = pool;

//  conexiondb.connect(function(err){
//      if(err){
//          throw (err);
//      } else{
//          console.log("succesful connection")
//      }
//  });