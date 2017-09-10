import LevelBuilder from '../../src/Services/LevelBuilder';

describe('LevelBuilder', () => {
    let service: LevelBuilder;

    beforeEach(() => {
        service = new LevelBuilder(2, 2);
    });

    describe('createLevelState', () => {
        test('should create level state', () => {
            const levelState = service.createLevelState();

            expect(levelState).toEqual([
                { x: 0, y: 0, occupied: false, type: null }, 
                { x: 1, y: 0, occupied: false, type: null },
                { x: 0, y: 1, occupied: false, type: null }, 
                { x: 1, y: 1, occupied: false, type: null }
            ]);
        });
    });
});