# nativescript-temp-sms

Warning: I don't have time to maintain and upgrade this plugin. If you want to implement it in IOS, just fork this repo and create your own plugin. Thanks.

Sending sms without user interaction.

var smsManager = android.telephony.SmsManager.getDefault();

smsManager.sendTextMessage("0123232332",null,"Hello",null,null);

## (Optional) Prerequisites / Requirements

To send sms without user interaction on Android your app must request permission to do so. The following must be in your app's AndroidManifest.xml

```xml
<uses-permission android:name="android.permission.SEND_SMS" />
```

iOS sms feature will soon be implemented.

## Installation

Install the plugin using the NativeScript CLI tooling

```javascript
tns plugin add nativescript-temp-sms
```

## Usage 

To use the module you must first require() it from your project's node_modules directory:



After you have a reference to the module you can then call the available methods.
	
	```js
		var temp = require( "nativescript-temp-sms" );
  		temp.sms(number,message);
    ```

Methods:

sms(number,message)

Send sms on the background.

Parameters: 

number: SMS number to use.

message: String to send.


## License

MIT, 2017
