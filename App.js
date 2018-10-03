import React, {Component} from 'react';
import { Text, View} from 'react-native';
import { Provider} from 'react-redux';
import { createStore,applyMiddleware} from 'redux';
import firebase from '@firebase/app';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

export default class App extends Component {
  componentWillMount(){
    const config = {
      apiKey: 'AIzaSyB0TwvDQYbYHRfy-7IzYcZXVpWRwbnJIE8',
      authDomain: 'login-af97f.firebaseapp.com',
      databaseURL: 'https://login-af97f.firebaseio.com',
      projectId: 'login-af97f',
      storageBucket: 'login-af97f.appspot.com',
      messagingSenderId: '951906131001'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store=createStore(reducers,{},applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
      <Router />
      </Provider>
    );
  }
}



  

