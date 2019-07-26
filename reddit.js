import React from 'react';
import {View, Text} from 'react-native';

export class Reddit extends React.Component {
  constructor(){
    super();
    this.state={
      posts: []
    }
  }
  componentWillMount(){
    fetch('https://www.reddit.com/.json',
    {Accept: 'application/json'}
    ).then(res => res.json())
    .then(data=>{
      this.setState({
        posts: data.data.children
      })
    })
  }
  render(){
    
    return(
      <View>
        <Text>reddit</Text>
        <View>
          {this.state.posts.map((post, i)=>{
            return(<Text key={i}>{post.data.author}</Text>)
          })}
        </View>
      </View>
    );
  }
}