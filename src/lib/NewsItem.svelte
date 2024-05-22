
<script lang="ts">
    import {Icon} from "@sveltestrap/sveltestrap";

    export let title: string;
    export let time: string;
    export let readers: string;
</script>


<div class="flex flex-col w-full items-center hover:bg-primary-background-3 p-2">
    <div class="flex w-full font-[RoobertBold]">{title}</div>
    <div class="flex w-full gap-1 items-center font-[RoobertRegular] text-sm">
        <div>{time} ago</div>
        <Icon name="dot" />
        <div>{readers} Readers</div>
    </div>
</div>
<style>

</style>