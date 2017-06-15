/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.todo}>
          <View style={styles.text} >
            <Text style={[styles.headerText, this.getTextStyle()]}> {this.props.text} </Text>
          </View>

          <TouchableOpacity 
            onPress={this.props.onToggle} 
            style={[styles.noteToggle, this.getStyle()]}>
          </TouchableOpacity>
      </View>
    );
  }

  getStyle() {
      return this.props.status == 'active' ? { backgroundColor: 'red' } : { backgroundColor: 'green' };
  }

  getTextStyle() {
    return this.props.status == 'active' ? { textDecorationLine: 'none' } : { textDecorationLine: 'line-through' };
  }
}

const styles = StyleSheet.create({
  todo: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed'
  },
  noteText: {
    paddingLeft: 20,
    color: 'black'
  },
  noteToggle: {
      position: 'absolute',
      padding:10,
      top:10,
      bottom: 10,
      right: 10
  }
});