---
layout: module
title: Module 6&#58; Action Buttons
---
### Overview
This lesson will take you through the steps required in order to setup "action buttons" for your push notification. Action buttons are useful to provide your users with a way to easily accomplish a task directly from the push notification. The process is quite different for Android and iOS so it is worth going over in detail. For Android all you need to do is send the buttons you want to be displayed along with their callback as part of your push payload. On iOS you will need to setup all of your buttons at initialization time and then as part of your push payload let the plugin know what set of buttons you want to show.


## Steps
1. Open **www/js/my-app.js** and replace the current push notification initialization code:

        var push = PushNotification.init({
            "android": {
                "senderID": "Your GCM ID"
            },
            "browser": {},
            "ios": {
              "sound": true,
              "alert": true,
              "badge": true,
              "categories": {
                "newmusic": {
                    "yes": {
                        "callback": "playMusic", "title": "Play",
                        "foreground": true, "destructive": false
                    },
                    "no": {
                        "callback": "archive", "title": "Archive",
                        "foreground": false, "destructive": false
                    }
                }
              }
            },
            "windows": {}
        });

   > You'll notice that we've added a new parameter to the iOS object of our init code called `categories`. Each category is a named object, we only have one called `newmusic` in this case. These names will need to match the one you send via your payload to APNS if you want the action buttons to be displayed. Each category can have up to three buttons which must be labeled `yes`, `no` and `maybe`. In turn each of these buttons has four properties, `callback` the javascript function you want to call, `title` the label for the button, `foreground` whether or not to bring your app to the foreground and `destructive` which doesn't actually do anything destructive it just colors the button red as a warning to the user that the action may be destructive.

2. While still in **www/js/my-app.js** we'll add some callbacks to handle our button pushes. Nothing too crazy we'll just get the app to show an alert dialog. Scroll down to the bottom of the file and add the following functions:


        function playMusic() {
          myApp.alert("Play Music!");
        }

        function archive() {
          myApp.alert("Archived!");
        }

3. Next refresh the application by using the [four finger tap gesture](http://docs.phonegap.com/references/developer-app/gestures/).

4. Now we'll need to modify the command we use to send a push to inform the device we want some action buttons.

   **For Android**       

    Mac Terminal:          

        phonegap push --deviceID APA91bE1MmeTc92igNoi5OkDWUV --service fcm --payload '{ "data": { "title": "New Music", "message": "New music from the Foo Fighters", "actions": [{ "icon": "play", "title": "Play Music", "callback": "playMusic"}, { "icon": "archive", "title": "Archive", "callback": "archive"} ] } }'

    Windows CMD Prompt:

        phonegap push --deviceID APA91bE1MmeTc92igNoi5OkDWUV --service fcm --payload "{ \"data\": { \"title\": \"New Music\", \"message\": \"New music from the Foo Fighters\", \"actions\": [{ \"icon\": \"play\", \"title\": \"Play Music\", \"callback\": \"playMusic\"}, { \"icon\": \"archive\", \"title\": \"Archive\", \"callback\": \"archive\"} ] } }"


     > The Android OS will look for your icons in your projects platform/android/res/drawable folders. See [Holly's excellent tutorial](http://devgirl.org/2013/11/12/three-hooks-your-cordovaphonegap-project-needs/) if you need help with that. Icons are strictly not required for this test.

   **For iOS**            

    Mac Terminal:          

        phonegap push --deviceID APA91bE1MmeTc92igNoi5OkDWUV --service apns --payload '{ "aps": { "alert": { "title": "New Music", "body": "New music from the Foo Fighters" }, "category": "newmusic" } }'

    Windows CMD Prompt:

        phonegap push --deviceID APA91bE1MmeTc92igNoi5OkDWUV --service apns --payload "{ \"aps\": { \"alert\": { \"title\": \"New Music\", \"body\": \"New music from the Foo Fighters\" }, \"category\": \"newmusic\" } }"


   This should produce the following push notifications. On Android you may have to swipe down on the notification to reveal the buttons while on iOS you'll need to swipe down or swipe left on the notification to reveal the buttons depending on where you are viewing the notification.

   <img class="screenshot" src="images/push6.png"/>
   <img class="screenshot" src="images/push6-ios.png"/>

5. Finally click on the 'Play' button of the push and your app will be launched and you should see the 'Play Music!' alert dialog.

   <img class="screenshot" src="images/push7.png"/>
   <img class="screenshot" src="images/push7-ios.png"/>

   Now experiment with clicking the other buttons or the main body of the notification to get the different behaviors.

<div class="row" style="margin-top:40px;">
   <div class="col-sm-12">
       <a href="module5.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
       <a href="module7.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
   </div>
</div>
