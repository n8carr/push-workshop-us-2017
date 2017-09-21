---
layout: module
title: Module 5&#58; Background Notifications
---

### Overview
In this lesson we'll learn how to have our notification handler run when the app is not in the foreground and without user interaction. As we mentioned in lesson 3 the notification handler is only run when the application is in the foreground or if the user taps the received notification but there is a way to signal your app to run code in the background. This is a very powerful technique which allows you to keep your app up to date.

## Steps
1. With your app in the foreground send yourself a push message using the command we used in lesson 4. You will notice that besides the alert dialog, that in the console of our terminal running `phonegap serve` you will see the following output:

        [phonegap] [console.log] notification event

2. Now put your app in the background and send another push message. You should see the message arrive in the shade area but notice there was no additional logs in the terminal running `phonegap serve`.

   <img class="screenshot" src="images/push2.png"/>
   <img class="screenshot" src="images/push2-ios.png"/>

3. Click on the notification, your app should open, the alert dialog will be shown and you'll see a new line in the terminal running `phonegap serve`.

   > But what we really want is for the notification event to be delivered to our application even when it is in the background

4. Open **www/js/my-app.js** and add replace the current push notification handler:

            push.on('notification', function(data) {
                console.log('notification event');
                // using Framework7 to show a dialog
                myApp.alert(data.message, [data.title]);

                push.finish(function() {
                    console.log('success');
                }, function() {
                    console.log('error');
                });
            });

   > Strictly speaking the call to `finish` is only required on iOS. It is a no-op on other platforms. The reason we need to do this on iOS is the OS only provides you with 30 seconds of background processing and we need to tell the OS we are done. Failure to do this may cause the OS to kill your app for mis-behaving.

5. Next refresh the application by using the [four finger tap gesture](http://docs.phonegap.com/references/developer-app/gestures/).

6. Put your app into the background by pressing the home button.

7. Now we'll need to modify our push command slightly to inform the device we want to do some background processing.

   **For Android**

    Mac Terminal:          

        phonegap push --deviceID APA91bE1MmeTc92igNoi5OkDWUV --service fcm --payload '{ "data": { "title": "Hello", "message": "World", "content-available": "1"} }'

    Windows CMD Prompt:

        phonegap push --deviceID APA91bE1MmeTc92igNoi5OkDWUV --service fcm --payload "{ \"data\":{ \"title\": \"Hello\", \"message\": \"World\", \"content-available\": \"1\" } }"

   **For iOS**  

    Mac Terminal:          

        phonegap push --deviceID APA91bE1MmeTc92igNoi5OkDWUV --service apns --payload '{ "aps": { "alert": { "title": "Hello", "body": "World" }, "content-available": 1 } }'

    Windows CMD Prompt:

        phonegap push --deviceID APA91bE1MmeTc92igNoi5OkDWUV --service apns --payload "{ \"aps\": { \"alert\": { \"title\": \"Hello\", \"body\": \"World\" }, \"content-available\": 1 } }"

8. As well as the notification appearing in your shade you should see the line:

        [phonegap] [console.log] notification event

    in the terminal running `phonegap serve`.

9. Now start your app, not by clicking the push notification, instead launch the app from the app drawer. When the app starts up you'll notice the alert dialog has already been triggered based on data from the new push.

## Discussion

What we've demonstrated here is not very exciting but you can think of other uses for this background processing. Especially when you consider omitting the `title` and `body` elements from the push. If you do that the notification will not be displayed in the shade, effectively it will be a silent notification. You can use these silent background notifications to tell the app to go download some new content or in more advance cases in conjunction with [phonegap-plugin-contentsync](https://github.com/phonegap/phonegap-plugin-contentsync) you can update your app without user (or app store) interaction.

<div class="row" style="margin-top:40px;">
    <div class="col-sm-12">
        <a href="module4.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
        <a href="module6.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
    </div>
</div>
