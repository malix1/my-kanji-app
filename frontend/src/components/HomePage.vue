<template>
  <div>
    <Navbar />Home Page
    <button @click="getKanji">Get Kanji</button>
    <Kanji kanji="法" />
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Kanji from "./Kanji"
import { getKanjiByGrade } from "../api/kanjiService";
export default {
  name: "HomePage",
  components: {
    Navbar,
    Kanji
  },
  created: function() {},
  methods: {
    getKanji: async function() {
      await getKanjiByGrade(2);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
