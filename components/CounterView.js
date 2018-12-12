import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { Button, Text} from 'native-base';
import {inject, observer} from 'mobx-react';

@inject('store')
@observer
class CounterView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.valueContainer}>
                    <Text style={styles.countValue}>{this.props.store.Counter.count}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button large style={styles.button}
                            onPress={this.props.store.Counter.decrease}>
                        <Text>-</Text>
                    </Button>
                    <Button large style={styles.button}
                            onPress={this.props.store.Counter.increase}>
                        <Text>+</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'powderblue'
    },
    countValue: {
        fontSize: 100,
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
    },
    button: {
        width: 100,
        justifyContent:'center'
    }
});

export default CounterView;