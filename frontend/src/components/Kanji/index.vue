<template>
  <a-row :gutter="[48,16]" type="flex" justify="space-around">
    <a-col :span="3">
      <img class="kanji" :src="this.kanjiDetails.kanji.video.poster" />
      <label class="label">
        <label class="bold-label">{{this.kanjiDetails.kanji.strokes.count}}</label>
        Strokes
      </label>
      <label class="label">
        <label class="bold-label">Radical</label>
        <label class="radical">{{this.kanjiDetails.radical.character}}</label>
      </label>
      <video class="kanji" controls :src="this.kanjiDetails.kanji.video.webm"></video>
    </a-col>
    <a-col :span="6">
      <label class="meaning">{{this.kanjiDetails.kanji.meaning.english}}</label>
      <label class="label">
        <label class="bold-label">On</label>
        <label class="readings">{{this.kanjiDetails.kanji.onyomi.katakana}}</label>
      </label>

      <label class="label">
        <label class="bold-label">Kun</label>
        <label class="readings">{{this.kanjiDetails.kanji.onyomi.katakana}}</label>
      </label>
    </a-col>
    <a-col :span="4">col-4</a-col>
    <a-col :span="4">col-4</a-col>
  </a-row>
</template>

<script>
import { getKanjiDetails } from "../../api/kanjiService";
export default {
  name: "Kanji",
  props: {
    kanji: {
      type: String,
      required: true
    }
  },
  created: async function() {
    const response = await getKanjiDetails(this.kanji);
    if (response.status === 200) {
      this.kanjiDetails = response.data;
    }
  },
  data() {
    return {
      kanjiDetails: {}
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.kanji {
  margin: 10px;
  max-height: 100%;
  max-width: 100%;
}
.label {
  display: block;
}
.bold-label {
  font-weight: bold;
  font-size: 18px;
}
.radical {
  font-size: 20px;
}
.meaning {
  font-size: 2em;
  display: block;
}
.readings {
  margin-left: 10px;
  font-size: 1.4em;
}
</style>
