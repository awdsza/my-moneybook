<template>
  <section class="setting__section__container">
    <section class="setting__section__wrapper">
      <ul class="setting__section">
        <li><router-link to="/setting/income">수입분류 관리</router-link></li>
        <li><router-link to="/setting/outgoing">지출분류 관리</router-link></li>
      </ul>
    </section>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.setting__section__container {
  width: 100%;
  height: 100%;
}
.setting__section li {
  width: 100%;
  height: 3rem;
  background-color: #8d39a3;
  padding: 0.9rem 1rem;
  box-sizing: border-box;
}
</style>
