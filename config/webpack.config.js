const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin.js');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const DefineEnvPlugin = require('define-env-plugin');

const chunkHash = '[hash:5]';
const appHtml = resolve('view/index.html');
const appIndexJs = './src/main.ts';
const appVersion = process.env.npm_package_version;
const buildDir = path.resolve(__dirname, '../public');
const commonJs = `static/js/common.${appVersion}.${chunkHash}.js`;
const nodeModules = path.resolve(__dirname, '../node_modules');
const appSrc = path.resolve(__dirname, '../src');

const isEnvProduction = process.env.NODE_ENV === 'production';

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  entry: [appIndexJs],
  output: {
    path: buildDir,
    publicPath: './',
    filename: `static/js/[name].${appVersion}.${chunkHash}.js`,
    // chunkFilename: 'static/js/[name].[hash:8].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: {
            compilerOptions: {
              preserveWhitespace: false
            }
          }
        }, {
          loader: 'iview-loader',
          options: {
            prefix: false
          }
        }]
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true,
          happyPackMode: false
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'file-loader',
        options: {
          limit: 8192,
          name: `static/images/[name].[ext]?${chunkHash}`
        }
      },
      {
        test: /\.(woff|eot|ttf|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: `static/fonts/[name].[ext]?${chunkHash}`
        }
      },
      {
        test: /\.(sa|sc)ss$/,
        resourceQuery: /\?vue/,
        use: [
          {
            loader: 'vue-style-loader',
            options: {
              sourceMap: false,
              shadowMode: false
            }
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(js|vue|ts|jsx)$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
        // options: {
        //   fix: true,
        //   extensions: ['.js', '.jsx', '.vue', '.ts'],
        //   cache: false,
        //   emitWarning: true,
        //   emitError: false,
        //   formatter:
        // }
      }
    ]
  },
  node: {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  stats: { children: false },
  plugins: [
    new DefineEnvPlugin(),
    ...isEnvProduction ? [new CleanWebpackPlugin()] : [],
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin(
      Object.assign(
        {
          inject: true,
          template: appHtml,
          filename: 'index.html',
          // favicon: resolve('view/favicon.ico')
        },
        isEnvProduction
          ? {
              minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
              },
            }
          : undefined
      )
    ),
    new ForkTsCheckerWebpackPlugin({
      vue: true,
      tslint: false,
      checkSyntacticErrors: true
    }),
    ...process.env.analyzerReport
      ? [new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerHost: 'localhost',
        openAnalyzer: false
      })] : []
  ],
  optimization: isEnvProduction ? {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
            drop_console: true,
            drop_debugger: true,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
        cache: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          parser: safePostCssParser,
          map: isEnvProduction
            ? {
                inline: false,
                annotation: true,
              }
            : false,
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      minChunks: 3,
      minSize: 30000,
      cacheGroups: {
        common: {
          test: appSrc,
          chunks: 'initial',
          name: 'common',
          minChunks: 1,
          reuseExistingChunk: true,
        },
        vendor: {
          test: nodeModules,
          chunks: 'initial',
          name: `vendor`,
          minChunks: 1,
          priority: 10,
        },
      },
    }
  } : {},
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json', '.jsx'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    contentBase: [path.join(__dirname, '../')],
    hot: true,
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || '3000',
    https: false,
    open: false,
    compress: true,
    noInfo: false,
    quiet: false,
    disableHostCheck: true,
    publicPath: '/',
    overlay: {
      errors: true,
      warnings: true
    }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  stats:{
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
};
