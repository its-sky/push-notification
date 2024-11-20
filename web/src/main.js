import { createApp } from 'vue'
import App from './App.vue'
import { firebaseApp } from './firebase-config'

const app = createApp(App);
app.config.globalProperties.$firebase = firebaseApp;
app.mount('#app');


console.log('테스트: ', process.env.TZVUE_APP_FIREBASE_PROJECT_ID);