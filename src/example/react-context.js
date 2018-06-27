import React, { Component } from 'react';
import { render } from 'react-dom';

let { Provider: LabelProvider, Consumer: LabelConsumer } = React.createContext({
    greeting: 'Hello!',
});

let Greeting = () => (<LabelConsumer>
    {labels => <p>{labels.greeting}</p>}
</LabelConsumer>);

class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tone: 'formal',
            tones: {
                formal: {
                    greeting: 'Hello',
                },
                casual: {
                    greeting: 'What\'s up, buddy!',
                },
            },
        };
    }
    render() {
        return  <LabelProvider value={this.state.tones[this.state.tone]}>
            <select onChange={(e) => this.setState({tone: e.target.value})}>
                <option value="formal">Formal</option>
                <option value="casual">Casual</option>
            </select>
            <Greeting/>
        </LabelProvider>;
    }
}

render(<Application/>, document.getElementById('app'));

