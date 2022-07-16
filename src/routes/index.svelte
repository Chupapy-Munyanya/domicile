<script lang="ts">
	import Header from './header.svelte';
	import Head from './head.svelte';
	import Nav from './nav.svelte';
    import Apartments from './apartments.svelte';
 //   import {apartmentCards} from '../stores/apartmentsStore';
 //   import {data_type} from '../stores/apartmentsStore';
</script>

<Head />
<Header />
<Nav />
<div class="container">
    <Apartments />
</div>
<a href="/task-tracker">Task Tracker</a>
