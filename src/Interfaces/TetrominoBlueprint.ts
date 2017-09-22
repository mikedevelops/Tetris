import State from './State';

export default interface TetrominoBlueprint {
    name: string,
    map: string[],
    preCompiled: State[]
};
