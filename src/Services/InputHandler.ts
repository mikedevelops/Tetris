import Command from '../Interfaces/Command'

export default class InputHandler {
    private commandQueue: Command[];

    constructor () {
        this.commandQueue = [];
    }

    registerInput ({ keyCode }: { keyCode: number}) {
        switch (keyCode) {
            case 37:
                this.commandQueue.push({ 
                    code: keyCode, 
                    name: 'left', 
                    processed: false 
                });
                break;
            case 39:
                this.commandQueue.push({ 
                    code: keyCode, 
                    name: 'right', 
                    processed: false 
                });
                break;
        }
    }

    getNextCommand (): Command|null {
        const next = this.commandQueue.pop();

        if (next && !next.processed) {
            this.commandQueue.map((command: Command) => {
                if (!command.processed) {
                    command.processed = true;
                }

                return command;
            });

            return next;
        } else {
            return null;
        }
    }
}