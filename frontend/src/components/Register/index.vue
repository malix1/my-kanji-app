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
            'confPassword',
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
  </a-card>
</template>

<script>
export default {
  name: "Register",
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
  margin: 4% auto;
  width: 25%;
}
</style>
