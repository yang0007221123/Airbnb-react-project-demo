/**
 * @description: 项目的主题样式
 */

const appTheme = {
  // 主题颜色
  color: {
    firstColor: 'red'
  },
  // css样式
  mixins: {
    boxShadowHover: `
      transition: box-shadow 300ms ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }
    `
  }
}

export default appTheme;