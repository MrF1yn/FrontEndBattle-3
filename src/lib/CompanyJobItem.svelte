<script lang="ts">
    import googleLogo from '$img/Google_logo.png';
    import {Button, Icon} from '@sveltestrap/sveltestrap';
    export let name: string;
    export let logo: string | never = googleLogo;
    export let address: string;
    export let followers: string;
    export let designation: string;

</script>

<div class="w-full h-fit flex p-3 gap-3 text-primary-foreground border-b-2">
    <img src={logo} alt="" class="bg-white h-[30px] sm:h-[70px] ">
    <div class="w-[100%] h-full flex flex-col font-[RoobertBold] gap-2 text-2xl">
        {name}
        <span class="font-[RoobertLight] text-sm">
            {designation}
            <span class="font-[RoobertLight] text-sm opacity-80 block">{address}</span>
        </span>
        <span class="text-sm font-[RoobertLight] ">
            <Icon name="people" class="text-md"/>
            {followers}Followers
        </span>
    </div>

    <Button class=" h-fit  bg-primary-background-1 border-0 text-center flex items-center gap-2 text-lg">
        <Icon name="plus-square" class="text-primary-foreground"/>
        <span class="hidden sm:block">Follow</span>
    </Button>
    <Button class=" h-fit bg-primary-accent hover:bg-primary-accent-1 border-0 text-center flex items-center gap-2 text-lg">
        <Icon name="send" class="text-primary-foreground "/>
        <span class="hidden sm:block">Apply</span>
    </Button>

</div>