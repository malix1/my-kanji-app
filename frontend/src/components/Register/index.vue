<template>
  <a-card class="form">
    <img
      slot="cover"
      alt="logo"
      src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2020/01/vue-eyecatch-960x504.jpeg"
    />
    <a-form :form="form" @submit="handleSubmit">
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
              rules: [{ required: true, message: 'You must fill this field' }],
            },
          ]"
        >
          <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.55)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          type="password"
          placeholder="Password"
          v-decorator="[
            'password2',
            {
              rules: [{ required: true, message: 'You must fill this field' }],
            },
          ]"
        >
          <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.55)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">
          Register
        </a-button>
      </a-form-item>
    </a-form>
    <div class="error-label" :key="error" v-for="error in errors">{{ error }}</div>
  </a-card>
</template>

<script>
import { createUser } from "../../api/userService";
export default {
  name: "Register",
  data: function() {
    return {
      form: this.$form.createForm(this, { name: "coordinated" }),
      errors: [],
      response: "",
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (!err) {
          const { password, password2 } = values;
          if (password !== password2) {
            this.errors = ["Password did not match"];
          } else {
            const response = await createUser(values);
            if (response instanceof Array) {
              this.errors = response;
            } else {
              this.response = response.message;
            }
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
.error-label {
  color:red;
  width:100%
}
</style>
