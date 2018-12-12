import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import CounterView from '../components/CounterView';
import TimerView from '../components/TimerView';
import UserView from '../components/UserView';

class Counter extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CounterView />
                <TimerView />
                <UserView />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    }
});

export default Counter;