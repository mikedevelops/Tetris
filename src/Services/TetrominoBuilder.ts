import TetrominoBlueprint from '../Interfaces/TetrominoBlueprint';
import Tetromino from '../Resources/Tetromino';
import State from '../Interfaces/State';
import Pixel from '../Interfaces/Pixel';

export default class TetrominoBuilder {
    /**
     * Create Tetromino from blueprint 
     * @param blueprint 
     */
    public createTetrominoFromBlueprint (name: string, map: string[]): Tetromino {
        let row: number = 0;
        let count: number = 0;
        const state: State[] = map.map((blueprint: string) => {
            // remove traling / preceding whitespace
            return blueprint.trim()
                // convert string to an array
                .split('')
                // filter to leave numbers and newline characters
                .filter((char: string) => char.match(/[\d\n]/))
                // create state
                .reduce((state: State, char: string) => {
                    if (char === '\n') {
                        row++;
                        count = 0;
                        return state;
                    } else {
                        state.push({
                            x: count,
                            y: row,
                            occupied: !!parseInt(char),
                            type: name,
                            set: false
                        });
    
                        count++;
                        return state;
                    }
                }, []);
        })

        return new Tetromino(state);
    }

    /**
     * Create Tetromino from pre-compiled blueprint
     * @param blueprint 
     */
    public createTetrominoFromCompiled (name: string, preCompiledState: State[]): Tetromino {
        return new Tetromino(preCompiledState);
    }
}