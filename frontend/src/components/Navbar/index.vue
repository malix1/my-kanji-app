<template>
  <div>
    <a-menu class="navbar" v-model="current" mode="horizontal">
      <a-menu-item key="home"> <a-icon type="home" />Home </a-menu-item>
      <a-menu-item key="learnKanji">
        <a-icon type="appstore" />Learned Kanji
      </a-menu-item>
      <a-menu-item key="studyKanji">
        <a-icon type="appstore" />Study Kanji
      </a-menu-item>
      <a-menu-item key="profile">
        <a href="profile" rel="noopener noreferrer">Profile</a>
      </a-menu-item>
      <a-menu-item key="logout">
        <a :href="isLoggedInText">{{ isLoggedInText }}</a>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      userToken: this.$store.getters.getCurrentUser,
      current: ["mail"],
    };
  },
  computed: {
    isLoggedInText: function() {
      return this.userToken === "" ? "Login" : "Logout";
    },
  },
};
</script>
<style scoped>
.navbar {
  text-align: center;
}
</style>
