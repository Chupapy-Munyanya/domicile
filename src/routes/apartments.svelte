<script lang="ts">
    import ZhKCard from "./zh_k_card.svelte";
    import { onMount } from "svelte";
    import { base_url } from "../consts";
    const appartments_endpoint = base_url + "apartments/";

    class data_type {
        name = "";
        image = "";
        builder = "";
        descr = "";
        id = 0;
    }
    export let posts = Array<data_type>();

    onMount(async function () {
        const response = await fetch(appartments_endpoint);
        const data = await response.json();
        console.log(data);
        posts = data.results;
    });
</script>

{#each posts as post}
    <ZhKCard
        name={post.name}
        descr={post.descr}
        builder={post.builder}
        img_src={post.image}
    />
{/each}
