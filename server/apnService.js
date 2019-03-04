// Load modules

var apn = require('apn');

// Replace these with your own values.
var cert = "/cert.pem";
var key = "/key.pem";
var deviceID = "evjc98sda78sadfugasdpf";

var service = new apn.Connection({
    cert: cert,
    key: key
});

var myDevice = new apn.Device(deviceID);
var note = new apn.Notification();

note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now.
note.alert = "This is a notification that will be displayed ASAP.";

service.pushNotification(note, myDevice);
