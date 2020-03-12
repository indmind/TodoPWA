<template>
  <div id="task-item">
    <div class="checkbox-container">
      <input
        type="checkbox"
        class="checkbox"
        :id="task['.key']"
        :checked="task.done"
        @change="
          $emit('change', {
            key: task['.key'],
            status: $event.target.checked
          })
        "
      />
      <label :for="task['.key']" />
    </div>

    <p id="name" :class="task.done && 'done'">{{ task.name }}</p>

    <button @click="$emit('delete', task['.key'])" class="btn-noback">
      ❌
    </button>
  </div>
</template>

<script scoped>
export default {
  name: "TaskItem",
  props: {
    task: Object
  }
};
</script>

<style>
#task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#name {
  font-size: 20px;
  font-weight: bold;
}

.done {
  text-decoration: line-through;
  opacity: 0.5;
}

.checkbox {
  background-color: #2196f3;
}

input[type="checkbox"] + label {
  display: block;
  margin: 0.2em;
  cursor: pointer;
  padding: 0.2em;
}

input[type="checkbox"] {
  display: none;
}

input[type="checkbox"] + label:before {
  content: "✔";
  /* font-size: 0.7em; */
  border: 1px solid #000;
  border-radius: 0.2em;
  display: inline-block;
  width: 1em;
  height: 1em;
  padding-left: 0.2em;
  padding-bottom: 0.5em;
  padding-right: 0.2em;
  margin-right: 0.8em;
  vertical-align: bottom;
  color: transparent;
  transition: 0.2s;
}

input[type="checkbox"] + label:active:before {
  transform: scale(0);
}

input[type="checkbox"]:checked + label:before {
  background-color: #42b983;
  border-color: #42b983;
  color: #fff;
}
</style>
