import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { LoginPage } from './views/LoginPage';
import { NotFoundPage } from './views/NotFoundPage';
import { RegitserPage } from './views/RegisterPage';
import { Provider } from 'react-redux';
import { store } from './store';
import { AppComponent } from './views/AppComponent';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login" exact component={LoginPage} />
            <Route path="/register" exact component={RegitserPage} />
            <Route path="/" component={AppComponent} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
