<script lang="ts">
    import {Icon } from '@sveltestrap/sveltestrap';
    import { Input } from '@sveltestrap/sveltestrap';
    import { Button } from '@sveltestrap/sveltestrap';
    import {
        Dropdown,
        DropdownItem,
        DropdownMenu,
        DropdownToggle
    } from '@sveltestrap/sveltestrap';
    import {page} from '$app/stores';
    import {goto} from "$app/navigation";
</script>

<div class="flex bg-primary-background-2 items-center w-[100vw] h-[7vh] p-3 justify-between z-[1000] fixed font-[RoobertBold]">
    <div class="flex w-full h-full items-center gap-[10%]">

        <Icon name="linkedin" class="text-primary-accent-1 scale-[2]"/>
        <a href="/connections" class="hidden md:block {$page.url.pathname==='/connections'?'text-primary-accent-1':'text-primary-foreground'}">Connections</a>
        <a href="/" class="hidden md:block {$page.url.pathname==='/'?'text-primary-accent-1':'text-primary-foreground'}">Browse</a>
        <Dropdown theme="dark" autoClose={true}>
            <DropdownToggle class="bg-primary-background-1 border-0 text-center">
                <Icon name="three-dots-vertical" class="text-primary-foreground"/>
            </DropdownToggle>
            <DropdownMenu class="opacity-100 z-[10000] absolute" >
                <DropdownItem on:click={()=>{goto('/connections')}}>Connections</DropdownItem>
                <DropdownItem on:click={()=>{goto('/')}}>Browse</DropdownItem>
                <DropdownItem on:click={()=>{goto('/notifications')}}>Notifications</DropdownItem>
                <DropdownItem on:click={()=>{goto('/message')}}>Messages</DropdownItem>
                <DropdownItem on:click={()=>{goto('/jobs')}}>Jobs</DropdownItem>
                <DropdownItem on:click={()=>{goto('/profile')}}>Profile</DropdownItem>
                <DropdownItem on:click={()=>{goto('/company')}}>Company</DropdownItem>

            </DropdownMenu>
        </Dropdown>

<!--        <Button class="bg-primary-background-1 border-0 text-center">-->
<!--            <Icon name="three-dots-vertical" class="text-primary-foreground"/>-->
<!--        </Button>-->
    </div>

    <div class="flex w-full h-full items-center justify-center">
        <Input class="rounded-tr-none rounded-br-none w-[75%] bg-transparent" type="search" placeholder="search" theme="dark"/>
        <Button class="hidden md:block bg-primary-background-1 border-0 rounded-tl-none rounded-bl-none">
            <Icon name="search" class="text-primary-foreground scale-[1]"/>
        </Button>
    </div>
    <div class="flex w-full h-full items-center justify-end gap-2">
        <Button on:click={()=>{goto('/notifications')}} class="bg-primary-background-1 border-0 text-center">
            <Icon name="bell" class="text-primary-foreground scale-[1]"/>
        </Button>
        <Button on:click={()=>{goto('/message')}} class="bg-primary-background-1 border-0 text-center">
            <Icon name="chat-left" class="text-primary-foreground scale-[1]"/>
        </Button>
        <Button on:click={()=>{goto('/jobs')}} class="bg-primary-background-1 border-0 text-center">
            <Icon name="briefcase" class="text-primary-foreground scale-[1]"/>
        </Button>
        <Button class="bg-primary-background-1 border-0 text-center">
            <Icon name="lightning-charge" class="text-primary-foreground scale-[1]"/>
            <span class="hidden lg:inline-block">Try Premium</span>
        </Button>
        <Button on:click={()=>{goto('/profile')}} class="bg-primary-background-2 border-0 text-center text-3xl hover:bg-primary-background-2">
            <Icon name="person-circle" class="text-primary-accent-1"/>
        </Button>


    </div>

</div>

<style>

    a{
        text-decoration: none;
    }
</style>