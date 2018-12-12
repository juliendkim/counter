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
