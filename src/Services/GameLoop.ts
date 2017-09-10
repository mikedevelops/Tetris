import StateTransformer from '../Services/StateTransformer';
import HTMLRenderer from '../Renderers/HTMLRenderer';
import State from '../Interfaces/State';
import Spawner from './Spawner';
import BlockManager from '../Managers/BlockManager';
import BlockBuilder from './BlockBuilder';

export default class GameLoop {
    private stateTransformer: StateTransformer;
    private renderer: HTMLRenderer;
    private play: boolean;
    private spawner: Spawner;
    private blockManager: BlockManager;
    private levelState: State;

    constructor (
        StateTransformer: StateTransformer, 
        renderer: HTMLRenderer,
        spawner: Spawner,
        blockManager: BlockManager,
    ) {
        this.stateTransformer = StateTransformer;
        this.renderer = renderer;
        this.play = false;
        this.spawner = spawner;
        this.blockManager = blockManager;
    }

    update (state: State): void {
        const activeBlock = this.blockManager.getActiveBlock();
        let blockState: State;
        this.renderer.render(state);

        if (this.play) {
            // block management
            if (!activeBlock) {
                blockState = this.spawner.spawnBlock();
                this.blockManager.updateActiveBlock(blockState);
            } else {
                const gravityState: State|false = this.stateTransformer.addGravity(activeBlock, this.levelState,  1);

                if (gravityState) {
                    this.blockManager.updateActiveBlock(gravityState);
                } else {
                    // @todo
                    // need a programtic approach to update level state when block hits floor
                    this.levelState = this.stateTransformer.mergeState(
                        this.levelState,
                        this.blockManager.getActiveBlock()
                    );
                    this.blockManager.archiveBlock();
                }
            }
            
            const nextState = this.stateTransformer.mergeState(
                this.levelState,
                this.blockManager.getActiveBlock() || this.levelState
            );

            requestAnimationFrame(this.update.bind(this, nextState));
        }
    }

    setLevelState (levelState: State): void {
        this.levelState = levelState;
    }

    setPlay (play: boolean): void {
        this.play = play;
    }
}