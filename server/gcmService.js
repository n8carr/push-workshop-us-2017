// Load modules

var gcm = require('node-gcm');

// Replace these with your own values.
var apiKey = "AIzaSyAacyaPFLKBc4HGY8WSdQdBKIys8qJar5I";
var deviceID = "98f7asd98vasd98vyzxv";

var service = new gcm.Sender(apiKey);
var message = new gcm.Message();
message.addData('title', 'Hello, World');
message.addData('body', 'This is a notification that will be displayed ASAP.');

service.send(message, { registrationTokens: [ deviceID ] }, function (err, response) {
	if(err) console.error(err);
	else 	console.log(response);
});
