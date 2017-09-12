import State from './State';

export default interface Tetromino {
    state: State,
    placed: boolean
}