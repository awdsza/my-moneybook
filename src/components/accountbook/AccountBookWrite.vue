<template>
  <section class="content__section">
    <form @submit.prevent="submitMoneyBookPost">
      <section class="item__content">
        <label class="item__label" for="amount">비용 </label>
        <input type="number" v-model="amount" id="amount" />
      </section>
      <section class="item__content">
        <label class="item__label" for="inOutType">분류</label>
        <section class="button__section in__out__section">
          <button
            type="button"
            class="btn"
            :class="inOutType === 'inCome' ? 'active' : ''"
            @click="inOutType = 'inCome'"
          >
            수입
          </button>
          <button
            type="button"
            class="btn"
            :class="inOutType === 'outGoing' ? 'active' : ''"
            @click="inOutType = 'outGoing'"
          >
            지출
          </button>
        </section>
      </section>
      <section class="item__content">
        <label class="item__label" for="bookDate">일정 </label>
        <vc-date-picker
          v-model="bookDate"
          :model-config="{
            type: 'string',
            mask: 'YYYY.MM.DD', // Uses 'iso' if missing
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
      </section>
      <section class="item__content">
        <label class="item__label" for="bookTitle">제목 </label>
        <input v-model="bookTitle" id="bookTitle" type="text" />
      </section>
      <section class="item__content">
        <label class="item__label" for="purpose">{{
          inOutType === 'outGoing' ? '사용내역' : '내역'
        }}</label>
        <select
          id="purpose"
          v-model="outGoingPurpose"
          v-if="inOutType === 'outGoing'"
        >
          <option
            v-for="{ seq, category, categoryName } in outGoingPurposeCodeList"
            :value="category"
            :key="seq"
          >
            {{ categoryName }}
          </option>
        </select>
        <select id="purpose" v-model="inPurpose" v-else>
          <option
            v-for="{ seq, category, categoryName } in inComePurposeCodeList"
            :value="category"
            :key="seq"
          >
            {{ categoryName }}
          </option>
        </select>
      </section>
      <section class="button__section item__content">
        <button type="submit" class="btn">등록</button>
        <button type="reset" class="btn">초기화</button>
        <button
          type="button"
          class="btn"
          @click="fnOnClickDelete"
          v-show="paramSeq"
        >
          삭제
        </button>
      </section>
    </form>
  </section>
</template>

<script>
import * as format from 'date-format';

export default {
  components: {},
  data() {
    return {
      paramSeq: '',
      inOutType: 'outGoing',
      bookDate: '',
      bookTitle: '',
      bookContents: '',
      amount: '',
      purpose: '',
      inPurpose: '',
      outGoingPurpose: '',
      inComePurpose: '',
      timezone: '',
      outGoingPurposeCodeList: [],
      inComePurposeCodeList: [],
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
      if (this.inOutType === 'income' && !this.inPurpose) {
        alert('수입 내용을 입력해주세요');
        return;
      }
      let result = null;
      if (this.paramSeq) {
        result = await this.$store.dispatch('updateAccountBook', {
          seq: this.paramSeq,
          token: this.$store.state.token,
          amount: this.amount,
          bookTitle: this.bookTitle,
          inOutType: this.inOutType,
          inPurpose: this.inPurpose,
          outGoingPurpose: this.outGoingPurpose,
          bookDate: this.bookDate,
        });
      } else {
        result = await this.$store.dispatch('createAccountBook', {
          token: this.$store.state.token,
          amount: this.amount,
          bookTitle: this.bookTitle,
          inOutType: this.inOutType,
          inPurpose: this.inPurpose,
          outGoingPurpose: this.outGoingPurpose,
          bookDate: this.bookDate,
        });
      }
      if (!result.isSuccess) {
        alert(result.message);
      }
      alert('등록이 완료되었습니다');
      this.$router.push('/main/list');
    },
    async fnOnClickDelete() {
      if (confirm('삭제하시겠습니까?')) {
        const { isSuccess } = await this.$store.dispatch('deleteAccountBook', {
          seq: this.paramSeq,
        });
        if (isSuccess) {
          alert('삭제 되었습니다');
          this.$router.push('/main/list');
        }
      }
    },
  },

  async created() {
    //사용자 가게부 카테고리 값 로딩.
    this.outGoingPurposeCodeList = await this.$store.dispatch('getCategories', {
      inOutType: this.inOutType,
    });
    this.inComePurposeCodeList = await this.$store.dispatch('getCategories', {
      inOutType: 'inCome',
    });
    this.bookDate = format('yyyy.MM.dd', new Date());
    this.outGoingPurpose = this.outGoingPurposeCodeList[0].category;
    this.inComePurpose = this.inComePurposeCodeList[0].category;
    const { seq: paramSeq } = this.$route.params;
    if (paramSeq) {
      this.paramSeq = paramSeq;
      const {
        seq,
        inOutType,
        bookDate,
        bookTitle,
        amount,
        inPurpose,
        outGoingPurpose,
      } = await this.$store.dispatch('getAccountBook', { seq: paramSeq });
      if (seq) {
        this.amount = amount;
        this.inOutType = inOutType;
        this.bookDate = format('yyyy.MM.dd', new Date(bookDate));
        this.bookTitle = bookTitle;
        this.inPurpose = inPurpose;
        this.outGoingPurpose = outGoingPurpose;
      }
    }
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
.item__content:nth-child(n + 1) {
  margin-top: 10px;
}
</style>
