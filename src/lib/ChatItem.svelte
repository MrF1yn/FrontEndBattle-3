

<script lang="ts">
    export let right: boolean;
    export let text: string;
    export let date: string;
</script>

<div class="  h-fit font-[RoobertRegular]
{right?'bg-primary-accent ml-auto rounded-tl-md rounded-bl-md rounded-br-md':'bg-primary-background-3 mr-auto rounded-tr-md rounded-bl-md rounded-br-md'} flex flex-col text-lg p-2">
    <span class="whitespace-pre-line">{text}</span>
    <span class="ml-auto text-sm">{date}</span>
</div>