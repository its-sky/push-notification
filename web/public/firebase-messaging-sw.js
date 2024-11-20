// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging-compat.js');

// Your web app's Firebase configuration (same as in your firebase.js)
const firebaseConfig = {
  apiKey: "AIzaSyAbk6H7V5JrOI4FlJgCTBZOh2eCmBuy88g",
  authDomain: "push-test-f29b7.firebaseapp.com",
  projectId: "push-test-f29b7",
  storageBucket: "push-test-f29b7.firebasestorage.app",
  messagingSenderId: "1070329985176",
  appId: "1:1070329985176:web:a0a0db2920f71362ac38ed",
  measurementId: "G-J2RGK1VPLX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);
  // Extract notification data
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || "/img/push-noti-icon.png",
    badge: "/img/push-badge-icon.png",
    image: "/img/push-image.png",
    data: { url: payload.notification.click_action || 'https://velog.io/@inetsos/posts' } // Custom data for the click event
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
