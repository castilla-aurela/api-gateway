const accountResolver = require('./accountResolver');
const transactionResolver = require('./transactionResolver');
const userResolver = require('./usersResolver');

const lodash = require('lodash');

const resolvers = lodash.merge(accountResolver, transactionResolver, userResolver);

module.exports = resolvers;