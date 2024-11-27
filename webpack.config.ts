import webpack from 'webpack';
import DevServer from 'webpack-dev-server'
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

interface webpackEnv {
    mode: webpack.Configuration['mode'],
    port: number
}

export default (env: webpackEnv): webpack.Configuration => {
    const isProduction = env.mode === 'production'

    return {
        devtool: 'inline-source-map',
        output: {
            path: path.resolve('dist'),
            filename: 'bundle-[contenthash:8].js',
            clean: true
        },
        entry: path.resolve('src', 'index.tsx'),
        mode: env.mode || 'development',
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
            alias: {
                '@src': path.resolve('src'),
            }
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve('src', 'index.html'),
                minify: isProduction
            }),
            new MiniCssExtractPlugin({filename: 'style-[contenthash:8].css'})
        ],
        optimization: {
            minimizer: [new MiniCssExtractPlugin()],
        },
        devServer: {
            port: env.port || 8000,
            open: true
        }
    }
}
