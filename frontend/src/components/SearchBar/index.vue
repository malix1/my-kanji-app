<template>
  <a-input-search placeholder="Search Kanji" @search="onSearch" />
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    onSearch: function(value) {
      this.$router.push({ path: `/kanji/${value}` });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
