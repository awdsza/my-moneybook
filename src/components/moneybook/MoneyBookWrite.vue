<template>
  <section class="content__section">
    <form @submit.prevent="submitMoneyBookPost">
      <div class="item__content">
        <label class="item__label" for="amount">비용 </label>
        <input type="number" v-model="amount" id="amount" />
      </div>
      <div>
        <label class="item__label" for="inOut">분류</label>
        <section class="button__section in__out__section">
          <button
            type="button"
            class="btn"
            :class="inOut === 'inCome' ? 'active' : ''"
            @click="inOut = 'inCome'"
          >
            수입
          </button>
          <button
            type="button "
            class="btn"
            :class="inOut === 'outGoing' ? 'active' : ''"
            @click="inOut = 'outGoing'"
          >
            지출
          </button>
        </section>
      </div>
      <div>
        <label class="item__label" for="bookDate">일정 </label>
        <vc-date-picker
          v-model="bookDate"
          mode="dateTime"
          :model-config="{
            type: 'string',
            mask: 'YYYY.MM.DD HH:mm:ss', // Uses 'iso' if missing
          }"
          is24hr
        >
          <template v-slot="{ inputValue, inputEvents }">
            <input
              class="px-2 py-1 border rounded focus:outline-none focus:border-blue-300"
              :value="inputValue"
              v-on="inputEvents"
              type="text"
            />
          </template>
        </vc-date-picker>
      </div>
      <div>
        <label class="item__label" for="bookTitle">제목 </label>
        <input v-model="bookTitle" id="bookTitle" type="text" />
      </div>
      <div>
        <label class="item__label" for="purpose">{{
          inOut === 'outGoing' ? '사용내역' : '내역'
        }}</label>
        <select
          id="purpose"
          v-model="outGoingPurpose"
          v-if="inOut === 'outGoing'"
        >
          <option
            v-for="{ value, name } in outGoingPurposeCodeList"
            :value="value"
            :key="value"
          >
            {{ name }}
          </option>
        </select>
        <input type="text" v-else v-model="inPurpose" />
      </div>
      <section class="button__section">
        <button type="submit" class="btn">등록</button>
        <button type="reset" class="btn">초기화</button>
      </section>
    </form>
  </section>
</template>

<script>
import { outGoingPurposeCodeList } from '@/storage/index';
export default {
  components: {},
  data() {
    return {
      inOut: 'outGoing',
      bookDate: '',
      bookTitle: '',
      bookContents: '',
      amount: '',
      purpose: '',
      inPurpose: '',
      outGoingPurpose: outGoingPurposeCodeList[0].value,
      timezone: '',
      outGoingPurposeCodeList,
    };
  },
  methods: {
    async submitMoneyBookPost() {
      if (!this.amount) {
        alert('금액을 입력해주세요');
        return;
      }
      if (!this.bookTitle) {
        alert('제목을 입력해주세요');
        return;
      }
      if (this.inOut === 'income' && !this.inPurpose) {
        alert('수입 내용을 입력해주세요');
        return;
      }
      const result = await this.$store.dispatch('createAccountBook', {
        token: this.$store.state.token,
        amount: this.amount,
        bookTitle: this.bookTitle,
        inOut: this.inOut,
        inPurpose: this.inPurpose,
        outGoingPurpose: this.outGoingPurpose,
        bookDate: this.bookDate,
      });
      if (!result.isSuccess) {
        alert(result.message);
      }
      alert('등록이 완료되었습니다');
      this.$router.push('/main/list');
    },
  },
  async created() {
    const { seq: paramSeq } = this.$route.params;
    if (paramSeq) {
      const {
        seq,
        inOut,
        bookDate,
        bookTitle,
        amount,
        inPurpose,
        outGoingPurpose,
      } = await this.$store.dispatch('getAccountBook', { seq: paramSeq });
      if (seq) {
        this.amount = amount;
        this.inOut = inOut;
        const _bookDate = new Date(bookDate);
        const year = _bookDate.getFullYear();
        const month =
          _bookDate.getMonth() + 1 < 10
            ? `0${_bookDate.getMonth() + 1}`
            : _bookDate.getMonth();
        const date =
          _bookDate.getDate() + 1 < 10
            ? `0${_bookDate.getDate()}`
            : _bookDate.getDate();
        const hour =
          _bookDate.getHours() + 1 < 10
            ? `0${_bookDate.getHours()}`
            : _bookDate.getHours();
        const minute =
          _bookDate.getMinutes() + 1 < 10
            ? `0${_bookDate.getMinutes()}`
            : _bookDate.getMinutes();
        this.bookDate = `${year}.${month}.${date} ${hour}:${minute}`;
        this.bookTitle = bookTitle;
        this.inPurpose = inPurpose;
        this.outGoingPurpose = outGoingPurpose;
      }
      return;
    }
    const today = new Date();
    const year = today.getFullYear();
    const month =
      today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today.getMonth();
    const date =
      today.getDate() + 1 < 10 ? `0${today.getDate()}` : today.getDate();
    const hour =
      today.getHours() + 1 < 10 ? `0${today.getHours()}` : today.getHours();
    const minute =
      today.getMinutes() + 1 < 10
        ? `0${today.getMinutes()}`
        : today.getMinutes();
    this.bookDate = `${year}.${month}.${date} ${hour}:${minute}`;
  },
};
</script>

<style scoped>
.title__section {
  margin: 0 auto;
  width: 500px;
  padding: 2% 10px;
  background-color: #f7f6f9;
  box-sizing: border-box;
}
.in__out__section button {
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid #8d39a3;
  color: #8d39a3;
}
.in__out__section button.active {
  background-color: #8d39a3;
  border: 0px;
  color: #fff;
}
.item__label {
}
</style>
