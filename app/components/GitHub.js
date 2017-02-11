var React = require('react');
var SearchUser = require('./SearchUser');

var GitHub = React.createClass({
    //your code
    render:function(){
        return (
            <div className="container">
                <SearchUser />
            </div>
        )
    }
})

module.exports = GitHub;