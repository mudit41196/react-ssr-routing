import React, { Component } from 'react'
import Grid from './Grid';
import { Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import NoMatch from './NoMatch';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          {routes.map(({ path, exact, component: C, ...rest }) => (
              <Route
                key={path}
                path={path}
                exact={exact}
                render={(props) => (
                  <C {...props} {...rest} />
                )}
              />
            ))}
          <Route render={(props) => <NoMatch {...props} />} />
        </Switch>
      </div>
    )
  }
}

export default App;
