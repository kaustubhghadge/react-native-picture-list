

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Snaps from './components/snaps'

export default class feastapp extends Component {


  render() {

    return (
      <Snaps/>
    );
  }
}
AppRegistry.registerComponent('feastapp', () => feastapp);
