
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import EachSnap from './eachsnap';

var { height } = Dimensions.get('window');
var box_count = 3;
var box_height = height / box_count;

export default class Snaps extends Component {

  constructor(props){
    super(props);
  }

onPress(){
  console.log("List item Pressed")
}


  render() {

    var standardDataSource=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});

  var  snaps=[
      {
        name:"Snap 1",
        from:"John",
        imgUrl: "https://www.gstatic.com/webp/gallery3/1.png"
      },
      {
        name:"Snap 2",
        from:"Jane",
        imgUrl: "https://www.gstatic.com/webp/gallery3/2_webp_a.png"
      },
      {
        name:"Snap 3",
        from:"Ken",
        imgUrl: "http://www.gstatic.com/webp/gallery/1.jpg"
      }
    ];
    var snapsList=standardDataSource.cloneWithRows(snaps);
    snaps.forEach(function(snap){
    });

    return (

      <View style={styles.container}>
        <Text>
          Snaps!
        </Text>
        <ListView
          dataSource={snapsList}
          renderRow={(rowData)=>
            <TouchableOpacity
              style={[styles.box]}
              onPress={this.onPress}
              >
              <View style={[styles.box1]}>
                <Text>Name: {rowData.name}</Text>
                <EachSnap snapImg={rowData.imgUrl}/>
                <Text>From: {rowData.from}</Text>
              </View>
            </TouchableOpacity>
          }
          >
          </ListView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  box: {
   height: box_height
 },
 box1: {
   backgroundColor: '#FFFF66'
 },
 box2: {
   backgroundColor: '#8BC34A'
 },
 box3: {
   backgroundColor: '#e3aa1a'
 }
});

AppRegistry.registerComponent('Snaps', () => Snaps);
