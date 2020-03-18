import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Routes from './routes';
import Store from './store';
import Loading from './components/Loading';
import GlobalStyle from './assets/style/global';
import Theme from './Theme';

const muiTheme = createMuiTheme(Theme);

const App = () => (
  <ThemeProvider theme={muiTheme}>
    <Provider store={Store}>
      <Loading />
      <Routes />
      <CssBaseline />
      <GlobalStyle />
    </Provider>
  </ThemeProvider>
);
export default App;