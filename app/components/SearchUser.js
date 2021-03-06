var React = require('react');
var GitHubService = require('../services/GitHubUser');

var SearchUser = React.createClass({    
    handleSubmit: /*(e) => {e.preventDefault();
                        console.log(this.refs.username.value);
                        console.log("uhuh");}*/
    function(e){
        e.preventDefault();

        GitHubService.getByUserName(this.refs.username.value).then(function(response){
            this.props.updateUser(response.data);
        }.bind(this));

        GitHubService.getReposByUserName(this.refs.username.value).then(function(response){
            this.props.updateRepos(response.data);
        }.bind(this));

    },
    render: function(){
        return (
            <div className="jumbotron">
                <h1>GitHub Info</h1>
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input 
                                type="text"
                                ref="username"
                                className="form-control"
                                placeholder="Ex. rafael"
                                />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary">
                            Buscar
                        </button>
                    </form>
                </div>
            </div>
        );
    }
});

SearchUser.propTypes = {
    updateUser:React.PropTypes.func.isRequired,
    updateRepos:React.PropTypes.func.isRequired
}

module.exports = SearchUser;