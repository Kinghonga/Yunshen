//课表查询页面
//获取应用实例
var app = getApp()
Page({
  data: {
    colorArrays: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
    wlist: [
      { "xqj": 1, "skjc": 1, "kcmc": "计算机科学与技术","address":"A1-105"},
      { "xqj": 1, "skjc": 5, "kcmc": "毛泽东思想邓小平理论实践课程","address": "A1-105"},
      { "xqj": 2, "skjc": 1, "kcmc": "算法思想与课程设计", "address": "A1-105" },
      { "xqj": 2, "skjc": 4, "kcmc": "高等数学", "address": "A1-105"},
      { "xqj": 3, "skjc": 2, "kcmc": "大学英语", "address": "A1-105"},
      { "xqj": 3, "skjc": 4, "kcmc": "篮球", "address": "体育馆1楼-B区"},
      { "xqj": 3, "skjc": 3, "kcmc": "电子工艺实习", "address": "A1-105"},
      { "xqj": 4, "skjc": 1, "kcmc": "计算机网络", "address": "A1-105"},
      { "xqj": 4, "skjc": 4, "kcmc": "JavaEE课程设计", "address": "A1-105" },
      { "xqj": 5, "skjc": 3, "kcmc": "设计模式", "address": "A1-105" },
      // { "xqj": 6, "skjc": 1,  "kcmc": "高等数学@教A-301","address":"A1-105" },
      // { "xqj": 7, "skjc": 2,  "kcmc": "高等数学@教A-301" ,"address":"A1-105"},
    ],
      kblist:[]
  },
  onLoad: function () {
    console.log("发起请求")
    var that = this;
    wx.request({
      url: 'https://127.0.0.1:8083/jx_getKb',
      data: { id: 1 },
      success(res) {
        console.log(res)
        that.setData({
          kblist:res.data
        });

        
      }
    })

  
  }
})