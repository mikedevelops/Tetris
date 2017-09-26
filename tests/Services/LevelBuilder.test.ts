import LeveBuilder from '../../src/Services/LevelBuilder';

describe('LeveBuilder', () => {
    let levelBuilder;

    beforeEach(() => {
        levelBuilder = new LeveBuilder(2, 2);
    });

    describe('createLevelState', () => {
        test('should create level state', () => {
            expect(levelBuilder.createLevelState()).toEqual(
                [
                    { x: 0, y: 0, occupied: false, type: null, set: false },
                    { x: 1, y: 0, occupied: false, type: null, set: false },
                    { x: 0, y: 1, occupied: false, type: null, set: false },
                    { x: 1, y: 1, occupied: false, type: null, set: false }
                ]
            );
        })
    });
});