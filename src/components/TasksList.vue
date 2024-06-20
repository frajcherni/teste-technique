<template>
  <div class="task-manager">
    <!-- Chart Component -->
    <div class="chart-container">
      <TaskChart :tasks="tasks" />
    </div>

    <!-- Task List -->
    <div class="task-list-container">
      <h1 class="heading">{{ $t('message.newTask') }}</h1>

      <!-- Task Input Form -->
      <form @submit.prevent="addTask">
        <label for="taskInput">{{ $t('message.newTask') }}:</label>
        <input id="taskInput" type="text" v-model="newTaskTitle.value" required>
        <button type="submit">{{ $t('message.addTask') }}</button>
      </form>

      <!-- Task Table -->
      <table class="task-table">
        <thead>
          <tr>
            <th>{{ $t('message.title') }}</th>
            <th>{{ $t('message.status') }}</th>
            <th>{{ $t('message.actions') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task.id">
            <td>{{ task.title }}</td>
            <td>
              <span v-if="task.completed" class="status completed">{{ $t('message.complete') }}</span>
              <span v-else class="status pending">{{ $t('message.pending') }}</span> <!-- Update here -->
            </td>
            <td>
              <button @click="completeTask(task.id)" v-if="!task.completed">{{ $t('message.complete') }}</button>
              <button @click="removeTask(task.id)">{{ $t('message.delete') }}</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Completed Tasks Link -->
      <router-link to="/completed" class="completed-link">{{ $t('message.viewCompleted') }}</router-link>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n'; // Import useI18n to access translations

import TaskChart from './TaskChart.vue';

export default {
  components: {
    TaskChart
  },
  setup() {
    const store = useStore();
    const { t } = useI18n(); // Destructure t function from useI18n

    // Reactive state for new task input
    const newTaskTitle = reactive({
      value: ''
    });

    // Get tasks from Vuex store
    const tasks = computed(() => store.state.tasks);

    // Method to add new task
    const addTask = () => {
      if (newTaskTitle.value.trim() !== '') {
        const newTask = {
          id: Math.floor(Math.random() * 1000),
          title: newTaskTitle.value.trim(),
          completed: false
        };
        store.dispatch('addNewTask', newTask);
        newTaskTitle.value = ''; // Clear input after adding task
      }
    };

    // Method to complete task
    const completeTask = (taskId) => {
      store.dispatch('completeTask', taskId);
    };

    // Method to remove task
    const removeTask = (taskId) => {
      store.dispatch('deleteTask', taskId);
    };

    return {
      newTaskTitle,
      tasks,
      addTask,
      completeTask,
      removeTask,
      t
    };
  },
};
</script>

<style scoped>
.task-manager {
  display: flex;
  justify-content: space-between;
}

.chart-container {
  flex: 1;
  margin-right: 20px;
}

.task-list-container {
  flex: 2;
}

.heading {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.task-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.task-table th, .task-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.task-table th {
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

button {
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
  background-color: #1976d2;
  color: white;
}

button2 {
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
  background-color: red;
  color: white;
}


button:hover {
  background-color: #1565c0;
}

.completed-link {
  display: block;
  margin-top: 20px;
  color: #1976d2;
  text-decoration: none;
  font-weight: bold;
}
</style>
