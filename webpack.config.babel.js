import HtmlWebpackPlugin from 'html-webpack-plugin'
import { resolve } from 'path'
import sass from 'sass'
import VueLoaderPlugin from 'vue-loader/lib/plugin'

function cssConfig(test, loaders = []) {
  return {
    test,
    oneOf: [
      {
        resourceQuery: /module/,
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
                exportLocalsConvention: 'camelCase',
                localIdentName: '[name]_[local]_[hash:base64:5]',
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
        resourceQuery: /\?vue/,
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
  entry: './scripts/.tmp/index.js',
  cache: {
    type: 'filesystem',
  },
  resolve: {
    alias: {
      // make sure only use same version of vue
      vue$: require.resolve('vue/dist/vue.runtime.esm.js'),
      data$: require.resolve('./scripts/template/data'),
      'test-utils$': require.resolve('./scripts/test-utils.js'),
      'sp-placeholder$': resolve(__dirname, './boilerplate/src/sp-placeholder.svg'),
      '@jraft/block$': resolve(__dirname, './boilerplate/src/sdk/block-sdk.js'),
      '@jraft/article$': resolve(__dirname, './boilerplate/src/sdk/article-sdk.js'),
      '@storipress/block$': resolve(__dirname, './boilerplate/src/sdk/block-sdk.js'),
      '@storipress/article$': resolve(__dirname, './boilerplate/src/sdk/article-sdk.js'),
      '@storipress/article/mixins$': resolve(__dirname, './boilerplate/src/sdk/_mixins.scss'),
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
        exclude: /(\.yarn|node_modules)/,
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
        test: /\.svg(\?.*)?$/,
        type: 'asset/resource',
      },
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
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
    new HtmlWebpackPlugin({
      title: 'blocks',
      template: './scripts/template/index.html',
    }),
    new VueLoaderPlugin(),
  ],
}

export default config
