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

class Counter extends React.Component {

  shouldComponentUpdate(nextProps) {
    return !(nextProps.count % 2)
  }

  render() {
    return(
      <Text style={styles.countStyle}>{this.props.count}</Text>
    )
  }
}

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
        <Counter count={this.state.count} />
      </View>
    );
  }
}
