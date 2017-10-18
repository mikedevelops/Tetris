import Tetromino from '../../src/Resources/Tetromino';
import Level from '../../src/Resources/Level';
import Command from '../../src/Interfaces/Command';
import { updateLevelState, checkCollision } from '../../src/Services/StateTransformer';
import tetromios from '../../src/Resources/TetrominoLibrary';
import TetrominoBuilder from '../../src/Services/TetrominoBuilder';

describe('"S" input integration', () => {
    const tetrominoBuilder: TetrominoBuilder = new TetrominoBuilder();

    describe('Left input at left boundary', () => {
        let tetromino: Tetromino;
        let level: Level;

        test('should setup collision', () => {
            level = new Level(5, 5,[
                { x: 0, y: 0, occupied: false, type: null, set: false },
                { x: 1, y: 0, occupied: false, type: null, set: false },
                { x: 2, y: 0, occupied: false, type: null, set: false },
                { x: 3, y: 0, occupied: false, type: null, set: false },
                { x: 4, y: 0, occupied: false, type: null, set: false },
                { x: 0, y: 1, occupied: false, type: null, set: false },
                { x: 1, y: 1, occupied: false, type: null, set: false },
                { x: 2, y: 1, occupied: false, type: null, set: false },
                { x: 3, y: 1, occupied: false, type: null, set: false },
                { x: 4, y: 1, occupied: false, type: null, set: false },
                { x: 0, y: 2, occupied: false, type: null, set: false },
                { x: 1, y: 2, occupied: false, type: null, set: false },
                { x: 2, y: 2, occupied: false, type: null, set: false },
                { x: 3, y: 2, occupied: false, type: null, set: false },
                { x: 4, y: 2, occupied: false, type: null, set: false },
                { x: 0, y: 3, occupied: false, type: null, set: false },
                { x: 1, y: 3, occupied: false, type: null, set: false },
                { x: 2, y: 3, occupied: false, type: null, set: false },
                { x: 3, y: 3, occupied: false, type: null, set: false },
                { x: 4, y: 3, occupied: false, type: null, set: false },
                { x: 0, y: 4, occupied: false, type: null, set: false },
                { x: 1, y: 4, occupied: false, type: null, set: false },
                { x: 2, y: 4, occupied: false, type: null, set: false },
                { x: 3, y: 4, occupied: false, type: null, set: false },
                { x: 4, y: 4, occupied: false, type: null, set: false }
            ]);

            tetromino = tetrominoBuilder.createTetrominoFromCompiled(
                tetromios.find(t => t.name === 'S').name,
                tetromios.find(t => t.name === 'S').preCompiled,
                level
            );

            expect(updateLevelState(level, tetromino)).toEqual([
                { x: 0, y: 0, occupied: false, type: null, set: false },
                { x: 1, y: 0, occupied: false, type: null, set: false },
                { x: 2, y: 0, occupied: false, type: null, set: false },
                { x: 3, y: 0, occupied: false, type: null, set: false },
                { x: 4, y: 0, occupied: false, type: null, set: false },
                { x: 0, y: 1, occupied: false, type: null, set: false },
                { x: 1, y: 1, occupied: true, type: 'S', set: false },
                { x: 2, y: 1, occupied: true, type: 'S', set: false },
                { x: 3, y: 1, occupied: false, type: null, set: false },
                { x: 4, y: 1, occupied: false, type: null, set: false },
                { x: 0, y: 2, occupied: true, type: 'S', set: false },
                { x: 1, y: 2, occupied: true, type: 'S', set: false },
                { x: 2, y: 2, occupied: false, type: null, set: false },
                { x: 3, y: 2, occupied: false, type: null, set: false },
                { x: 4, y: 2, occupied: false, type: null, set: false },
                { x: 0, y: 3, occupied: false, type: null, set: false },
                { x: 1, y: 3, occupied: false, type: null, set: false },
                { x: 2, y: 3, occupied: false, type: null, set: false },
                { x: 3, y: 3, occupied: false, type: null, set: false },
                { x: 4, y: 3, occupied: false, type: null, set: false },
                { x: 0, y: 4, occupied: false, type: null, set: false },
                { x: 1, y: 4, occupied: false, type: null, set: false },
                { x: 2, y: 4, occupied: false, type: null, set: false },
                { x: 3, y: 4, occupied: false, type: null, set: false },
                { x: 4, y: 4, occupied: false, type: null, set: false }
            ]);

            expect(checkCollision(level, tetromino)).toBeFalsy();
        });

        test('should collide with left hand boundry', () => {
            const command: Command = {
                name: 'left',
                processed: false
            };

            tetromino.update(command);

            expect(updateLevelState(level, tetromino)).toEqual([
                { x: 0, y: 0, occupied: false, type: null, set: false },
                { x: 1, y: 0, occupied: false, type: null, set: false },
                { x: 2, y: 0, occupied: false, type: null, set: false },
                { x: 3, y: 0, occupied: false, type: null, set: false },
                { x: 4, y: 0, occupied: false, type: null, set: false },
                { x: 0, y: 1, occupied: false, type: null, set: false },
                { x: 1, y: 1, occupied: true, type: 'S', set: false },
                { x: 2, y: 1, occupied: true, type: 'S', set: false },
                { x: 3, y: 1, occupied: false, type: null, set: false },
                { x: 4, y: 1, occupied: false, type: null, set: false },
                { x: 0, y: 2, occupied: true, type: 'S', set: false },
                { x: 1, y: 2, occupied: true, type: 'S', set: false },
                { x: 2, y: 2, occupied: false, type: null, set: false },
                { x: 3, y: 2, occupied: false, type: null, set: false },
                { x: 4, y: 2, occupied: false, type: null, set: false },
                { x: 0, y: 3, occupied: false, type: null, set: false },
                { x: 1, y: 3, occupied: false, type: null, set: false },
                { x: 2, y: 3, occupied: false, type: null, set: false },
                { x: 3, y: 3, occupied: false, type: null, set: false },
                { x: 4, y: 3, occupied: false, type: null, set: false },
                { x: 0, y: 4, occupied: false, type: null, set: false },
                { x: 1, y: 4, occupied: false, type: null, set: false },
                { x: 2, y: 4, occupied: false, type: null, set: false },
                { x: 3, y: 4, occupied: false, type: null, set: false },
                { x: 4, y: 4, occupied: false, type: null, set: false }
            ]);
        });
    });

    describe('Rotation at left boundary', () => {
        let tetromino: Tetromino;
        let level: Level;

        // @todo - wirte integration tests for controls
        // specifically colliding with the level boundary
        test('should setup collision', () => {
            level = new Level(5, 5,[
                { x: 0, y: 0, occupied: false, type: null, set: false },
                { x: 1, y: 0, occupied: false, type: null, set: false },
                { x: 2, y: 0, occupied: false, type: null, set: false },
                { x: 3, y: 0, occupied: false, type: null, set: false },
                { x: 4, y: 0, occupied: false, type: null, set: false },
                { x: 0, y: 1, occupied: false, type: null, set: false },
                { x: 1, y: 1, occupied: false, type: null, set: false },
                { x: 2, y: 1, occupied: false, type: null, set: false },
                { x: 3, y: 1, occupied: false, type: null, set: false },
                { x: 4, y: 1, occupied: false, type: null, set: false },
                { x: 0, y: 2, occupied: false, type: null, set: false },
                { x: 1, y: 2, occupied: false, type: null, set: false },
                { x: 2, y: 2, occupied: false, type: null, set: false },
                { x: 3, y: 2, occupied: false, type: null, set: false },
                { x: 4, y: 2, occupied: false, type: null, set: false },
                { x: 0, y: 3, occupied: false, type: null, set: false },
                { x: 1, y: 3, occupied: false, type: null, set: false },
                { x: 2, y: 3, occupied: false, type: null, set: false },
                { x: 3, y: 3, occupied: false, type: null, set: false },
                { x: 4, y: 3, occupied: false, type: null, set: false },
                { x: 0, y: 4, occupied: false, type: null, set: false },
                { x: 1, y: 4, occupied: false, type: null, set: false },
                { x: 2, y: 4, occupied: false, type: null, set: false },
                { x: 3, y: 4, occupied: false, type: null, set: false },
                { x: 4, y: 4, occupied: false, type: null, set: false }
            ]);

            tetromino = tetromino = tetrominoBuilder.createTetrominoFromCompiled(
                tetromios.find(t => t.name === 'S').name,
                tetromios.find(t => t.name === 'S').preCompiled,
                level
            );

            expect(updateLevelState(level, tetromino)).toEqual([
                { x: 0, y: 0, occupied: false, type: null, set: false },
                { x: 1, y: 0, occupied: false, type: null, set: false },
                { x: 2, y: 0, occupied: false, type: null, set: false },
                { x: 3, y: 0, occupied: false, type: null, set: false },
                { x: 4, y: 0, occupied: false, type: null, set: false },
                { x: 0, y: 1, occupied: false, type: null, set: false },
                { x: 1, y: 1, occupied: true, type: 'S', set: false },
                { x: 2, y: 1, occupied: true, type: 'S', set: false },
                { x: 3, y: 1, occupied: false, type: null, set: false },
                { x: 4, y: 1, occupied: false, type: null, set: false },
                { x: 0, y: 2, occupied: true, type: 'S', set: false },
                { x: 1, y: 2, occupied: true, type: 'S', set: false },
                { x: 2, y: 2, occupied: false, type: null, set: false },
                { x: 3, y: 2, occupied: false, type: null, set: false },
                { x: 4, y: 2, occupied: false, type: null, set: false },
                { x: 0, y: 3, occupied: false, type: null, set: false },
                { x: 1, y: 3, occupied: false, type: null, set: false },
                { x: 2, y: 3, occupied: false, type: null, set: false },
                { x: 3, y: 3, occupied: false, type: null, set: false },
                { x: 4, y: 3, occupied: false, type: null, set: false },
                { x: 0, y: 4, occupied: false, type: null, set: false },
                { x: 1, y: 4, occupied: false, type: null, set: false },
                { x: 2, y: 4, occupied: false, type: null, set: false },
                { x: 3, y: 4, occupied: false, type: null, set: false },
                { x: 4, y: 4, occupied: false, type: null, set: false }
            ]);

            expect(checkCollision(level, tetromino)).toBeFalsy();
        });

        test('should not exceed boundary when rotated', () => {
            const command: Command = {
                name: 'up',
                processed: false
            };

            tetromino.update(command);

            expect(updateLevelState(level, tetromino)).toEqual([
                { x: 0, y: 0, occupied: false, type: null, set: false },
                { x: 1, y: 0, occupied: false, type: null, set: false },
                { x: 2, y: 0, occupied: false, type: null, set: false },
                { x: 3, y: 0, occupied: false, type: null, set: false },
                { x: 4, y: 0, occupied: false, type: null, set: false },
                { x: 0, y: 1, occupied: false, type: null, set: false },
                { x: 1, y: 1, occupied: true, type: 'S', set: false },
                { x: 2, y: 1, occupied: true, type: 'S', set: false },
                { x: 3, y: 1, occupied: false, type: null, set: false },
                { x: 4, y: 1, occupied: false, type: null, set: false },
                { x: 0, y: 2, occupied: true, type: 'S', set: false },
                { x: 1, y: 2, occupied: true, type: 'S', set: false },
                { x: 2, y: 2, occupied: false, type: null, set: false },
                { x: 3, y: 2, occupied: false, type: null, set: false },
                { x: 4, y: 2, occupied: false, type: null, set: false },
                { x: 0, y: 3, occupied: false, type: null, set: false },
                { x: 1, y: 3, occupied: false, type: null, set: false },
                { x: 2, y: 3, occupied: false, type: null, set: false },
                { x: 3, y: 3, occupied: false, type: null, set: false },
                { x: 4, y: 3, occupied: false, type: null, set: false },
                { x: 0, y: 4, occupied: false, type: null, set: false },
                { x: 1, y: 4, occupied: false, type: null, set: false },
                { x: 2, y: 4, occupied: false, type: null, set: false },
                { x: 3, y: 4, occupied: false, type: null, set: false },
                { x: 4, y: 4, occupied: false, type: null, set: false }
            ]);

            expect(checkCollision(level, tetromino)).toBeTruthy();
        });
    });
});
