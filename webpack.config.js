// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

const config = {
    entry: path.join(__dirname, 'src/index.jsx'),
    output: {
        path: path.join(__dirname, 'dist'),
    },
    devServer: {
        port: 3000,
        hot: true,
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx"],
      },
    module: {
        rules: [
          {
            test: /\.(png|j?g|svg|gif)?$/,
            use: 'file-loader'
         },
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
                options: {
                  presets: [
                    '@babel/preset-env',
                    [
                      '@babel/preset-react',
                      {
                        runtime: 'automatic',
                      },
                    ],
                    '@babel/preset-typescript',
                  ],
                },
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        config.plugins.push(new MiniCssExtractPlugin());
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
