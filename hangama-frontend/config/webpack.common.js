const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // extract css to files
const path = require("./paths");
const autoprefixer = require('autoprefixer');

module.exports = {
    // Where webpack looks to start building the bundle
    entry: {
        polyfills: path.src + '/polyfills.js',
        index: path.src + '/index.js',
    },
    // Where webpack outputs the assets and bundles
    output: {
        path: path.build,
        filename: '[name].bundle.js',
        publicPath: '/',
        clean: true,
    },
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    // Customize the webpack build process
    plugins: [
        // Removes/cleans build folders and unused assets when rebuilding
        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),

        // Copies files from target to destination folder
        // new CopyWebpackPlugin({
        //     patterns: [
        //         {
        //             from: path.src + '/assets',
        //             to: 'assets',
        //             globOptions: {
        //                 ignore: ['*.DS_Store'],
        //             },
        //         },
        //     ],
        // }),

        // Generates an HTML file from a template
        // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
        new HtmlWebpackPlugin({
            title: 'Project Title',
            favicon: path.public + '/favicon.png',
            template: path.public + '/index.html', // template file
            filename: 'index.html', // output file
        }),
    ],

    // Determine how modules within the project are treated
    module: {
        rules: [
            // JavaScript: Use Babel to transpile JavaScript files
            { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },

            // Styles: Inject CSS into the head with source maps
            // {
            //     test: /\.(css|scss|sass)$/,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         'css-loader',
            //         {
            //             loader: 'postcss-loader', // postcss loader needed for tailwindcss
            //             options: {
            //                 postcssOptions: {
            //                     ident: 'postcss',
            //                     plugins: [autoprefixer],
            //                 },
            //             },
            //         },
            //         'sass-loader'
            //     ],
            // },
            {
                test: /\.(css|scss|sass)$/,
                use: [{
                    // inject CSS to page
                    loader: 'style-loader'
                }, {
                    // translates CSS into CommonJS modules
                    loader: 'css-loader'
                }, {
                    // Run postcss actions
                    loader: 'postcss-loader',
                    options: {
                        // `postcssOptions` is needed for postcss 8.x;
                        // if you use postcss 7.x skip the key
                        postcssOptions: {
                            // postcss plugins, can be exported to postcss.config.js
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    }
                }, {
                    // compiles Sass to CSS
                    loader: 'sass-loader'
                }]
            },
            { test: /\.svg$/, use: ['@svgr/webpack'] },

            // Images: Copy image files to build folder
            { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

            // Fonts and SVGs: Inline files
            { test: /\.(woff(2)?|eot|ttf|otf|)$/, type: 'asset/inline' },
        ],
    },
}
