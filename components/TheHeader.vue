<template>
  <div class="fixed-top sticky-top">
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="/">Elefant</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <li class="nav-item">
            <nuxt-link :to="{name: 'home'}" class="nav-link" exact>
              Home
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link :to="{name: 'home'}" class="nav-link" exact>
              Team
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link :to="{name: 'price'}" class="nav-link" exact>
              Price
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link :to="{name: 'home'}" class="nav-link" exact>
              About us
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link :to="{name: 'admin'}" class="nav-link" exact>
              Admin pages
            </nuxt-link>
          </li>

        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown v-if="$auth.loggedIn === true" right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <strong>User</strong>
            </template>
            <b-dropdown-item href="/user">Profile</b-dropdown-item>
            <b-dropdown-item @click.prevent="onSingOut">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-navbar-nav v-else right>
            <li class="nav-item">
              <nuxt-link :to="{name: 'login'}" class="nav-link" exact>
                Sing In
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link :to="{name: 'register'}" class="nav-link" exact>
                <strong>Join now</strong>
              </nuxt-link>
            </li>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
    export default {
      name: "TheHeader",
      methods: {
        async onSingOut () {
          await this.$auth.logout()
          this.$router.replace({ name: 'home' })
        }
      }
    }
</script>

<style scoped>

</style>
