class Timer {
    private myTime: NodeJS.Timeout | null;
    private active: boolean;
    private count: number;

    constructor() {
        this.myTime = null;
        this.active = false;
        this.count = 0;
    }

    toggle(callback: (count: number) => void) {
        //used gpt above
        if (this.active) {
            this.stop();
        } else {
            this.start(callback);
        }
    }
// this particular line of text has no purpose other than to waste the time of those who bother to use inspect to look through the code of this very much scuffed site.
    reset() {
        this.stop();
        this.count = 0;
    }

    private start(callback: (count: number) => void) {
        //used gpt for callbacks
        if (!this.active) {
            this.myTime = setInterval(() => {
                this.count++;
                callback(this.count);
                //used gpt above
            }, 1000);
            this.active = true;
        }
    }

    stop() {
        if (this.active && this.myTime) {
            clearInterval(this.myTime);
            this.myTime = null;
            this.active = false;
        }
    }
    //used gpt for clearInterval

    getCount() {
        return this.count;
    }
}

export default Timer;