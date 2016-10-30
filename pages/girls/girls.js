var consts = require("../../conmon/const");
Page({
  data:{
    imgList: {},
    title:  ""
  },
  onLoad:function(options){
     wx.showToast({
    title: '加载中',
    icon: 'loading'
    })
    var that = this
    wx.request({
        url: 'http://api.tianapi.com/meinv',
        data: {
            key: consts.tianxingKey ,
            num: consts.girlNum
        },
        header: {
            'Content-Type': 'application/json'
        },
        success: function(res) {
            that.setData({
                imgList: res.data.newslist,
            })
            wx.hideToast()
        }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
