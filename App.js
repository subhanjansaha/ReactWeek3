import React from "react";
import {View, Button, Text, ScrollView, StyleSheet, Switch} from 'react-native'
import {Constants} from 'expo'


const styles = StyleSheet.create({
  appContainer:{
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  countStyle: {
    fontSize: 50,
  },
})

export default class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    setInterval(this.inc ,1000)
  }

  inc = () => {
    this.setState(prevState => ({
      count: prevState.count+1,
    }))
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <Text style={styles.countStyle}>{this.state.count}</Text>
      </View>
    );
  }
}
