import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import './App.scss';
import { Versions, Todo } from './pages';

ReactDOM.render(
    <Router>
        <Route path="/">
            <App>
                <Switch>
                    <Route path="/versions">
                        <Versions />
                    </Route>
                    <Route path="/todo">
                        <Todo />
                    </Route>
                    <Route path="/">
                        <Versions />
                    </Route>
                </Switch>
            </App>
        </Route>
    </Router>,
    document.querySelector('#root'),
);
