import State from '../Interfaces/State'; 

export default class LevelBuilder {
    private width: number;
    private height: number;
    
    constructor (
        width: number,
        height: number
    ) {
        this.width = width;
        this.height = height;
    }

    /**
     * Create level state
     */
    createLevelState (): State {
        const level: State = [];

        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                level.push({ x, y, occupied: false, type: null, set: false });
            }
        }

        return level;
    }
}