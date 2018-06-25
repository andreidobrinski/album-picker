import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import 'react-tippy/dist/tippy.css';
import './index.css';
import Curators from './app/curators';
import theme from './app/theme';
import App from './app/app';
import Intro from './app/intro';
import registerServiceWorker from './registerServiceWorker';

const app = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        {Object.keys(Curators).map(curator => (
          <Route
            path={Curators[curator].route}
            component={App}
            key={curator}
          />
        ))}
        <Route path="/" component={Intro} />
      </Switch>
    </Router>
  </ThemeProvider>
);

ReactDOM.render(
  app(),
  document.getElementById('root'),
);
registerServiceWorker();
