import State from '../Interfaces/State';
import Pixel from '../Interfaces/Pixel';
import Tetromino from '../Interfaces/Tetromino';
import Coordinate from '../Interfaces/Coordinate';
import TetrominoBuilder from './TetrominoBuilder';
import Tetrominos from '../Resources/TetrominoLibrary';
import TetrominoLibrary from '../Interfaces/TetrominoLibrary';

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class Spawner {
    private tetrominos: TetrominoLibrary;
    private tetrominoBuilder: TetrominoBuilder;
    private width: number;
    private height: number;
    
    constructor (tetrominoBuilder: TetrominoBuilder, width: number, height: number) {
        this.tetrominoBuilder = tetrominoBuilder;
        this.width = width;
        this.height = height;
        this.tetrominos = Tetrominos;
    }

    spawnBlock (): State {
        // -4 to prevent blocks spawning partially off screen, we know that the max block width is 4
        const offset = getRandomInt(0, this.width - 4);
        const type = this.tetrominos[getRandomInt(0, this.tetrominos.length - 1)];
        
        return this.tetrominoBuilder.createTetromino(type).state
            .map((pixel: Pixel) => {
                pixel.x += offset;
                pixel.y += 0;
                return pixel;
        });
    }
}