<template>
  <div>
    <Navbar />
    <a-row style="margin:2%" type="flex" justify="center">
      <a-col :span="13">
        <SearchBar />
      </a-col>
    </a-row>
    <!--     <Kanji kanji="法" /> -->
  </div>
</template>

<script>
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
export default {
  name: "HomePage",
  components: {
    Navbar,
    SearchBar
  },
  data() {
    return {
      kanji: {}
    };
  },
  created: function() {},
  methods: {
    onSearch: function(value) {
      this.$router.push({ path: `/kanji/${value}` });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
