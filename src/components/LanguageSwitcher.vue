<template>
  <div class="language-switcher">
    <button @click="setLocale('en')">English</button>
    <button @click="setLocale('fr')">Français</button>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { locale } = useI18n();

    const setLocale = (lang) => {
      locale.value = lang;
    };

    return {
      setLocale
    };
  }
};
</script>

<style scoped>
.language-switcher {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.language-switcher button {
  padding: 8px 16px;
  margin: 0 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  background-color: #1976d2;
  color: white;
}

.language-switcher button:hover {
  background-color: #1565c0;
}
</style>
