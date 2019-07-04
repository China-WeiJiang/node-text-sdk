const Core = require('@alicloud/pop-core');
const express = require("express");
const app = express();

app.listen(5000);

var client = new Core({
    accessKeyId: '****',
    accessKeySecret: '****',
    endpoint: 'https://dysmsapi.aliyuncs.com',
    apiVersion: '2017-05-25'
});


var params = {
    "RegionId": "cn-hangzhou",
    "PhoneNumbers": "****",
    "SignName": "****",
    "TemplateCode": "SMS_169870663",
    "TemplateParam": "{\"code\":\"88888\"}"
};

var requestOption = {
    method: 'POST'
};
app.use('/',(req,res)=>{
    client.request('SendSms', params, requestOption).then((result) => {
        console.log(JSON.stringify(result));
    }, (ex) => {
        console.log(ex);
    });
    res.send("发送成功！")
});

