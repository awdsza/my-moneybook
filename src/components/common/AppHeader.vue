<template>
  <header class="header__section">
    <div class="title__section">
      <h1><router-link to="/main/list">My Money Book</router-link></h1>
    </div>
    <section class="myinfo__section">
      <div claas="myinfo__wrapper">
        <h3><router-link to="/main/info">관리자님</router-link> 환영합니다.</h3>
      </div>
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
