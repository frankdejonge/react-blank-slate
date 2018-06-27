import React, { Component } from 'react';
import { render } from 'react-dom';

let now = () => new Date().toTimeString();

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { now: now() }
    }
    componentDidMount() {
        this.timer = setInterval(() => this.setState({ now: now() }), 250);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    shouldComponentUpdate(props, state) {
        return state.now !== this.state.now;
    }
    render() {
        const { now } = this.state;

        return <div>
            <p>The current time <span>{now}</span></p>
        </div>
    }
}

render(<Timer/>, document.getElementById('app'));