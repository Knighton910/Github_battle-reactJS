var UD = {
  name: 'Kelvin Kni',
  username: 'lordKnighton',
  image: 'https://avatars1.githubusercontent.com/u/1773260?v=3&s=460'
}

var React = require('react');
var ReactDOM = require('react-dom');


ProfilePic = React.createClass({
  render: function() {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
  }
})

ProfileLink = React.createClass({
  render: function() {
    return (
      <div>
        <a href={'https://www.github.com/' +this.props.username}>
          {this.props.username}
        </a>
      </div>
    )
  }
})

ProfileName = React.createClass({
  render: function() {
    return (
      <div>{this.props.name}</div>
    )
  }
})

Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
})

ReactDOM.render(
  <Avatar user={UD} />,
  document.getElementById('app')
);
