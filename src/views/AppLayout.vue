<template>
  <v-app>
    <header class="masthead mb-auto header">
        <div class="inner">
          <h3 class="masthead-brand text-info">Coins Dashboard</h3>
          <nav class="nav nav-masthead justify-content-center">
            <a class="nav-link active" href="#"><router-link to="/">Home</router-link></a>
          </nav>
        </div>
            <router-view />
      </header>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
</style>