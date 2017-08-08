import * as application from 'tns-core-modules/application';
export class TempSms {
  sms(number, msg) {
    return number + " " + msg;
  }
}