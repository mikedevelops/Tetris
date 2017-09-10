import BlockBuilder from '../../src/Services/BlockBuilder';
import { T } from '../../src/Services/BlockLibrary';

describe('BlockBuilder', () => {
    let service: BlockBuilder;

    beforeEach(() => {
        service = new BlockBuilder();
    });  

    describe('createBlockState', () => {
        test('should create block state from block string', () => {
            const blockState = service.createBlockState(T);

            expect(blockState).toEqual([
                { x: 0, y: 0, occupied: false, type: 'T' },
                { x: 1, y: 0, occupied: true, type: 'T' },
                { x: 2, y: 0, occupied: false, type: 'T' },
                { x: 0, y: 1, occupied: true, type: 'T' },
                { x: 1, y: 1, occupied: true, type: 'T' },
                { x: 2, y: 1, occupied: true, type: 'T' },
            ]);
        });
    });
});