<script lang="ts">

    import CompanyJobItem from "$lib/CompanyJobItem.svelte";
    import {dummyCompaniesData} from "$lib/dummyCompaniesData";
    // for calling methods of the carousel instance

    export let followers: string;
</script>

<div class="w-[100%] md:w-[80%]  h-fit flex flex-col p-3 border-2 gap-2 relative ">
    <span class="w-full h-fit font-[RoobertBold] text-3xl text-primary-foreground">
        <span class="text-primary-accent-1">Jobs</span> For You
        <span class="block opacity-80 text-sm">
            {followers} Total Jobs
        </span>
    </span>
    <span class="w-full h-[500px] flex flex-col gap-2 overflow-y-scroll">
        {#each dummyCompaniesData as {companyName, jobOpening, followers, address, logoUrl} }
            <CompanyJobItem
                    name="{companyName}"
                    designation="{jobOpening}"
                    followers="{followers} "
                    address="{address}"
                    logo="{logoUrl}"
            >
            </CompanyJobItem>
        {/each}
    </span>

</div>


<style>

</style>