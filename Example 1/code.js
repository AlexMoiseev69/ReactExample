      var helloReact = React.createClass({
        render: function(){
          return React.DOM.h1(null, "Hello react")
        }
      });
      ReactDOM.render(React.createElement(helloReact), document.body);