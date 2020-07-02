<template>
  <a-input-search :allowClear="true" size="large" placeholder="Search Kanji" @search="onSearch" />
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    onSearch: function(value) {
      if (value !== "") this.$router.push({ path: `/kanji/${value}` });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
