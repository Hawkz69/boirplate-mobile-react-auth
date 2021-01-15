import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { Router } from 'react-router';

// Internal dependencies
import Root from './routes/Root';
import { store, persistor } from './state/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import history from './routes/history';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import WebfontLoader from '@dr-kobros/react-webfont-loader';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import theme from 'ui/theme';

const config = {
  google: {
    families: ['Roboto', 'Muli', 'Neuropol'],
  }
};

const render = () => {
  ReactDOM.render((
    <AppContainer>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <WebfontLoader config={config}>
          <ThemeProvider theme={theme}>
            <Router history={history}>
              <Root />
            </Router>
          </ThemeProvider>
        </WebfontLoader>
      </PersistGate>
      </Provider>
    </AppContainer>
  ), document.getElementById('root'));
};

// initial render
render();