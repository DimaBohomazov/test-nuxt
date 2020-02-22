<template>
  <b-container class="d-flex justify-content-center">
    <b-form @submit.prevent="onSubmit" class="register-form">
      <h3 class="text-center">
        New User
      </h3>
      <b-form-group
        label="First Name:"
        label-for="firstName">
        <b-form-input
          id="firstName"
          v-model="form.firstName"
          type="text"
          required
          placeholder="Enter first name"
        />
      </b-form-group>
      <b-form-group
        label="Last Name:"
        label-for="lastName">
        <b-form-input
          id="lastName"
          v-model="form.lastName"
          type="text"
          required
          placeholder="Enter last name"
        />
      </b-form-group>
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
      <b-form-group
        label="Phone:"
        label-for="phone">
        <b-form-input
          id="phone"
          v-model="form.phone"
          type="text"
          required
          placeholder="Enter phone"
        />
      </b-form-group>
      <b-form-group
        label="Date of Birth:"
        label-for="inputDate">
        <b-form-input
          id="dateOfBirth"
          v-model="form.dateOfBirth"
          type="date"
          required
          placeholder="Enter date of birth"
        />
      </b-form-group>
      <b-button pill class="btn-block " type="submit">
        Send form
      </b-button>
    </b-form>
  </b-container>
</template>

<script>
  export default {
    name: "CreateUser",
    layout: 'admLay',
    data: () => ({
      form: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        dateOfBirth: ''
      }
    }),
    methods: {
      async onSubmit() {
        try {
          await this.$axios.$post('/register', this.form)
        } catch (e) {
          console.log(e)
        }
        this.$router.replace({ name: 'users' })
      }
    }
  }
</script>

<style scoped>

</style>
