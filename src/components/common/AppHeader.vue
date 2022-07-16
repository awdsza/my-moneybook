<template>
  <header class="header__section">
    <div class="title__section">
      <h2><router-link to="/main/list">My Money Book</router-link></h2>
    </div>
    <nav class="menu__navi__section">
      <ul class="menu__navi__wrapper">
        <li class="navi">
          <router-link to="/main/list">메인화면</router-link>
        </li>
        <li class="navi"><router-link to="/main/info">내정보</router-link></li>
      </ul>
    </nav>
    <section class="myinfo__section">
      <div claas="myinfo__wrapper"><h3>관리자님 환영합니다.</h3></div>
    </section>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header__section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1.5px solid #144;
  flex-shrink: 1;
  min-height: 100px;
}
.title__section {
  background: red;
  margin-right: 30px;
}
ul {
  display: flex;
}
.title__section h2 {
  font-size: 3rem;
  padding: 1rem 0.5rem;
  box-sizing: border-box;
}
.menu__navi__section {
  background: pink;
  flex-shrink: 2;
}
.myinfo__section {
  background: lightgrey;
  flex-shrink: 1;
  padding: 0 0.5rem;
}
</style>
