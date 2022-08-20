<template>
  <section class="account__type__navigation__container">
    <section class="account__type__navigation__wrapper">
      <div
        class="account__type active"
        :ref="'list'"
        @click="fnOnClickAccountNavi('list')"
      >
        <router-link to="/main/list">목록</router-link>
      </div>
      <div
        class="account__type"
        :ref="'calendar'"
        @click="fnOnClickAccountNavi('calendar')"
      >
        <router-link to="/main/calendar">달력</router-link>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  methods: {
    fnOnClickAccountNavi(paramRef) {
      for (const ref in this.$refs) {
        this.$refs[ref].classList.remove('active');
      }
      this.$refs[paramRef].classList.toggle('active');
    },
  },
};
</script>

<style scoped>
.account__type__navigation__wrapper {
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.account__type__navigation__container {
  background-color: #f7f6f9;
  min-height: 3rem;
  width: 100vw;
}
.account__type__navitaion {
  background: #fff;
}
.account__type {
  float: left;
  width: 50%;
  text-align: center;
  background-color: #8d39a3;
}
.account__type a {
  display: block;
  padding: 1rem;
  width: 100%;
}
.account__type.active {
  background-color: #fff;
}
</style>
