//Se llama al typedef (esquema) de cada submodulo
const accountTypeDefs = require('./accountsTypeDefs');
const transacctionTypeDefs = require('./transactionsTypeDef');
const usersTypeDefs = require('./usersTypeDefs');

//Se unen
const schemasArrays = [accountTypeDefs, transacctionTypeDefs, usersTypeDefs];

//Se exportan
module.exports = schemasArrays; 