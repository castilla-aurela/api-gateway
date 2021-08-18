//Se llama al typedef (esquema) de cada submodulo
const accountsTypeDefs = require('./accountsTypeDef');
const transactionTypeDefs = require('./transactionsTypeDef');
const usersTypeDefs = require('./usersTypeDef');

//Se unen
const schemasArrays = [accountsTypeDefs, transactionTypeDefs, usersTypeDefs];

//Se exportan
module.exports = schemasArrays; 