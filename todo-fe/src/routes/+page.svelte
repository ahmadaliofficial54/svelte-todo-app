<script>
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  let newTask = "";
  /**
   * @type {any[]}
   */
  let tasks = [];
  let isEdit = -1;
  function saveTask() {
    tasks = [...tasks, { task: newTask, isCompleted: false }];
    newTask = "";
  }
  function saveEditedTask() {
    tasks = tasks.map((item, index) =>
      isEdit === index ? { task: newTask, isCompleted: item.isCompleted } : item
    );
    isEdit = -1;
    newTask = "";
  }

  /**
   * @param {number} index
   */
  function editTask(index) {
    isEdit = index;
    newTask = tasks[index].task;
  }
  /**
   * @param {number} index
   */
  function removeTask(index) {
    tasks = tasks.filter((_, i) => i !== index);
  }
</script>

<div class="p-4">
  <h1 class="text-center text-4xl mb-10">Todo App in Svelte</h1>
  <h1 class="my-5 text-2xl text-center underline">Add a task</h1>
  <div class="mt-5 flex justify-center">
    <form
      class="flex gap-3"
      on:submit|preventDefault={isEdit === -1 ? saveTask : saveEditedTask}
    >
      <Input
        type="text"
        bind:value={newTask}
        required
        placeholder="Add a task"
      />
      <Button type="submit">Save Task</Button>
    </form>
  </div>
  <hr class="mt-3" />
  <div>
    <h1 class="my-5 text-2xl text-center underline">Tasks</h1>
    <div class="flex flex-col mt-3 mx-auto w-1/2">
      {#each tasks as item, index}
        <div
          class="flex items-center justify-between gap-5 my-3 bg-slate-50 px-2 rounded-md"
        >
          <p
            class="text-2xl leading-none flex-1"
            style:text-decoration={item.isCompleted ? "line-through" : ""}
          >
            {item.task}
          </p>
          <div class="flex items-center">
            <Button
              variant="link"
              on:click={() => (item.isCompleted = !item.isCompleted)}
              >Mark as {item.isCompleted ? "Undone" : "Done"}</Button
            >
            <Button variant="link" on:click={() => editTask(index)}>Edit</Button
            >
            <Button variant="link" on:click={() => removeTask(index)}
              >Remove</Button
            >
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
