import React, { Component } from 'react';
import { Text,  AppRegistry, StyleSheet, NavigatorIOS } from 'react-native';
import SearchPage from './SearchPage';

const styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
})

class HelloWorld extends Component {
  render() {
    return (
      <Text style={styles.text}>"hello world"</Text>
    )
  }
}

class app extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          component: SearchPage,
          title: 'Clothing Store'
        }}
      />
    )
  }
}

AppRegistry.registerComponent('app', () => app);
