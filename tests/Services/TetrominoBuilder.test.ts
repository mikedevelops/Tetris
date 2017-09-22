import TetrominoBuilder from '../../src/Services/TetrominoBuilder';
import Tetromino from '../../src/Resources/Tetromino';
import minos from '../../src/Resources/TetrominoLibrary';
import TetrominoBlueprint from '../../src/Interfaces/TetrominoBlueprint';
import State from '../../src/Interfaces/State';

jest.mock('../../src/Resources/Tetromino');

describe('TetrominoBuilder', () => {
    let tetrominoBuilder: TetrominoBuilder;
    let mino: TetrominoBlueprint;

    beforeEach(() => {
        mino = minos.find(m => m.name === 'T');
        tetrominoBuilder = new TetrominoBuilder();
    });

    describe('createTetrominoFromBlueprint', () => {
        test('should create tetromino from blueprint'/*, () => {
            const tetromino: Tetromino = tetrominoBuilder.createTetrominoFromBlueprint('T', mino.map);
            const state: State[] = mino.preCompiled;

            expect(tetromino).toBeInstanceOf(Tetromino);
            expect(Tetromino).toBeCalledWith(state);
        }*/);
    });

    describe('createTetrominoFromCompiled', () => {
        test('should create tetromino from pre-compiled blueprint', () => {
            const tetromino: Tetromino = tetrominoBuilder.createTetrominoFromCompiled('T', mino.preCompiled);

            expect(tetromino).toBeInstanceOf(Tetromino);
            expect(Tetromino).toBeCalledWith(mino.preCompiled);
        });
    });
});