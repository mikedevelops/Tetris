import HTMLRenderer from '../../src/Renderers/HTMLRenderer';
import State from '../../src/Interfaces/State';

describe('HTMLRenderer', () => {
    let renderer: HTMLRenderer;
    let root: HTMLElement;

    beforeEach(() => {
        root = document.createElement('div');
        renderer = new HTMLRenderer(root, 2, 2);
    });

    describe('render()', () => {
        test('should render the state as HTML', () => {
            const state: State = [
                { x: 0, y: 0, occupied: false, type: null, set: false },
                { x: 1, y: 0, occupied: true, type: 'T', set: false },
                { x: 0, y: 1, occupied: true, type: 'T', set: false },
                { x: 1, y: 1, occupied: false, type: null, set: false }
            ];
            const render = renderer.render(state);
            const expected: string =  `
                <div class="row">
                    <div class="pixel" data-set="false" data-x="0" data-y="0"></div>
                    <div class="pixel" data-set="false" data-x="1" data-y="0" data-type="T"></div>
                </div>
                <div class="row">
                    <div class="pixel" data-set="false" data-x="0" data-y="1" data-type="T"></div>
                    <div class="pixel" data-set="false" data-x="1" data-y="1"></div>
                </div>
            `.replace(/>\s+</g, '><').trim();

            expect(root.innerHTML).toEqual(expected);
        });
    });
});