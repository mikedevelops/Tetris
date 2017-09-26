// @todo - Create basic HTML renderer using a tablento render the level and a block
import LevelBuilder from './Services/LevelBuilder';
// import Spawner from './Services/Spawner';
import TetrominoBuilder from './Services/TetrominoBuilder';
import { updateLevelState, checkCollision } from './Services/StateTransformer';
import HTMLRenderer from './Renderers/HTMLRenderer';
// import GameLoop from './Services/GameLoop';
// import GameManager from './Managers/GameManager';
import TetrominoManager from './Managers/TetrominoManager';
import InputHandler from './Services/InputHandler';

import State from './Interfaces/State';
import TetrominoBlueprint from './Interfaces/TetrominoBlueprint';
import Coordinate from './Interfaces/Coordinate';
import tetromios from './Resources/TetrominoLibrary';
import Tetromino from './Resources/Tetromino';
import Level from './Resources/Level';

// const width = Math.floor(window.innerWidth / 20);
// const height = Math.floor(window.innerHeight / 20);
const width: number = 10;
const height: number = 22;
const GRAVITY: number = 0.5;

const levelBuilder: LevelBuilder = new LevelBuilder(width, height);
const renderer: HTMLRenderer = new HTMLRenderer(
    document.getElementById('root'),
    width,
    height
);

const levelState: State = levelBuilder.createLevelState();
const level: Level = new Level(width, height, levelState);
const inputHandler: InputHandler = new InputHandler();
const tetrominoBuilder: TetrominoBuilder = new TetrominoBuilder();
const tetromino: Tetromino = tetrominoBuilder.createTetrominoFromCompiled(
    tetromios.find(t => t.name === 'S').name, 
    tetromios.find(t => t.name === 'S').preCompiled
);

// state
let paused = false;

// setup level
renderer.render(levelState);

// gravity
tetromino.setVelocityY(GRAVITY);

// controls
const start = document.getElementById('start');
const pause = document.getElementById('pause');

start.addEventListener('click', update);
pause.addEventListener('click', () => paused = !paused);
window.addEventListener('keydown', inputHandler.registerInput.bind(inputHandler));
window.addEventListener('keydown', event => event.code === 'Space' ? update() : true);

let frame = 0;

/*
STATE SANDBOX

const sandbox = new Level(5, 5, [
    { x: 0, y: 0, occupied: false, type: null, set: false },
    { x: 1, y: 0, occupied: false, type: null, set: false },
    { x: 2, y: 0, occupied: false, type: null, set: false },
    { x: 3, y: 0, occupied: false, type: null, set: false },
    { x: 4, y: 0, occupied: false, type: null, set: false },
    { x: 0, y: 1, occupied: false, type: 'S', set: false },
    { x: 1, y: 1, occupied: true, type: 'S', set: false },
    { x: 2, y: 1, occupied: true, type: 'S', set: false },
    { x: 3, y: 1, occupied: true, type: 'S', set: true },
    { x: 4, y: 1, occupied: true, type: 'S', set: true },
    { x: 0, y: 2, occupied: true, type: 'S', set: false },
    { x: 1, y: 2, occupied: true, type: 'S', set: false },
    { x: 2, y: 2, occupied: true, type: 'S', set: true },
    { x: 3, y: 2, occupied: true, type: 'S', set: true },
    { x: 4, y: 2, occupied: false, type: null, set: false },
    { x: 0, y: 3, occupied: false, type: null, set: false },
    { x: 1, y: 3, occupied: true, type: 'S', set: true },
    { x: 2, y: 3, occupied: true, type: 'S', set: true },
    { x: 3, y: 3, occupied: false, type: null, set: false },
    { x: 4, y: 3, occupied: false, type: null, set: false },
    { x: 0, y: 4, occupied: true, type: 'S', set: true },
    { x: 1, y: 4, occupied: true, type: 'S', set: true },
    { x: 2, y: 4, occupied: false, type: null, set: false },
    { x: 3, y: 4, occupied: false, type: null, set: false },
    { x: 4, y: 4, occupied: false, type: null, set: false }
]);

renderer.render(sandbox.getState())
*/

function update (): void {
    frame++;
    
    if (frame % 4 === 0) {
        // @todo - re-think this state order

        const input = inputHandler.getCommand();
        
        tetromino.update(input);
        updateLevelState(level, tetromino);
        
        const collision = checkCollision(level, tetromino);
        
        if (collision) {
            level.setPlaced(tetromino);
            tetromino.reset();
            tetromino.setVelocityY(GRAVITY);
        }

        renderer.render(level.getState());
    }
    
    if (!paused) {
        requestAnimationFrame(update);
    }
}



/*
TETROMINO GALLERY
const rotateCW = document.getElementById('rotate-cw');
const rotateACW = document.getElementById('rotate-acw');

tetromios.forEach((blueprint: TetrominoBlueprint) => {
    const mino = tetrominoBuilder.createTetrominoFromCompiled(blueprint.name, blueprint.preCompiled);
    const root = document.createElement('div');
    const renderer: HTMLRenderer = new HTMLRenderer(
        root,
        width,
        height
    );        
        
    document.getElementById('tetrominos').appendChild(root);
    root.className = 'tetromino-single';
    renderer.render(mino.getActiveState());

    rotateCW.addEventListener('click', () => {
        mino.rotate(1);
        renderer.render(mino.getActiveState());
    });

    rotateACW.addEventListener('click', () => {
        mino.rotate(-1);
        renderer.render(mino.getActiveState());
    });
});
*/