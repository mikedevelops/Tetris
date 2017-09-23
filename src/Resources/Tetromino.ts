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
        // Clockwise works, anti-clockwise still needs figuring out
        // This caters for infinite rotation steps (should never be neeed, but nice to work out)
        // if (rotationUnits > 0) {
        //     this.rotationIndex = Math.abs((rotationUnits + this.rotationIndex) % this.maxRotations);
        // } else {
        //     console.log(
        //         Math.abs((rotationUnits + this.rotationIndex) % this.maxRotations), 
        //         ' -> ', 
        //         (this.rotationIndex + rotationUnits) % this.maxRotations + this.rotationIndex
        //     );
        //     this.rotationIndex = (this.rotationIndex + rotationUnits) % this.maxRotations;
        // }

        // This handles 1 rotation at a time
        if (rotationUnits > 0) {
            if ((this.rotationIndex + rotationUnits) < this.maxRotations) {
                this.rotationIndex = rotationUnits + this.rotationIndex;
            } else {
                this.rotationIndex = 0;
            }
        } else if (rotationUnits < 0) {
            if ((this.rotationIndex - 1) >= 0) {
                this.rotationIndex--;
            } else {
                this.rotationIndex = (this.maxRotations - 1);
            }
        }

        this.activeState = this.state[this.rotationIndex];

        // Handle rotation at runtime without pre-computed state
        // const vector = new Victor(pixel.x, pixel.y);
        // 1. create vector from each coordinate
            // a. create translation matrix from 0,0 to center (width / 2)
            // b. rotation matprix for 90deg
            // c. create trnslation matrix from center to 0, 0 
        // 2. multiply a * b * c (Vector.dot(...)) to get final matrix
        // 3. loop through each vector / cooridinate and multiply by final matrix (Vector.dot(...))
    }
}