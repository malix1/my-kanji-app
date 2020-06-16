<template>
  <div class="form">
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item>
        <a-input
          placeholder="Email"
          v-decorator="[
            'Email',
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
            'Password',
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
    </a-form>
  </div>
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
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  margin: 10% auto;
  width: 35%;
}
</style>
