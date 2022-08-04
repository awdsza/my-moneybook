<template>
  <header class="header__section">
    <div class="title__section">
      <h1><router-link to="/main/list">My Money Book</router-link></h1>
    </div>
    <section class="myinfo__section">
      <div claas="myinfo__wrapper">
        <template>
          <h3>
            <router-link to="/main/info"
              >{{ $store.state.userName }}님</router-link
            >
            환영합니다.
          </h3>
        </template>
        <!-- 2 -->
        <template>
          <a href="javascript:;" @click="logoutUser" class="logout-button">
            Logout
          </a>
        </template>
      </div>
    </section>
  </header>
</template>

<script>
import { deleteCookie } from '@/utils/cookies';
export default {
  methods: {
    logoutUser() {
      deleteCookie('userName');
      deleteCookie('token');
      this.$store.commit('setToken', '');
      this.$store.commit('setUserName', '');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.header__section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1.5px solid #144;
  min-height: 50px;
}
.title__section {
  background: red;
}
ul {
  display: flex;
}
.title__section h1 {
  font-size: 4rem;
  padding: 1rem 0.5rem;
  box-sizing: border-box;
  font-weight: 600;
}
.myinfo__section {
  background: lightgrey;
  flex-shrink: 1;
  padding: 0 0.5rem;
}
</style>
