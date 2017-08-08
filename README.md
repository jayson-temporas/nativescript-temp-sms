# nativescript-temp-sms

Send sms using android's Sms Manager.

var smsManager = android.telephony.SmsManager.getDefault();

smsManager.sendTextMessage("0123232332",null,"Hello",null,null);

## (Optional) Prerequisites / Requirements

To send sms without user interaction on Android your app must request permission to do so. The following must be in your app's AndroidManifest.xml

```xml
<uses-permission android:name="android.permission.SEND_SMS" />
```

## Installation

Install the plugin using the NativeScript CLI tooling

```javascript
tns plugin add nativescript-temp-sms
```

## Usage 

To use the module you must first require() it from your project's node_modules directory:

var temp = require( "nativescript-temp-sms" );

After you have a reference to the module you can then call the available methods.
	
	```javascript
  			temp.sms(number,messageText);
    ```)

Parameters: 

number: SMS number to use.

messageText: String to send.


## License

Apache License Version 2.0, January 2004
