import chalk from 'chalk';

const space: string = ' ';

class Logger {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    debug(msg: string) {
        let errStr: any = chalk.green.bold('DEBUG') + space + `[${this.name}]`;
        this.log(errStr, msg);
    }

    info(msg: string) {
        let errStr: any = chalk.blueBright.bold('INFO') + space + `[${this.name}]`;
        this.log(errStr, msg);
    }

    error(msg: string) {
        let errStr: any = chalk.red.bold('ERROR') + space + `[${this.name}]`;
        this.log(errStr, msg);
    }

    critical(msg: string) {
        let errStr: any = chalk.redBright.bold('CRITICAL') + space + chalk.redBright(`[${this.name}] ` + msg);
        this.log(errStr);
    }

    warn(msg: string) {
        let errStr: any = chalk.yellow.bold('WARN') + space + `[${this.name}]`;
        this.log(errStr, msg);
    }

    private log(...toLog: Array<string>) {
        let date: Date = new Date();
        let arrTime: string = [
            date.getHours() >= 10 ? date.getHours() : '0' + date.getHours(),
            date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes(),
            date.getSeconds() >= 10 ? date.getSeconds() : '0' + date.getSeconds()
        ].join(':');
        let time = chalk.blue('[' + arrTime + ']');
        console.log(time, ...toLog);
        return;
    }
}

export default Logger;