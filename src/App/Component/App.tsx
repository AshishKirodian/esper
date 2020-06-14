import React from 'react';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { ROUTES, FREEROUTES } from '../../Configuration/routes';
import Nav from '../../Nav/Component/nav';

const history = createBrowserHistory()

interface Props {
  isLoggedIn: boolean;
}
export default class App extends React.Component<Props, any> {
  render() {
    let { isLoggedIn } = this.props;
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
              {isLoggedIn && ROUTES.map((route, i) =>
                <Route key={i} path={route.path} component={route.component} exact={route.exact} />
              )}
               {FREEROUTES.map((route, i) =>
                <Route key={i} path={route.path} component={route.component} exact={route.exact} />
              )}
            </Switch>
          </Router>
        </div>
      </>
    );
  }

}
