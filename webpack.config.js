const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    devtool: 'eval-source-map', // Fast source maps for development
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        historyApiFallback: true, // For React Router
        hot: true, // Enable HMR
        port: 3000,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ],
                        plugins: ['react-refresh/babel'], // Enable React Fast Refresh
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], // Support CSS imports
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)$/,
                type: 'asset/resource', // Handle image imports
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Support importing JS/JSX files without extensions
        alias: {
            '@mui': path.resolve(__dirname, 'node_modules/@mui'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // Template file
        }),
        new ReactRefreshWebpackPlugin(), // Enable React Fast Refresh
    ],
};
