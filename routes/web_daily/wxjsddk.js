/* 
* @Author: ecitlm
* @Date:   2017-05-23 17:59:30
 * @Last Modified by: ecitlm
 * @Last Modified time: 2017-05-26 21:45:49
*/
const express = require('express')
const http    = require('http')
const cheerio = require("cheerio")
const app     = express()
const request = require("request");
const fs      = require('fs');
const Iconv   = require('iconv-lite');
const WechatAPI = require('wechat-api');
const grant_type = 'client_credential'
const appid = 'wx26909511c99d391f'
const appsecret = '23dc85025e96e9020da1f2cd06544682'
const url="https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx26909511c99d391f&secret=23dc85025e96e9020da1f2cd06544682"
const api = new WechatAPI(appid, appsecret);
function list(req, res) {
     request.get(url, function (error, response, body) {  
      var data=JSON.parse(body);
         res.send(data); 
         
         
         
         
         
         
	 })

}

app.post('/', function (req, res) {
	var apiList = [
			'checkJsApi',
			'onMenuShareTimeline',
			'onMenuShareAppMessage',
			'onMenuShareQQ',
			'onMenuShareWeibo',
			'hideMenuItems',
			'showMenuItems',
			'hideAllNonBaseMenuItem',
			'showAllNonBaseMenuItem',
			'translateVoice',
			'startRecord',
			'stopRecord',
			'onRecordEnd',
			'playVoice',
			'pauseVoice',
			'stopVoice',
			'uploadVoice',
			'downloadVoice',
			'chooseImage',
			'previewImage',
			'uploadImage',
			'downloadImage',
			'getNetworkType',
			'openLocation',
			'getLocation',
			'hideOptionMenu',
			'showOptionMenu',
			'closeWindow',
			'scanQRCode',
			'chooseWXPay',
			'openProductSpecificView',
			'addCard',
			'chooseCard',
			'openCard'
		];
	var param = {
	 debug: false,
	 jsApiList: apiList,
	 url: 'http://quanzhigaoshou.site/zhuanti/'
	};
	api.getJsConfig(param, function (err, data, response) {
	 res.send(data); 
  	// TODO 
	});;
//	api.updateRemark('open_id', 'remarked', function (err, data, response) {
//	 res.send(data); 
//	// TODO 
//	});
//	list(req, res)
//	 res.send('请求成功了了了了')
//	 request.get(url, function (error, response, body) {  
//    var data=JSON.parse(body);//<span style="color:#cc0000;">解析为一个对象不解析就是字符串</span>  
//       res.send(data.access_token); 
//	 })
//  //获取jsapi_ticket  
//  //https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=ACCESS_TOKEN&type=jsapi  
//  //'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=' + token.access_token + '&type=jsapi';  
//  request.get('https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token='+data.access_token+'&type=jsapi',function(error, response, body){  
//      var ticket=JSON.parse(body).ticket  
//      console.log(ticket);  
//      var string = 'jsapi_ticket=' + ticket + '&noncestr=' + noncestr + '×tamp=' + timestamp + '&url=' + page;  
//          var signature=sha1(string); //获得签名   
//          console.log(signature);  
//  })
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
//  list(req, res)
});
module.exports = app;

