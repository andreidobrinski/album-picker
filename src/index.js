import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './app/theme';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

const app = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </ThemeProvider>
);

ReactDOM.render(
  app(),
  document.getElementById('root'),
);
registerServiceWorker();
