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

export default {
  name: 'App',
  data: () => ({
    currentNtd: 0,
  }),
  computed: {
    usdRate() {
      return this.$store.state.usdRate;
    },
    jpnRate() {
      return this.$store.state.jpnRate;
    },
    usd() {
      return this.$store.getters.usd;
    },
    jpn() {
      return this.$store.getters.jpn;
    },
  },
  watch: {
    currentNtd: function(newValue) {
      this.$store.commit('updateNtd', newValue);
    }
  },
  mounted() {
    this.$store.dispatch('updateCurrencyExchangeRates');
  },
};
</script>

<style>
#app ul li {
  list-style-type: none;
}
</style>
