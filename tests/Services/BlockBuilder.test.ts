import BlockBuilder from '../../src/Services/BlockBuilder';
import { O } from '../../src/Services/BlockLibrary';

describe('BlockBuilder', () => {
    let service: BlockBuilder;

    beforeEach(() => {
        service = new BlockBuilder();
    });  

    describe('createBlockState', () => {
        test('should create block state from block string', () => {
            const blockState = service.createBlockState(O);

            expect(blockState).toEqual([
                { x: 0, y: 0, occupied: false, type: 'O' },
                { x: 1, y: 0, occupied: true, type: 'O' },
                { x: 2, y: 0, occupied: true, type: 'O' },
                { x: 3, y: 0, occupied: false, type: 'O' },
                { x: 0, y: 1, occupied: false, type: 'O' },
                { x: 1, y: 1, occupied: true, type: 'O' },
                { x: 2, y: 1, occupied: true, type: 'O' },
                { x: 3, y: 1, occupied: false, type: 'O' }
            ])
        });
    });
});