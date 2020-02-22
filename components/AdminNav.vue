<template>
  <div>
    <b-nav tabs>
      <li class="nav-item">
        <nuxt-link :to="{name: 'users'}" class="nav-link" exact>
          User list
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link :to="{name: 'createUser'}" class="nav-link" exact>
          Create new Users
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link :to="{name: 'price'}" class="nav-link" exact>
          Price
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link :to="{name: 'coach'}" class="nav-link" exact>
          Coachs
        </nuxt-link>
      <li class="nav-item">
        <nuxt-link :to="{name: 'createCoach'}" class="nav-link" exact>
          Create new coach
        </nuxt-link>
      </li>
    </b-nav>
  </div>
</template>

<script>
    export default {
        name: "AdminNav"
    }
</script>

<style scoped lang="scss">/*
  .adminNavigation {
    display: inline-block;
    width: 300px;
    padding-top: 0px;
    .nav-link{
      width: 200px;
      padding-left: 30px;
    }
  }*/
</style>
