import Block from '../Interfaces/Block';
import Pixel from '../Interfaces/Pixel';

export default class BlockBuilder {
    createBlockState (block: Block): Array<Pixel>  {
        return block.map.trim()
            .split('')
            .filter((char: string) => char.match(/(\d)/))
            .reduce((pixelBlock: Array<Pixel>, char: string): Array<Pixel> => {
                // We know that blocks are 4x2
                // @todo - rethink this a bit, could be cleaner
                if (pixelBlock.length < 4) {
                    pixelBlock.push({
                        x: pixelBlock.length,
                        y: 1,
                        occupied: !!parseInt(char),
                        type: block.name
                    });
                } else {
                    pixelBlock.splice(pixelBlock.length - 4, 0, {
                        x: pixelBlock.length - 4,
                        y: 0,
                        occupied: !!parseInt(char),
                        type: block.name
                    });
                }

                return pixelBlock;
            }, []);
    }
}