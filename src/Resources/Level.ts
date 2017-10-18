import State from '../Interfaces/State';
import Tetromino from './Tetromino';
import Pixel from '../Interfaces/Pixel';

export default class Level {
    constructor (
        private width: number,
        private height: number,
        private state: State
    ) {}

    /**
     * Get height
     */
    getHeight (): number {
        return this.height;
    }

    /**
     * Get width
     */
    getWidth (): number {
        return this.width;
    }

    /**
     * Get state
     */
    getState (): State {
        return this.state;
    }

    /**
     * Place a block permanently 
     * @param tetromino 
     */
    setPlaced (tetromino: Tetromino): void {
        this.state.map((levelPixel: Pixel) => {
            tetromino.getActiveState().map((tetrominoPixel: Pixel) => {
                if (!levelPixel.set && tetrominoPixel.occupied && levelPixel.x === tetrominoPixel.x && levelPixel.y === tetrominoPixel.y) {
                    levelPixel.type = tetrominoPixel.type;
                    levelPixel.set = true;
                    levelPixel.occupied = true;
                }
            });
        });
    }
}