import { updateLevelState, checkCollision } from '../../src/Services/StateTransformer';
import State from '../../src/Interfaces/State';
import Level from '../../src/Resources/Level';
import Tetromino from '../../src/Resources/Tetromino';

jest.mock('../../src/Resources/Level');
jest.mock('../../src/Resources/Tetromino');

describe('StateTransformer', () => {
    let level: Level;
    let tetromino: Tetromino;

    beforeEach(() => {
        level = new Level();
        tetromino = new Tetromino();
    });

    describe('updateLevelState', () => {
        test('should merge 2 state objects', () => {
            level.getState.mockReturnValue([
                { x: 0, y: 0, occupied: false, type: null, set: false },
                { x: 1, y: 0, occupied: false, type: null, set: false }
            ]);
            tetromino.getActiveState.mockReturnValue([
                { x: 0, y: 0, occupied: true, type: 'new', set: false }
            ]);

            expect(updateLevelState(level, tetromino)).toEqual([
                { x: 0, y: 0, occupied: true, type: 'new', set: false },
                { x: 1, y: 0, occupied: false, type: null, set: false }
            ]);
        });

        test('should reset non set pixels', () => {
            level.getState.mockReturnValue([
                { x: 0, y: 0, occupied: true, type: 'new', set: false },
                { x: 1, y: 0, occupied: false, type: null, set: false }
            ]);
            tetromino.getActiveState.mockReturnValue([
                { x: 1, y: 0, occupied: true, type: 'new', set: false }
            ]);
            
            expect(updateLevelState(level, tetromino)).toEqual([
                { x: 0, y: 0, occupied: false, type: null, set: false },
                { x: 1, y: 0, occupied: true, type: 'new', set: false }
            ]);
        });
    });
});

describe('checkCollision', () => {
    let level: Level;
    let tetromino: Tetromino;

    beforeEach(() => {
        level = new Level();
        tetromino = new Tetromino();
    });

    describe('checkCollision', () => {
        // @todo -> could make this easier by having a 'set' row of (un-rendered) pixels to act as the floor
        // a sort of collider for the tetrominos
        test('should detect if a tetromino will hit the floor', () => {
            level.getHeight.mockReturnValue(10);
            level.getState.mockReturnValue([
                { x: 0, y: 9, occupied: false }
            ]);
            tetromino.getActiveState.mockReturnValue([
                { x: 0, y: 9, occupied: true }
            ]);

            expect(checkCollision(level, tetromino)).toBeTruthy();
            expect(level.setPlaced).toBeCalledWith(tetromino);
        });

        test('should detect if a tetromino will hit a another tetromino', () => {
            // @todo -> This is working based on a velocity <= 1
            level.getState.mockReturnValue([
                { x: 0, y: 0, occupied: false, type: null, set: false },
                { x: 1, y: 0, occupied: false, type: null, set: false },
                { x: 0, y: 1, occupied: false, type: null, set: false },
                { x: 1, y: 1, occupied: true, type: 'test', set: true },
                { x: 1, y: 2, occupied: false, type: null, set: false },
                { x: 1, y: 2, occupied: false, type: null, set: false }
            ]);
            tetromino.getActiveState.mockReturnValue([
                { x: 1, y: 0, occupied: true, type: 'new', set: false }
            ]);

            expect(checkCollision(level, tetromino)).toBeTruthy();
        });
    });
});