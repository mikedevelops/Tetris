import Spawner from '../../src/Services/Spawner';
import State from '../../src/Interfaces/State';
import Coordinate from '../../src/Interfaces/Coordinate';

describe('Spawner', () => {
    let service: Spawner;

    beforeEach(() => {
        service = new Spawner();
    });

    describe('spawnBlock()', () => {
        test('should return a block state with an entry point', () => {
            const entry: Coordinate = { x: 10, y: 20 };
            const initialBlockState: State = [
                { x: 0, y: 0, occupied: false, type: 'test' },
                { x: 0, y: 1, occupied: false, type: 'test' }
            ];
            const spawnedBlock = service.spawnBlock(initialBlockState, entry);

            expect(spawnedBlock).toEqual([
                { x: 10, y: 20, occupied: false, type: 'test' },
                { x: 10, y: 21, occupied: false, type: 'test' }
            ])
        });
    });
});