import GameLoop from '../Services/GameLoop';
import State from '../Interfaces/State';

export default class GameManager {
    private startTime: Date;
    private levelState: State;
    private gameLoop: GameLoop;

    constructor (levelState: State, gameLoop: GameLoop) {
        this.levelState = levelState;
        this.gameLoop = gameLoop;
    }

    start (): void {
        console.log('starting...');
        this.startTime = new Date();
        this.gameLoop.setPlay(true);
        this.gameLoop.setLevelState(this.levelState);
        this.gameLoop.update(this.levelState);
    }

    pause (): void {
        console.log('pausing...');
        this.gameLoop.setPlay(false);
    }
}