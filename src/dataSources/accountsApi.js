const { RESTDataSource } = require('apollo-datasource-rest');

const {accountApiUrl} = require('../server');

class AccountAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = accountApiUrl;    
  }

  async accountByUserId(userId){
    return await this.get(`/accounts/${userId}`);    
  }

  async createTransaction(transacction){
    transacction = new Object(JSON.parse(JSON.stringify(transacction)));
    return await this.post('/transactions', transacction);    
  }

  async transactionsByIdUser(userId){
    return await this.get(`/transactions/${userId}`);
    
  }
}

module.exports = AccountAPI;