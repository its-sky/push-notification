<template>
  <img alt="Vue logo" src="./assets/logo.png">
   <div id="app">
    <h1>FCM 메시지 테스트</h1>
    <!-- 알림 표시 -->
    <div v-if="message" class="notification">
      <h2>{{ message.title }}</h2>
      <p>{{ message.body }}</p>
    </div>
  </div>
</template>

<script>
import { requestFcmToken, listenForMessages } from './fcm';

export default {
  name: 'App',
  mounted() {
    this.getFcmToken();
  },
  created() {
    console.log(process.env.VUE_APP_PROJECT_ID);
  },
  methods: {
    async getFcmToken() {
      const token = await requestFcmToken();
      if (token) {
        console.log('토큰 발급 성공:', token);
      } else {
        console.log('토큰 발급 실패');
      }

      listenForMessages((payload) => {
        const { title, body } = payload.notification || {};
        this.message = { title, body };

        setTimeout(() => {
          this.message = null;
        }, 5000);
      });
    },
  },
  data() {
    return {
      message: null,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.notification {
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: #333;
  color: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
</style>
