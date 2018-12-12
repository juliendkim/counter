import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Spinner, Root} from "native-base";
import {Provider} from 'mobx-react';

import stores from './stores';

import Counter from './screen/Counter';

export default class App extends React.Component {

    state = {
        loading: true
    };

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({
            loading: false
        });
    }

    render() {
        return (this.state.loading) ? this.renderLoading() : this.renderCounter();
    }

    renderLoading = () => (
        <Container style={styles.container}>
            <Spinner color="#ff0000"/>
        </Container>
    );

    renderCounter = () => (
        <Provider store={stores}>
            <Root>
                <Counter/>
            </Root>
        </Provider>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    }
});
