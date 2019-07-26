import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import { Fancy } from './components/FancyComponent';
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      todos: [],
      newTodo: ''
    }
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
      {/* <Fancy /> */}
      <Text>Todo List length</Text>
      <View style={styles.form}>
        <TextInput 
        style={styles.input}
        value={this.state.newTodo} onChangeText={this.textChange.bind(this)}/>
        <TouchableHighlight
         style={styles.button}
         onPress={this.buttonClick.bind(this)}>
          <Text style={styles.buttonText}>tap me</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.todos}>
      {this.state.todos.map((todo, i)=><Text style={styles.todo} key={i}>{todo}</Text>)}
      </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  todos: {
    marginTop: 30
  },
  todo: {
    borderBottomWidth: 1,
    borderBottomColor: '#f0f',
    marginBottom: 10,
    fontSize: 24,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    padding: 20
  },
  form: {
    flexDirection: 'row',
  },
  input: {
    flex: 0.7,
    fontSize: 24,
  },
  button: {
    flex: 0.3,
    borderWidth: 1,
    borderColor: 'blue',
    height: 50,
    width: 50,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
