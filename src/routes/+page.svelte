<script>
    import Carousel from 'svelte-carousel';
    import FeedItem from "$lib/FeedItem.svelte";
    import CompanyItemSlider from "$lib/CompanyItemSlider.svelte";
    import {browser} from '$app/environment';
    import {dummyCompaniesData} from "$lib/dummyCompaniesData";
    import CompanyItem from "$lib/CompanyItem.svelte";

    let carousel;

</script>

<svelte:head>
    <title>LinkedIn</title>
<!--    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">-->
    <!--	<meta name="description" content="Svelte demo app" />-->
</svelte:head>


<main class="bg-primary-background h-[93vh] w-full flex flex-col items-center pt-3 overflow-y-scroll gap-2">
    <div class="w-[70%] h-full flex">

        {#if browser}
            <Carousel bind:this={carousel} arrows={true} dots={true} autoplay={true} infinite={true} >
                {#each dummyCompaniesData as {companyName, description, followers, address, logoUrl} }
                    <div class="w-full h-[300px] text-primary-foreground">
                        <CompanyItem
                                name="{companyName}"
                                description="{description}"
                                followers="{followers} "
                                address="{address}"
                                logo="{logoUrl}"
                                carousel={true}
                        >
                        </CompanyItem>
                    </div>

                {/each}
            </Carousel>
        {/if}
    </div>
    <CompanyItemSlider></CompanyItemSlider>
    <div class="w-full font-[RoobertBold] p-3 text-2xl text-primary-foreground flex flex-col gap-2">
        <span><span class="text-primary-accent-1">Feeds</span> For You</span>
        <div class="w-[100%] h-full flex gap-10 flex-col items-center">
            <FeedItem></FeedItem>
        </div>
    </div>
    <CompanyItemSlider></CompanyItemSlider>
    <div class="w-full font-[RoobertBold] p-3 text-2xl text-primary-foreground flex flex-col gap-2">
        <span><span class="text-primary-accent-1">Feeds</span> For You</span>
        <div class="w-[100%] h-full flex gap-10 flex-col items-center">
            <FeedItem></FeedItem>
        </div>
    </div>
    <CompanyItemSlider></CompanyItemSlider>
    <div class="w-full font-[RoobertBold] p-3 text-2xl text-primary-foreground flex flex-col gap-2">
        <span><span class="text-primary-accent-1">Feeds</span> For You</span>
        <div class="w-[100%] h-full flex gap-10 flex-col items-center">
            <FeedItem></FeedItem>
        </div>
    </div>

</main>


<style>


</style>
