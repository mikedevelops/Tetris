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

    describe('getRotationIndex', () => {
        test('should get rotation index', () => {
            expect(tetromino.getRotationIndex()).toEqual(0);
        });
    });

    describe('getVelocity', () => {
        test('should get velocity', () => {
            expect(tetromino.getVelocity()).toEqual({ x: 0, y: 0 });
        });
    });

    describe('setVelocityX', () => {
        test('should set X velocity', () => {
            tetromino.setVelocityX(5);

            expect(tetromino.getVelocity().x).toEqual(5);
        });
    });

    describe('setVelocityY', () => {
        test('should set Y velocity', () => {
            tetromino.setVelocityY(5);

            expect(tetromino.getVelocity().y).toEqual(5);
        });
    });
    
    describe('setPlaced', () => {
        test('should set the placed value', () => {
            tetromino.setPlaced(true);

            expect(tetromino.getPlaced()).toEqual(true);
        });
    });
    
    describe('getPlaced', () => {
        test('should get set the placed value', () => {
            expect(tetromino.getPlaced()).toEqual(false);
        });
    });

    describe('update', () => {
        test('should apply velocity to state', () => {
            tetromino.setVelocityX(1);
            tetromino.setVelocityY(1);
            tetromino.update();

            expect(tetromino.getActiveState()).toEqual([
                {"x":1,"y":1,"occupied":false,"type":null,"set":false},
                {"x":2,"y":1,"occupied":false,"type":null,"set":false},
                {"x":3,"y":1,"occupied":false,"type":null,"set":false},
                {"x":1,"y":2,"occupied":false,"type":null,"set":false},
                {"x":2,"y":2,"occupied":true,"type":"T","set":false},
                {"x":3,"y":2,"occupied":false,"type":null,"set":false},
                {"x":1,"y":3,"occupied":true,"type":"T","set":false},
                {"x":2,"y":3,"occupied":true,"type":"T","set":false},
                {"x":3,"y":3,"occupied":true,"type":"T","set":false}
            ])
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