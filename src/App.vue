<!-- App.vue -->
<template>
  <div id="app">
    <LanguageSwitcher />
    <router-view></router-view>
  </div>
</template>

<script>
import LanguageSwitcher from './components/LanguageSwitcher.vue';

export default {
  name: 'App',
  components: {
    LanguageSwitcher
  }
};
</script>

<style>
</style>
