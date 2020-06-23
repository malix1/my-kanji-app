<template>
  <a-card class="form">
    <img
      slot="cover"
      alt="logo"
      src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2020/01/vue-eyecatch-960x504.jpeg"
    />
    <a-form :form="form" @submit="loginUser">
      <a-form-item>
        <a-input
          placeholder="Email"
          v-decorator="[
            'email',
            {
              rules: [
                { required: true, message: '' },
                { type: 'email', message: 'Please enter a valid email' },
              ],
            },
          ]"
        >
          <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.55)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          type="password"
          placeholder="Password"
          v-decorator="[
            'password',
            {
              rules: [{ required: true, message: '' }],
            },
          ]"
        >
          <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.55)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">
          Login
        </a-button>
      </a-form-item>
      Do not you have an account ? <a href="register">Register</a>
    </a-form>
  </a-card>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: this.$form.createForm(this, { name: "coordinated" }),
    };
  },
  methods: {
    loginUser(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (!err) {
          await this.$store.dispatch("loginUser", values);
          if (this.$store.getters.getCurrentUser !== "") {
            this.$router.push("/");
          }
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  margin: 4% auto;
  width: 25%;
}
</style>
