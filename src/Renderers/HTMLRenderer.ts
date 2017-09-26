import Pixel from '../Interfaces/Pixel';
import State from '../Interfaces/State';

export default class HTMLRenderer {
    private root: HTMLElement;
    private width: number;
    private height: number;
    
    constructor (root: HTMLElement, width: number, height: number) {
        this.root = root;
        this.width = width;
        this.height = height;
    }

    render (state: State): void {
        let row: number = -1;
        this.root.innerHTML = state.reduce((html: string, pixel: Pixel) => {
            if (pixel.x === 0) {
                row++;
                html += '<div class="row">';
            }
            
            html += `<div class="pixel" data-set="${pixel.set}" data-x="${pixel.x}" data-y="${pixel.y}" ${pixel.occupied ? `data-type=${pixel.type}` : ''}></div>`;

            if (pixel.x === (this.width - 1)) {
                html += '</div>';
            }

            return html;
        }, '');
    }
}