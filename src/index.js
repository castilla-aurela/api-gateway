
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const authentication = require('./utils/authentication');
const AccountAPI = require('./dataSources/accountsApi');
const UsersAPI = require('./dataSources/usersApi');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        accountsAPI: new AccountAPI(),
        usersAPI: new UsersAPI(),
    }),
    introspection: true,
    playground: true
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});