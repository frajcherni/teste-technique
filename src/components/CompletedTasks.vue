<template>
  <div>
    <h1>{{ $t('message.viewCompleted') }}</h1>
    <table class="completed-tasks-table">
      <thead>
        <tr>
          <th>{{ $t('message.title') }}</th>
          <th>{{ $t('message.status') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in completedTasks" :key="task.id">
          <td>{{ task.title }}</td>
          <td>
            <span v-if="task.completed" class="status completed">{{ $t('message.complete') }}</span>
            <span v-else class="status pending">{{ $t('pending') }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <router-link class="completed-link" to="/">{{ $t('backToList') }}</router-link>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n'; // Import useI18n to access translations

export default {
  setup() {
    const store = useStore();
    const { t } = useI18n(); // Destructure t function from useI18n

    const completedTasks = computed(() => store.state.tasks.filter(task => task.completed));

    return {
      completedTasks,
      t 
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.completed-tasks-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.completed-tasks-table th, .completed-tasks-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.completed-tasks-table th {
  background-color: #f0f0f0;
}

.status {
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
}

.status.completed {
  background-color: #66bb6a;
  color: white;
}

.status.pending {
  background-color: #ffcc80;
  color: #e65100;
}

router-link {
  display: block;
  margin-top: 20px;
  color: #1976d2;
  text-decoration: none;
  font-weight: bold;
}

.completed-link {
  display: block;
  margin-top: 20px;
  color: #1976d2;
  text-decoration: none;
  font-weight: bold;
}
router-link:hover {
  text-decoration: underline;
}
</style>
