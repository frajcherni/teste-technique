import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    message: {
      hello: 'hello world',
      addTask: 'Add Task',
      newTask: 'New Task',
      title: 'Title',
      status: 'Status',
      actions: 'Actions',
      complete: 'Complete',
      delete: 'Delete',
      viewCompleted: 'View Completed Tasks',
      pending: 'Pending',
    },
    backToList: 'Back to Task List',
    chart: {
      chartTypeLabel: 'Chart Type:',
      barChart: 'Bar Chart',
      lineChart: 'Line Chart',
      pieChart: 'Pie Chart',
      completedTasks: 'Completed Tasks',
      pendingTasks: 'Pending Tasks',
      taskDistribution: 'Task Distribution'
    }
  },
  fr: {
    message: {
      hello: 'Bonjour le monde',
      addTask: 'Ajouter',
      newTask: 'Nouvelle Tâche',
      title: 'Titre',
      status: 'Statut',
      actions: 'Actions',
      complete: 'Terminer',
      delete: 'Supprimer',
      viewCompleted: 'Voir les Tâches Terminées',
      pending: 'En cours',
    },
    backToList: 'Retour à la Liste des Tâches',
    chart: {
      chartTypeLabel: 'Type de graphique :',
      barChart: 'Barre',
      lineChart: 'Ligne',
      pieChart: 'Camembert',
      completedTasks: 'Tâches terminées',
      pendingTasks: 'Tâches en cours',
      taskDistribution: 'Répartition des tâches'
    }
  }
};

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages
});

export default i18n;
