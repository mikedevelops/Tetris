import TetrominoBlueprint from '../Interfaces/TetrominoBlueprint';
import Tetromino from '../Interfaces/Tetromino';
import State from '../Interfaces/State';
import Pixel from '../Interfaces/Pixel';

export default class TetrominoBuilder {
    createTetromino (blueprint: TetrominoBlueprint): Tetromino {
        let row: number = 0;
        let count: number = 0;
        
        return {
            placed: false,
            state: blueprint.map
                .trim()
                .split('')
                .filter((char: string) => char.match(/[\d\n]/))
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
                            type: blueprint.name
                        });

                        count++;
                        return state;
                    }
                }, [])
        } 
    }
}