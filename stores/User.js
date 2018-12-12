import {observable, action} from 'mobx';

class User {
    // Begin : setup Singleton
    static instance = null;
    static getInstance() {
        if(User.instance === null)
            User.instance = new User();
        return this.instance;
    }
    constructor() {
        User.instance = this;
    }
    // end : setup Singleton

    @observable data = null;

    @action getUserInfo = () => {
        const pad = (num, len = 2) => ("00" + num).slice(-len);

        const now = new Date();

        this.data = {
            account: `Randomized ${pad(Math.floor((Math.random() * 1000) + 1), 3)}`,
            date: `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`,
            time: `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}.${pad(now.getMilliseconds(), 3)}`
        };
    }
}

export default User.getInstance();
