const transactionResolver = {
    Query: {
        transactionsByIdUser: (_, { userId }, {dataSources, userIdToken}) => {
            if(userId == userIdToken) 
                return dataSources.accountsAPI.transacctionByIdUser(userId)
            else
                return null
        }
    },
    Mutation: {
        createTransaction: (_, {transaction}, {dataSources, userIdToken}) => {
            if(transaction.userIdOrigin == userIdToken) 
                return dataSources.accountsAPI.createTransaction(transaction)
            else
                return null
        }
        
    }
};


module.exports = transactionResolver;