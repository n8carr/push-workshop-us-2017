---
layout: module
title: Module 7&#58; Handing URL re-direction
---
### Overview
In this lesson we'll learn how to launch to a specific location in your application based on data from the incoming push notification.

### Steps

1. Open **www/js/my-app.js** and add replace the current push notification handler:

        push.on('notification', function(data) {
            console.log('notification event');
            var artist = data.additionalData.artist;
            if (artist) {
              showArtist(artist);
            } else {
              // using Framework7 to show a dialog
              myApp.alert(data.message, [data.title]);
            }

            push.finish(function() {
                console.log('success');
            }, function() {
                console.log('error');
            });     
        });

   > Notice that the `artist` property is added to the `additionalData` object. If you send a property that doesn't conform to `title`, `message`, `count` or `sound` it will be placed in the `additionalData` object.

2. While still in **www/js/my-app.js** add the following function at the bottom of the file:

        function showArtist(artist) {
          document.getElementsByName("q")[0].value = artist;
          searchSubmit(new CustomEvent("noop"));
        }

3. Next refresh the application by using the [four finger tap gesture](http://docs.phonegap.com/references/developer-app/gestures/).

4. Put your app in the background by pressing the home button.

5. Now we'll need to modify the command we use to send a push to inform the device what url we want to show in our app.

   **For Android**       

    Mac Terminal:          

        phonegap push --deviceID APA91bE1MmeTc92igNoi5OkDWUV --service fcm --payload '{ "data": { "title": "New Music", "message": "The Foo Fighters have released a new album", "artist": "Foo Fighters" } }'

    Windows CMD Prompt:

        phonegap push --deviceID APA91bE1MmeTc92igNoi5OkDWUV --service fcm --payload '{ "data": { "title": "New Music", "message": "The Foo Fighters have released a new album", "artist": "Foo Fighters" } }'

   **For iOS**            

    Mac Terminal:          

        phonegap push --deviceID APA91bE1MmeTc92igNoi5OkDWUV --service apns --payload '{ "aps": { "alert": { "title": "New Music", "body": "The Foo Fighters have released a new album" } }, "artist": "Foo Fighters" }'

    Windows CMD Prompt:

        phonegap push --deviceID APA91bE1MmeTc92igNoi5OkDWUV --service apns --payload "{ \"aps\": { \"alert\": { \"title\": \"New Music\", \"body\": \"The Foo Fighters have released a new album\" } }, \"artist\": \"Foo Fighters\" }"

6. You should see the message arrive in the shade area just like before.

    <img class="screenshot" src="images/push8.png"/>
    <img class="screenshot" src="images/push8-ios.png"/>

7. Now click on the notification and when your app opens you should see the following:

    <img class="screenshot" src="images/push4.png"/>
    <img class="screenshot" src="images/push4-ios.png"/>

   That's great as we've been able to modify the logic of our application based on information contained in the push notification.

8. Now press the back button to go back to the Search page. While leaving the app in the foreground resend a push notification to the app using the method we talked about in step 5.

9. Whoa, we jumped to a Results page without any warning. Let's set about fixing that. Open **www/js/my-app.js** and add replace the current push notification handler with:

        push.on('notification', function(data) {
            console.log('notification event');
            var artist = data.additionalData.artist;
            if (artist) {
              if (data.additionalData.foreground !== 'undefined' || data.additionalData.foreground) {
                myApp.confirm('Do you want to check out some new music from ' + artist + '?', 'New Music',
                  function () {
                    showArtist(artist);
                  },
                  function () {
                    console.log('nope');
                  }
                );
              } else {
                showArtist(artist);
              }
            } else {
              myApp.alert(data.message, [data.title]);
            }

            push.finish(function() {
                console.log('success');
            }, function() {
                console.log('error');
            });     
        });

   > We are using another property that is added to the `additionalData` object called `foreground`. You don't have to explicitly send this property from your push service. The plugin itself will set `foreground` to `true` when the notification is received while the user is in your app and `false` in the app is in the background. This allows you to program different behaviors depending on how the notification was received.

10. Next refresh the application by using the [four finger tap gesture](http://docs.phonegap.com/references/developer-app/gestures/).

11. While leaving the app in the foreground resend a push notification to the app using the method we talked about in step 5. You will now see the confirmation dialog pop up:

    <img class="screenshot" src="images/push5.png"/>
    <img class="screenshot" src="images/push5-ios.png"/>

12. Clicking on the `Yes` button once again brings us to the Results page.

<div class="row" style="margin-top:40px;">
   <div class="col-sm-12">
       <a href="module6.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
   </div>
</div>
