<template>
  <div>
    <TheHeader />
    <AdminNav />
    <nuxt />
  </div>
</template>

<script>
    import AdminNav from "../components/AdminNav";
    import TheHeader from "../components/TheHeader";
    export default {
        name: "admLay",
        components: {TheHeader, AdminNav}
    }
</script>

<style scoped>

</style>
