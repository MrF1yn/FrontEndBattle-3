<script lang="ts">
    import googleLogo from "$img/Google_logo.png";
    import {Button, Icon} from "@sveltestrap/sveltestrap";
    import { Image } from '@sveltestrap/sveltestrap';

    export let company: boolean = false;
    export let title: string;
    export let url: string | never = googleLogo;
    export let description: string;
    export let address: string;
    export let connections: string;

</script>

<div class="w-[100%] md:w-[80%] h-fit flex flex-col p-3 border-2 gap-2 relative justify-center">
    <Image class="flex-grow-0 w-full h-[50%]" fluid alt="This is a fluid Image" src="https://picsum.photos/id/518/1500/667.jpg" />
    <Image class="absolute aspect-square w-[50px] md:w-[80px] lg:w-[100px] top-[20%] md:top-[30%] lg:top-[42%] ml-2 bg-primary-foreground {company?'':'rounded-full'}" fluid alt="This is a fluid Image" src={url} />
    <div class="h-fit flex font-[RoobertBold] text-primary-foreground text-3xl items-center gap-2 mt-[50px]">
        <span>{title}</span>
        <Icon name="shield-check" class="text-md"/>
<!--        <Icon name="pencil" class="text-md"/>-->
        <Button class="bg-primary-background hover:bg-primary-background-3  border-0 flex items-center h-full text-2xl p-1 px-2 ml-auto {company?'hidden':''}">
            <Icon name="pencil" class="text-primary-foreground"/>
        </Button>
    </div>
    <div class="h-fit w-full font-[RoobertLight] text-primary-foreground text-sm items-center gap-2 ">
        {description}
        <span class="opacity-80 block">{address}</span>
    </div>
    <span class="font-[RoobertLight] text-primary-accent-1 font-bold" >{connections} {company?'Followers':'Connections'}</span>
    <div class="flex flex-col md:flex-row font-[RoobertRegular] text-primary-foreground text-3xl items-center gap-2">
        <Button class="flex-grow-0 w-full md:w-auto bg-primary-accent hover:bg-primary-accent-1 border-0 flex items-center  text-xl p-2 gap-1">
            <Icon name="{company?'plus-square':'person-add'}" class="text-primary-foreground"/>
            <span>{company?'Follow':'Connect'}</span>
        </Button>
        <Button outline class="flex-grow-0 w-full md:w-auto border-primary-accent text-primary-accent hover:bg-primary-accent-1 flex items-center  text-xl p-2 gap-1">
            <Icon name="{company?'arrow-up-right-circle':'chat-right'}" class=""/>
            <span >{company?'Visit Website':'Message'}</span>
        </Button>
        <Button outline class="flex-grow-0 w-full md:w-auto flex items-center text-md p-2 gap-1">
            <span>More</span>
        </Button>
    </div>
</div>



<style>

</style>