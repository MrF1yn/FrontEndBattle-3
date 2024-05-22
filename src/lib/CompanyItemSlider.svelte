<script>
import CompanyItem from "$lib/CompanyItem.svelte";
import {dummyCompaniesData} from "$lib/dummyCompaniesData";
</script>
<div class="w-full h-[50%] font-[RoobertBold] p-3 text-2xl text-primary-foreground flex flex-col gap-2">
    <span><span class="text-primary-accent-1">Companies</span> You'll Like</span>
    <div class="w-full h-fit flex gap-2 overflow-x-scroll">
        {#each dummyCompaniesData as {companyName, description, followers, address, logoUrl} }
            <CompanyItem
                    name="{companyName}"
                    description="{description}"
                    followers="{followers} "
                    address="{address}"
                    logo="{logoUrl}"
            >
            </CompanyItem>
            {/each}
    </div>
</div>