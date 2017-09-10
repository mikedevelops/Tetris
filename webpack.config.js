const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/index.ts'),
    output: {
        filename: 'tetris.bundle.js',
        path: path.join(__dirname, 'dist')
    },
    devtool: 'sourc-maps',
    devServer: {
        contentBase: path.join(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            { 
                test: /\.ts$/,
                loader: 'awesome-typescript-loader' 
            },
            { 
                enforce: 'pre', 
                test: /\.js$/,
                loader: 'source-map-loader' 
            }
        ]
    }
};