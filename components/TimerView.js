import React, {Component} from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import { Button, Text} from 'native-base';
import {inject, observer} from 'mobx-react';

@inject('store')
@observer
class TimerView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.valueContainer}>
                    <Text style={styles.timerValue}>
                        {this.props.store.Timer.timer}
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button large onPress={this.props.store.Timer.start}>
                        <Text>START</Text>
                    </Button>
                    <Button large onPress={this.props.store.Timer.pause}>
                        <Text>PAUSE</Text>
                    </Button>
                    <Button large onPress={this.props.store.Timer.reset}>
                        <Text>RESET</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue'
    },
    timerValue: {
        fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
        fontSize: 50,
        fontWeight: '100'
    },
    valueContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    }
});

export default TimerView;