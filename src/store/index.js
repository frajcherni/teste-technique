// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    tasks: [
      { id: 1, title: 'Faire les courses', completed: false },
      { id: 2, title: 'Répondre aux emails', completed: true },
    ],
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    removeTask(state, taskId) {
      state.tasks = state.tasks.filter(task => task.id !== taskId);
    },
    completeTask(state, taskId) {
      const task = state.tasks.find(task => task.id === taskId);
      if (task) {
        task.completed = true;
      }
    },
  },
  actions: {
    async addNewTask({ commit }, newTask) {
      await new Promise(resolve => setTimeout(resolve, 500));
      commit('addTask', newTask);
    },

    async deleteTask({ commit }, taskId) {
      await new Promise(resolve => setTimeout(resolve, 500));
      commit('removeTask', taskId);
    },

    async completeTask({ commit }, taskId) {
      await new Promise(resolve => setTimeout(resolve, 500));
      commit('completeTask', taskId);
    },
  },
});
