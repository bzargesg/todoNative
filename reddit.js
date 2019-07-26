import React from 'react';
import {View, Text} from 'react-native';

export class Reddit extends React.Component {
  componentWillMount(){
    fetch('https://www.reddit.com/json',
    {Accept: 'application/json'}
    ).then(res => res.json())
    .then(data=>console.log(data))
  }
  render(){
    
    return(
      <View>
        <Text>reddit</Text>
      </View>
    );
  }
}