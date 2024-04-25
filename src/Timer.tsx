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
        if (this.active) {
            this.stop();
        } else {
            this.start(callback);
        }
    }

    reset() {
        this.stop();
        this.count = 0;
    }

    private start(callback: (count: number) => void) {
        if (!this.active) {
            this.myTime = setInterval(() => {
                this.count++;
                callback(this.count);
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

    getCount() {
        return this.count;
    }
}

export default Timer;