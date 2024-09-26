import FriendlyErrorsPlugin from '@soda/friendly-errors-webpack-plugin'
import EslintWebpackPlugin from 'eslint-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { resolve } from 'path'
import sass from 'sass'
import VueLoaderPlugin from 'vue-loader/lib/plugin'
import WebpackBar from 'webpackbar'

function cssConfig(test, loaders = []) {
  return {
    test,
    oneOf: [
      {
        test: /\.module\.\w+$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              importLoaders: 2,
              modules: {
                localIdentName: '[name]_[local]_[hash:base64:5]',
                exportLocalsConvention: 'camelCase',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
            },
          },
          ...loaders,
        ],
      },
      {
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
            },
          },
          ...loaders,
        ],
      },
    ],
  }
}

/** @types {import('webpack').Configure} */
const config = {
  mode: 'development',
  target: 'web',
  output: {
    path: resolve(__dirname, 'dist'),
  },
  devtool: false,
  devServer: {
    static: {
      directory: resolve(__dirname, 'public'),
    },
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.runtime.esm.js',
      eta$: 'eta/dist/eta.es.js',
      data$: require.resolve('./src/data'),
      'test-utils': require.resolve('./inspector/test-utils.js'),
      'sp-placeholder$': require.resolve('./src/sp-placeholder.svg'),
      '@storipress/block-inspector/inspector.css$': require.resolve('./inspector/inspector.css'),
      '@storipress/block-inspector$': require.resolve('./inspector/inspector.js'),
      '@storipress/block$': resolve(__dirname, './src/sdk/block-sdk.js'),
      '@storipress/article$': resolve(__dirname, './src/sdk/article-sdk.js'),
      '@storipress/article/mixins$': resolve(__dirname, './src/sdk/_mixins.scss'),

      'source-map': false,
    },
    fallback: {
      fs: false,
      url: require.resolve('url/'),
      path: require.resolve('path-browserify'),
    },
    mainFields: ['browser', 'module', 'main'],
    extensions: ['.tsx', '.ts', '.mjs', '.js', '.jsx', '.vue', '.json', '.wasm'],
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /(\.yarn|node_modules|(?:block|article)-sdk)/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /\.yarn/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        type: 'asset/resource',
      },
      {
        test: /\.svg(\?.*)?$/,
        type: 'asset/resource',
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'asset/resource',
      },
      cssConfig(/\.css$/),
      cssConfig(/\.scss$/, [
        {
          loader: 'sass-loader',
          options: {
            implementation: sass,
          },
        },
      ]),
    ],
  },
  plugins: [
    new WebpackBar(),
    new FriendlyErrorsPlugin(),
    new EslintWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'block',
      template: 'public/index.html',
    }),
    new VueLoaderPlugin(),
  ],
  cache: {
    type: 'filesystem',
  },
}

const fullConfig = [
  {
    ...config,
    output: {
      ...config.output,
      clean: true,
    },
    mode: 'production',
    name: 'build',
  },
  {
    ...config,
    name: 'serve',
  },
]

export default fullConfig
