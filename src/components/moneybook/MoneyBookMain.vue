<template>
  <section class="content__section">
    <section>
      여기가 메인이 들어갈 리스트에요!

      <button type="button" @click="isOpen = true">팝업오픈!</button>
    </section>
    <MoneyBookPostPopup :open="isOpen">
      <template #header><h1>가게부 내용 입력</h1></template>
      <template #main>
        <form @submit.prevent="onMoneyBookPostSubmit">
          <div>
            <label for="bookTitle">제목: </label>
            <input v-model="bookTitle" id="bookTitle" />
          </div>
          <div>
            <label for="bookContents">내용: </label>
            <textarea
              v-model="bookContents"
              name=""
              id="bookContents"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div>
            <label for="amount">비용: </label>
            <input type="number" v-model="amount" id="amount" />
          </div>
          <div>
            <label for="purpose">용도: </label>
            <select id="purpose" v-model="purpose">
              <option value="">지출</option>
              <option value="">입금</option>
              <option value="">세금납부</option>
              <option value="">저축</option>
              <option value="">보험</option>
            </select>
          </div>
        </form>
      </template>
      <template #footer>
        <button type="button" @click="submitMoneyBookPost">등록</button>
        <button type="reset">초기화</button>
        <button type="button" @click="isOpen = false">취소</button>
      </template>
    </MoneyBookPostPopup>
  </section>
</template>

<script>
import MoneyBookPostPopup from './MoneyBookPostPopup.vue';
export default {
  components: {
    MoneyBookPostPopup,
  },
  data() {
    return {
      isOpen: false,
      bookTitle: '',
      bookContents: '',
      amount: 0,
      purpose: '',
    };
  },
  methods: {
    submitMoneyBookPost() {
      console.log('submit');
    },
  },
};
</script>

<style scoped>
.content__section {
  flex-shrink: 2;
}
textarea {
  resize: none;
}
</style>
