import React  from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";


let Home = () => <h1>Home</h1>;
let About = () => <h1>About</h1>;

let Page = ({ match }) => (<div>
    <h1>Page</h1>
    <Route exact path={match.url} component={() => <Redirect to='/'/>}/>
    <Route exact path={`${match.url}/:section`} component={Section}/>
</div>);

let Section = ({ match }) => <p>{match.params.section}</p>;

let Application = () => (<Router>
    <main>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/page/contact'>Contact</Link></li>
            <li><Link to='/page/office'>Office</Link></li>
            <li><Link to='/page'>"Page"</Link></li>
        </ul>
        <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route path='/page' component={Page} />
        </div>
    </main>
</Router>);

render(<Application/>, document.getElementById('app'));