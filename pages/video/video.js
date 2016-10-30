var consts = require("../../conmon/const");
Page({
  data:{
    videoList: {},
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
            showapi_sign:"34c816a9496c4456bb9a6fbddce4917d",
            showapi_appid:"26247",
            type:"41"
        },
        header: {
            'Content-Type': 'application/json'
        },
        success: function(res) {
            that.setData({
                videoList: res.data.showapi_res_body.pagebean.contentlist,
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
