import StateManager from '../../src/Services/StateTransformer';
import State from '../../src/Interfaces/State';

describe('StateManager', () => {
    let service: StateManager;

    beforeEach(() => {
        service = new StateManager(3, 3);
    });

    describe('mergeState()', () => {
        test('should merge the level and block state', () => {
            const levelState: State = [
                { x: 0, y: 0, occupied: false, type: null },
                { x: 1, y: 0, occupied: false, type: null },
                { x: 0, y: 1, occupied: false, type: null },
                { x: 1, y: 1, occupied: false, type: null }
            ];
            const blockState: State = [
                { x: 0, y: 0, occupied: true, type: 'test' },
                { x: 1, y: 0, occupied: false, type: 'test' },
                { x: 0, y: 1, occupied: true, type: 'test' },
                { x: 1, y: 1, occupied: false, type: 'test' }
            ];
    
            const mergedState: State = service.mergeState(levelState, blockState);
    
            expect(mergedState).toEqual([
                { x: 0, y: 0, occupied: true, type: 'test' },
                { x: 1, y: 0, occupied: false, type: null },
                { x: 0, y: 1, occupied: true, type: 'test' },
                { x: 1, y: 1, occupied: false, type: null }
            ]);
        });
    });

    describe('addGravity()', () => {
        test('should add gravity to block state', () => {
            const blockState: State = [
                { x: 0, y: 0, occupied: true, type: 'test' },
                { x: 1, y: 0, occupied: false, type: 'test' },
                { x: 0, y: 1, occupied: true, type: 'test' },
                { x: 1, y: 1, occupied: false, type: 'test' }
            ];

            expect(service.addGravity(blockState, 1)).toEqual([
                { x: 0, y: 1, occupied: true, type: 'test' },
                { x: 1, y: 1, occupied: false, type: 'test' },
                { x: 0, y: 2, occupied: true, type: 'test' },
                { x: 1, y: 2, occupied: false, type: 'test' }
            ]);
        });

        test('should stop blocks falling through the floor', () => {
            const blockState: State = [
                { x: 0, y: 1, occupied: true, type: 'test' },
                { x: 1, y: 1, occupied: false, type: 'test' },
                { x: 0, y: 2, occupied: true, type: 'test' },
                { x: 1, y: 2, occupied: false, type: 'test' }
            ];
            
            expect(service.addGravity(blockState, 1)).toEqual([
                { x: 0, y: 1, occupied: true, type: 'test' },
                { x: 1, y: 1, occupied: false, type: 'test' },
                { x: 0, y: 2, occupied: true, type: 'test' },
                { x: 1, y: 2, occupied: false, type: 'test' }
            ]);
        });
    });
});