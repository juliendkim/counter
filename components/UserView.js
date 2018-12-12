import React, {Component} from 'react';
import {StyleSheet, View} from "react-native";
import {Button, Text} from 'native-base';
import {inject, observer} from 'mobx-react';

@inject('store')
@observer
class UserView extends Component {
    render() {
        let userinfo = this.props.store.User.data;
        return (
            <View style={styles.container}>
                <View style={styles.valueContainer}>
                    <View style={{flex:1, justifyContent: 'flex-end', marginRight:20}}>
                        <Text style={{textAlign: 'right'}}>ACCOUNT </Text>
                        <Text style={{textAlign: 'right'}}>DATE </Text>
                        <Text style={{textAlign: 'right'}}>TIME </Text>
                    </View>
                    <View style={{flex: 2, justifyContent: 'flex-start'}}>
                        <Text>{userinfo && userinfo.account}</Text>
                        <Text>{userinfo && userinfo.date}</Text>
                        <Text>{userinfo && userinfo.time}</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button full onPress={this.props.store.User.getUserInfo}>
                        <Text>User info</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'steelblue'
    },
    valueContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    }
});

export default UserView;