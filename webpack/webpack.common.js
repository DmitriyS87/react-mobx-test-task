/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require(`path`);
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: { app: `../src/index.tsx`, vendor: ['react', 'react-dom'] },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]-[hash].js',
    publicPath: '/'
  },
  optimization: {
    noEmitOnErrors: true,
    runtimeChunk: 'single',
    moduleIds: 'hashed',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'libs',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css',
      chunkFilename: '[id]-[hash].css'
    }),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src', 'public', 'index.html'),
      favicon: false,
      hash: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ttf|eot|otf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.s?[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                strictMath: true,
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: `babel-loader`
          }
        ]
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
          {
            loader: `ts-loader`,
            options: {
              transpileOnly: true,
              experimentalWatchApi: true
            }
          }
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 464600,
              mimetype: 'application/font-woff'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@constants': path.resolve(__dirname, '../src/constants/')
    }
  },
  devtool: `source-map`
};
