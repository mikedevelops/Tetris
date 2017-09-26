import Level from '../../src/Resources/Level';
import State from '../../src/Interfaces/State';
import Tetromino from '../../src/Resources/Tetromino';

jest.mock('../../src/Resources/Tetromino');

describe('Level', () => {
    let level: Level;
    let tetromino: Tetromino;
    let state: State;

    beforeEach(() => {
        state = [
            { x: 0, y: 0, occupied: false, type: null, set: false },
            { x: 1, y: 0, occupied: false, type: null, set: false },
            { x: 0, y: 1, occupied: false, type: null, set: false },
            { x: 1, y: 1, occupied: false, type: null, set: false }
        ];
        level = new Level(2, 2, state);
        tetromino = new Tetromino();
    });

    describe('getHeight', () => {
        test('should get height', () => {
            expect(level.getHeight()).toEqual(2);
        });
    });

    describe('getWidth', () => {
        test('should get width', () => {
            expect(level.getWidth()).toEqual(2);
        });
    });

    describe('getState', () => {
        test('should get state', () => {
            expect(level.getState()).toEqual(state);
        });
    });

    describe('setPlaced', () => {
        test('should permanently merge the block with the level state', () => {
            tetromino.getActiveState.mockReturnValue([
                { x: 0, y: 0, type: 'test', occupied: true, set: false }
            ]);
    
            level.setPlaced(tetromino);
    
            expect(level.getState()).toEqual([
                { x: 0, y: 0, occupied: true, type: 'test', set: true },
                { x: 1, y: 0, occupied: false, type: null, set: false },
                { x: 0, y: 1, occupied: false, type: null, set: false },
                { x: 1, y: 1, occupied: false, type: null, set: false }
            ]);

            tetromino.getActiveState.mockReturnValue([
                { x: 1, y: 0, type: 'test', occupied: true, set: false }
            ]);

            level.setPlaced(tetromino);

            expect(level.getState()).toEqual([
                { x: 0, y: 0, occupied: true, type: 'test', set: true },
                { x: 1, y: 0, occupied: true, type: 'test', set: true },
                { x: 0, y: 1, occupied: false, type: null, set: false },
                { x: 1, y: 1, occupied: false, type: null, set: false }
            ]);
        });
    });
});