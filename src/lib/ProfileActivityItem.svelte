<script lang="ts">
    import {Button, Icon} from "@sveltestrap/sveltestrap";
    import Carousel from 'svelte-carousel';
    import {browser} from '$app/environment';
    import googleLogo from "$img/Google_logo.png";
    import PostItem from "$lib/PostItem.svelte";
    import Commentitem from "$lib/Commentitem.svelte";
    import EmployeeItem from "$lib/EmployeeItem.svelte";

    let carousel; // for calling methods of the carousel instance

    export let followers: string;
    export let company: boolean = false;
    const dummyData = [
        {
            name: "John Doe",
            job: "Software Engineer",
            address: "123 Main Street, Anytown, USA"
        },
        {
            name: "Jane Smith",
            job: "Graphic Designer",
            address: "456 Elm Street, Othertown, USA"
        },
        {
            name: "Bob Johnson",
            job: "Marketing Manager",
            address: "789 Oak Street, Anothertown, USA"
        },
        {
            name: "Alice Williams",
            job: "Data Scientist",
            address: "567 Pine Street, Somewhere City, USA"
        },
        {
            name: "Michael Brown",
            job: "Financial Analyst",
            address: "890 Maple Avenue, Another City, USA"
        },
        {
            name: "Emily Davis",
            job: "HR Coordinator",
            address: "246 Cedar Lane, Smalltown, USA"
        }
    ];
</script>

<div class="w-[100%] md:w-[80%]  h-fit flex flex-col p-3 border-2 gap-2 relative ">
    <span class="w-full h-fit font-[RoobertBold] text-3xl text-primary-foreground">
        Activity
        <span class="block opacity-80 text-sm">
            {followers} followers
        </span>
    </span>

    <div class="flex flex-col md:flex-row font-[RoobertRegular] text-primary-foreground items-center gap-2">
        <Button on:click={carousel.goTo(0)}
                class="flex-grow-0 w-full md:w-auto bg-primary-accent hover:bg-primary-accent-1 border-0 flex items-center p-2 gap-1">
            <span>Posts</span>
        </Button>
        <Button on:click={carousel.goTo(1)} outline
                class="flex-grow-0 w-full md:w-auto border-primary-accent text-primary-accent hover:bg-primary-accent-1 flex items-center p-2 gap-1">
            <span>{company?'Employees':'Comments'}</span>
        </Button>
        <Button on:click={carousel.goTo(2)} outline
                class="{company?'hidden':''} flex-grow-0 w-full md:w-auto border-primary-accent text-primary-accent hover:bg-primary-accent-1 flex items-center p-2 gap-1">
            <span>Images</span>
        </Button>
    </div>

    {#if browser}
        <Carousel bind:this={carousel} arrows={false} dots={false} >
            <span class="w-full h-[500px] flex flex-col gap-2 overflow-y-scroll">
                <PostItem></PostItem>
                <PostItem></PostItem>
                <PostItem></PostItem>
                <PostItem></PostItem>
                <PostItem></PostItem>
                <PostItem></PostItem>
                <PostItem></PostItem>
                <PostItem></PostItem>
            </span>
            <span class="w-full h-[500px] flex flex-col gap-2 p-3 overflow-y-scroll">
                {#if company}
                    {#each dummyData as {name, job, address}}
                        <EmployeeItem name="{name}" description="{job} | 2years" address="{address}"></EmployeeItem>
                    {/each}
                    {:else}
                        {#each dummyData as {name, job, address}}
                            <Commentitem></Commentitem>
                        {/each}
                    {/if}
            </span>
            <span class="w-full h-[500px] flex flex-col gap-2 ">
                <Commentitem></Commentitem>
                <Commentitem></Commentitem>
                <Commentitem></Commentitem>
                <Commentitem></Commentitem>
                <Commentitem></Commentitem>
            </span>
        </Carousel>
    {/if}


</div>


<style>

</style>