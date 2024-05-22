<script lang="ts">
import googleLogo from "$img/Google_logo.png";
import {Button, Icon} from "@sveltestrap/sveltestrap";
export let name: string;
export let description: string;
export let address: string;
export let notification: string = "";
export let showFollow: boolean = true;
export let showMessage: boolean = false;
export let showNotification: boolean = false;
export let url: string | never = googleLogo;
</script>
<div class="w-full h-fit  flex gap-2 font-[RoobertLight] items-center flex-col md:flex-row text-primary-foreground border-b-2 p-3">
    <img src={url} alt="" class="bg-white rounded-full  h-[50px]">
    <span class="font-[RoobertBold] flex flex-col w-full h-full text-[100%]">
            {name}
            <span class="font-[RoobertLight] block text-sm w-full h-full">
                {description}
            </span>
            <span class="opacity-80 font-[RoobertLight] block text-sm w-full h-full">
                {address}
            </span>
            <span class="{showNotification?'':'hidden'} opacity-80 mt-auto font-[RoobertLight] block text-sm w-full h-full">
                {notification}
            </span>
        </span>
    <Button class="{showFollow?'':'hidden'} bg-primary-background-1 border-0 text-center flex items-center w-full md:w-auto  gap-2 h-full">
        <Icon name="plus-square" class="text-primary-foreground"/>
        Follow
    </Button>
    <Button class="{showMessage?'':'hidden'} bg-primary-accent hover:bg-primary-accent-1 border-0 text-center flex items-center w-full md:w-auto  gap-2 h-full">
        <Icon name="send" class="text-primary-foreground"/>
        Message
    </Button>
</div>