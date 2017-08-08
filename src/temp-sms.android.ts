import * as application from 'tns-core-modules/application';
var smsManager = android.telephony.SmsManager.getDefault();

function sms(number,msg){
	console.log(number,msg);
	smsManager.sendTextMessage(number,null,msg,null,null);
}

export { sms };