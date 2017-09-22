import Tetromino from '../../src/Resources/Tetromino';
import State from '../../src/Interfaces/State';
import TetrominoLibrary from '../../src/Resources/TetrominoLibrary';

describe('Tetromino', () => {
    const state: State[] = TetrominoLibrary.find(t => t.name === 'T').preCompiled;
    const rotationIndex = 0
    let tetromino: Tetromino;

    beforeEach(() => {
        tetromino = new Tetromino(state, rotationIndex);
    });

    describe('getState', () => {
        test('should get state', () => {
            expect(tetromino.getActiveState()).toEqual(state[rotationIndex]);
        });
    });

    describe('rotate', () => {
        test('should rotate tetromino by 90deg per rotation unit', () => {
           tetromino.rotate(250);

           expect(tetromino.getActiveState()).toEqual(state[tetromino.getRotationIndex()])
        });
    });
});