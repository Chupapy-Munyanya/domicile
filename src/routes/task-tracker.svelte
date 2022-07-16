<script lang="ts">
    import Card, { Content, PrimaryAction } from '@smui/card';
    import Dialog, { Title } from '@smui/dialog';

    let selectedTask: Task;
    let isDialogOpen = false;

    class Task {
        public name: string;
        public title: string;
        public state: string;

        constructor(name: string, title: string, state: string) {
            this.name = name;
            this.title = title;
            this.state = state;
        }
    }

    function openTaskDetails(task: Task): void {
        selectedTask = task;
        isDialogOpen = !isDialogOpen;
    }

    const taskStates = ['Unresolved', 'In Progress', 'Reviewing', 'Reviewed'];
    //как дима напишет бек, тут будет обработка запросов
</script>

<main>
    <Dialog bind:isDialogOpen aria-labelledby="title" aria-describedby="content">
        <Title id="title">{selectedTask?.name}</Title>
        <Content id="content">{selectedTask?.title}</Content>
    </Dialog>
    <h1 class="mdc-typography--headline4">Task states</h1>
    <div class="task-states">
        {#each taskStates as state, stateIndex}
            <div class="task-state">
                <h2 class="mdc-typography--headline5">{state}</h2>
                {#each [new Task('t-0', 'Test Task 0', state), 
                        new Task('t-1', 'Test Task 1', state),
                        new Task('t-2', 'Test Task 2', state)] as task, taskIndex}
                    <div class="task">
                        <Card padded>
                             <PrimaryAction on:click={() => openTaskDetails(task)}>
                                <Content class="mdc-typography--body2">
                                    <h2 class="mdc-typography--headline6">{task.name} - {task.title}</h2>
                                    <h3 class="mdc-typography--subtitle2">{task.state}</h3>
                                </Content>
                            </PrimaryAction>
                        </Card>
                    </div>
                {/each}
            </div>
        {/each}
    </div>
</main>


<style lang="scss">
    @use '@material/typography/mdc-typography';
    @use '@material/typography/index' as typography;

    html {
        @include typography.typography('body1');
    }
    .task-states {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        background-color: azure;
        justify-content: center;
        align-items: stretch;
    }

    .task-state {
        display: flex;
        flex-direction: column;
        /*background-color: cornflowerblue;*/
        /*width: 200px;*/
        margin-right: 1%;
    }

    .task {
        /*height: 200px;*/
        background-color: blanchedalmond;
        margin-top: 5%;
    }
</style>