const path = require('path');
const CracoLessPlugin = require('craco-less');

module.exports = {
  // webpack 配置
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  // 插件
  plugins: [
    {
      plugin: CracoLessPlugin  // 支持less
    },
  ],
}
