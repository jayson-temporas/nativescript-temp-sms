import * as application from 'tns-core-modules/application';
var sms = android.telephony.SmsManager.getDefault();
export class TempSms {
  sms(number, msg) {
    	sms.sendTextMessage(number,null,msg,null,null);
  }
}