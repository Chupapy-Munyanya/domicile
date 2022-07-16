<script lang="ts">
    import Card, { Content as CardContent, PrimaryAction } from '@smui/card';
    import { writeSelectedTaskInStorage } from "../stores/task.store";
    import { Task } from "../models/task.js";

    const taskStates = ['Unresolved', 'In Progress', 'Reviewing', 'Reviewed'];

    function setTasksTemp(state: string): Task[] {
        return [new Task('t-0', 'Test Task 0', 'Пупа и Лупа пришли в парфюмерную. Им выдали пробники духов, но у Лупы был заложен нос, поэтому Пупа нюхнул за Лупу.', state),
            new Task('t-1', 'Test Task 1', 'Пупе и Лупе поручили построить памятник около здания администрации города. Внезапно Лупу отправили в длительную командировку, поэтому Пупе пришлось строить за Лупу в центре города.', state),
            new Task('t-2', 'Test Task 2', 'Лупа и Пупа работали трубочистами. Однажды, их заказал дедушка к себе на дачу. Они договорились, что сначала дымоход должен был чистить Лупа, поэтому Пупа чистил дымоход дедушке за Лупой.', state)]
    }

    //как дима напишет бек, тут будет обработка запросов
</script>

<main>
    <h1 class="mdc-typography--headline4">Task states</h1>
    <div class="task-states">
        {#each taskStates as state, stateIndex}
            <div class="task-state">
                <h2 class="mdc-typography--headline5">{state}</h2>
                {#each setTasksTemp(state) as task, taskIndex}
                    <a class="task" href="/task/{taskIndex}">
                        <Card padded>
                            <PrimaryAction on:click={(e) => writeSelectedTaskInStorage(e, task)}>
                                <CardContent class="mdc-typography--body2">
                                    <h2 class="mdc-typography--headline6">{task.name} - {task.title}</h2>
                                    <h3 class="mdc-typography--subtitle2">{task.state}</h3>
                                </CardContent>
                            </PrimaryAction>
                        </Card>
                    </a>
                {/each}
            </div>
        {/each}
    </div>
</main>


<style lang="scss">
    @use '@material/typography/mdc-typography';
    @use '@material/typography/index' as typography;

    html {
        @include typography.typography('body2');
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
        text-decoration: none;
        background-color: blanchedalmond;
        margin-top: 5%;
    }
</style>