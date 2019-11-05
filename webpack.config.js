const path = require('path');
module.exports = {
    entry: './lib/entry.ts',
    output: {
        path: path.resolve(__dirname, './../../www/assets'),
        publicPath: 'www/assets',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts']
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