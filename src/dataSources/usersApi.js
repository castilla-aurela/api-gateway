const { RESTDataSource } = require('apollo-datasource-rest');

const {usersApiUrl} = require('../server');

class UsersAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = usersApiUrl;
    }

    async authenticate(credentials) {
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return await this.post(`/token/`, credentials);
    }

    async refreshToken(refresh) {
        token = new Object(JSON.parse(JSON.stringify({refresh: token})));
        return await this.post(`/token/refresh/`, refresh);
    }
}

module.exports = UsersAPI;