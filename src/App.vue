<template>
  <div id="app">
    <div id="header">
      <h1>Todo</h1>
    </div>

    <input type="text" v-model="addTaskName" placeholder="Task" class="input" />
    <button @click="addTask" class="btn">Add</button>

    <ul id="tasks-list">
      <li v-for="task in sortedTasks" :key="task.id">
        <TaskItem
          :task="task"
          @change="onTaskChecked"
          @delete="onTaskDeleted"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import TaskItem from "@/components/TaskItem.vue";

import { db, serverTimestamp } from "./firebase";

export default {
  name: "App",
  components: { TaskItem },
  firestore() {
    return {
      sortedTasks: db.collection("tasks").orderBy("created", "desc"),
      tasks: db.collection("tasks")
    };
  },
  data() {
    return {
      lat: [],
      addTaskName: ""
    };
  },
  methods: {
    onTaskChecked({ key, status }) {
      this.$firestore.tasks.doc(key).update({
        done: status
      });
    },
    onTaskDeleted(key) {
      this.$firestore.tasks.doc(key).delete();
    },
    addTask() {
      this.$firestore.tasks.add({
        name: this.addTaskName,
        done: false,
        created: serverTimestamp()
      });

      this.addTaskName = "";
    }
  }
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#header {
  padding-top: 1px;
  padding-bottom: 1px;
  margin-bottom: 30px;
  background-color: #42b983;
  color: white;
}

#tasks-list {
  list-style: none;
  margin: 20px auto;
  padding: 0 25px;
  max-width: 400px;
}

.input {
  font-size: 1em;
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid #42b983;
  margin: 5px;
}

.btn {
  border: 1px solid #42b983;
  background-color: #42b983;
  color: white;
  border-radius: 10px;
  font-size: 1em;
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
}

.btn-noback {
  background-color: transparent;
  cursor: pointer;
  border: none;
}
</style>
