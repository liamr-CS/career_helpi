class Timer {
    private myTime: NodeJS.Timeout | null;
    private active: boolean;
    private count: number;
    private updateCallback: ((count: number) => void) | null;

    constructor() {
        this.myTime = null;
        this.active = false;
        this.count = 0;
        this.updateCallback = null;
    }

    toggle(callback: (count: number) => void) {
        if (this.active) {
            this.stop();
        } else {
            this.start();
        }
        this.updateCallback = callback;
    }

    reset() {
        this.stop();
        this.count = 0;
        if (this.updateCallback) {
            this.updateCallback(this.count);
        }
    }

    private start() {
        if (!this.active) {
            this.myTime = setInterval(() => {
                this.count++;
                if (this.updateCallback) {
                    this.updateCallback(this.count);
                }
            }, 1000);
            this.active = true;
        }
    }

    private stop() {
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
//requested help from GPT on lines: 5, 11, 14, 20, 26, 27, 33, 35, 36, 45
export default Timer;