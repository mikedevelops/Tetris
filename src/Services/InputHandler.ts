import Command from '../Interfaces/Command'

export default class InputHandler {
    private command: Command|null;

    constructor () {
        this.command = null;
    }

    registerInput ({ keyCode }: { keyCode: number}) {
        switch (keyCode) {
            case 37:
                this.command = { 
                    code: keyCode, 
                    name: 'left', 
                    processed: false 
                };
                break;
            case 39:
                this.command = { 
                    code: keyCode, 
                    name: 'right', 
                    processed: false 
                };
                break;
        }
    }

    /**
     * Get command
     */
    getCommand (): Command|null {
        if (this.command === null || this.command.processed) {
            return null;
        } else {
            this.command.processed = true;
            return this.command;
        }
    }
}