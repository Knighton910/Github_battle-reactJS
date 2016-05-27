var UD = {
  name: 'Tlyer McGinnis',
  username: 'tylermcginnis',
  image: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'
}

var React = require('react')
var ReactDOM = require('react-dom')



// profilepic component
var ProfilePic = react.createClass({
  render: function() {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
  }
})

// profilelink component
var ProfileLink = react.createClass({
  render: function() {
    return (
      <div>
        <a href = {'https://www.github.com/ '+ this.props.username}>
        {this.props.username}
        </a>
      </div>
    )
  }
})

// profilename component
var ProfileName = react.createClass({
  render: function() {
    return (
      <div>{this.props.name}</div>
    )
  }
})

// Avatar component
var Avatar = react.createClass({
  render: function() {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username}/>
      </div>
    )
  }
})


ReactDOM.render(
  <Avatar user={UD} />,
  document.getElementById('app')
);
