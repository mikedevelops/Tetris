import Block from '../Interfaces/Block';

const O: Block = {
    name: 'O',
    map: `
        1 1
        1 1
    `
};

const T: Block = {
    name: 'T',
    map: `
        0 1 0
        1 1 1
    `
}

const I: Block = {
    name: 'I',
    map: `
        0 0 0 0
        1 1 1 1
    `
}

const S: Block = {
    name: 'S',
    map: `
        0 1 1
        1 1 0 
    `
}

const Z: Block = {
    name: 'Z',
    map: `
        1 1 0
        0 1 1 
    `
}

const J: Block = {
    name: 'J',
    map: `
        1 0 0
        1 1 1 
    `
}

const L: Block = {
    name: 'L',
    map: `
        0 0 1
        1 1 1 
    `
}

export default [O, T, I, S, Z, J, L];