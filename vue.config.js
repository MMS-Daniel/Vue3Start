// vue.config.js
const DEV_MODE = ( process.env.NODE_ENV !== 'production' );
const PROJUCT_NAME = 'mmschool';
const CDN_PATH = `http://cdn.mmsay.com/${PROJUCT_NAME}/`;

module.exports = {
    publicPath:DEV_MODE?'/':CDN_PATH,
    chainWebpack: config => {
        config.module
          .rule('images')
            .use('url-loader')
              .loader('url-loader')
              .tap(options => {
                    options.limit = 1*1024;
                    options.outputPath = DEV_MODE?'/':CDN_PATH;
                    return options;
              })
    }, 
    // 选项...
    devServer: {
        proxy: {
            '/api': {
                target: "http://task.test-mmsay.com",
                changeOrigin: true
            }
        }
    }
}