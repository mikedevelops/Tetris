import State from '../Interfaces/State';

export default class BlockManager {
    private activeBlock: State|null;

    constructor () {
        this.activeBlock = null;
    }

    updateActiveBlock (block: State): void {
        this.activeBlock = block;
    }

    getActiveBlock (): State|null {
        return this.activeBlock;
    }

    archiveBlock (): void {
        this.activeBlock = null;
    }
}