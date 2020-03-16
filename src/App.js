import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './routes';
import Store from './store';
import Loading from './components/Loading';
import GlobalStyle from './assets/style/global';

const App = () => (
  <Provider store={Store}>
    <Loading />
    <Routes />
    <CssBaseline />
    <GlobalStyle />
  </Provider>
);
export default App;