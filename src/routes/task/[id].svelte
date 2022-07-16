<script lang="ts">
    import {selectedTask} from "../../stores/task.store";
    import {Task} from "../../models/task";
    import { onMount } from "svelte";

    let task: Task;

    onMount(async() => {
        if ($selectedTask instanceof Task) {
            task = $selectedTask;
        }
    });
</script>

<main>
    <h1>{task.name} - {task.title}</h1>
    <h2>{task.description}</h2>
</main>

<style>

</style>