var consts = require("../../conmon/const");
Page({
  data:{
    textList: {},
  },
  onLoad:function(options){
    var that = this
    wx.showToast({
    title: '加载中',
    icon: 'loading'
    })
    wx.request({
        url: 'http://route.showapi.com/255-1',
        data: {
            page:"1",
            showapi_sign:consts.showapi_sign,
            showapi_appid:consts.showapi_appid,
            type:"29"
        },
        header: {
            'Content-Type': 'application/json'
        },
        success: function(res) {
            that.setData({
                textList: res.data.showapi_res_body.pagebean.contentlist,
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
