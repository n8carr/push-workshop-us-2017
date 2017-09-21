---
layout: module
title: Module 1&#58; Setup the project
---

### Create a new Project
1. Create a PhoneGap project using the PhoneGap CLI. For example:

        $ phonegap create pgpush --template https://github.com/phonegap/phonegap-app-star-track-push

   We'll be using the `phonegap-app-star-track-push` project as our template to provide base functionality.

2. Navigate into the newly created project folder:

        $ cd pgpush

### Run the Initial Application
1. Serve the app using the PhoneGap CLI. Type `$ phonegap serve`. You will receive the server address the app is being hosted on in the output received in the console (`192.168.1.11:3000` in this example):

		$ phonegap serve
		[phonegap] starting app server...
		[phonegap] listening on 192.168.1.11:3000
		[phonegap]
		[phonegap] ctrl-c to stop the server
		[phonegap]

2. Now go to your mobile device where the PhoneGap Developer App is running, enter the server address on the main screen and tap **Connect**.

    <img class="screenshot-lg" src="images/dev-app-enter-add.png"/>

  > Tap directly on the server address displayed in the terminal screen of the PhoneGap Developer app to change it to match yours. The value filled in by default is only a sample.

 You should see the connection occur followed by a success message as shown below. If you receive an error of any kind, ensure
 once again that you are connected to the same network on both your  and computer.

  <img class="screenshot-lg" src="images/main-view.png"/>

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="index.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="module2.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
