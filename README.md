# React Native(Expo/CRNA) + Mobx + Native Base

## Screen

![screen1](./.README.md/screen1.jpeg)
![screen2](./.README.md/screen2.jpeg)

## Installation

1. Create project
    ```bash
    $ expo init PROJECT_NAME 
    $ cd PROJECT_NAME
    $ npm install
    $ expo start
    ```

1. Install Mobx and babel plugins
    ```bash
    $ npm i --save mobx mobx-react
    $ npm i --save-dev babel-plugin-transform-decorators-legacy babel-preset-react-native-stage-0
    ```

1. Install Native Base
    ```bash
    $ npm i --save native-base
    ```

## Mobx store class

1. ***PROJECT_NAME***/store/***STORE_CLASS***.js
    ```javascript
    import {observable, action} from 'mobx';
    
    class Counter {
        // Begin : setup Singleton
        static instance = null;
        static getInstance() {
            if(Counter.instance === null)
                Counter.instance = new Counter();
            return this.instance;
        }
        constructor() {
            Counter.instance = this;
        }
        // end : setup Singleton
    
        @observable count = 0;
    
        @action increase = () => this.count++;
        @action decrease = () => this.count--;
    }
    
    export default Counter.getInstance();

    ```

1. ***PROJECT_NAME***/store/index.js
    ```javascript
    import CounterStore from './Counter';
    import TimerStore from './Timer';
    import UserStore from './User';
    
    export default {
        Counter: CounterStore,
        Timer: TimerStore,
        User: UserStore
    };
    
    ```

## Use Mobx stores

1. ***PROJECT_NAME***/App.js
    ```javascript
    import {Provider} from 'mobx-react';
    import stores from './store';
    
    // render()
    <Provider store={stores}>
       ...
    </Provider>
    ```
    
1. ***PROJECT_NAME***/screen/***SCREEN_CLASS***.js or
   ***PROJECT_NAME***/component/***COMPONENT_CLASS***.js
    ```javascript
    import {inject, observer} from 'mobx-react';
    
    @inject('store')
    @observer
    public class ...
 
    this.props.store.STORE_CLASS.ATTRIBUTE
    this.props.store.STORE_CLASS.METHOD
    ```