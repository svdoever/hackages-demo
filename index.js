import React from 'react';
import ReactDOM from 'react-dom';
import {FullName} from './components/MyStatelessFunctionalComponents';

const App = () => 
    <div>
        <h1>Hello hackages!</h1>
        <p>My name is <FullName first="Donald" last="Trump"/></p>
    </div>;
ReactDOM.render(<App/>, document.getElementById('app'));
