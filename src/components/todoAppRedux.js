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
    TouchableOpacity,
    TextInput
} from 'react-native';

import Todo from '../containers/todo';
import * as todoActions from '../actions/todos';
import { connect } from 'react-redux';

class TodoAppRedux extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }

    render() {
        console.debug(this.props);
        let todos = this.props.todos.map((todo, key) => {
            return <Todo key={key} text={todo.text} status={todo.status} onToggle={() => this.toggleTodo(key)} />
        })

        return (
            <View style={styles.container}>
                <View style={styles.header} >
                    <Text style={styles.headerText} > SECO TODO APP </Text>
                </View>

                <ScrollView style={styles.scrollContainer} >
                    {todos}
                </ScrollView>

                <View style={styles.footer}>
                    <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton} >
                        <Text style={styles.addButtonText}> Add Todo </Text>
                    </TouchableOpacity>

                    <TextInput style={styles.textInput}
                        onChangeText={(text) => this.setState({ text: text })}
                        value={this.state.text}
                        placeholder='Enter your next todo'
                        onSubmitEditing={this.addNote.bind(this)}
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </View>
            </View>
        );
    }

    addNote() {
        if (this.state.text) {
            this.props.dispatch(todoActions.addTodo(this.state.text))
            this.setState({ text: '' })
        }
    }

    toggleTodo(key) {
        this.props.dispatch(todoActions.toggleTodo(key))
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    };
}

export default connect(mapStateToProps)(TodoAppRedux);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#78bbe6',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd',
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26,
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    },
    footer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 0,
        left: 0,
        right: 0
    },
    addButton: {
        backgroundColor: '#78bbe6',
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
        marginBottom: -45,
        zIndex: 10
    },
    addButtonText: {
        color: 'white'
    },
    textInput: {
        alignSelf: 'stretch',
        color: 'black',
        padding: 20,
        paddingTop: 45,
        backgroundColor: '#dddddd',
    }
});