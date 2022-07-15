<script lang="ts">
    import Card, { Content, PrimaryAction, Media, MediaContent, Actions } from '@smui/card';
    import { Task } from "../models/task";

    const taskStates = ['Unresolved', 'In Progress', 'Reviewing', 'Reviewed'];
    //как дима напишет бек, тут будет обработка запросов
</script>

<main>
    <h1>Task states</h1>
    <div class="task-states">
        {#each taskStates as state, stateIndex}
            <div class="task-state">
                <h2>{state}</h2>
                {#each [new Task('t-0', 'Test Task 0', state), 
                        new Task('t-1', 'Test Task 1', state),
                        new Task('t-2', 'Test Task 2', state)] as task, taskIndex}
                    <div class="task">
                        <Card>
                            <!-- <PrimaryAction on:click={openTaskDetails()}> -->
                            <PrimaryAction>
                                <Content>
                                    <h2>{task.name} - {task.title}</h2>
                                    <h3>{task.state}</h3>
                                </Content>
                            </PrimaryAction>
                        </Card>
                    </div>
                {/each}
            </div>
        {/each}
    </div>
</main>

<style>
    .task-states {
        display: flex;
        flex-direction: row;
        background-color: azure;
        justify-content: center;
    }

    .task-state {
        display: flex;
        flex-direction: column;
        background-color: cornflowerblue;
        width: 200px;
        margin-right: 1%;
    }

    .task {
        height: 200px;
        background-color: blanchedalmond;
        margin-top: 20px;
    }
</style>