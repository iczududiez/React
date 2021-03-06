var axios = require('axios');

var GitHubUserService = {
    getByUserName: function(username){
        return axios.get('https://api.github.com/users/' + username);
    },
    getReposByUserName: function(username){
        return axios.get('https://api.github.com/users/' + username + '/repos');
    }
}

module.exports = GitHubUserService;