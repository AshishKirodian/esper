import React from 'react';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { ROUTES } from '../../Configuration/routes';
import Nav from '../../Nav/Component/nav';

const history = createBrowserHistory()
export default class App extends React.Component<any, any> {

  render() {
    return (
      <>
        <div>
          <Router history={history}>
            <Switch >
              <Route path={'*'} component={Nav} exact={true} />
            </Switch>
          </Router>
        </div>
        <div className="container-fluid">
          <Router history={history}>
            <Switch >
              {ROUTES.map((route, i) =>
                <Route key={i} path={route.path} component={route.component} exact={route.exact} />
              )}
            </Switch>
          </Router>
        </div>
      </>

    );
  }

}
