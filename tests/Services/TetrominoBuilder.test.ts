import TetrominoBuilder from '../../src/Services/TetrominoBuilder';
import Tetromino from '../../src/Interfaces/Tetromino';
import { T } from '../../src/Resources/TetrominoLibrary';

describe('TetrominoBuilder', () => {
    let service: TetrominoBuilder;

    beforeEach(() => {
        service = new TetrominoBuilder();
    });  

    describe('createTetromino', () => {
        test('should create tetromino from blueprint', () => {
            const tetromino: Tetromino = service.createTetromino(T);

            expect(tetromino).toEqual({
                placed: false,
                state: [
                    { x: 0, y: 0, occupied: false, type: 'T' },
                    { x: 1, y: 0, occupied: true, type: 'T' },
                    { x: 2, y: 0, occupied: false, type: 'T' },
                    { x: 0, y: 1, occupied: true, type: 'T' },
                    { x: 1, y: 1, occupied: true, type: 'T' },
                    { x: 2, y: 1, occupied: true, type: 'T' }
                ]
            });
        });
    });
});