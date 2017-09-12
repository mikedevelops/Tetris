// @todo - Create basic HTML renderer using a tablento render the level and a block
import LevelBuilder from './Services/LevelBuilder';
import Spawner from './Services/Spawner';
import TetrominoBuilder from './Services/TetrominoBuilder';
import StateTransformer from './Services/StateTransformer';
import HTMLRenderer from './Renderers/HTMLRenderer';
import GameLoop from './Services/GameLoop';
import GameManager from './Managers/GameManager';
import TetrominoManager from './Managers/TetrominoManager';
import InputHandler from './Services/InputHandler';

import State from './Interfaces/State';
import TetrominoBlueprint from './Interfaces/TetrominoBlueprint';
import Tetromino from './Interfaces/Tetromino';
import Coordinate from './Interfaces/Coordinate';
import tetromios from './Resources/TetrominoLibrary';

// const width = Math.floor(window.innerWidth / 20);
// const height = Math.floor(window.innerHeight / 20);
const width = 10;
const height = 22;

const level: LevelBuilder = new LevelBuilder(width, height);
const renderer: HTMLRenderer = new HTMLRenderer(
    document.getElementById('root'),
    width,
    height
);

const levelState: State = level.createLevelState();
const tetrominoBuilder: TetrominoBuilder = new TetrominoBuilder();

// Render level
// renderer.render(levelState);
// const inputHandler = new InputHandler();
// const gameManager: GameManager = new GameManager(
//     levelState,
//     new GameLoop(
//         new StateTransformer(width, height),
//         renderer,
//         new Spawner(new TetrominoBuilder(), width, height),
//         new TetrominoManager(),
//         inputHandler
//     )
// );

tetromios.forEach((blueprint: TetrominoBlueprint) => {
    const tetromino: Tetromino = tetrominoBuilder.createTetromino(blueprint);
    const root = document.createElement('div');
    const renderer: HTMLRenderer = new HTMLRenderer(
        root,
        width,
        height
    );

    root.className = 'tetromino-single';
    document.getElementById('tetrominos').appendChild(root);
    renderer.render(tetromino.state);
});

// Interactions
// const start = document.getElementById('start');
// const pause = document.getElementById('pause');

// gameManager.start();

// start.addEventListener('click', () => {
//     gameManager.start();
// });

// pause.addEventListener('click', () => {
//     gameManager.pause();
// });

// document.addEventListener('keydown', inputHandler.registerInput.bind(inputHandler));