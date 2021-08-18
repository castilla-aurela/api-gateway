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
        refresh = new Object(JSON.parse(JSON.stringify({refresh: refresh})));
        return await this.post(`/token/refresh/`, refresh);
    }
}

module.exports = UsersAPI;