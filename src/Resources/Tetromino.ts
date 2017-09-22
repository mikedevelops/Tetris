import State from '../Interfaces/State';
import Pixel from '../Interfaces/Pixel';
import Coordinate from '../Interfaces/Coordinate';

export default class Tetromino {
    private maxRotations: number;
    private placed: boolean;
    private activeState: State;

    /**
     * Tetromino
     * @param state 
     * @param palced 
     */
    constructor (
        private state: State[],
        private rotationIndex: number = 0
    ) {
        this.activeState = this.state[this.rotationIndex];
        this.placed = false;
        this.maxRotations = 4;
    }

    /**
     * Get current rotation index
     */
    public getRotationIndex (): number {
        return this.rotationIndex;
    }

    /**
     * Get active state
     */
    public getActiveState (): State {
        return this.activeState;
    }

    /**
     * Rotate state 
     * @param rotationUnits 
     */
    public rotate (rotationUnits: number): void {
        const steps: number = rotationUnits * rotationUnits;
        for (let i = 0; i < steps; i++) {
            if (rotationUnits > 0 && (this.rotationIndex + steps) === this.maxRotations) {
                this.rotationIndex = 0;
            } else if (rotationUnits < 0 && (this.rotationIndex - steps) === -1) {
                this.rotationIndex = (this.maxRotations - 1);
            } else {
                rotationUnits < 0 ? this.rotationIndex-- : this.rotationIndex++;
            }
        }

        this.activeState = this.state[this.rotationIndex];

        // @todo - Pre-calculate rotation state and import
        // const vector = new Victor(pixel.x, pixel.y);

        // 1. create vector from each coordinate
            // a. create translation matrix from 0,0 to center (width / 2)
            // b. rotation matprix for 90deg
            // c. create trnslation matrix from center to 0, 0 
        // 2. multiply a * b * c (Vector.dot(...)) to get final matrix
        // 3. loop through each vector / cooridinate and multiply by final matrix (Vector.dot(...))
    }
}