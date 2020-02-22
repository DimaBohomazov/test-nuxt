<template>
  <b-container class="d-flex justify-content-center">
    <b-form @submit.prevent="onSubmit" class="register-form">
      <h3 class="text-center">
        New Coach
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
      <b-button pill class="btn-block " type="submit">
        Send form
      </b-button>
    </b-form>
  </b-container>
</template>

<script>
    export default {
        name: "createCoach",
      layout: 'admLay',
      data: () => ({
        form: {
          firstName: '',
          lastName: '',
          email: '',
          phone: ''
        }
      }),
      methods: {
        async onSubmit() {
          try {
            await this.$axios.$post('/createdCoach', this.form)
          } catch (e) {
            console.log(e)
          }
          this.$router.replace({ name: 'coach' })
        }
      }
    }
</script>

<style scoped>

</style>
