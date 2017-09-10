import Block from '../Interfaces/Block';
import State from '../Interfaces/State';
import Pixel from '../Interfaces/Pixel';

export default class BlockBuilder {
    createBlockState (block: Block): State  {
        let blockState: State = [];
        const blockMap = block.map.trim()
            .split('')
            .filter((char: string) => char.match(/(\d)/));
        const half = blockMap.length / 2;
        
        return blockMap.map((char: string, index: number) => {
                let pixel: Pixel = {
                    x: Infinity,
                    y: Infinity,
                    occupied: false,
                    type: block.name
                };
                
                if (index < half) {
                    pixel.x = index;
                    pixel.y = 0;
                } else {
                    pixel.x = index - half;
                    pixel.y = 1;
                }

                pixel.occupied = !!parseInt(char);

                return pixel;
            });
    }
}