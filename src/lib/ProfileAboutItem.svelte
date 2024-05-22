<script lang="ts">
    import {Button, Icon} from "@sveltestrap/sveltestrap";
    export let about: string;
    export let company: boolean = false;
</script>

<div class="w-[100%] md:w-[80%]  h-fit flex flex-col p-3 border-2 gap-2 relative">
    <span class="w-full h-fit font-[RoobertBold] text-3xl text-primary-foreground">
        About
    </span>
    <span class="w-full text-wrap break-words h-fit font-[RoobertRegular] text-xl text-primary-foreground whitespace-pre-wrap">
        {about}
    </span>
    <span class="border-2 p-2 {company?'hidden':''}">
        <span class="flex items-center gap-2 w-full h-fit font-[RoobertBold] text-2xl text-primary-foreground">
            <Icon name="gem"/>
            <span>Top Skills</span>
            <Button class="bg-primary-background border-0 flex items-center h-full text-2xl p-1 px-2 ml-auto">
                <Icon name="arrow-right" class="text-primary-foreground"/>
            </Button>
        </span>
        <span class="w-full h-fit font-[RoobertRegular] text-md text-primary-foreground">
            Front-End Development • Communication • MERN Stack • Project Management • Python (Programming Language)
        </span>
    </span>


</div>


<style>

</style>