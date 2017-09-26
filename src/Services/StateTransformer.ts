import State from '../Interfaces/State';
import Pixel from '../Interfaces/Pixel';
import Tetromino from '../Resources/Tetromino';
import Level from '../Resources/Level';
import Coordinate from '../Interfaces/Coordinate';

/**
 * Merge a level state with tetromino state
 * @param level 
 * @param tetromino 
 * @param width 
 * @param height
 */
export function updateLevelState (level: Level, tetromino: Tetromino): State {
    return level.getState().map((levelPixel: Pixel): Pixel => {
        const lp: Coordinate = { x: Math.floor(levelPixel.x), y: Math.floor(levelPixel.y) }; 
        let pixel: Pixel;
        
        if (levelPixel.occupied && !levelPixel.set) {
            levelPixel.occupied = false;
            levelPixel.type = null;
        }

        tetromino.getActiveState().forEach((tetrominoPixel: Pixel) => {
            const tp: Coordinate = { x: Math.floor(tetrominoPixel.x), y: Math.floor(tetrominoPixel.y) }; 

            if (lp.x === tp.x && lp.y === tp.y && tetrominoPixel.occupied) {
                levelPixel.occupied = true;
                levelPixel.type = tetrominoPixel.type;
            }
        });

        return levelPixel;
    });
}

export function checkCollision (level: Level, tetromino: Tetromino): boolean {
    let collision = false;
    
    for (let tetrominoPixel of tetromino.getActiveState()) {
        if (tetrominoPixel.occupied) {
            const tp: Coordinate = { x: Math.floor(tetrominoPixel.x), y: Math.floor(tetrominoPixel.y) };
            const levelPixels: { current: Pixel, next: Pixel } = level.getState()
                .reduce((pixels: { current: Pixel, next: Pixel }, levelPixel): { current: Pixel, next: Pixel } => {
                    const lp: Coordinate = { x: Math.floor(levelPixel.x), y: Math.floor(levelPixel.y) };

                    // @todo - this needs to account for a variable velocity 9 (I'm thinking of values over 1)
                    if (tp.x === lp.x) {
                        if (tp.y === lp.y) {
                            pixels['current'] = levelPixel;
                        } else if ((tp.y + 1) === lp.y) {
                            pixels['next'] = levelPixel;
                        }
                    }

                    return pixels;
                }, { current: null, next: null });

            if (!levelPixels.next || levelPixels.next.set) {
                // console.log('collision!: ', levelPixels, tetrominoPixel);
                collision = true;
                break;
            }
        }
    }

    if (collision) {
        level.setPlaced(tetromino);
    }

    return collision;
}
