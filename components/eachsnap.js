
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class EachSnap extends Component {

  render() {

    console.log(this.props.snapImg);

    return (
          <View>
              <Text>Each Snap</Text>
              <Image style={{width: 150, height: 130}}
               source={{uri:this.props.snapImg}}
          />
          </View>
    );
  }
}


AppRegistry.registerComponent('EachSnap', () => EachSnap);
