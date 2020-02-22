<template>
  <div class="content-pages">
    <h1>
      Users
    </h1>
    <div>
      <ul class="text">
        <li v-for="user of users" class="content-pages text">
          <div class="userList">
            <strong>First name</strong>: {{ user.firstName }} <br>
            <strong>Last name</strong>: {{ user.lastName }} <br>
            <strong>Email</strong>: {{user.email}} <br>
            <strong>Phone</strong>: {{user.phone}} <br>
            <strong>Date of birth</strong>: {{user.dateOfBirth}}<br>
            <button @click.prevent="onDelete(user.id)">
            Delete
          </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    import admLay from "../../layouts/admLay";

    export default {
        name: "users",
      layout: 'admLay',
      async asyncData({$axios}){
          let users = []
          try {
            users = await $axios.$get('users')
          } catch (e){
            console.log(e)
          }
          return { users }
      },
      methods:{
        async onDelete (id) {
          try{
            const response = await this.$axios.$delete(`/users/${id}`);
            const index = this.users.findIndex(user => user.id === id);
            this.users.splice(index, 1)
          }catch(e){
            console.log(e)
          }
        }
      }
    }

</script>

<style scoped lang="scss">
  .bottom{
    height: 50px;
  }
</style>
