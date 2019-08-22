const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = env => {
    return {
        entry: path.resolve(__dirname, 'imports.ts'),
        output: {
            path: path.resolve(__dirname, '../../www/assets'),
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['.js', '.jsx', '.tsx', '.ts']
        },
        plugins: [
            new webpack.DefinePlugin({
                BASENAME: JSON.stringify(env.BASENAME || '/')
            }),
            new ExtractTextPlugin({filename: 'bundle.css', allChunks: true}),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                Popper: "popper.js"
            }),
            new CopyPlugin([
                { from: 'img', to: '../img' },
            ]),
        ],
        module: {
            rules: [
                {
                    test: /\.jsx/,
                    use: {
                        loader: 'babel-loader',
                        options: {"presets": ["@babel/preset-env", "@babel/preset-react"]}
                    }
                },
                {test: /\.css$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})},
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!sass-loader'})
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.png$/,
                    loader: 'file-loader?name=images/[name].[ext]'
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'fonts/'
                            }
                        }
                    ]
                }
            ]
        }
    };
};