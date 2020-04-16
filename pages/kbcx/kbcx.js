//课表查询页面
//获取应用实例
var app = getApp()
Page({
  data: {
    // 颜色数组，用于课程的背景颜色
    colorArrays:["#85B8CF","#90C652","#D8AA5A","#FC9F9D","#0A9A84","#61BC69","#12AEF3","#E29AAD"],
    // 课表数组
    wlist: [
      { "weekTime": 1, "jieCi": 1, "courseName": "计算机科学与技术","address":"A1-105"},
      { "weekTime": 1, "jieCi": 5, "courseName": "毛泽东思想邓小平理论实践课程","address": "A1-105"},
      { "weekTime": 2, "jieCi": 1, "courseName": "算法思想与课程设计", "address": "A1-105" },
      { "weekTime": 2, "jieCi": 4, "courseName": "高等数学", "address": "A1-105"},
      { "weekTime": 3, "jieCi": 2, "courseName": "大学英语", "address": "A1-105"},
      { "weekTime": 3, "jieCi": 4, "courseName": "篮球", "address": "体育馆1楼-B区"},
      { "weekTime": 3, "jieCi": 3, "courseName": "电子工艺实习", "address": "A1-105"},
      { "weekTime": 4, "jieCi": 1, "courseName": "计算机网络", "address": "A1-105"},
      { "weekTime": 4, "jieCi": 4, "courseName": "JavaEE课程设计", "address": "A1-105" },
      { "weekTime": 5, "jieCi": 3, "courseName": "设计模式", "address": "A1-105" },
    ],
      kblist:[]
  },
  onLoad: function () {
    // console.log("发起请求")
    // var that = this;
    // wx.request({
    //   url: 'https://127.0.0.1:8083/jx_getKb',
    //   data: { id: 1 },
    //   success(res) {
    //     console.log(res)
    //     that.setData({
    //       kblist:res.data
    //     });
    //   }
    // })

  }
})