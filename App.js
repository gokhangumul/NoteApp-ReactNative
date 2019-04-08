/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router';
import reducers from './src/reducers';


export default class App extends Component<{}> {
  
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    const { viewstyle } = styles;
    return (
      <Provider store={store}>
      <View style={viewstyle}>
      <Router />
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  viewstyle: {
    flex: 1
  }
});
