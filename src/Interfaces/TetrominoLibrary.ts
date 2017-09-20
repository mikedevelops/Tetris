import TetrominoBlueprint from './TetrominoBlueprint';

export default interface TetrominoLibrary extends Array<TetrominoBlueprint> {
    [index: number]: TetrominoBlueprint
}