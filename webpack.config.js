const path = require('path');
module.exports = {
    entry: './lib/entry.tsx',
    output: {
        path: path.resolve(__dirname, './../../www/assets'),
        publicPath: 'www/assets',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
        ]
    }
};