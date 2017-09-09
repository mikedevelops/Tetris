import Pixel from '../Interfaces/Pixel';

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

    createLevelState (): Array<Pixel> {
        const level: Array<Pixel> = [];

        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                level.push({ x, y, occupied: false, type: null });
            }
        }

        return level;
    }
}