import React from "react";
import {View, Button, Text, ScrollView, StyleSheet, Switch} from 'react-native'
import {Constants} from 'expo'


const styles = StyleSheet.create({
  appContainer:{
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    padding: 50,
  },
  emptyContainer: {
    flex: 1,
    padding: 50,
    alignItems: 'center',
  },
  countStyle: {
    fontSize: 50,
  },
})


class CounterClass extends React.Component {
  
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.inc ,1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  inc = () => {
    this.setState(prevState => ({
      count: prevState.count+1,
    }))
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <Text style={styles.countStyle}> {this.state.count} </Text>
      </View>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowingCounter: true,
    }
  }

  toggleShowCounter = () => {
    this.setState(prevState => ({
      isShowingCounter: !prevState.isShowingCounter,
    }))
  }
  
  render() {
    if (this.state.isShowingCounter) {
      return(
      <View style={styles.appContainer}>
        <Button title="toggle" onPress={this.toggleShowCounter} />
        <CounterClass />
      </View>
      )
    } else {
      return(
        <View style={styles.emptyContainer}>
          <Button title="toggle" onPress={this.toggleShowCounter} />
        </View>
      )
    }
  }
}
