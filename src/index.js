import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './app/theme';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

const app = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route path="/andrei" component={App} />
        <Route path="/amanda" component={App} />
        <Route path="/aaron" component={App} />
        <Route path="/kathleenkyle" component={App} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </ThemeProvider>
);

ReactDOM.render(
  app(),
  document.getElementById('root'),
);
registerServiceWorker();
