<template>
  <b-container class="d-flex justify-content-center">
    <b-form @submit.prevent="onSubmit" class="login-form">
      <h3 class="text-center">
        Login
      </h3>
      <b-form-group
        label="Email address:"
        label-for="email">
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        />
      </b-form-group>
      <b-form-group
      label="Password:"
      label-for="password">
        <b-form-input
          id="password"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter password"
        />
      </b-form-group>
      <b-button class="btn-block" type="submit" variant="primary">
        Login
      </b-button>
      <nuxt-link :to="{ name: 'register' }" class="btn btn-block btn-link" tag="button">
        Go to registration
      </nuxt-link>
      <nuxt-link :to="{ name: 'home' }" class="btn btn-block btn-link" tag="button">
        Home page
      </nuxt-link>
    </b-form>
  </b-container>
</template>

<script>
    export default {
        name: "login",
        auth: false,
        layout: 'empty',
        data: () =>({
          form:{
            email: '',
            password: '',
          }
        }),
      methods:{
          async onSubmit () {
            await this.$auth.loginWith('local',{ data: this.form });
            this.$router.replace({ name: 'home' })
          }
      }
    }
</script>

<style scoped lang="scss">

</style>
