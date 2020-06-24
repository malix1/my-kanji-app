<template>
  <div>
    <Navbar />
    You successfuly log out
  </div>
</template>

<script>
import Navbar from "../Navbar";

export default {
  name: "Logout",
  components: {
    Navbar,
  },
  created: function() {
    // delete user token
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
