import { createRouter, createWebHistory } from 'vue-router';
import TasksList from '../components/TasksList.vue';
import CompletedTasks from '../components/CompletedTasks.vue';
import TaskChart from '../components/TaskChart.vue';


const routes = [
  { path: '/', component: TasksList },
  { path: '/completed', component: CompletedTasks },
  { path: '/chart', component: TaskChart },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
