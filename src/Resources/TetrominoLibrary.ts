import TetrominoBlueprint from '../Interfaces/TetrominoBlueprint';
import TetrominoLibrary from '../Interfaces/TetrominoLibrary';

const library: TetrominoBlueprint[] = [
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
            [{"x":0,"y":0,"occupied":true,"type":"O"},{"x":1,"y":0,"occupied":true,"type":"O"},{"x":0,"y":1,"occupied":true,"type":"O"},{"x":1,"y":1,"occupied":true,"type":"O"}],
            [{"x":0,"y":0,"occupied":true,"type":"O"},{"x":1,"y":0,"occupied":true,"type":"O"},{"x":0,"y":1,"occupied":true,"type":"O"},{"x":1,"y":1,"occupied":true,"type":"O"}],
            [{"x":0,"y":0,"occupied":true,"type":"O"},{"x":1,"y":0,"occupied":true,"type":"O"},{"x":0,"y":1,"occupied":true,"type":"O"},{"x":1,"y":1,"occupied":true,"type":"O"}],
            [{"x":0,"y":0,"occupied":true,"type":"O"},{"x":1,"y":0,"occupied":true,"type":"O"},{"x":0,"y":1,"occupied":true,"type":"O"},{"x":1,"y":1,"occupied":true,"type":"O"}]
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
            [{"x":0,"y":0,"occupied":false,"type":"T"},{"x":1,"y":0,"occupied":false,"type":"T"},{"x":2,"y":0,"occupied":false,"type":"T"},{"x":0,"y":1,"occupied":false,"type":"T"},{"x":1,"y":1,"occupied":true,"type":"T"},{"x":2,"y":1,"occupied":false,"type":"T"},{"x":0,"y":2,"occupied":true,"type":"T"},{"x":1,"y":2,"occupied":true,"type":"T"},{"x":2,"y":2,"occupied":true,"type":"T"}],
            [{"x":0,"y":0,"occupied":true,"type":"T"},{"x":1,"y":0,"occupied":false,"type":"T"},{"x":2,"y":0,"occupied":false,"type":"T"},{"x":0,"y":1,"occupied":true,"type":"T"},{"x":1,"y":1,"occupied":true,"type":"T"},{"x":2,"y":1,"occupied":false,"type":"T"},{"x":0,"y":2,"occupied":true,"type":"T"},{"x":1,"y":2,"occupied":false,"type":"T"},{"x":2,"y":2,"occupied":false,"type":"T"}],
            [{"x":0,"y":0,"occupied":true,"type":"T"},{"x":1,"y":0,"occupied":true,"type":"T"},{"x":2,"y":0,"occupied":true,"type":"T"},{"x":0,"y":1,"occupied":false,"type":"T"},{"x":1,"y":1,"occupied":true,"type":"T"},{"x":2,"y":1,"occupied":false,"type":"T"},{"x":0,"y":2,"occupied":false,"type":"T"},{"x":1,"y":2,"occupied":false,"type":"T"},{"x":2,"y":2,"occupied":false,"type":"T"}],
            [{"x":0,"y":0,"occupied":false,"type":"T"},{"x":1,"y":0,"occupied":false,"type":"T"},{"x":2,"y":0,"occupied":true,"type":"T"},{"x":0,"y":1,"occupied":false,"type":"T"},{"x":1,"y":1,"occupied":true,"type":"T"},{"x":2,"y":1,"occupied":true,"type":"T"},{"x":0,"y":2,"occupied":false,"type":"T"},{"x":1,"y":2,"occupied":false,"type":"T"},{"x":2,"y":2,"occupied":true,"type":"T"}]            
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
            [{"x":0,"y":0,"occupied":false,"type":"I"},{"x":1,"y":0,"occupied":false,"type":"I"},{"x":2,"y":0,"occupied":false,"type":"I"},{"x":3,"y":0,"occupied":false,"type":"I"},{"x":0,"y":1,"occupied":false,"type":"I"},{"x":1,"y":1,"occupied":false,"type":"I"},{"x":2,"y":1,"occupied":false,"type":"I"},{"x":3,"y":1,"occupied":false,"type":"I"},{"x":0,"y":2,"occupied":false,"type":"I"},{"x":1,"y":2,"occupied":false,"type":"I"},{"x":2,"y":2,"occupied":false,"type":"I"},{"x":3,"y":2,"occupied":false,"type":"I"},{"x":0,"y":3,"occupied":true,"type":"I"},{"x":1,"y":3,"occupied":true,"type":"I"},{"x":2,"y":3,"occupied":true,"type":"I"},{"x":3,"y":3,"occupied":true,"type":"I"}],
            [{"x":0,"y":0,"occupied":true,"type":"I"},{"x":1,"y":0,"occupied":false,"type":"I"},{"x":2,"y":0,"occupied":false,"type":"I"},{"x":3,"y":0,"occupied":false,"type":"I"},{"x":0,"y":1,"occupied":true,"type":"I"},{"x":1,"y":1,"occupied":false,"type":"I"},{"x":2,"y":1,"occupied":false,"type":"I"},{"x":3,"y":1,"occupied":false,"type":"I"},{"x":0,"y":2,"occupied":true,"type":"I"},{"x":1,"y":2,"occupied":false,"type":"I"},{"x":2,"y":2,"occupied":false,"type":"I"},{"x":3,"y":2,"occupied":false,"type":"I"},{"x":0,"y":3,"occupied":true,"type":"I"},{"x":1,"y":3,"occupied":false,"type":"I"},{"x":2,"y":3,"occupied":false,"type":"I"},{"x":3,"y":3,"occupied":false,"type":"I"}],
            [{"x":0,"y":0,"occupied":true,"type":"I"},{"x":1,"y":0,"occupied":true,"type":"I"},{"x":2,"y":0,"occupied":true,"type":"I"},{"x":3,"y":0,"occupied":true,"type":"I"},{"x":0,"y":1,"occupied":false,"type":"I"},{"x":1,"y":1,"occupied":false,"type":"I"},{"x":2,"y":1,"occupied":false,"type":"I"},{"x":3,"y":1,"occupied":false,"type":"I"},{"x":0,"y":2,"occupied":false,"type":"I"},{"x":1,"y":2,"occupied":false,"type":"I"},{"x":2,"y":2,"occupied":false,"type":"I"},{"x":3,"y":2,"occupied":false,"type":"I"},{"x":0,"y":3,"occupied":false,"type":"I"},{"x":1,"y":3,"occupied":false,"type":"I"},{"x":2,"y":3,"occupied":false,"type":"I"},{"x":3,"y":3,"occupied":false,"type":"I"}],
            [{"x":0,"y":0,"occupied":false,"type":"I"},{"x":1,"y":0,"occupied":false,"type":"I"},{"x":2,"y":0,"occupied":false,"type":"I"},{"x":3,"y":0,"occupied":true,"type":"I"},{"x":0,"y":1,"occupied":false,"type":"I"},{"x":1,"y":1,"occupied":false,"type":"I"},{"x":2,"y":1,"occupied":false,"type":"I"},{"x":3,"y":1,"occupied":true,"type":"I"},{"x":0,"y":2,"occupied":false,"type":"I"},{"x":1,"y":2,"occupied":false,"type":"I"},{"x":2,"y":2,"occupied":false,"type":"I"},{"x":3,"y":2,"occupied":true,"type":"I"},{"x":0,"y":3,"occupied":false,"type":"I"},{"x":1,"y":3,"occupied":false,"type":"I"},{"x":2,"y":3,"occupied":false,"type":"I"},{"x":3,"y":3,"occupied":true,"type":"I"}]            
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
            [{"x":0,"y":0,"occupied":false,"type":"S"},{"x":1,"y":0,"occupied":false,"type":"S"},{"x":2,"y":0,"occupied":false,"type":"S"},{"x":0,"y":1,"occupied":false,"type":"S"},{"x":1,"y":1,"occupied":true,"type":"S"},{"x":2,"y":1,"occupied":true,"type":"S"},{"x":0,"y":2,"occupied":true,"type":"S"},{"x":1,"y":2,"occupied":true,"type":"S"},{"x":2,"y":2,"occupied":false,"type":"S"}],
            [{"x":0,"y":0,"occupied":true,"type":"S"},{"x":1,"y":0,"occupied":false,"type":"S"},{"x":2,"y":0,"occupied":false,"type":"S"},{"x":0,"y":1,"occupied":true,"type":"S"},{"x":1,"y":1,"occupied":true,"type":"S"},{"x":2,"y":1,"occupied":false,"type":"S"},{"x":0,"y":2,"occupied":false,"type":"S"},{"x":1,"y":2,"occupied":true,"type":"S"},{"x":2,"y":2,"occupied":false,"type":"S"}],
            [{"x":0,"y":0,"occupied":false,"type":"S"},{"x":1,"y":0,"occupied":true,"type":"S"},{"x":2,"y":0,"occupied":true,"type":"S"},{"x":0,"y":1,"occupied":true,"type":"S"},{"x":1,"y":1,"occupied":true,"type":"S"},{"x":2,"y":1,"occupied":false,"type":"S"},{"x":0,"y":2,"occupied":false,"type":"S"},{"x":1,"y":2,"occupied":false,"type":"S"},{"x":2,"y":2,"occupied":false,"type":"S"}],
            [{"x":0,"y":0,"occupied":false,"type":"S"},{"x":1,"y":0,"occupied":true,"type":"S"},{"x":2,"y":0,"occupied":false,"type":"S"},{"x":0,"y":1,"occupied":false,"type":"S"},{"x":1,"y":1,"occupied":true,"type":"S"},{"x":2,"y":1,"occupied":true,"type":"S"},{"x":0,"y":2,"occupied":false,"type":"S"},{"x":1,"y":2,"occupied":false,"type":"S"},{"x":2,"y":2,"occupied":true,"type":"S"}]
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
            [{"x":0,"y":0,"occupied":false,"type":"Z"},{"x":1,"y":0,"occupied":false,"type":"Z"},{"x":2,"y":0,"occupied":false,"type":"Z"},{"x":0,"y":1,"occupied":true,"type":"Z"},{"x":1,"y":1,"occupied":true,"type":"Z"},{"x":2,"y":1,"occupied":false,"type":"Z"},{"x":0,"y":2,"occupied":false,"type":"Z"},{"x":1,"y":2,"occupied":true,"type":"Z"},{"x":2,"y":2,"occupied":true,"type":"Z"}],
            [{"x":0,"y":0,"occupied":false,"type":"Z"},{"x":1,"y":0,"occupied":true,"type":"Z"},{"x":2,"y":0,"occupied":false,"type":"Z"},{"x":0,"y":1,"occupied":true,"type":"Z"},{"x":1,"y":1,"occupied":true,"type":"Z"},{"x":2,"y":1,"occupied":false,"type":"Z"},{"x":0,"y":2,"occupied":true,"type":"Z"},{"x":1,"y":2,"occupied":false,"type":"Z"},{"x":2,"y":2,"occupied":false,"type":"Z"}],
            [{"x":0,"y":0,"occupied":true,"type":"Z"},{"x":1,"y":0,"occupied":true,"type":"Z"},{"x":2,"y":0,"occupied":false,"type":"Z"},{"x":0,"y":1,"occupied":false,"type":"Z"},{"x":1,"y":1,"occupied":true,"type":"Z"},{"x":2,"y":1,"occupied":true,"type":"Z"},{"x":0,"y":2,"occupied":false,"type":"Z"},{"x":1,"y":2,"occupied":false,"type":"Z"},{"x":2,"y":2,"occupied":false,"type":"Z"}],
            [{"x":0,"y":0,"occupied":false,"type":"Z"},{"x":1,"y":0,"occupied":false,"type":"Z"},{"x":2,"y":0,"occupied":true,"type":"Z"},{"x":0,"y":1,"occupied":false,"type":"Z"},{"x":1,"y":1,"occupied":true,"type":"Z"},{"x":2,"y":1,"occupied":true,"type":"Z"},{"x":0,"y":2,"occupied":false,"type":"Z"},{"x":1,"y":2,"occupied":true,"type":"Z"},{"x":2,"y":2,"occupied":false,"type":"Z"}]            
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
            [{"x":0,"y":0,"occupied":false,"type":"J"},{"x":1,"y":0,"occupied":false,"type":"J"},{"x":2,"y":0,"occupied":false,"type":"J"},{"x":0,"y":1,"occupied":true,"type":"J"},{"x":1,"y":1,"occupied":false,"type":"J"},{"x":2,"y":1,"occupied":false,"type":"J"},{"x":0,"y":2,"occupied":true,"type":"J"},{"x":1,"y":2,"occupied":true,"type":"J"},{"x":2,"y":2,"occupied":true,"type":"J"}],
            [{"x":0,"y":0,"occupied":true,"type":"J"},{"x":1,"y":0,"occupied":true,"type":"J"},{"x":2,"y":0,"occupied":false,"type":"J"},{"x":0,"y":1,"occupied":true,"type":"J"},{"x":1,"y":1,"occupied":false,"type":"J"},{"x":2,"y":1,"occupied":false,"type":"J"},{"x":0,"y":2,"occupied":true,"type":"J"},{"x":1,"y":2,"occupied":false,"type":"J"},{"x":2,"y":2,"occupied":false,"type":"J"}],
            [{"x":0,"y":0,"occupied":true,"type":"J"},{"x":1,"y":0,"occupied":true,"type":"J"},{"x":2,"y":0,"occupied":true,"type":"J"},{"x":0,"y":1,"occupied":false,"type":"J"},{"x":1,"y":1,"occupied":false,"type":"J"},{"x":2,"y":1,"occupied":true,"type":"J"},{"x":0,"y":2,"occupied":false,"type":"J"},{"x":1,"y":2,"occupied":false,"type":"J"},{"x":2,"y":2,"occupied":false,"type":"J"}],
            [{"x":0,"y":0,"occupied":false,"type":"J"},{"x":1,"y":0,"occupied":false,"type":"J"},{"x":2,"y":0,"occupied":true,"type":"J"},{"x":0,"y":1,"occupied":false,"type":"J"},{"x":1,"y":1,"occupied":false,"type":"J"},{"x":2,"y":1,"occupied":true,"type":"J"},{"x":0,"y":2,"occupied":false,"type":"J"},{"x":1,"y":2,"occupied":true,"type":"J"},{"x":2,"y":2,"occupied":true,"type":"J"}]            
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
            [{"x":0,"y":0,"occupied":false,"type":"L"},{"x":1,"y":0,"occupied":false,"type":"L"},{"x":2,"y":0,"occupied":false,"type":"L"},{"x":0,"y":1,"occupied":false,"type":"L"},{"x":1,"y":1,"occupied":false,"type":"L"},{"x":2,"y":1,"occupied":true,"type":"L"},{"x":0,"y":2,"occupied":true,"type":"L"},{"x":1,"y":2,"occupied":true,"type":"L"},{"x":2,"y":2,"occupied":true,"type":"L"}],
            [{"x":0,"y":0,"occupied":true,"type":"L"},{"x":1,"y":0,"occupied":false,"type":"L"},{"x":2,"y":0,"occupied":false,"type":"L"},{"x":0,"y":1,"occupied":true,"type":"L"},{"x":1,"y":1,"occupied":false,"type":"L"},{"x":2,"y":1,"occupied":false,"type":"L"},{"x":0,"y":2,"occupied":true,"type":"L"},{"x":1,"y":2,"occupied":true,"type":"L"},{"x":2,"y":2,"occupied":false,"type":"L"}],
            [{"x":0,"y":0,"occupied":true,"type":"L"},{"x":1,"y":0,"occupied":true,"type":"L"},{"x":2,"y":0,"occupied":true,"type":"L"},{"x":0,"y":1,"occupied":true,"type":"L"},{"x":1,"y":1,"occupied":false,"type":"L"},{"x":2,"y":1,"occupied":false,"type":"L"},{"x":0,"y":2,"occupied":false,"type":"L"},{"x":1,"y":2,"occupied":false,"type":"L"},{"x":2,"y":2,"occupied":false,"type":"L"}],
            [{"x":0,"y":0,"occupied":false,"type":"L"},{"x":1,"y":0,"occupied":true,"type":"L"},{"x":2,"y":0,"occupied":true,"type":"L"},{"x":0,"y":1,"occupied":false,"type":"L"},{"x":1,"y":1,"occupied":false,"type":"L"},{"x":2,"y":1,"occupied":true,"type":"L"},{"x":0,"y":2,"occupied":false,"type":"L"},{"x":1,"y":2,"occupied":false,"type":"L"},{"x":2,"y":2,"occupied":true,"type":"L"}]            
        ]
    }
];

export default library;

