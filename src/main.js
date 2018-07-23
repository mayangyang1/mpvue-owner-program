import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      'pages/logs/main',
      '^pages/index/main', //货源主页
      'pages/order/main', // 运单主页
      'pages/personal/main', // 个人主页
      'pages/releaseGoods/main', //发布货源
      'pages/waybillDetail/main', //运单详情
      'pages/goodsDetails/main', // 货源详情
      'pages/sendCar/main', //派车页面
      'pages/login/main', //登录页面
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#f46d00',
      navigationBarTitleText: '货主',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      list: [
        {
          pagePath: "pages/index/main",
          text: "货源",
          selectedIconPath: 'static/images/goods.png',
          iconPath: "static/images/goods.png"
        },
        {
          pagePath: "pages/order/main",
          text: "运单",
          selectedIconPath: "static/images/tansport.png",
          iconPath: "static/images/tansport.png"
        },
        {
          pagePath: "pages/personal/main",
          text: "我",
          selectedIconPath: "static/images/mine.png",
          iconPath: "static/images/mine.png"
        }
      ],
      color: "#888888",
      selectedColor: "#19549d",
      backgroundColor: "#fafafa",
      borderStyle: "black"
    },
  }
}
