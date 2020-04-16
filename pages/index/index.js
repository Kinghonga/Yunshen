//index.js
//获取应用实例
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;
const app = getApp()

Page({
  data: {
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }, {
      id: 1,
      type: 'image',
        url: 'https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    }, {
      id: 2,
      type: 'image',
        url: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }],
  },

  onLoad: function () {
      //
    // console.log("发起请求")
    // wx.request({
    //   url: 'http://127.0.0.1:8082/jwxt_getKb', 
    //   data: {id:1},
    //   success(res) {
    //     console.log(res)
    //   }
    // })
   }

})