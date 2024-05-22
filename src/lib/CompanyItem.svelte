<script lang="ts">
    import googleLogo from '$img/Google_logo.png';
    import {Button, Icon} from '@sveltestrap/sveltestrap';
    import {goto} from "$app/navigation";
    export let name: string;
    export let logo: string | never = googleLogo;
    export let address: string;
    export let followers: string;
    export let description: string;
    export let carousel: boolean = false;
</script>

<div on:click={()=>{goto('/company')}} class="w-full min-w-[300px] h-full flex p-2 gap-2 cursor-pointer hover:bg-primary-background-2 {carousel?'flex-col':''} ">

        <img src={logo} alt="" class="bg-white h-[30px] sm:{carousel?'h-[80px] object-cover ':'h-[70px]'}">

    <div class="w-[75%] h-full flex flex-col font-[RoobertBold] gap-2">
        {name}
        <span class="font-[RoobertLight] text-sm">
            {description}
            <span class="font-[RoobertLight] text-sm opacity-80 block">{address}</span>
        </span>
        <span class="text-sm font-[RoobertLight] ">
            <Icon name="people" class="text-md"/>
            {followers} Followers
        </span>
        <span class="w-full mt-auto mb-auto flex flex-col gap-2 sm:flex-row">
            <Button class="bg-primary-background-1 hover:bg-primary-background-3 border-0 text-center flex items-center gap-2">
                <Icon name="plus-square" class="text-primary-foreground"/>
                Follow
            </Button>
            <Button class="bg-primary-background-1 hover:bg-primary-background-3 border-0 text-center flex items-center gap-2">
<!--                <Icon name="lightning-charge" class="text-primary-foreground"/>-->
                View Page
            </Button>
        </span>


    </div>
</div>