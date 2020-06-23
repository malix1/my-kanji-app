<template>
  <div>
    Home Page
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  created: function() {
    const loggedInUser = this.$store.getters.getCurrentUser
    if(loggedInUser == ""){
      this.$router.push("/login")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
