import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
export class Fancy extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Fancy!</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
})