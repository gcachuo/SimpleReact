const webpack = require('webpack');
const path = require('path');
module.exports = env => {
    return {
        entry: './lib/entry.tsx',
        output: {
            path: path.resolve(__dirname, './../../www/assets'),
            publicPath: 'www/assets',
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        plugins: [
            new webpack.DefinePlugin({
                BASENAME: JSON.stringify(env.BASENAME || '/')
            })
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
            ]
        }
    }
};