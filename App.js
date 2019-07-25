import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      todos: [],
      newTodo: ''
    }
    this.text = '';
  }
  textChange(text){
    this.setState({newTodo:text})
  }
  buttonClick(e){
    let newValue = [...this.state.todos, this.state.newTodo]
    this.setState({
      todos: newValue
    })
  }
  render(){
    return (
    <View style={styles.container}>
      <Text>Todo List length{this.state.todos.length}</Text>
      <TextInput value={this.state.newTodo} onChangeText={this.textChange.bind(this)}/>
      <TouchableHighlight onPress={this.buttonClick.bind(this)}>
        <Text>tap me</Text>
      </TouchableHighlight>
      <View>
      {this.state.todos.map((todo, i)=><Text key={i}>{todo}</Text>)}
      </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
