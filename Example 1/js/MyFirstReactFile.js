var LLabel = React.createClass({
  getDefaultProps: function() {
    return {
      msg : "default value",
    }
  },
  render: function() {
    return (
      <p><b>Hello, {this.props.msg}</b></p>    
    )
  }
});


var Greeting = React.createClass({
  getInitialState: function(){
    return {
      stateMessage: "default"
    } 
  },
  getDefaultProps: function() {
      return {
        msg : "default",
        msg2 : 100
      }
  },
  propTypes:{
    msg: React.PropTypes.string.isRequired,
  },
  componentWillUpdate: function(nextProps, nextState) {
    
  },
  
  updateStateMsg : function(){
      this.setState({stateMessage: this.refs.messageBox.value});
  },
  render: function() {
    return (
      <div>
        <LLabel msg={this.state.stateMessage}/>
        <div>
          <p>State: {this.state.stateMessage}</p>
          <p> {this.props.children} </p>
        </div>
        <input type='text' ref="messageBox" onChange={this.updateStateMsg}></input>
      </div>
    )
  }
});

ReactDOM.render(
  <Greeting msg='new message'/>,
  document.getElementById('greeting-div')
);