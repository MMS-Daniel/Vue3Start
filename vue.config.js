const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
const CDN_PATH = process.env.VUE_APP_CDN;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

module.exports = {
    configureWebpack: config => {
        if (IS_PROD) {
            const plugins = [];
            plugins.push(
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: productionGzipExtensions,
                    threshold: 10240,
                    minRatio: 0.8
                })
            );
            config.plugins = [
                ...config.plugins,
                ...plugins
            ];
        }
        config.externals = {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'axios': 'axios'
        }
    },
    publicPath:CDN_PATH,
    chainWebpack: config => {
        // 打包分析
        if (process.env.IS_ANALYZ) {
            config.plugin('webpack-report')
                .use(BundleAnalyzerPlugin, [{
                    analyzerMode: 'static',
                }]);
        }
        //资源处理
        config.module
          .rule('images')
            .use('url-loader')
              .loader('url-loader')
              .tap(options => {
                    options.limit = 1*1024;
                    options.outputPath = CDN_PATH;
                    return options;
              })
    }, 
    // 选项...
    devServer: {
        open: IS_PROD,
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: "http://task.test-mmsay.com",
                changeOrigin: true
            }
        }
    }
}