// @todo - Create basic HTML renderer using a tablento render the level and a block
import LevelBuilder from './Services/LevelBuilder';
import Spawner from './Services/Spawner';
import BlockBuilder from './Services/BlockBuilder';
import StateTransformer from './Services/StateTransformer';
import HTMLRenderer from './Renderers/HTMLRenderer';
import GameLoop from './Services/GameLoop';
import GameManager from './Managers/GameManager';
import BlockManager from './Managers/BlockManager';

import State from './Interfaces/State';
import Coordinate from './Interfaces/Coordinate';
import Block from './Interfaces/Block';

console.log('Let\'s go!');

const width = Math.floor(window.innerWidth / 20);
const height = Math.floor(window.innerHeight / 20);

console.log(width, height)

const level: LevelBuilder = new LevelBuilder(width, height);
const renderer: HTMLRenderer = new HTMLRenderer(
    document.getElementById('root'),
    width,
    height
);

const levelState: State = level.createLevelState();

// Render level
renderer.render(levelState);

const gameManager: GameManager = new GameManager(
    levelState,
    new GameLoop(
        new StateTransformer(width, height),
        renderer,
        new Spawner(new BlockBuilder(), width, height),
        new BlockManager()
    )
);

// Interactions
const start = document.getElementById('start');
const pause = document.getElementById('pause');

gameManager.start();

start.addEventListener('click', () => {
    gameManager.start();
});

pause.addEventListener('click', () => {
    gameManager.pause();
});