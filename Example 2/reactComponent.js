var Button = React.createClass({
    render() {
        return <button onClick={this.props.onClick}>{this.props.children}</button>
    }
});

var GlyphIcon = React.createClass({
    render() {
        return <span className={'glyphicon glyphicon-' + this.props.icon}></span>
    }
});


var HelloReact = React.createClass({
    getDefaultProps() {
        return {likes: 0};
    },
    getInitialState() {
        return {isIncreasing: false};
    },
    componentWillReceiveProps(nextProps) {
        this._logPropsAndState('componentWillReceiveProps()');
        console.log('nextProps.likes: ' + nextProps.likes);
        
        this.setState({isIncreasing: nextProps.likes > this.props.likes});
    },
    shouldComponentUpdate(nextProps, nextState) {
        this._logPropsAndState('shouldComponentUpdate()');
        console.log('nextProps.likes: ' + nextProps.likes 
            + ' nextState.isIncreasing: ' + nextState.isIncreasing);
        return nextProps.likes > 1;
    },
    componentDidUpdate(prevProps, prevState) {
        this._logPropsAndState('componentDidUpdate');
        console.log('prevProps.likes: ' + prevProps.likes 
            + ' prevState.isIncreasing:' + prevState.isIncreasing);
        console.log('componentDidUpdate() gives an opportunity to execute code after react is finished updating the DOM.');
    },
    _logPropsAndState(callingFunction) {
        console.log('=> ' + callingFunction);
        console.log('this.props.likes: ' + this.props.likes);
        console.log('this.state.isIncreasing: ' + this.state.isIncreasing);
    },
    like() {
        this.setProps({likes: this.props.likes+1});
    },
    unlike() {
        this.setProps({likes: this.props.likes-1});
    },
    render() {
        this._logPropsAndState("render()");
        return (
            <div>
                <Button onClick={this.like}><GlyphIcon icon='thumbs-up'/> Like</Button>
                <Button onClick={this.unlike}><GlyphIcon icon='thumbs-down'/> Unlike</Button>
                <br/>
                Likes {this.props.likes}
                <GlyphIcon
                    icon={(this.state.isIncreasing)
                            ? 'circle-arrow-up' : 'circle-arrow-down'}/>
            </div>
        );
    }
});

ReactDOM.render(
    <HelloReact/>,
    document.getElementById('view'));