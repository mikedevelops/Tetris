import Command from '../Interfaces/Command'
import { RegisterInputMap } from '../Interfaces/InputMap';

export default class InputHandler {
    private command: Command|null;

    constructor () {
        this.command = null;
    }

    registerInput (event: KeyboardEvent) {
        const inputMap: RegisterInputMap = {
            37: {
                name: 'left',
                processed: false
            },
            38: {
                name: 'up',
                processed: false
            },
            39: {
                name: 'right',
                processed: false
            }
        }

        this.command = inputMap[event.keyCode];
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