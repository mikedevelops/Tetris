import State from '../Interfaces/State';
import Pixel from '../Interfaces/Pixel';
import Block from '../Interfaces/Block';
import Coordinate from '../Interfaces/Coordinate';
import BlockBuilder from './BlockBuilder';
import BlockLibrary from './BlockLibrary';

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class Spawner {
    private blockTypes: Block[];
    private blockBuilder: BlockBuilder;
    private width: number;
    private height: number;
    
    constructor (blockBuilder: BlockBuilder, width: number, height: number) {
        this.blockBuilder = blockBuilder;
        this.width = width;
        this.height = height;
        this.blockTypes = BlockLibrary;
    }

    spawnBlock (): State {
        // -4 to prevent blocks spawning partially off screen, we know that the max block width is 4
        const offset = getRandomInt(0, this.width - 4);
        const type = this.blockTypes[getRandomInt(0, this.blockTypes.length - 1)];
        
        return this.blockBuilder.createBlockState(type)
            .map((pixel: Pixel) => {
                pixel.x += offset;
                pixel.y += 0;
                return pixel;
        });
    }
}