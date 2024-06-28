// PushNotificationConfig.js
import PushNotification from 'react-native-push-notification';

PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log('TOKEN:', token);
  },

  // (required) Called when a remote or local notification is opened or received
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
  },

  // Android only: GCM or FCM Sender ID (product number)
  senderID: 'YOUR GCM (OR FCM) SENDER ID',

  // IOS only: (optional) default: all - Permissions to register
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  popInitialNotification: true,
  requestPermissions: true,
});
