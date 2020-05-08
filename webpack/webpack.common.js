/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require(`path`);

const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('webpack-cleanup-plugin');
const Dotenv = require('dotenv-webpack');

const isProduction = process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === 'production';

module.exports = {
  context: __dirname,
  entry: { app: `../src/index.tsx` },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: isProduction ? '[contenthash].js' : '[hash].js',
    chunkFilename: isProduction ? '[name]-[contenthash].js' : '[name]-[hash].js',
    publicPath: '/'
  },
  node: {
    fs: 'empty'
  },
  optimization: {
    noEmitOnErrors: true,
    runtimeChunk: 'single',
    moduleIds: 'hashed',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: -10,
          filename: isProduction ? 'vendor-[contenthash].js' : 'vendor-[name]-[hash].js'
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/
    }),
    new MiniCssExtractPlugin({
      filename: isProduction ? '[name]-[contenthash].css' : '[name]-[hash].css',
      chunkFilename: '[id]-[hash].css',
      disable: !isProduction
    }),
    new HtmlWebpackPlugin({
      title: 'test task',
      template: path.resolve(__dirname, '../src', 'public', 'index.html')
    }),
    new Dotenv()
  ],
  module: {
    rules: [
      {
        test: /\.(ttf|eot|otf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.s?[ac]ss$/,
        use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.less$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
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
            loader: `babel-loader`,
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
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
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@constants': path.resolve(__dirname, '../src/constants/index.ts'),
      '@core': path.resolve(__dirname, '../src/core/'),
      '@stores': path.resolve(__dirname, '../src/stores/index.ts'),
      '@types': path.resolve(__dirname, '../src/types/index.ts'),
      '@shared': path.resolve(__dirname, '../src/common/shared/index.ts')
    }
  },
  devtool: isProduction ? 'hidden-source-map' : 'cheap-module-source-map'
};
