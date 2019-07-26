import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Platform
} from 'react-native';
if(Platform.OS === 'ios'){}
import {styles} from './styles.android'
export class Fancy extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.box}>

        </View>
        <Text style={styles.text}>Fancy!</Text>
      </View>
    )
  }
}
