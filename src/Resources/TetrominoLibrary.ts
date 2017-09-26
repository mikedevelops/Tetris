import TetrominoBlueprint from '../Interfaces/TetrominoBlueprint';
import TetrominoLibrary from '../Interfaces/TetrominoLibrary';

const library: TetrominoLibrary = [
    {
        name: 'O',
        map: [
            `
            1 1
            1 1
        `,
        `
            1 1
            1 1
        `,
        `
            1 1
            1 1
        `,
        `
            1 1
            1 1
        `
        ],
        preCompiled: [
            [{"x":0,"y":0,"occupied":true,"type":"O","set":false},{"x":1,"y":0,"occupied":true,"type":"O","set":false},{"x":0,"y":1,"occupied":true,"type":"O","set":false},{"x":1,"y":1,"occupied":true,"type":"O","set":false}],
            [{"x":0,"y":0,"occupied":true,"type":"O","set":false},{"x":1,"y":0,"occupied":true,"type":"O","set":false},{"x":0,"y":1,"occupied":true,"type":"O","set":false},{"x":1,"y":1,"occupied":true,"type":"O","set":false}],
            [{"x":0,"y":0,"occupied":true,"type":"O","set":false},{"x":1,"y":0,"occupied":true,"type":"O","set":false},{"x":0,"y":1,"occupied":true,"type":"O","set":false},{"x":1,"y":1,"occupied":true,"type":"O","set":false}],
            [{"x":0,"y":0,"occupied":true,"type":"O","set":false},{"x":1,"y":0,"occupied":true,"type":"O","set":false},{"x":0,"y":1,"occupied":true,"type":"O","set":false},{"x":1,"y":1,"occupied":true,"type":"O","set":false}]
        ]
    },
    {
        name: 'T',
        map: [
        `
            0 0 0
            0 1 0
            1 1 1
        `,
        `
            1 0 0
            1 1 0
            1 0 0
        `,
        `
            1 1 1
            0 1 0
            0 0 0
        `,
        `
            0 0 1
            0 1 1
            0 0 1
        `,
        ],
        preCompiled: [
            [{"x":0,"y":0,"occupied":false,"type":null,"set":false},{"x":1,"y":0,"occupied":false,"type":null,"set":false},{"x":2,"y":0,"occupied":false,"type":null,"set":false},{"x":0,"y":1,"occupied":false,"type":null,"set":false},{"x":1,"y":1,"occupied":true,"type":"T","set":false},{"x":2,"y":1,"occupied":false,"type":null,"set":false},{"x":0,"y":2,"occupied":true,"type":"T","set":false},{"x":1,"y":2,"occupied":true,"type":"T","set":false},{"x":2,"y":2,"occupied":true,"type":"T","set":false}],
            [{"x":0,"y":0,"occupied":true,"type":"T","set":false},{"x":1,"y":0,"occupied":false,"type":null,"set":false},{"x":2,"y":0,"occupied":false,"type":null,"set":false},{"x":0,"y":1,"occupied":true,"type":"T","set":false},{"x":1,"y":1,"occupied":true,"type":"T","set":false},{"x":2,"y":1,"occupied":false,"type":null,"set":false},{"x":0,"y":2,"occupied":true,"type":"T","set":false},{"x":1,"y":2,"occupied":false,"type":null,"set":false},{"x":2,"y":2,"occupied":false,"type":null,"set":false}],
            [{"x":0,"y":0,"occupied":true,"type":"T","set":false},{"x":1,"y":0,"occupied":true,"type":"T","set":false},{"x":2,"y":0,"occupied":true,"type":"T","set":false},{"x":0,"y":1,"occupied":false,"type":null,"set":false},{"x":1,"y":1,"occupied":true,"type":"T","set":false},{"x":2,"y":1,"occupied":false,"type":null,"set":false},{"x":0,"y":2,"occupied":false,"type":null,"set":false},{"x":1,"y":2,"occupied":false,"type":null,"set":false},{"x":2,"y":2,"occupied":false,"type":null,"set":false}],
            [{"x":0,"y":0,"occupied":false,"type":null,"set":false},{"x":1,"y":0,"occupied":false,"type":null,"set":false},{"x":2,"y":0,"occupied":true,"type":"T","set":false},{"x":0,"y":1,"occupied":false,"type":null,"set":false},{"x":1,"y":1,"occupied":true,"type":"T","set":false},{"x":2,"y":1,"occupied":true,"type":"T","set":false},{"x":0,"y":2,"occupied":false,"type":null,"set":false},{"x":1,"y":2,"occupied":false,"type":null,"set":false},{"x":2,"y":2,"occupied":true,"type":"T","set":false}]            
        ]
    },
    {
        name: 'I',
        map: [
        `
            0 0 0 0
            0 0 0 0
            0 0 0 0
            1 1 1 1
        `,
        `
            1 0 0 0
            1 0 0 0
            1 0 0 0
            1 0 0 0
        `,
        `
            1 1 1 1
            0 0 0 0
            0 0 0 0
            0 0 0 0
        `,
        `
            0 0 0 1
            0 0 0 1
            0 0 0 1
            0 0 0 1
        `,
        ],
        preCompiled: [
            [{"x":0,"y":0,"occupied":false,"type":null,"set":false},{"x":1,"y":0,"occupied":false,"type":null,"set":false},{"x":2,"y":0,"occupied":false,"type":null,"set":false},{"x":3,"y":0,"occupied":false,"type":null,"set":false},{"x":0,"y":1,"occupied":false,"type":null,"set":false},{"x":1,"y":1,"occupied":false,"type":null,"set":false},{"x":2,"y":1,"occupied":false,"type":null,"set":false},{"x":3,"y":1,"occupied":false,"type":null,"set":false},{"x":0,"y":2,"occupied":false,"type":null,"set":false},{"x":1,"y":2,"occupied":false,"type":null,"set":false},{"x":2,"y":2,"occupied":false,"type":null,"set":false},{"x":3,"y":2,"occupied":false,"type":null,"set":false},{"x":0,"y":3,"occupied":true,"type":"I","set":false},{"x":1,"y":3,"occupied":true,"type":"I","set":false},{"x":2,"y":3,"occupied":true,"type":"I","set":false},{"x":3,"y":3,"occupied":true,"type":"I","set":false}],
            [{"x":0,"y":0,"occupied":true,"type":"I","set":false},{"x":1,"y":0,"occupied":false,"type":null,"set":false},{"x":2,"y":0,"occupied":false,"type":null,"set":false},{"x":3,"y":0,"occupied":false,"type":null,"set":false},{"x":0,"y":1,"occupied":true,"type":"I","set":false},{"x":1,"y":1,"occupied":false,"type":null,"set":false},{"x":2,"y":1,"occupied":false,"type":null,"set":false},{"x":3,"y":1,"occupied":false,"type":null,"set":false},{"x":0,"y":2,"occupied":true,"type":"I","set":false},{"x":1,"y":2,"occupied":false,"type":null,"set":false},{"x":2,"y":2,"occupied":false,"type":null,"set":false},{"x":3,"y":2,"occupied":false,"type":null,"set":false},{"x":0,"y":3,"occupied":true,"type":"I","set":false},{"x":1,"y":3,"occupied":false,"type":null,"set":false},{"x":2,"y":3,"occupied":false,"type":null,"set":false},{"x":3,"y":3,"occupied":false,"type":null,"set":false}],
            [{"x":0,"y":0,"occupied":true,"type":"I","set":false},{"x":1,"y":0,"occupied":true,"type":"I","set":false},{"x":2,"y":0,"occupied":true,"type":"I","set":false},{"x":3,"y":0,"occupied":true,"type":"I","set":false},{"x":0,"y":1,"occupied":false,"type":null,"set":false},{"x":1,"y":1,"occupied":false,"type":null,"set":false},{"x":2,"y":1,"occupied":false,"type":null,"set":false},{"x":3,"y":1,"occupied":false,"type":null,"set":false},{"x":0,"y":2,"occupied":false,"type":null,"set":false},{"x":1,"y":2,"occupied":false,"type":null,"set":false},{"x":2,"y":2,"occupied":false,"type":null,"set":false},{"x":3,"y":2,"occupied":false,"type":null,"set":false},{"x":0,"y":3,"occupied":false,"type":null,"set":false},{"x":1,"y":3,"occupied":false,"type":null,"set":false},{"x":2,"y":3,"occupied":false,"type":null,"set":false},{"x":3,"y":3,"occupied":false,"type":null,"set":false}],
            [{"x":0,"y":0,"occupied":false,"type":null,"set":false},{"x":1,"y":0,"occupied":false,"type":null,"set":false},{"x":2,"y":0,"occupied":false,"type":null,"set":false},{"x":3,"y":0,"occupied":true,"type":"I","set":false},{"x":0,"y":1,"occupied":false,"type":null,"set":false},{"x":1,"y":1,"occupied":false,"type":null,"set":false},{"x":2,"y":1,"occupied":false,"type":null,"set":false},{"x":3,"y":1,"occupied":true,"type":"I","set":false},{"x":0,"y":2,"occupied":false,"type":null,"set":false},{"x":1,"y":2,"occupied":false,"type":null,"set":false},{"x":2,"y":2,"occupied":false,"type":null,"set":false},{"x":3,"y":2,"occupied":true,"type":"I","set":false},{"x":0,"y":3,"occupied":false,"type":null,"set":false},{"x":1,"y":3,"occupied":false,"type":null,"set":false},{"x":2,"y":3,"occupied":false,"type":null,"set":false},{"x":3,"y":3,"occupied":true,"type":"I","set":false}]            
        ]
    },
    {
        name: 'S',
        map: [
        `
            0 0 0
            0 1 1
            1 1 0 
        `,
        `
            1 0 0
            1 1 0
            0 1 0 
        `,
        `
            0 1 1
            1 1 0
            0 0 0 
        `,
        `
            0 1 0
            0 1 1
            0 0 1 
        `,
        ],
        preCompiled: [
            [{"x":0,"y":0,"occupied":false,"type":null,"set":false},{"x":1,"y":0,"occupied":false,"type":null,"set":false},{"x":2,"y":0,"occupied":false,"type":null,"set":false},{"x":0,"y":1,"occupied":false,"type":null,"set":false},{"x":1,"y":1,"occupied":true,"type":"S","set":false},{"x":2,"y":1,"occupied":true,"type":"S","set":false},{"x":0,"y":2,"occupied":true,"type":"S","set":false},{"x":1,"y":2,"occupied":true,"type":"S","set":false},{"x":2,"y":2,"occupied":false,"type":null,"set":false}],
            [{"x":0,"y":0,"occupied":true,"type":"S","set":false},{"x":1,"y":0,"occupied":false,"type":null,"set":false},{"x":2,"y":0,"occupied":false,"type":null,"set":false},{"x":0,"y":1,"occupied":true,"type":"S","set":false},{"x":1,"y":1,"occupied":true,"type":"S","set":false},{"x":2,"y":1,"occupied":false,"type":null,"set":false},{"x":0,"y":2,"occupied":false,"type":null,"set":false},{"x":1,"y":2,"occupied":true,"type":"S","set":false},{"x":2,"y":2,"occupied":false,"type":null,"set":false}],
            [{"x":0,"y":0,"occupied":false,"type":null,"set":false},{"x":1,"y":0,"occupied":true,"type":"S","set":false},{"x":2,"y":0,"occupied":true,"type":"S","set":false},{"x":0,"y":1,"occupied":true,"type":"S","set":false},{"x":1,"y":1,"occupied":true,"type":"S","set":false},{"x":2,"y":1,"occupied":false,"type":null,"set":false},{"x":0,"y":2,"occupied":false,"type":null,"set":false},{"x":1,"y":2,"occupied":false,"type":null,"set":false},{"x":2,"y":2,"occupied":false,"type":null,"set":false}],
            [{"x":0,"y":0,"occupied":false,"type":null,"set":false},{"x":1,"y":0,"occupied":true,"type":"S","set":false},{"x":2,"y":0,"occupied":false,"type":null,"set":false},{"x":0,"y":1,"occupied":false,"type":null,"set":false},{"x":1,"y":1,"occupied":true,"type":"S","set":false},{"x":2,"y":1,"occupied":true,"type":"S","set":false},{"x":0,"y":2,"occupied":false,"type":null,"set":false},{"x":1,"y":2,"occupied":false,"type":null,"set":false},{"x":2,"y":2,"occupied":true,"type":"S","set":false}]
        ]
    },
    {
        name: 'Z',
        map: [
        `
            0 0 0
            1 1 0
            0 1 1 
        `,
        `
            0 1 0
            1 1 0
            1 0 0 
        `,
        `
            1 1 0
            0 1 1
            0 0 0 
        `,
        `
            0 0 1
            0 1 1
            0 1 0 
        `,
        ],
        preCompiled: [
            [{"x":0,"y":0,"occupied":false,"type":null,"set":false},{"x":1,"y":0,"occupied":false,"type":null,"set":false},{"x":2,"y":0,"occupied":false,"type":null,"set":false},{"x":0,"y":1,"occupied":true,"type":"Z","set":false},{"x":1,"y":1,"occupied":true,"type":"Z","set":false},{"x":2,"y":1,"occupied":false,"type":null,"set":false},{"x":0,"y":2,"occupied":false,"type":null,"set":false},{"x":1,"y":2,"occupied":true,"type":"Z","set":false},{"x":2,"y":2,"occupied":true,"type":"Z","set":false}],
            [{"x":0,"y":0,"occupied":false,"type":null,"set":false},{"x":1,"y":0,"occupied":true,"type":"Z","set":false},{"x":2,"y":0,"occupied":false,"type":null,"set":false},{"x":0,"y":1,"occupied":true,"type":"Z","set":false},{"x":1,"y":1,"occupied":true,"type":"Z","set":false},{"x":2,"y":1,"occupied":false,"type":null,"set":false},{"x":0,"y":2,"occupied":true,"type":"Z","set":false},{"x":1,"y":2,"occupied":false,"type":null,"set":false},{"x":2,"y":2,"occupied":false,"type":null,"set":false}],
            [{"x":0,"y":0,"occupied":true,"type":"Z","set":false},{"x":1,"y":0,"occupied":true,"type":"Z","set":false},{"x":2,"y":0,"occupied":false,"type":null,"set":false},{"x":0,"y":1,"occupied":false,"type":null,"set":false},{"x":1,"y":1,"occupied":true,"type":"Z","set":false},{"x":2,"y":1,"occupied":true,"type":"Z","set":false},{"x":0,"y":2,"occupied":false,"type":null,"set":false},{"x":1,"y":2,"occupied":false,"type":null,"set":false},{"x":2,"y":2,"occupied":false,"type":null,"set":false}],
            [{"x":0,"y":0,"occupied":false,"type":null,"set":false},{"x":1,"y":0,"occupied":false,"type":null,"set":false},{"x":2,"y":0,"occupied":true,"type":"Z","set":false},{"x":0,"y":1,"occupied":false,"type":null,"set":false},{"x":1,"y":1,"occupied":true,"type":"Z","set":false},{"x":2,"y":1,"occupied":true,"type":"Z","set":false},{"x":0,"y":2,"occupied":false,"type":null,"set":false},{"x":1,"y":2,"occupied":true,"type":"Z","set":false},{"x":2,"y":2,"occupied":false,"type":null,"set":false}]            
        ]
    },
    {
        name: 'J',
        map: [
        `
            0 0 0
            1 0 0
            1 1 1 
        `,
        `
            1 1 0
            1 0 0
            1 0 0 
        `,
        `
            1 1 1
            0 0 1
            0 0 0 
        `,
        `
            0 0 1
            0 0 1
            0 1 1 
        `,
        ],
        preCompiled: [
            [{"x":0,"y":0,"occupied":false,"type":null,"set":false},{"x":1,"y":0,"occupied":false,"type":null,"set":false},{"x":2,"y":0,"occupied":false,"type":null,"set":false},{"x":0,"y":1,"occupied":true,"type":"J","set":false},{"x":1,"y":1,"occupied":false,"type":null,"set":false},{"x":2,"y":1,"occupied":false,"type":null,"set":false},{"x":0,"y":2,"occupied":true,"type":"J","set":false},{"x":1,"y":2,"occupied":true,"type":"J","set":false},{"x":2,"y":2,"occupied":true,"type":"J","set":false}],
            [{"x":0,"y":0,"occupied":true,"type":"J","set":false},{"x":1,"y":0,"occupied":true,"type":"J","set":false},{"x":2,"y":0,"occupied":false,"type":null,"set":false},{"x":0,"y":1,"occupied":true,"type":"J","set":false},{"x":1,"y":1,"occupied":false,"type":null,"set":false},{"x":2,"y":1,"occupied":false,"type":null,"set":false},{"x":0,"y":2,"occupied":true,"type":"J","set":false},{"x":1,"y":2,"occupied":false,"type":null,"set":false},{"x":2,"y":2,"occupied":false,"type":null,"set":false}],
            [{"x":0,"y":0,"occupied":true,"type":"J","set":false},{"x":1,"y":0,"occupied":true,"type":"J","set":false},{"x":2,"y":0,"occupied":true,"type":"J","set":false},{"x":0,"y":1,"occupied":false,"type":null,"set":false},{"x":1,"y":1,"occupied":false,"type":null,"set":false},{"x":2,"y":1,"occupied":true,"type":"J","set":false},{"x":0,"y":2,"occupied":false,"type":null,"set":false},{"x":1,"y":2,"occupied":false,"type":null,"set":false},{"x":2,"y":2,"occupied":false,"type":null,"set":false}],
            [{"x":0,"y":0,"occupied":false,"type":null,"set":false},{"x":1,"y":0,"occupied":false,"type":null,"set":false},{"x":2,"y":0,"occupied":true,"type":"J","set":false},{"x":0,"y":1,"occupied":false,"type":null,"set":false},{"x":1,"y":1,"occupied":false,"type":null,"set":false},{"x":2,"y":1,"occupied":true,"type":"J","set":false},{"x":0,"y":2,"occupied":false,"type":null,"set":false},{"x":1,"y":2,"occupied":true,"type":"J","set":false},{"x":2,"y":2,"occupied":true,"type":"J","set":false}]            
        ]
    },
    {
        name: 'L',
        map: [
        `
            0 0 0
            0 0 1
            1 1 1 
        `,
        `
            1 0 0
            1 0 0
            1 1 0 
        `,
        `
            1 1 1
            1 0 0
            0 0 0 
        `,
        `
            0 1 1
            0 0 1
            0 0 1 
        `,
        ],
        preCompiled: [
            [{"x":0,"y":0,"occupied":false,"type":null,"set":false},{"x":1,"y":0,"occupied":false,"type":null,"set":false},{"x":2,"y":0,"occupied":false,"type":null,"set":false},{"x":0,"y":1,"occupied":false,"type":null,"set":false},{"x":1,"y":1,"occupied":false,"type":null,"set":false},{"x":2,"y":1,"occupied":true,"type":"L","set":false},{"x":0,"y":2,"occupied":true,"type":"L","set":false},{"x":1,"y":2,"occupied":true,"type":"L","set":false},{"x":2,"y":2,"occupied":true,"type":"L","set":false}],
            [{"x":0,"y":0,"occupied":true,"type":"L","set":false},{"x":1,"y":0,"occupied":false,"type":null,"set":false},{"x":2,"y":0,"occupied":false,"type":null,"set":false},{"x":0,"y":1,"occupied":true,"type":"L","set":false},{"x":1,"y":1,"occupied":false,"type":null,"set":false},{"x":2,"y":1,"occupied":false,"type":null,"set":false},{"x":0,"y":2,"occupied":true,"type":"L","set":false},{"x":1,"y":2,"occupied":true,"type":"L","set":false},{"x":2,"y":2,"occupied":false,"type":null,"set":false}],
            [{"x":0,"y":0,"occupied":true,"type":"L","set":false},{"x":1,"y":0,"occupied":true,"type":"L","set":false},{"x":2,"y":0,"occupied":true,"type":"L","set":false},{"x":0,"y":1,"occupied":true,"type":"L","set":false},{"x":1,"y":1,"occupied":false,"type":null,"set":false},{"x":2,"y":1,"occupied":false,"type":null,"set":false},{"x":0,"y":2,"occupied":false,"type":null,"set":false},{"x":1,"y":2,"occupied":false,"type":null,"set":false},{"x":2,"y":2,"occupied":false,"type":null,"set":false}],
            [{"x":0,"y":0,"occupied":false,"type":null,"set":false},{"x":1,"y":0,"occupied":true,"type":"L","set":false},{"x":2,"y":0,"occupied":true,"type":"L","set":false},{"x":0,"y":1,"occupied":false,"type":null,"set":false},{"x":1,"y":1,"occupied":false,"type":null,"set":false},{"x":2,"y":1,"occupied":true,"type":"L","set":false},{"x":0,"y":2,"occupied":false,"type":null,"set":false},{"x":1,"y":2,"occupied":false,"type":null,"set":false},{"x":2,"y":2,"occupied":true,"type":"L","set":false}]            
        ]
    }
];

export default library;

