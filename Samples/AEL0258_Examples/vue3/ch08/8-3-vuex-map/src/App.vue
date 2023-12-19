<template>
  <div id="app">
      <label for="ntd">
        台幣：
        <input type="text" id="ntd" v-model="currentNtd" />
      </label>
      <ul>
          <li>美金：{{ usd }} (匯率：{{ usdRate }})</li>
          <li>日元：{{ jpn }} (匯率：{{ jpnRate }})</li>
      </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'App',
  data: () => ({
    currentNtd: 0,
  }),
  computed: {
    ...mapState({
      usdRate: state => state.usdRate,
      jpnRate: state => state.jpnRate,
    }),
    ...mapGetters([
      'usd', 'jpn'
    ]),
  },
  methods: {
    ...mapMutations([
      'updateNtd'
    ]),
    ...mapActions([
      'updateCurrencyExchangeRates'
    ]),
  },
  watch: {
    currentNtd: function(newValue) {
      this.updateNtd(newValue);
    }
  },
  mounted() {
    this.updateCurrencyExchangeRates();
  },
};
</script>

<style>
#app ul li {
  list-style-type: none;
}
</style>
