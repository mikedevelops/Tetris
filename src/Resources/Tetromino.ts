import { InputMap } from './../Interfaces/InputMap';
import State from '../Interfaces/State';
import Pixel from '../Interfaces/Pixel';
import Velocity from '../Interfaces/Velocity';
import Command from '../Interfaces/Command';

export default class Tetromino {
    private maxRotations: number;
    private placed: boolean;
    private activeState: State;
    private cache: State[];
    private velocity: Velocity;

    /**
     * Tetromino
     * @param state 
     * @param palced 
     */
    constructor (
        private state: State[],
        private rotationIndex: number = 0
    ) {
        this.cache = this.getFreshState(state);
        this.activeState = this.state[this.rotationIndex];
        this.placed = false;
        this.maxRotations = 4;
        this.velocity = { x: 0, y: 0 };
    }

    /**
     * Create copy of state
     * @param state 
     */
    private getFreshState (state: State[]): State[] {
        return state.map((s: State) => s.map((p: Pixel) => Object.assign({}, p)));
    }

    /**
     * Reset instance 
     */
    public reset (): void {
        this.state = this.getFreshState(this.cache);
        this.activeState = this.state[0];
        this.placed = false;
        this.velocity = { x: 0, y: 0 };
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
     * Set placed
     * @param placed 
     */
    public setPlaced (placed: boolean): void {
        this.placed = placed;
    }
    /**
     * Get placed
     */
    public getPlaced (): boolean {
        return this.placed;
    }

    /**
     * Set X velocity
     * @param x 
     */
    public setVelocityX (x: number): void {
        this.velocity.x = x;
    }

    /**
     * Set Y velocity
     * @param y 
     */
    public setVelocityY (y: number): void {
        this.velocity.y = y;
    }

    /**
     * Get velocity
     */
    public getVelocity (): Velocity {
        return this.velocity;
    }

    /**
     * Translate on X axis
     * @param unit 
     */
    public translateX (unit: number): void {
        this.state.map((state: State) => {
            return state.map((pixel: Pixel) => {
                pixel.x += unit;
                return pixel;
            });
        });
    }

    /**
     * Translate on Y axis
     * @param unit 
     */
    public translateY (unit: number): void {
        this.state.map((state: State) => {
            return state.map((pixel: Pixel) => {
                pixel.y += unit;
                return pixel;
            });
        });
    }

    /**
     * Update tetromino state
     */
    public update (input: Command|null = null): void {
        const inputMap: InputMap = {
            'left': () => this.velocity.x = -1,
            'right': () => this.velocity.x = 1
        }
        
        if (input !== null) {
            inputMap[input.name]();
        }

        this.state.map((state: State) => {
            return state.map((pixel: Pixel) => {
                pixel.x += this.velocity.x;
                pixel.y += this.velocity.y;
                return pixel;
            });

        });
        
        // reset X velocity after input
        this.velocity.x = 0;
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