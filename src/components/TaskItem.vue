<template>
  <div id="task-item">
    <div class="checkbox-container">
      <input
        type="checkbox"
        :id="task['.key']"
        :checked="task.done"
        @change="
          $emit('check', {
            key: task['.key'],
            status: $event.target.checked
          })
        "
      />
      <label :for="task['.key']" class="shadow" />
    </div>

    <label :for="task['.key']" id="name" :class="task.done && 'done'">{{
      task.name
    }}</label>

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
  padding: 15px 0;
}

#name {
  font-size: 20px;
  font-weight: bold;
}

.done {
  text-decoration: line-through;
  opacity: 0.5;
}

input[type="checkbox"] + label.shadow {
  display: block;
  cursor: pointer;
}

input[type="checkbox"] {
  display: none;
}

input[type="checkbox"] + label.shadow:before {
  content: "✔";
  border: 0.1em solid #2c3e50;
  border-radius: 0.2em;
  display: inline-block;
  width: 1em;
  height: 1em;
  padding-left: 0.2em;
  padding-bottom: 0.4em;
  padding-right: 0.2em;
  color: transparent;
  transition: 0.2s;
}

input[type="checkbox"] + label.shadow:active:before {
  transform: scale(0);
}

input[type="checkbox"]:checked + label.shadow:before {
  background-color: #42b983;
  border-color: #42b983;
  color: #fff;
}
</style>
