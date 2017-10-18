import Level from '../../src/Resources/Level';
import Tetromino from '../../src/Resources/Tetromino';
import { checkCollision, updateLevelState } from '../../src/Services/StateTransformer';

describe('"S" collision integration', () => {
    let level: Level;
    let tetromino: Tetromino;

    test('should setup "S" collision', () => {
        level = new Level(5, 5, [
            { x: 0, y: 0, occupied: false, type: null, set: false },
            { x: 1, y: 0, occupied: false, type: null, set: false },
            { x: 2, y: 0, occupied: false, type: null, set: false },
            { x: 3, y: 0, occupied: false, type: null, set: false },
            { x: 4, y: 0, occupied: false, type: null, set: false },
            { x: 0, y: 1, occupied: false, type: null, set: false },
            { x: 1, y: 1, occupied: false, type: null, set: false },
            { x: 2, y: 1, occupied: false, type: null, set: false },
            { x: 3, y: 1, occupied: true, type: 'S', set: true },
            { x: 4, y: 1, occupied: true, type: 'S', set: true },
            { x: 0, y: 2, occupied: false, type: null, set: false },
            { x: 1, y: 2, occupied: false, type: null, set: false },
            { x: 2, y: 2, occupied: true, type: 'S', set: true },
            { x: 3, y: 2, occupied: true, type: 'S', set: true },
            { x: 4, y: 2, occupied: false, type: null, set: false },
            { x: 0, y: 3, occupied: false, type: null, set: false },
            { x: 1, y: 3, occupied: true, type: 'S', set: true },
            { x: 2, y: 3, occupied: true, type: 'S', set: true },
            { x: 3, y: 3, occupied: false, type: null, set: false },
            { x: 4, y: 3, occupied: false, type: null, set: false },
            { x: 0, y: 4, occupied: true, type: 'S', set: true },
            { x: 1, y: 4, occupied: true, type: 'S', set: true },
            { x: 2, y: 4, occupied: false, type: null, set: false },
            { x: 3, y: 4, occupied: false, type: null, set: false },
            { x: 4, y: 4, occupied: false, type: null, set: false }
        ]);

        tetromino = new Tetromino(
            [[
                { x: 0, y: 0, occupied: false, type: null, set: false },
                { x: 1, y: 0, occupied: true, type: 'S', set: false },
                { x: 2, y: 0, occupied: true, type: 'S', set: false },
                { x: 0, y: 1, occupied: true, type: 'S', set: false },
                { x: 1, y: 1, occupied: true, type: 'S', set: false },
                { x: 2, y: 1, occupied: false, type: null, set: false }
            ]],
            level
        );

        expect(updateLevelState(level, tetromino)).toEqual([
            { x: 0, y: 0, occupied: false, type: null, set: false },
            { x: 1, y: 0, occupied: true, type: 'S', set: false },
            { x: 2, y: 0, occupied: true, type: 'S', set: false },
            { x: 3, y: 0, occupied: false, type: null, set: false },
            { x: 4, y: 0, occupied: false, type: null, set: false },
            { x: 0, y: 1, occupied: true, type: 'S', set: false },
            { x: 1, y: 1, occupied: true, type: 'S', set: false },
            { x: 2, y: 1, occupied: false, type: null, set: false },
            { x: 3, y: 1, occupied: true, type: 'S', set: true },
            { x: 4, y: 1, occupied: true, type: 'S', set: true },
            { x: 0, y: 2, occupied: false, type: null, set: false },
            { x: 1, y: 2, occupied: false, type: null, set: false },
            { x: 2, y: 2, occupied: true, type: 'S', set: true },
            { x: 3, y: 2, occupied: true, type: 'S', set: true },
            { x: 4, y: 2, occupied: false, type: null, set: false },
            { x: 0, y: 3, occupied: false, type: null, set: false },
            { x: 1, y: 3, occupied: true, type: 'S', set: true },
            { x: 2, y: 3, occupied: true, type: 'S', set: true },
            { x: 3, y: 3, occupied: false, type: null, set: false },
            { x: 4, y: 3, occupied: false, type: null, set: false },
            { x: 0, y: 4, occupied: true, type: 'S', set: true },
            { x: 1, y: 4, occupied: true, type: 'S', set: true },
            { x: 2, y: 4, occupied: false, type: null, set: false },
            { x: 3, y: 4, occupied: false, type: null, set: false },
            { x: 4, y: 4, occupied: false, type: null, set: false }
        ]);

        expect(checkCollision(level, tetromino)).toBeFalsy();
    });

    test('should handle tetromino translation', () => {
        tetromino.translateY(1);

        expect(updateLevelState(level, tetromino)).toEqual([
            { x: 0, y: 0, occupied: false, type: null, set: false },
            { x: 1, y: 0, occupied: false, type: null, set: false },
            { x: 2, y: 0, occupied: false, type: null, set: false },
            { x: 3, y: 0, occupied: false, type: null, set: false },
            { x: 4, y: 0, occupied: false, type: null, set: false },
            { x: 0, y: 1, occupied: false, type: null, set: false },
            { x: 1, y: 1, occupied: true, type: 'S', set: false },
            { x: 2, y: 1, occupied: true, type: 'S', set: false },
            { x: 3, y: 1, occupied: true, type: 'S', set: true },
            { x: 4, y: 1, occupied: true, type: 'S', set: true },
            { x: 0, y: 2, occupied: true, type: 'S', set: false },
            { x: 1, y: 2, occupied: true, type: 'S', set: false },
            { x: 2, y: 2, occupied: true, type: 'S', set: true },
            { x: 3, y: 2, occupied: true, type: 'S', set: true },
            { x: 4, y: 2, occupied: false, type: null, set: false },
            { x: 0, y: 3, occupied: false, type: null, set: false },
            { x: 1, y: 3, occupied: true, type: 'S', set: true },
            { x: 2, y: 3, occupied: true, type: 'S', set: true },
            { x: 3, y: 3, occupied: false, type: null, set: false },
            { x: 4, y: 3, occupied: false, type: null, set: false },
            { x: 0, y: 4, occupied: true, type: 'S', set: true },
            { x: 1, y: 4, occupied: true, type: 'S', set: true },
            { x: 2, y: 4, occupied: false, type: null, set: false },
            { x: 3, y: 4, occupied: false, type: null, set: false },
            { x: 4, y: 4, occupied: false, type: null, set: false }
        ]);

        expect(checkCollision(level, tetromino)).toBeTruthy();
    });

    test('should set tetromino', () => {
        level.setPlaced(tetromino);

        expect(level.getState()).toEqual([
            { x: 0, y: 0, occupied: false, type: null, set: false },
            { x: 1, y: 0, occupied: false, type: null, set: false },
            { x: 2, y: 0, occupied: false, type: null, set: false },
            { x: 3, y: 0, occupied: false, type: null, set: false },
            { x: 4, y: 0, occupied: false, type: null, set: false },
            { x: 0, y: 1, occupied: false, type: null, set: false },
            { x: 1, y: 1, occupied: true, type: 'S', set: true },
            { x: 2, y: 1, occupied: true, type: 'S', set: true },
            { x: 3, y: 1, occupied: true, type: 'S', set: true },
            { x: 4, y: 1, occupied: true, type: 'S', set: true },
            { x: 0, y: 2, occupied: true, type: 'S', set: true },
            { x: 1, y: 2, occupied: true, type: 'S', set: true },
            { x: 2, y: 2, occupied: true, type: 'S', set: true },
            { x: 3, y: 2, occupied: true, type: 'S', set: true },
            { x: 4, y: 2, occupied: false, type: null, set: false },
            { x: 0, y: 3, occupied: false, type: null, set: false },
            { x: 1, y: 3, occupied: true, type: 'S', set: true },
            { x: 2, y: 3, occupied: true, type: 'S', set: true },
            { x: 3, y: 3, occupied: false, type: null, set: false },
            { x: 4, y: 3, occupied: false, type: null, set: false },
            { x: 0, y: 4, occupied: true, type: 'S', set: true },
            { x: 1, y: 4, occupied: true, type: 'S', set: true },
            { x: 2, y: 4, occupied: false, type: null, set: false },
            { x: 3, y: 4, occupied: false, type: null, set: false },
            { x: 4, y: 4, occupied: false, type: null, set: false }
        ]);
    });
});