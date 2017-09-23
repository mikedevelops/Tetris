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

    describe('getActiveState', () => {
        test('should get state', () => {
            expect(tetromino.getActiveState()).toEqual(state[rotationIndex]);
        });
    });

    describe('rotate', () => {
        test('should rotate tetromino clockwise by 90deg per rotation unit', () => {
            tetromino.rotate(1);
            expect(tetromino.getRotationIndex()).toEqual(1);
           
            tetromino.rotate(1);
            expect(tetromino.getRotationIndex()).toEqual(2);

            tetromino.rotate(1);
            expect(tetromino.getRotationIndex()).toEqual(3);

            tetromino.rotate(1);
            expect(tetromino.getRotationIndex()).toEqual(0);
        });

        test('should rotate tetromino anti-clockwise by 90deg per rotation unit', () => {
            tetromino.rotate(-1);
            expect(tetromino.getRotationIndex()).toEqual(3);

            tetromino.rotate(-1);
            expect(tetromino.getRotationIndex()).toEqual(2);
            
            tetromino.rotate(-1);
            expect(tetromino.getRotationIndex()).toEqual(1);
            
            tetromino.rotate(-1);
            expect(tetromino.getRotationIndex()).toEqual(0);
        });
    });
});