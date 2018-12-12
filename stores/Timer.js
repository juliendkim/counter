import {observable, action} from 'mobx';
import {Toast} from 'native-base';

class Timer {
    // Begin : setup Singleton
    static instance = null;
    static getInstance() {
        if(Timer.instance === null)
            Timer.instance = new Timer();
        return this.instance;
    }
    constructor() {
        Timer.instance = this;
    }
    // end : setup Singleton

    @observable timer = '00:00:00.0';

    timerID = null;
    startTime = null;
    @action start = () => {
        Toast.show({
            text: 'Timer started',
            textStyle: {textAlign:'center'},
            position: 'top',
            type: 'success'
        });
        if(this.timerID === null) this.startTime = new Date();
        if(this.timerID !== null) clearInterval(this.timerID);

        const pad = (num, len = 2) => ("0000" + num).slice(-len);

        this.timerID = setInterval(() => {

            let time = new Date().getTime() - this.startTime.getTime();
            let msec = Math.floor(time % 1000 / 100);

            time = Math.floor(time / 1000);
            let s = pad(time % 60);

            time = Math.floor(time / 60);
            let m = pad(time % 60);

            time = Math.floor(time / 60);
            let h = pad(time % 60);

            this.timer = `${h}:${m}:${s}.${msec}`;
        }, 100);
    };
    @action pause = () => {
        clearInterval(this.timerID);
        Toast.show({
            text: 'Timer paused',
            textStyle: {textAlign:'center'},
            position: 'top',
            type: 'warning'
        });
    };
    @action reset = () => {
        clearInterval(this.timerID);
        this.timerID = null;
        this.timer = "00:00:00.0";
        Toast.show({
            text: 'Timer stopped',
            textStyle: {textAlign:'center'},
            position: 'top',
            type: 'danger'
        });
    };
}

export default Timer.getInstance();
