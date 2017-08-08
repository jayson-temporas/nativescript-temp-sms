import { Observable } from 'tns-core-modules/data/observable';
import * as temp  from 'nativescript-temp-sms';

export class HelloWorldModel extends Observable {
  public message: string;
 

  constructor() {

    super();

   	temp.sms("09391822162","Hello Jayson 2");
   
  }
}
