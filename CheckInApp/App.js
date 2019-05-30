import React from 'react';

import {
  createStackNavigator, createAppContainer,
} from "react-navigation";

import Home from './screens/Home';
import Register from './screens/Register';
import SignatureScreen from './screens/SignatureScreen';
import ScanBarCode from './screens/ScanBarCode';
import Dialog from './screens/Dialog';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Register: {
    screen: Register,
  },
  SignatureScreen: {
    screen: SignatureScreen,
  },
  ScanBarCode: {
    screen: ScanBarCode,
  },
  Dialog: {
    screen: Dialog,
  }
},
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    },
  });

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}