<script lang="ts">

    import EmployeeItem from "$lib/EmployeeItem.svelte";
    import {dummyUserData} from "$lib/dummyUserData";
    // for calling methods of the carousel instance

    export let followers: string;
    export let title: string = "Connections";
    export let description: string = "Connections";
    export let custom: boolean = false;
</script>

<div class="w-[100%] md:w-[80%]  h-full flex flex-col p-3 border-2 gap-2 relative ">
    <span class="w-full h-fit font-[RoobertBold] text-3xl text-primary-foreground">
        Your <span class="text-primary-accent-1">{title}</span>
        <span class="block opacity-80 text-sm">
            {followers} {description}
        </span>
    </span>
    <span class="w-full h-full flex flex-col gap-2 overflow-y-scroll {custom?'hidden':''}">
        {#each dummyUserData as {name, job, address, profilePicture} }
             <div class="w-full ">
                        <EmployeeItem url="{profilePicture}" showFollow={true} showMessage={true}
                                      name="{name}"
                                      description="{job} | 2years"
                                      address="{address}"></EmployeeItem>
                    </div>
        {/each}
    </span>
    <span class="w-full h-full flex flex-col gap-2 overflow-y-scroll {custom?'':'hidden'}">
        {#each dummyUserData as {name, job, address, profilePicture, recentNotification} }
             <div class="w-full ">
                        <EmployeeItem url="{profilePicture}" showFollow={true} showMessage={true} showNotification={true}
                                      notification="{recentNotification}"
                                      name="{name}"
                                      description="{job} | 2years"
                                      address="{address}">

                        </EmployeeItem>
                    </div>
        {/each}
    </span>

</div>


<style>

</style>