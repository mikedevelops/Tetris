// import StateTransformer from '../Services/StateTransformer';
// import HTMLRenderer from '../Renderers/HTMLRenderer';
// import State from '../Interfaces/State';
// import Command from '../Interfaces/Command';
// import Spawner from './Spawner';
// import TetrominoManager from '../Managers/TetrominoManager';
// import InputHandler from '../Services/InputHandler';

// export default class GameLoop {
//     private stateTransformer: StateTransformer;
//     private play: boolean;
//     private levelState: State;

//     constructor (
//         private StateTransformer: StateTransformer, 
//         private renderer: HTMLRenderer,
//         private spawner: Spawner,
//         private TetrominoManager: TetrominoManager,
//         private inputHandler: InputHandler
//     ) {
//         this.stateTransformer = StateTransformer;
//         this.renderer = renderer;
//         this.play = false;
//         this.spawner = spawner;
//         this.TetrominoManager = TetrominoManager;
//     }

//     // @todo - Update should just call services, a big ol' update function is going to be a nightmare
//     update (state: State): void {
//         const activeBlock = this.TetrominoManager.getActiveBlock();
//         let blockState: State;
//         this.renderer.render(state);

//         if (this.play) {
//             // 1. Manage active block


//             // block management
//             if (!activeBlock) {
//                 blockState = this.spawner.spawnBlock();
//                 this.TetrominoManager.updateActiveBlock(blockState);
//             } else {
//                 const gravityState: State|false = this.stateTransformer.addGravity(activeBlock, this.levelState,  1);

//                 if (gravityState) {
//                     this.TetrominoManager.updateActiveBlock(gravityState);
//                 } else {
//                     // @todo
//                     // need a programtic approach to update level state when block hits floor
//                     this.levelState = this.stateTransformer.mergeState(
//                         this.levelState,
//                         this.TetrominoManager.getActiveBlock()
//                     );
//                     this.TetrominoManager.archiveBlock();
//                 }

//                 const command: Command|null = this.inputHandler.getNextCommand();
    
//                 if (command) {
//                     this.TetrominoManager.updateActiveBlock(
//                         this.stateTransformer.moveBlock(activeBlock, command)
//                     );
//                 }
//             }
            
//             const nextState = this.stateTransformer.mergeState(
//                 this.levelState,
//                 this.TetrominoManager.getActiveBlock() || this.levelState
//             );

//             setTimeout(this.update.bind(this, nextState), 500);
//         }
//     }

//     setLevelState (levelState: State): void {
//         this.levelState = levelState;
//     }

//     setPlay (play: boolean): void {
//         this.play = play;
//     }
// }