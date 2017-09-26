export interface InputMap {
    [key: string]: () => any
}

export interface RegisterInputMap {
    [key: number]: {
        processed: boolean,
        name: string
    }
}