const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = env => {
    return {
        entry: './lib/entry.tsx',
        output: {
            path: path.resolve(__dirname, './../../www/assets'),
            publicPath: path.resolve(__dirname, './../../www/assets'),
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        plugins: [
            new webpack.DefinePlugin({
                BASENAME: JSON.stringify(env.BASENAME || '/')
            }),
            new webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: 'jquery'
            }),
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // all options are optional
                filename: '[name].css',
                chunkFilename: '[id].css',
                ignoreOrder: false, // Enable to remove warnings about conflicting order
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.html$/,
                    use: 'html-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(png|jpg)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        publicPath: 'assets',
                    },
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        "css-loader"
                    ],
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
                },
            ]
        }
    }
};