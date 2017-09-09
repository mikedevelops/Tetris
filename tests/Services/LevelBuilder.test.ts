import LevelBuilder from '../../src/Services/LevelBuilder';

describe('LevelBuilder', () => {
    let service: LevelBuilder;

    beforeEach(() => {
        service = new LevelBuilder(5, 5);
    });

    describe('createLevelState', () => {
        test('should create level state', () => {
            const levelState = service.createLevelState();

            expect(levelState).toEqual([
                { x: 0, y: 0, occupied: false, type: null }, 
                { x: 1, y: 0, occupied: false, type: null }, 
                { x: 2, y: 0, occupied: false, type: null }, 
                { x: 3, y: 0, occupied: false, type: null }, 
                { x: 4, y: 0, occupied: false, type: null },
                { x: 0, y: 1, occupied: false, type: null }, 
                { x: 1, y: 1, occupied: false, type: null }, 
                { x: 2, y: 1, occupied: false, type: null }, 
                { x: 3, y: 1, occupied: false, type: null }, 
                { x: 4, y: 1, occupied: false, type: null },
                { x: 0, y: 2, occupied: false, type: null }, 
                { x: 1, y: 2, occupied: false, type: null }, 
                { x: 2, y: 2, occupied: false, type: null }, 
                { x: 3, y: 2, occupied: false, type: null }, 
                { x: 4, y: 2, occupied: false, type: null },
                { x: 0, y: 3, occupied: false, type: null }, 
                { x: 1, y: 3, occupied: false, type: null }, 
                { x: 2, y: 3, occupied: false, type: null }, 
                { x: 3, y: 3, occupied: false, type: null }, 
                { x: 4, y: 3, occupied: false, type: null },
                { x: 0, y: 4, occupied: false, type: null }, 
                { x: 1, y: 4, occupied: false, type: null }, 
                { x: 2, y: 4, occupied: false, type: null }, 
                { x: 3, y: 4, occupied: false, type: null }, 
                { x: 4, y: 4, occupied: false, type: null }
            ]);
        });
    });
});