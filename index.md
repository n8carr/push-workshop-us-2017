---
layout: home
title: PhoneGap Day EU 2017 Push Workshop
---

## What You Will Build
In this workshop you will learn how to add push notification functionality to an existing PhoneGap application. We'll go over a the ways to handle incoming push notifications to provide a native experience.

<img class="screenshot" src="images/push1.png"/>
<img class="screenshot" src="images/push2.png"/>
<img class="screenshot" src="images/push3.png"/>

## What You Will Learn

- How to handle specific notification types such as foreground push, background push, action buttons, redirecting to a specific page in your app.

## Pre-requisites

- [PhoneGap CLI](http://docs.phonegap.com/getting-started/1-install-phonegap/cli/) version 6.2.2 or greater.

## Browser

- [Chrome](https://www.google.com/chrome/)  version 42 or greater.

### Android Pre-requisites

- [PhoneGap Developer App from the Play Store](https://play.google.com/store/apps/details?id=com.adobe.phonegap.app)

### iOS Pre-requisites

- [PhoneGap Developer App from the App Store](https://itunes.apple.com/ca/app/phonegap-developer/id843536693?mt=8)

## Requirements

- A working knowledge of HTML and JavaScript is assumed, but you don't need to be a JavaScript guru.
- To complete this workshop, all you need is a code editor, an Android or iOS device, and a connection to the Internet.

>A mobile device is **not** a requirement for this tutorial. We will be doing most of the work in the browser. **Note:** The iOS simulator does not support push notifications and the less said about the Android emulator the better.

## Useful Resources

You will not need to setup your own Google App Project or Apple Developer Certificates for this workshop. We will be using the **PhoneGap Developer App** to receive the push notifications. Later if you want to add push to your application here are some helpful links.

1. [FCM Project Creation](https://docs.pivotal.io/push/1-7/fcm.html#prep) - a guide from Pivotal on setting up a project with FCM enabled.
1. [GCM Project Creation](http://docs.urbanairship.com/reference/push-providers/gcm.html) - a guide from Urban Airship on setting up a project with GCM enabled.
2. [Apple Push Configuration](http://docs.urbanairship.com/reference/push-providers/apns.html) - a guide from Urban Airship on creating the certificate and permission files to enable APNS.

## Issues/Feedback

- Please create an issue [here](https://github.com/macdonst/push-workshop-eu-2017/issues) if you run
into any problems or if you have feedback.

- You can contact me on Twitter:

    <a href="https://twitter.com/macdonst" class="twitter-follow-button" data-show-count="true"
    data-size="large" data-lang="en">Follow
    @macdonst</a>
    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>


<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="module1.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-63182422-1', 'auto');
  ga('send', 'pageview');

</script>
