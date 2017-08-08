import { Observable } from 'tns-core-modules/data/observable';
import { TempSms } from 'nativescript-temp-sms';

export class HelloWorldModel extends Observable {
  public message: string;
  private tempSms: TempSms;

  constructor() {
    super();

    this.tempSms = new TempSms();
   	this.message = this.tempSms.sms("0912323123","Hello");
  }
}
