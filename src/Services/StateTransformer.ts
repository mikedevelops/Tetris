import State from '../Interfaces/State';
import Row from '../Interfaces/Row';
import Pixel from '../Interfaces/Pixel';

export default class StateTransformer {
    private width: number;
    private height: number;

    constructor (width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    mergeState (level: State, block: State): State {
        // Lol
        // Should get around this with Immutable.js maybe?
        level = JSON.parse(JSON.stringify(level))

        return level.map((levelPixel: Pixel) => {
            block.forEach((blockPixel: Pixel) => {
                if (levelPixel.x === blockPixel.x && levelPixel.y === blockPixel.y) {
                    levelPixel.occupied = blockPixel.occupied;
                    levelPixel.type = blockPixel.occupied ? blockPixel.type : null;
                }
            });

            return levelPixel;
        });
    }

    addGravity (blockState: State, levelState: State, gravity: number): State|false {
        let floor = false;
        let collision = false;

        // Lol
        const blockStateClone = JSON.parse(JSON.stringify(blockState));

        const newState = blockStateClone.map((pixel: Pixel) => {
            levelState.forEach((levelPixel: Pixel) => {
                // @todo - could access blockManager here for a smaller set of data to compare against
                // calculating + gravity here to see 1 move ahead
                if (pixel.x === levelPixel.x && pixel.y + gravity === levelPixel.y && levelPixel.occupied) {
                    console.log(pixel, ' -> collided with -> ', levelPixel)
                    collision = true;
                }
            });
            if (pixel.y + gravity === this.height) {
                floor = true;
            }
            pixel.y += gravity;
            return pixel;
        });

        return floor || collision ? false : newState;
    }
}