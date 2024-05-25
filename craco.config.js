const path = require('path');
const CracoLessPlugin = require('craco-less');
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  // webpack 配置
  webpack: {
    alias: {
      '@': resolve('src')
    },
    configure: (webpackConfig, {env, paths}) => {
      webpackConfig.module.rules[1].oneOf = [
        ...[
          {
            test: /.svg$/,
            include: resolve('./src/assets/svgIcons/icons'), // 存放svg的文件夹
            use: [
              {loader: 'svg-sprite-loader', options: {}},
              {loader: 'svgo-loader', options: {symbolId: "icon-[name]"}},
            ],
          },
        ],
        ...webpackConfig.module.rules[1].oneOf,
      ];
      return webpackConfig;
    },
  },
  // 插件
  plugins: [
    {
      plugin: CracoLessPlugin, // 支持less
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // 在这里添加您的Less选项，如果需要的话
            modifyVars: {'@primary-color': '#1DA57A'}, // 例如，覆盖antd的默认主题色
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
